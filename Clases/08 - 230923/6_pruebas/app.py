from flask import Flask, render_template
from flask_socketio import SocketIO, emit, join_room, leave_room

app = Flask(__name__)
app.config['SECRET_KEY'] = 'reemplazar_clave_secreta'

# Instancia de SocketIo
socketio = SocketIO(app, cors_allowed_origins='*')

@app.route('/')
def index():
    return render_template('index.html')

@socketio.on("join_room")
def entrar(room):
    # Ingresamos al usuario a la sala
    join_room(room)

    # Emitimos un aviso a los usuarios conectados a la sala, exceptuando a la persona que se unio
    emit('mensaje', f'Un usuario ha entrado a la sala {room}', broadcast=False, include_self=False, to=room)

    # Mandamos una respuesta al evento emit del cliente
    return f'Te has unido a la sala {room}'

@socketio.on("message")
def message(data):
    emit('mensaje', data["message"], broadcast=False, include_self=True, to=room)




# Opcional
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=0000, debug=True)
    socketio.run(app)
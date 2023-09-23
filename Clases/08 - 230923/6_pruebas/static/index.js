document.addEventListener('DOMContentLoaded', ()=>{
    const socket=io();
    let room;

    const join_buttom = document.querySelector("#join");
    join_buttom.onclick = () =>{
        socket.emit("join_room","web50",(res)=>{
            room = res;
            console.log("goooo")
            document.querySelector("#root").append(`Te has unido a la sala ${room}`);
        })
    }

    socket.on("mensaje",(message) => {
        document.querySelector("#root").append(message);
        document.querySelector("#root").innerHTML += "<br/>";
    })

    const send_msg = document.querySelector("#send-msg")

    send_msg.onclick = () => {
        console.log('gooodo')
        const message = document.querySelector("#msg-input").value;
        socket.emit("message", (message, room));

        document.querySelector("#msg-input").value ="";


    }


    socket.on("message", data =>{
        document.querySelector("#root").append(data);
        document.querySelector("#root").innerHTML +="<br>"
        
    })


});
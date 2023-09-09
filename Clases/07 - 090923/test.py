import requests
# https://pokeapi.co/
def main():
    url = "https://pokeapi.co/api/v2/pokemon?"

    payloads ={}
    headers={}

    response = requests.request("GET", url=url, headers=headers, data=payloads)
    data = response.json()

    nameData = (data['results'])

    i=0

    for names, valor in nameData:
        pokemon = (data['results'][i])
        print(pokemon)
        i+=1



if __name__ == "__main__":
    main()
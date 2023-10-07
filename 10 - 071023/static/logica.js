console.log("LOGICJS:::: STARTING::::");

document.addEventListener("DOMContentLoaded",() =>{
    load_page("first");

    document.querySelectorAll('.nav-link').forEach(link => {
        link.onclick = () =>{
            const page = link.dataset.page;
            load_page(page);
            return false;//preventDefault()


        }
    });

    window.onpopstate = e => {
        const data = e.state;
        document.title = data.title;
        document.querySelector("#body").innerHTML = data.text;
    };

    function load_page(name){
        const request = new XMLHttpRequest();
            request.open("GET", `/${name}`);
            request.onload = () => {
                const resp = request.responseText;

                document.getElementById("body").innerHTML = resp;
                document.title = name;
                history.pushState({ 'title': name, 'text': resp}, name,name);

            }
            request.send();
    };
})
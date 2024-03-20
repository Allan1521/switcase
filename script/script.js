const frutas = document.querySelectorAll(".fruta");
/* toda "const" o valor dela tem que ser definido no início do código. Evita que outros usuários modifique o código */

frutas.forEach((button) => {
    /* addEventListener= ouve os eventos do usuário e disparada a ação qdo o evento especificado pelo programador fo disparado. Nese caso será o evento "click". */
    button.addEventListener("click", () => {
        document.querySelector("header").style.color = "white";
        document.querySelector("footer").style.color = "white";
        /* verifica qual o texto do botão */
        switch (button.innerText) {
            case "🍌":
                document.body.style.backgroundColor = "#f1c329";
                document.querySelector("header").style.color = "black";
                document.querySelector("footer").style.color = "black";
                break;
        }
        switch (button.innerText) {
            case "🍉":
                document.body.style.backgroundColor = "#f22d2d";
                break;
        }
        switch (button.innerText) {
            case "🍇":
                document.body.style.backgroundColor = "#835ab8";
                break;
        }
        switch (button.innerText) {
            case "🍊":
                document.body.style.backgroundColor = "#f8762a";
                break;
        }
        switch (button.innerText) {
            case "🍈":
                document.body.style.backgroundColor = "#a9d399";
                document.querySelector("header").style.color = "black";
                document.querySelector("footer").style.color = "black";
                break;
        }
        switch (button.innerText) {
            case "🥑":
                document.body.style.backgroundColor = "#059a23";
                break;
            default:
                console.log("Botão não reconhecido:",
                    button.innerText);
        }

    })

})
const d = document;
const formulario = d.querySelector(".formulario"),
inputNombre = d.getElementById("nombre"),
inputValor = d.getElementById("gasto"),
mapaGastos = d.querySelector(".mapa-gastos"),
componentes = d.querySelector(".componentes"),
gastoTotal = d.querySelector(".gastoTotal"),
cadaUno = d.querySelector(".cada-uno");




formulario.addEventListener ("submit", (e) => {
    e.preventDefault();

    // Crear nuevo DIV
    const divPersona = document.createElement("div");
    divPersona.setAttribute("class","persona")

    // texto NOMBRE Y VALOR
    const pNombre = document.createElement("p")
    pNombre.setAttribute("class","nombre")
    const textoImportante = pNombre.textContent = `${inputNombre.value} -` + ` $${inputValor.value}`

    // AGREGAR elementos creados al div
    divPersona.appendChild(pNombre)
    componentes.insertAdjacentElement("afterbegin",divPersona)
    

    // Agregar importe final

    nombresCantidad = d.querySelectorAll(".nombre")
    resultados = d.querySelectorAll(".nombre")
    console.log(resultados)
    let suma = 0;

    for(let i = 0; i < resultados.length; i++ ){
        let indice = resultados[i].innerText.lastIndexOf("$")
        let extraida = resultados[i].innerText.substring(indice + 1)
        suma += Number(extraida)
    }
    gastoTotal.textContent = `El total es: ${suma}` 
    cadaUno.textContent = `Cada uno tendrá que poner: $${(suma / nombresCantidad.length).toFixed(2)}`

    

    // FUNCION BORRAR
    const borrar = document.getElementById("borrar")

    borrar.style.display = "block"

    borrar.addEventListener("click", () => {
        divPersona.remove();
        componentes.remove();
        location.reload();
    })


    // RESETEAR FORMULARIO
    formulario.reset();

    // LOCALSTORAGE theme
    localStorage.setItem("datos", "gastos")
})

















document.addEventListener("DOMContentLoaded", () => {
    
    if(localStorage.getItem("guardar") === null){
        localStorage.setItem("guardar", "ligth")
    }

    if(localStorage.getItem("guardar") === "ligth"){
        ligth();
    }

    if(localStorage.getItem("guardar") === "dark"){
        dark();
    }
})

function dark(){
    document.body.classList.add("dark")
    document.body.classList.remove("ligth")
    localStorage.setItem("guardar","dark")
}

function ligth(){
    document.body.classList.add("ligth")
    document.body.classList.remove("dark")
    localStorage.setItem("guardar","ligth")
}

document.addEventListener("click", (e) => {

    if(e.target.matches("#boton")){
        
        if(document.body.getAttribute("class") === "ligth"){
            dark();
        } else if(document.body.getAttribute("class") === "dark"){
            ligth();
        }
    }
})



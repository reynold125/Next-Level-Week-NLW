//Procurar o botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener("click", cloneField)

function cloneField(){
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    const fields = newFieldContainer.querySelectorAll("input")

    fields.forEach(function(field){
        field.value = ""
    })

    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
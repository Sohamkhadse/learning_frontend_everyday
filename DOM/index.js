let product = document.getElementById('submit')
console.log(product)

product.onclick = (event) => {
    console.log("its submitted");
}

product.onclick = (event) => {
    window.alert("its submitted");
}

console.log(product.onclick)


let products = document.querySelector('#submit')
console.log(products)

let targets = document.querySelectorAll('#submit')
console.log(targets)

console.log(product.innerHTML)

console.log(product.innerText)

document.getElementById("submit").onclick = function (event) {
    product.innerHTML = "<b>hello <u>world</u></b>"
    product.style.background = "red"
    product.style.color = "white"
    product.style.border = "none"
    product.style.outline = "none"

    console.log(event)    
}

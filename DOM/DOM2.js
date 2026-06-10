let target = document.getElementById("submit")
console.log(target.innerHTML)
console.log(target.innerText)

console.log(target)
target.innerText = "new daataa"
target.innerHTML = "<u>hello</u>"

let table1 = document.getElementById("table1")
let element1 = document.getElementById("element1")

let persons = [
    {
        name:"soham",
        phone:"798990809",
        address:"nagpur",
    },
    {
        name:"manish",
        phone:"987398809",
        address:"delhi",
    },
    {
        name:"raunak",
        phone:"832790809",
        address:"mumbai",
    },
    {
        name:"manish",
        phone:"987398809",
        address:"delhi",
    },
    {
        name:"raunak",
        phone:"832790809",
        address:"mumbai",
    },
]

for(let person of persons){
    let newRow = document.createElement("tr")

    for(let key in person){
        let newColumn = document.createElement("td")
            newColumn.innerText = person[key]
            newRow.appendChild(newColumn)
    }
    table1.appendChild(newRow)
}

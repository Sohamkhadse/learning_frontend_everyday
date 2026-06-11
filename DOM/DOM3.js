let target = document.querySelector("#login_form")

// target.style.background = "white"
// target.style.color = "white"

// target.classList = "first"
// target.classList = "second"

console.log(target)

target.classList.add("first")
console.log(target.classList)
target.classList.add("second")
console.log(target.classList)

console.log(target.classList.contains("second"))//it  checks element taken or not

let entries = []

document.getElementById("submit").onclick = (e) => {
    console.log(document.getElementById("input1").value)
    console.log(document.getElementById("input2").value)
    console.log(document.getElementById("input3").value)
}

let table = document.getElementById('table1')

document.getElementById("submit").onclick = (e) => {
    let entry = {
        name: document.getElementById("input1").value,
        phone: document.getElementById("input2").value,
        address: document.getElementById("input3").value
    }
    entries.push(entry)
    dispalyTable(entries)
}

// function dispalyTable(entries) {
//     for (let entry of entries) {
//         let newRow = document.createElement("tr")
//         newRow.innerHTML = `<td>${entry.name}</td><td>${entry.phone}</td><td>${entry.address}</td>`
//         table.appendChild(newRow)
//     }
// }

function displayTable(entries) {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    for (let entry of entries) {
        let newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${entry.name}</td>
            <td>${entry.phone}</td>
            <td>${entry.address}</td>
        `;
        tbody.appendChild(newRow);
    }
}

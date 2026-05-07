let row = 0

while (row < 5) {
    let empty = 0
    let column = 0
    let paternString = ""
    let emptyString = ""

    while (empty < (4 - row)) {
        emptyString += "<span>&nbsp;&nbsp<span>"
        empty++
    }
    while (column <= row) {
        paternString += " * "
        column++
    }
    document.write(emptyString + paternString)
    document.write("<br></br>")
    row++
}
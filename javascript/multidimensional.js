let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
// console.log(matrix[0][1])
// console.log(matrix[1][2])
// console.log(matrix[2][0])
// console.log(matrix[0][0])
// console.log(matrix[1][1])
// console.log(matrix[2][2])
// console.log(matrix[0][2])
// console.log(matrix[1][0])
// console.log(matrix[2][1])

for(let row = 0 ; row < matrix.length ; row++){
    for(let column = 0 ; column < matrix[row].length ; column++){
        console.log(matrix[row][column])
    }
}

for(let row of matrix){
    for(let column of row){
        console.log(column)
    }
}
const matrix = [
	[3,5,6,8,9,10],
	[4,6,9,10,11,16],
	[5,9,13,16,18,20],
	[8,10,15,17,20,22],
];

var getNum = function(matrix, rows, cols, num) {
    let row = 0;
    let col = cols - 1;

    while(row < rows && col > 0) {
        if(matrix[row][col] === num){
            console.log('yes');
            return;
        } else if(matrix[row][col] > num) {
            col--;
        } else {
            row++;
        }
    }
    console.log('no');
    return;
};

getNum(matrix, 4, 6, 222);
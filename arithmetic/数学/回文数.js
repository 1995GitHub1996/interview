var reverse = function (int) {
    let y = 0;
    if(int < 0 || (int % 10 === 0 && int !== 0)){
        return false;
    }
	
    while (int > y) {
        y = y * 10 + int % 10;
        int = Math.floor(int / 10);
    }
	
    return (int === y) || (int === y / 10);
};

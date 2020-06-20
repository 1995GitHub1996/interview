var reverse = function (int) {
    let y = 0;
    if(int > Math.maxInt || int < Math.minInt ){
        return;
    }
	
    while (int !== 0) {
        y = y * 10 + int % 10;
		
        int = Math.floor(int / 10);
    }
	
    return y;
};

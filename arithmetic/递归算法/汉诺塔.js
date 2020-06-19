function move(n,from,buffer,to) {
    if( n === 1) {
        console.log('from',from,'to',to);
    } else {
        move(n-1,from,to,buffer);
        move(1,from,buffer,to);
        move(n-1,buffer,from,to);
    }
}        

move(3, '柱1', '柱2', '柱3');
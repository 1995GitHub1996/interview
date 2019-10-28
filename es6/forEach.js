
function a() {
    const arr = [1,4,5,6,6];
   
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element);
        if(element === 1) return;
        console.log('element');
    }
    console.log('element');
}

a();



function ipToInt(ip) {
    let int = 0;
    const ips = ip.split('.');
	
    for (let index = 0; index < ips.length; index++) {
        const element = ips[index];
        int += (+(element << (8 * (3-index))));
    }
    return int;
}

function intToIp(int) {
    let ips = [
        int >> 24,
        (int & 0xFFFFFF) >> 16,
        (int & 0x00FFFF) >> 8,
        int & 0x0000FF,
    ];
    console.log(ips);
    return ips.join('.');
}

const targetIp = '127.0.0.1';
const int = ipToInt(targetIp);
console.log(int);
const ip = intToIp(int);

console.log(ip === targetIp);
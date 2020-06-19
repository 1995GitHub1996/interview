// struct ListNode {
//     int val;
//     ListNode *next;
// }

var cycleNode = function(head, k){
    let n;
    let oldTail = head;
    for (n = 0; oldTail !== null; n++) {
        oldTail = oldTail.next;
    }
    oldTail.next = head;

    let newTail = head;
    for (let i = 0; i < n - (k % n) -1; i++) {
        newTail =  newTail.next;
    }
    const newHead = newTail.next;
    newTail.next = null;

    return newHead;
};
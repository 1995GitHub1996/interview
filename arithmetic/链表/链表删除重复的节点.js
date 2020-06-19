/**
 * Definition for singly-linked list.
 * 
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }
     
var deleteNode = function(head, toBeDeleteNode) {
    if(!head || !toBeDeleteNode) return;
    
    if(toBeDeleteNode === head){
        // toBeDeleteNode是头结点
        head = null;
        toBeDeleteNode = null;
    } else if(toBeDeleteNode.next === null){
        // toBeDeleteNode为尾结点
        let curNode = head;
        while(curNode.next !== toBeDeleteNode) {
            curNode = curNode.next;
        }

        curNode.next = null;
        toBeDeleteNode = null;
    } else {
        // toBeDeleteNode不为头结点也不为尾结点
        toBeDeleteNode.val = toBeDeleteNode.next.val;
        toBeDeleteNode.next = toBeDeleteNode.next.next;
    }

    return;
};

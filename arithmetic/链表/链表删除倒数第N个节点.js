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
     
 var removeNthFromEnd = function(head, n) {
     let first = head;
    
     if(n === 1){
        // toBeDeleteNode是头结点
         head = null;
     } else {
         let size = 0, length = 0;
         while (head !== null) {
             size++;
             head = head.next;
         }
         length = size-n;

         while (length > 0) {
             length--;
             first = first.next;
         }

         first.next = first.next.next;
     }

     return first;
 };

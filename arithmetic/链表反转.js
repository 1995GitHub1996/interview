struct ListNode {
    int val;
    ListNode *next;
}

struct ListNode reverseListNode1(struct ListNode *head){
    struct ListNode *newHead = null;
    struct ListNode *node;

    while (head != null) {
        // 头删操作
        node = head;
        head = head -> next;

        // 尾插操作
        node -> next = newHead;
        newHead = node;
    }

    return newHead
}


struct ListNode reverseListNode2(struct ListNode *head){
   ListNode *newHead = null;
   ListNode *curNode = head;
   ListNode *prevNode = null;

   while (curNode != null) {
        ListNode *nextNode = curNode -> next;

        if(nextNode === null) {
            newHead = curNode;
        }

        curNode -> next = prevNode;
        prevNode = curNode;
        curNode = nextNode;
   }
}
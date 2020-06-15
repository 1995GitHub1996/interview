struct ListNode {
    int val;
    ListNode *next;
}

struct ListNode reverseListNode(struct ListNode *head){
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
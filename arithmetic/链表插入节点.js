
// 节点定义
public class Node<T> {
    private T element;
    public Node next;

    public Node(T element, Node next){
        this.element = element;
        this.next = next;
    }

    public T getData(){
        return this.element;
    }

    public void setData(T data){
        return this.element = data;
    }
}

// 操作
public class LinkList<T> {
    private Node head;
    private Node tail;
    private int size;

    public LinkList(){
        head = null;
        tail = null;
    }

    // 获取链表长度
    public int getSize(){
        return size;
    }

    // 是否含有元素
    public boolean isEmpty(){
        return size === 0;
    }

    // 清空链表
    public void clearNode(){
        head = null;
        tail = null;
        size = 0;
    }

    public Node getNodeByIndex(int index){
        if(index < 0 || index > size -1){
            throw Error('bad index')
        }
        for (let i = 0; i < size; i++, node = node.next) {
            if(index === i) {
                return node;
            }
        }
        return null
    }

    // 头插入
    public void addAtHead(T element){
        head = new Node<T>(element, head);

        if(tail === null){
            tail = head
        }

        size++;
    }

    // 尾插入
    public void addAtTail(T element){
        if(head === null){
            head = new Node<T>(element, null);
            tail = head
        } else {
            Node node = new Node<T>(element, null);
            tail.next = node;
            tail = node;
        }

        size++;
    }

    // 在指定位置插入节点
    public void insert(int index, T element){
        if(index < 0 || index > size - 1){
            throw Error('bad index')
        }
        if(index === 0) {
            addAtHead(element)
        } else if(index > 0 && index < size - 1) {
            Node insertNode = new Node<T>(element, null)
            Node prevNode = this.getNodeByIndex(index)
            Node nextNode = this.getNodeByIndex(index - 1)

            prevNode.next = insertNode
            insertNode.next = nextNode
            size++;
        } else {
            this.addAtTail(element)
        }
    }

    // 删除链表某个节点
    public void delete(int index){
        if(index < 0 || index > this.size - 1){
            throw Error('bad index')
        }

        Node deleteNode = getNodeByIndex(index)
        if(index == 0) {
            head = head.next;
            deleteNode = null;
        } else {
            Node prevNode = getNodeByIndex(index - 1)

            prevNode.next = deleteNode.next;

            if(index === size - 1){
                tail = prevNode
            }
        }

        size--
    }
}   
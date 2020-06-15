/**
 * 自定义hashMap
 * @author cf
 *
 * @param <K>
 * @param <V>
 */
public class MyHashMap<K, V> implements MyMap<K, V>{
    //1.定义一个容器用来存放元素， 但不立即初始化，使用懒加载方式
    Node<K, V>[] table = null;
    
    //2.定义容器的默认大小
    static int DEFAULT_INITIAL_CAPACITY = 16;
    
    //3.HashMap默认负载因子，负载因子越小，hash冲突机率越低，综合结论得出0.75最为合适
    static final float DEFAULT_LOAD_FACTOR = 0.75f;
    
    //4.记录当前容器实际大小
    static int size;
    
    // @SuppressWarnings("unchecked")
    // @Override
    public V put(K k, V v) {
        //1.判断容器是否为空为空则初始化。
        if (table == null) {
            table = new Node[DEFAULT_INITIAL_CAPACITY];
        }
        
        //如果size大于阈值则进行扩容

        // default_initial_capacity
        // default_load_factor

        if (size > DEFAULT_INITIAL_CAPACITY * DEFAULT_LOAD_FACTOR) {
            resize();
        }
        
        //2.计算出index角标
        int index = getIndex(k, table.length);
        
        //3.将k-v键值对放进相对应的角标，如果计算出角标相同则以链表的形势存放
        Node<K, V> node = table[index];
        if (node == null) {
            table[index] = new Node<>(k, v, null);
            size ++;
            return table[index].getValue();
        } else {
            Node<K, V> newNode = node;
            
            //循环遍历每个节点看看是否存在相同的key
            while (newNode != null) {
                //这里要用equals 和 == 因为key有可能是基本数据类型，也有可能是引用类型
                if (k.equals(newNode.getKey()) || k == newNode.getKey()) {
                    newNode.setValue(v);
                    size ++;
                    return v;
                } 
                newNode = node.getNextNode();
            }
            table[index] = new Node<K, V>(k, v, table[index]);
            size ++;
            
            return table[index].getValue();
        }
        
    }
    
    /**
     * 获取index
     * @param key
     * @param length
     * @return
     */
    public int getIndex(K key, int length) {
        int hashCode = key.hashCode();
        int index = hashCode % length;
        return index;
    }
    
    /**
     * 对size进行扩容
     */
    // @SuppressWarnings("unchecked")
    public void resize() {
        //1.创建新的table长度扩展为以前的两倍
        int newLength = DEFAULT_INITIAL_CAPACITY * 2;
        Node<K, V>[] newtable = new Node[newLength];
        //2.将以前table中的取出，并重新计算index存入
        for (int i = 0; i < table.length; i++) {
            Node<K, V> oldtable = table[i];
            while (oldtable != null) {
                //将table[i]的位置赋值为空,
                table[i] = null;
                
                //方法1：重新计算index，然后按照put时候的方法进行放值，此种方法会不停的new 对象会造成效率比较低
                /*K key = oldtable.getKey();
                int index = getIndex(key, newLength);
                newtable[index] = new Node<K, V>(key, oldtable.getValue(), newtable[index]);
                oldtable = oldtable.getNextNode();*/
                
                //方法2：
                //计算新的index值
                K key = oldtable.getKey();
                int index = getIndex(key, newLength);
                
                //将以前的nextnode保存下来
                Node<K, V> nextNode = oldtable.getNextNode();
                
                //将newtable的值赋值在oldtable的nextnode上，如果以前是空，则nextnode也是空
                oldtable.setNextNode(newtable[index]);
                newtable[i] = oldtable;
                
                //将以前的nextcode赋值给oldtable以便继续遍历
                oldtable = nextNode;
            }
                
        }
        
        //3.将新的table赋值回老的table
        table = newtable;
        DEFAULT_INITIAL_CAPACITY = newLength;
        newtable = null;
        
    }

    // @Override
    public int size() {
        return size;
    }

    //  @SuppressWarnings("hiding")
    class Node<K, V> implements Entry<K, V> {
        private K key;
        private V value;
        private Node<K, V> nextNode; //下一节点
        
        public Node(K key, V value, Node<K, V> nextNode) {
            super();
            this.key = key;
            this.value = value;
            this.nextNode = nextNode;
        }

        // @Override
        public K getKey() {
            return this.key;
        }

        // @Override
        public V getValue() {
            return this.value;
        }

        // @Override
        public void setValue(V value) {
            this.value = value;
        }

        // @Override
        public Node<K, V> getNextNode() {
            return nextNode;
        }

        // @Override
        public void setNextNode(Node<K, V> nextNode) {
            this.nextNode = nextNode;
        }

        // @Override
        public void setKey(K key) {
            this.key = key;
        }
    }
}
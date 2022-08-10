public class Heap {
    private Integer[] table = new Integer[100];

    Integer size = 0;

    public void push(Integer i) {
        size++;
        table[size] = i;
        swim();
    }

    private void swim(){
        Integer a = size;
        while (table[a/2] != null && table[a] != null &&  table[a] < table[a/2]) {
            if (table[a] < table[a/2]) {
                less(a, a/2);
                a = a / 2;
            }

        }

    }

    // 交换位置
    private void less(Integer a, Integer b) {
        Integer temp = table[b];
        table[b] = table[a];
        table[a] = temp;
    }

    // 抛出最大
    public Integer pop() {
        Integer i = table[1];
        if (i == null) return null;
        table[1] = table[size];
        table[size] = null;
        size--;
        sink();
        return i;
    }

    // 重新生成最大堆
    private void sink(){
        Integer a = 1;

        while (2 * a <= size) {
            int b = 0;
            if (2 * a + 1 > size) {
                b = 2 * a;
            }else {
                if (table[2 * a] < table[2 * a + 1]) {
                    b = 2 * a;
                } else {
                    b = 2 * a + 1;
                }
            }
            if (table[a] > table[b]) {
                less(b, a);
                a = b;
            } else {
                break;
            }

        }
    }

   } 
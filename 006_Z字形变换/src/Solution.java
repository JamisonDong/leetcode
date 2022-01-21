import java.util.ArrayList;
import java.util.List;

/**
 * @Auther:dxk
 * @Date:2021/8/30-08-30-8:34
 * @version:1.0
 */
public class Solution {
    public static String convert(String s, int numRows) {
        if (numRows == 1) return s;

        List<StringBuilder> rows = new ArrayList<>();
        //String []rows = new String[len];
        for (int i = 0; i < Math.min(numRows, s.length()); i++)
            rows.add(new StringBuilder());

        int curRow = 0;
        boolean goingDown = false;

        for (char c : s.toCharArray()) {
            rows.get(curRow).append(c);
            if (curRow == 0 || curRow == numRows - 1) goingDown = !goingDown;
            curRow += goingDown ? 1 : -1;
        }

        StringBuilder ret = new StringBuilder();
        for (StringBuilder row : rows) ret.append(row);
        return ret.toString();
    }
    public static void main(String[] args) {
        String str = "PAYPALISHIRING";
        int numRows = 3;
        String s = convert(str, numRows);
        System.out.println(s);
    }
}

import java.util.HashMap;

/**
标签：滑动窗口
        暴力解法时间复杂度较高，会达到 O(n^2)，故而采取滑动窗口的方法降低时间复杂度
        定义一个 map 数据结构存储 (k, v)，其中 key 值为字符，value 值为字符位置 +1，加 1 表示从字符位置后一个才开始不重复
        我们定义不重复子串的开始位置为 start，结束位置为 end
        随着 end 不断遍历向后，会遇到与 [start, end] 区间内字符相同的情况，此时将字符作为 key 值，获取其 value 值，
        并更新 start，此时 [start, end] 区间内不存在重复字符
        无论是否更新 start，都会更新其 map 数据结构和结果 ans。
        时间复杂度：O(n)
*/

public class Solution {
    public static int lengthOfLongestSubstring(String s) {
        int ans = 0,n = s.length();
        HashMap<Character, Integer> map = new HashMap<>();
        for (int start = 0, end = 0; end < n; end++) {
            if(map.containsKey(s.charAt(end))){
                start = Math.max(map.get(s.charAt(end)), start);
            }
            ans = Math.max(end-start+1, ans);
            map.put(s.charAt(end), end+1);
        }
        return ans;
    }

    public static void main(String[] args) {
        String str = "abcaba";
        int ans = lengthOfLongestSubstring(str);
        System.out.println("ans = " + ans);
    }
}

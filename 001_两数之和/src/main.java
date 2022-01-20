import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class main {
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i< nums.length; i++) {
            if(map.containsKey(target - nums[i])) {
                return new int[] {map.get(target-nums[i]),i};
            }
            map.put(nums[i], i);
        }
        throw new IllegalArgumentException("No two sum solution");
    }
    public static void main(String[] args) {
        int[] nums = new int[]{3,2,4};
        int target = 6;
        int[] value = twoSum(nums, target);
        System.out.println(Arrays.toString(value));
    }
}


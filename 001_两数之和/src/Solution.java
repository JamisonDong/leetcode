import java.util.Arrays;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        int[] value = new int[2];
        for(int i = 0; i<nums.length;i++){
            value[0] = i;
            for(int j = i+1; j<nums.length; j++){
                if(nums[i]+nums[j] == target){
                    value[1] = j;
                    System.out.println(Arrays.toString(value));
                }
            }
        }
        return value;
    }

    public static void main(String[] args) {
        int[] nums = new int[]{3,2,4};
        int target = 6;
        twoSum(nums, target);
    }
}

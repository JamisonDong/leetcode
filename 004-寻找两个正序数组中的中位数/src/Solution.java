import java.util.Arrays;

public class Solution {
    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int[] nums = new int[nums1.length + nums2.length];
//        System.out.println("nums.length = " + nums.length);
        int i = 0, j = 0, k = 0;
        while( i<nums1.length && j<nums2.length){
            if(nums1[i] < nums2[j]){
                nums[k] = nums1[i];
                i++;
            }else{
                nums[k] = nums2[j];
                j++;
            }
            k++;
        }
        if(i>=nums1.length){
            for (int l = k; l < nums.length; l++,j++) {
                nums[l] = nums2[j];
            }
        }else{
            for (int l = k; l < nums.length; l++,i++) {
                nums[l] = nums1[i];
            }
        }
        int len = nums.length;
        System.out.println(Arrays.toString(nums));
        double result;
        if(len % 2 == 0){
            result = (double)(nums[len / 2] + nums[len / 2 - 1]) / 2;
        }else{
            result = (double)(nums[len / 2]);
        }
        return result;
    }

    public static void main(String[] args) {
        int[] nums1 = new int[]{1,2};
        int[] nums2 = new int[]{3,4};
        double result = findMedianSortedArrays(nums1, nums2);
        System.out.println("result = " + result);
    }
}

class Solution {
  public int minMeetingRooms(int[][] intervals) {
    if (intervals.length == 0)
      return 0;

    // 最小堆
    PriorityQueue<Integer> allocator = new PriorityQueue<Integer>(intervals.length, (a, b) -> a - b);

    // 对时间表按照开始时间从小到大排序
    Arrays.sort(intervals, (a, b) -> a[0] - b[0]);

    // 添加第一场会议的结束时间
    allocator.add(intervals[0][1]);

    // 遍历除第一场之外的所有会议
    for (int i = 1; i < intervals.length; i++) {
      if (intervals[i][0] >= allocator.peek()) {
        // 如果当前会议的开始时间大于前面已经开始的会议中最晚结束的时间
        // 说明有会议室空闲出来了，可以直接重复利用
        // 当前时间已经是 intervals[i][0]，因此把已经结束的会议删除
        allocator.poll();
      }
      // 把当前会议的结束时间加入最小堆中
      allocator.add(intervals[i][1]);
    }

    // 当所有会议遍历完毕，还在最小堆里面的，说明会议还没结束，此时的数量就是会议室的最少数量
    return allocator.size();
  }
}

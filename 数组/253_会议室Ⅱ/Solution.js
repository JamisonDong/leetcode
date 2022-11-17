/**
 * 
 * 给定一个会议时间安排的数组，每个会议时间都会包括开始和结束的时间 [[s1,e1],[s2,e2],…] (si < ei)，
 为避免会议冲突，同时要考虑充分利用会议室资源，请你计算至少需要多少间会议室，才能满足这些会议安排。

示例 1:
输入: [[0, 30],[5, 10],[15, 20]]
输出: 2

示例 2:
输入: [[7,10],[2,4]]
输出: 1
 */


const getMinMeetingRoom = function (meetings) {
  if (meetings.length === 0) return 0;
  let nums = []
  for (const [start, end] of meetings) {
    nums.push([start, 1]);
    nums.push([end, -1]);
  }
  nums.sort((a, b) => {
    return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
  })
  console.log(nums);
  let cur = 0, res = 0;
  for (const [time, flag] of nums) {
    cur += flag;

    res = Math.max(cur, res)
  }

  return res
}


var meetings = [[0, 30], [5, 10], [15, 20]]
console.log(getMinMeetingRoom(meetings));
//初始化树状数据状态
//给定树状结构及被选中的叶子节点数组，计算出每一个节点的选中状态
status定义为
0 所有子节点均未被选中
1 同时存在被选中的子节点和未被选中的子节点
2 所有子节点均为被选中


/**
 * ["1-1-1","1-1-2","1-2-1"] {"name":"1","status":0,"children":[{"name":"1-1","status":0,"children":[{"name":"1-1-1","status":0},{"name":"1-1-2","status":0}]},{"name":"1-2","status":0,"children":[{"name":"1-2-1","status":0},{"name":"1-2-2","status":0},{"name":"1-2-3","status":0}]}]}
 */

/**
 * {"name":"1","status":1,"children":[{"name":"1-1","status":2,"children":[{"name":"1-1-1","status":2},{"name":"1-1-2","status":2}]},{"name":"1-2","status":1,"children":[{"name":"1-2-1","status":2},{"name":"1-2-2","status":0},{"name":"1-2-3","status":0}]}]}
 */
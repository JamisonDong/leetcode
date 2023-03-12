'''
解题步骤：
1. 根据数组edges构建邻接表g g[u]表示节点u的所有邻居
2. 使用二进制数mask表示子树, mask的第i位为1表示节点i在子树中 否则不在 所有子树共有2^n种状态
3. 在[1, 2^n -1]的范围内枚举子树mask
    如果二进制只有一位为1  则表示子树只有一个节点不符合
    找到mask的二进制最高位为1的位置, 记作cur, 然后从cur出发,通过BFS/DFS 找到树直径的一个端点next
    然后从next出发 再通过BFS/DFS 过程记录最大距离mx
    当走到最深的节点时 可得知树的直径 更新答案数组ans ans[mx - 1]+=1
4. 返回ans
'''

class Solution:
  def countSubgraphsForEachDiameter(self, n: int, edges: List[List[int]]) -> List[int]:
    def dfs(u: int, d: int = 0):
      nonlocal mx, next, mask
      if mx < d:
        mx, next = d, u
      mask ^= 1 << u
       for v in g[u]:
          if mask >> v & 1:
            dfs(v, d + 1)
      g = defaultdict(list)
      for u, v in edges:
        u, v = u - 1, v - 1
        g[u].append(v)
        g[v].append(u)
      ans = [0] * (n-1)
      next = mx = 0
      for msk in range(1, 1<<n):
        if msk & (msk - 1) == 0:
          continue
        mask, mx = msk, 0
        cur = mask.bit_length()-1
        dfs(cur)
        if mask == 0:
          mask, mx = msk, 0
          dfs(next)
          ans[mx -1]+=1
      return res


class Solution:
    def countSubgraphsForEachDiameter(self, n: int, edges: List[List[int]]) -> List[int]:
        # 建树
        g = [[] for _ in range(n)]
        for x, y in edges:
            g[x - 1].append(y - 1)
            g[y - 1].append(x - 1)  # 编号改为从 0 开始

        ans = [0] * (n - 1)
        in_set = [False] * n
        def f(i: int) -> None:
            if i == n:
                vis = [False] * n
                diameter = 0
                for v, b in enumerate(in_set):
                    if not b: continue
                    # 求树的直径
                    def dfs(x: int) -> int:
                        nonlocal diameter
                        vis[x] = True
                        max_len = 0
                        for y in g[x]:
                            if not vis[y] and in_set[y]:
                                ml = dfs(y) + 1
                                diameter = max(diameter, max_len + ml)
                                max_len = max(max_len, ml)
                        return max_len
                    dfs(v)
                    break
                if diameter and vis == in_set:
                    ans[diameter - 1] += 1
                return
            
            # 不选城市 i
            f(i + 1)

            # 选城市  i
            in_set[i] = True
            f(i + 1)
            in_set[i] = False  # 恢复现场
        f(0)
        return ans

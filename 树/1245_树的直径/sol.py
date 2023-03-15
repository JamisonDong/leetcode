# 两次DFS

class Solution:
    def treeDiameter(self, edges: List[List[int]]) -> int:
        def dfs(u, t):
            nonlocal ans, vis, d, next
            if vis[u]:
                return
            vis[u] = True
            for v in d[u]:
                dfs(v, t + 1)
            if ans < t:
                ans = t
                next = u

        d = defaultdict(set)
        vis = [False] * (len(edges) + 1)
        for u, v in edges:
            d[u].add(v)
            d[v].add(u)
        ans = 0
        next = 0
        dfs(edges[0][0], 0)
        vis = [False] * (len(edges) + 1)
        dfs(next, 0)
        return ans


# 树形DP
class Solution:
    def treeDiameter(self, edges: List[List[int]]) -> int:
      n = len(edges) +1
      g = [[] for _ in range(n)]
      for x, y in edges:
        g[x].append(y)
        g[y].append(x)
      ans = 0
      def dfs(x: int, fa:int)->int:
        nonlocal ans
        max_len = 0
        for y in g[x]:
          if y!= fa:
            mx = dfs(y, x)
            ans = max(ans, mx+max_len)
            max_len = max(max_len, mx)
          return max_len+1
      dfs(0, -1)
      return ans
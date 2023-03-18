// 捕获
// 时间限制： 3000MS
// 内存限制： 589824KB
// 题目描述：
// 小美在玩一项游戏。该游戏的目标是尽可能抓获敌人。

// 敌人的位置将被一个二维坐标 (x, y) 所描述。

// 小美有一个全屏技能，该技能能一次性将若干敌人一次性捕获。

// 捕获的敌人之间的横坐标的最大差值不能大于A，纵坐标的最大差值不能大于B。

// 现在给出所有敌人的坐标，你的任务是计算小美一次性最多能使用技能捕获多少敌人。



// 输入描述
// 第一行三个整数N,A,B，表示共有N个敌人，小美的全屏技能的参数A和参数B。

// 接下来N行，每行两个数字x,y，描述一个敌人所在的坐标。

// 1≤N≤500，1≤A,B≤1000，1≤x,y≤1000。

// 输出描述
// 一行，一个整数表示小美使用技能单次所可以捕获的最多数量。


/*
二维前缀和数组要怎么计算出来呢？
可以分为四种情况

i==0 && j==0，只有一个直接赋值即可：prefixSum[0, 0] = src[0, 0]。

i==0，最左边的一排，prefixSum[0, j] = prefixSum[0, j-1] + src[0, j]；

j==0，最上面一排，prefixSum[i, o] = prefixSum[i-1, 0] + src[i, 0];

i!=0 || j!=0，prefixSum[i][j] = prefixSum[i - 1][j] + prefixSum[i][j - 1] + src[i][j] - prefixSum[i - 1][j - 1];

*/

#include<bits/stdc++.h>
#define x first
#define y second
#define mem(a,b) memset(a,b,sizeof(a))
#define F(i,l,r) for(int i=l;i<=r;i++)
using namespace std;

typedef long long ll;
typedef pair<int,int> pii;
typedef unsigned long long ull;

const int N=1005;

int g[N][N];

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);

    int n,a,b;
    cin>>n>>a>>b;
    for(int i=1;i<=n;i++)
    {
        int x,y;
        cin>>x>>y;
        g[x][y]++;
    }
    for(int i=1;i<=1000;i++)
    {
        for(int j=1;j<=1000;j++)
        {
            g[i][j]+=g[i-1][j]+g[i][j-1]-g[i-1][j-1];
        }
    }
    int ans=0;
    for(int i=1;i<=1000;i++)
    {
        for(int j=1;j<=1000;j++)
        {
            ans=max(ans,g[i][j]-g[max(0,i-a-1)][j]-g[i][max(0,j-b-1)]+g[max(0,i-a-1)][max(0,j-b-1)]);
        }
    }
    cout<<ans<<endl;
    return 0;
}
#include<iostream>
#include<cstring>
#include<algorithm>
#include<queue>
 
using namespace std;
const int N=10010;
int h[N],e[N],ne[N],idx,w[N];
int dist[N];
bool st[N];
 int n,m;
 int cnt[N];
void add(int a,int b,int c){
  e[idx]=b;
  w[idx]=c;
  ne[idx]=h[a];
  h[a]=idx++;
}
 
 
int spfa(){
     memset(dist,0x3f,sizeof dist);
     dist[1]=0;
 
     queue<int>q;
     for(int i = 1;i<=n;i++)q.push(i),st[i] = true;
     st[1]=true;
     while(q.size()){
        int t = q.front();
        q.pop();
        st[t] = false;
        for(int i = h[t];i!=-1;i = ne[i]){
            int j = e[i];
            if(dist[j]>dist[t]+w[i]){
                dist[j] = dist[t]+w[i];
                cnt[j] ++; //可以优化为cnt[j] = cnt[t] + 1;
                if(cnt[j]>=n)return 1;
                if(!st[j]){
                    q.push(j);
                    st[j] = true;
                }
            }
        }
        
    }
    return 0;
}
 
   
int main(){
    cin>>n>>m;
    memset(h,-1,sizeof h);
    while(m--){
        int a,b,c;
        cin>>a>>b>>c;
        add(a,b,c);
    }
 
    int t=spfa();
    if(t==1)cout<<"Yes";
    else cout<<"No";
    return 0;
}
 
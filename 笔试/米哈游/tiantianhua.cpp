#include<bits/stdc++.h>
using namespace std;
#define ll long long
int main()
{
    ll a , b , c;
    cin >> a >> b >> c;
    if (a > b) swap(a , b);
    ll f = min(b - a , c);
    c -= f;
    a += f;
    a += c / 2;
    cout << a / 2 << endl;
    return 0;
}
arr1 = input()
arr = [int(i) for i in arr1.split(" ")]
a = arr[0]
b = arr[1]
c = arr[2]
if a>b:
    a,b = b,a
f = min(b-a, c)
c -= f
a += f
a += c//2
ans = a//2

print(ans)
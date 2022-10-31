def getCounts(str):
    count = 0
    i=0
    j=1
    n = len(str)
    while(j<n):
        while(str[i]==str[j] and j<n):
          j+=1
        count += ((j-i)//2 -1)
        i+=1
        i=j
    return count



str = "reeeed"
ans = getCounts(str)
print(ans)


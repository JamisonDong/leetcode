def find(arr, val):
    low = 1
    high = len(arr)-1
    while (low <= high):
        mid = (high+low)//2
        if arr[mid] < val:
            low = mid+1
        else:
            high = mid - 1
    return low


def binarySeach(y_value):
    arr = [0]
    maxLength = 1
    arr.append(y_value[0])

    for i in range(1, len(y_value)):
        if y_value[i] > arr[maxLength]:
            arr.append(y_value[i])
            maxLength += 1
            else:
                place = find(arr, y_value[i])
                arr[place] = y_value[i]
    print(maxLength)


n = int(input())

for _ in range(n):
    m = int(input())
    X = list(map(int, input().split()))
    Y = list(map(int, input().split()))

    thing = []
    for i in range(m):
        thing.append([X[i], Y[i]])
    thing = sorted(thing, key=(lambda x: (x[0], x[1])))
    y_list = []
    for i in range(len(thing)):
        y_list.append(thing[i][1])

    binarySeach(y_list)

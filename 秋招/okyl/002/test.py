def getMaxRepeatSubstringLength(inputStr):
    length = len(inputStr)
    for i in reversed(range(length//2+1)):
        count = 0
        for j in range(length - i):
            if inputStr[j] == inputStr[j+i]:
                count = count + 1
            else:
                if length - j <= 2 * i:
                    break
                count = 0
            if count == i:
                return count * 2
    return 0
inputStr = input()
print(getMaxRepeatSubstringLength(inputStr))

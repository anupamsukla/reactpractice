def findCombinations(s, combinations, substring=[]):
    if not s:
        combinations.add(tuple(substring))
        return
 
    for i in range(len(s)):
        substring.append(s[:i + 1])
 
        # recur for the remaining string `s[i+1, n-1]`
        findCombinations(s[i + 1:], combinations, substring)
 
        # backtrack: remove current substring from the output
        substring.pop()
 
 
def findAllCombinations(s):
    # base case
    if not s:
        return set()
 
    # find all non-overlapping substrings
    combinations = set()
    findCombinations(s, combinations)
    return combinations
 
 
if __name__ == '__main__':
 
    # input string
    s = 'aababaabce'
 
    # find all non-overlapping substrings
    combinations = findAllCombinations(s)
    print(combinations)
 
var findOrder = function (numCourses, prerequisites) {
    const inDegree = new Array(numCourses).fill(0)
    const map = {}
    for (let i = 0; i < prerequisites.length; i++) {
        inDegree[prerequisites[i][0]]++
        if (map[prerequisites[i][1]]) {
            map[prerequisites[i][1]].push(prerequisites[i][0])
        } else {
            map[prerequisites[i][1]] = [prerequisites[i][0]]
        }
    }

    let queue = []
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) queue.push(i)
    }
    let res = []
    while (queue.length) {
        const selected = queue.shift()
        res.push(selected)
        let toEnQueue = map[selected]
        if (toEnQueue && toEnQueue.length) {
            for (let i = 0; i < toEnQueue.length; i++) {
                inDegree[toEnQueue[i]]--
                if (inDegree[toEnQueue[i]] === 0) {
                    queue.push(toEnQueue[i])
                }
            }
        }
    }
    return res.length === numCourses ? res : []
};
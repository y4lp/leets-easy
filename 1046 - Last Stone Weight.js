/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    let q = new MaxPriorityQueue();
    for (let s of stones) q.enqueue('x', s);

    while (q.size() > 1) {
        let a = q.dequeue()['priority'];
        let b = q.dequeue()['priority'];
        if (a > b) q.enqueue('x', a - b);
    }
    return q.size() == 0 ? 0 : q.dequeue()['priority'];
};
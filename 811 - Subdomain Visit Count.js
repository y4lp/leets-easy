/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
    let m = new Map();
    for (let cpdomain of cpdomains) {
        let cnd = cpdomain.split(' ');
        let count = Number.parseInt(cnd[0]);
        if (!m.has(cnd[1])) {
            m.set(cnd[1], 0);
        }
        m.set(cnd[1], m.get(cnd[1]) + count);

        let subdomains = cnd[1].split('.');
        let temp = '';
        for (let i = subdomains.length - 1; i > 0; i--) {
            temp = i == subdomains.length - 1 ? subdomains[i] : subdomains[i] + '.' + temp;
            if (!m.has(temp)) {
                m.set(temp, 0);
            }
            m.set(temp, m.get(temp) + count);
        }
    }

    let res = []
    for (let dom of m.keys()) {
        let t = m.get(dom) + ' ' + dom;

        res.push(t);
    }
    return res;
};


let a = ["9001 discuss.leetcode.com"];
let r = subdomainVisits(a);
console.log(r);
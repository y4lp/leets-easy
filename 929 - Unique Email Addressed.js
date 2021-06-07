/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    let dot = /\./g, plus = /\+.*/;
    let s = new Set();
    for (let email of emails) {
        let at = email.split('@');
        let local = at[0], domain = at[1];
        local = local.replace(dot, '');
        local = local.replace(plus, '');
        s.add(local + '@' + domain);
    }
    return s.size;
};

let a =
    ["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"];
numUniqueEmails(a);
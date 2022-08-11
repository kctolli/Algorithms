/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (list1.length === 0 && list2.length === 0) {
        return [];
    } else if (list1.length === 0) {
        return list2;
    } else if (list2.length === 0) {
        return list1;
    } else { 
        return list1.concat(list2).sort();
    }    
};

module.exports = mergeTwoLists;

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

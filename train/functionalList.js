function List(head = new EmptyList()) {
    this._head = head;
    this._len = head._len || 0;
    return this;
}

function EmptyList() {
    return null;
}

EmptyList.prototype = new List();
EmptyList.prototype.constructor = EmptyList;
EmptyList.prototype.push = function (x) {
    return new ListNode(x, this);
};
EmptyList.prototype.toString = () => '()';
EmptyList.prototype.isEmpty = () => true;
EmptyList.prototype.length = () => 0;
EmptyList.prototype.remove = function (x) { /* implement this */ };
EmptyList.prototype.append = function (xs) {

};


function ListNode(value = null, next = new EmptyList()) {
    this.value = value;
    this.next = next;
    this._len = (next._len || 0) + 1;
    return this;
}

ListNode.prototype = new List();
ListNode.prototype.constructor = ListNode;
ListNode.prototype.isEmpty = function () {
    return !this.next;
};
ListNode.prototype.toString = function () {
    let arr = [];
    let node = this;
    while (node instanceof ListNode) {
        arr.push(node.value);
        node = node.next;
    }
    return `(${arr.join(' ')})`;
};
ListNode.prototype.head = function () {
    return this.value;
};
ListNode.prototype.tail = function () {
    return this.next;
};
ListNode.prototype.length = function () {
    return this._len;
};
ListNode.prototype.push = function (x) {
    return new ListNode(x, this);
};
ListNode.prototype.remove = function (x) { /* implement this */ };
ListNode.prototype.append = function (xs) {
    // let node = this;
    // while (node.next instanceof ListNode) {
    //     node._len += xs._len;
    //     node = node.next;
    // }
    // node.next = xs;
    // node._len += xs._len;
    return this;
};

let elist = new EmptyList();
let list1 = elist.push(1).push(2);
let list2 = elist.push(4).push(4);
console.log(elist.push(1).length());
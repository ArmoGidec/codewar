function List(head = new EmptyList()) {
    this._head = head;
    this._len = head._len;
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
EmptyList.prototype.remove = function (x) { return this; };
EmptyList.prototype.append = function (xs) { return xs; };


function ListNode(value = null, next = new EmptyList()) {
    this.value = value;
    this.next = Object.assign(next);
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
ListNode.prototype.remove = function (x) { 
    let node = Object.assign(this);
    while (node.next instanceof ListNode) {
        node = node.next;
    }
};
ListNode.prototype.append = function (xs) {
    if (xs.next instanceof EmptyList) return this.push(xs.value);
    return this.append(xs.next).push(xs.value);
};

let elist = new EmptyList();
let list1 = elist.push('a').push('c');
let list2 = elist.push('a').push('b');
let list3 = list2.remove('a');

console.log(list1.append(list2));
console.log(list3);

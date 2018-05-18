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
EmptyList.prototype.remove = function (x) {
    return this;
};
EmptyList.prototype.append = function (xs) {
    return xs;
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
ListNode.prototype.remove = function (x) {
    if (this instanceof EmptyList) return this;
    if (this.value === x) return this.next.remove(x);
    return this.next.remove(x).push(this.value);
};
ListNode.prototype.append = function (xs) {
    if (!(xs instanceof ListNode)) return this;
    if (this.next instanceof ListNode) return this.next.append(xs).push(this.value);
    return xs.push(this.value);
};

let mt = new EmptyList();
let l1 = mt.push('a').push('b').push('c');
let l2 = mt.push('a').push('b');
let l3 = l1.append(l2);
let l4 = l3.remove();

console.log(l3.toString());
console.log(l1.toString());
console.log(l2.toString());
console.log(l3.remove('a').toString());



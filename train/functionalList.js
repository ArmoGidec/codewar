function List(head = new EmptyList()) {
    this.head = head;
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
    return Object.assign(new xs.prototype.constructor(), xs);
};

function ListNode(value = null, next = new EmptyList()) {
    this.value = value;
    this.next = next;
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
    return 1 + this.next.length();
};
ListNode.prototype.push = function (x) {
    return new ListNode(x, this);
};
ListNode.prototype.remove = function (x) {
    if (this instanceof EmptyList) return this;
    let next = this.next.remove(x);
    if (this.value !== x) {
        if (next === this.next)
            return this;
        else return next.push(this.value);
    }
    else return next;
};

ListNode.prototype.append = function (xs) {
    if (!(xs instanceof ListNode)) return this;
    if (this.next instanceof ListNode) return this.next.append(xs).push(this.value);
    return xs.push(this.value);
};

let elist = new EmptyList();
let list1 = elist.push('a').push('c');
let list2 = elist.push('a').push('b');
let list3 = list1.append(list2);
console.log(list3.toString());

let list4 = list3.remove('a');

console.log(list3.toString());
console.log(list4.toString());

console.log(list4.remove(list4.head()) === list4.tail());

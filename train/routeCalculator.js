/**
 * @param {string} evaluate 
 */
function calculate(evaluate) {
    if (/[^0-9\.\+\-\*\$]/.test(evaluate)) return '400: Bad request';
    if (!/[\+\-\*\$]/.test(evaluate) || evaluate[0] === '-') {
        return parseFloat(evaluate);
    }
    let tree = parse(evaluate);
    
    return tree;
}

function parse(evaluate) {
    let tree = new BinaryTree();
    let sign = true;
    let value = '';
    for (let c of evaluate) {
        if (/\d+/.test(c) || /-/.test(c) && sign) {
            value += c;
            sign = false;
        }
        else if (/[\+\-\*\$]/.test(c)) {
            tree.push(value);
            tree.push(c);
            value = '';
            sign = true;
        }
    }
    tree.push(value);
    return tree;
}

function BinaryTree() {
    this._head = null;
    // this._count = 0;
    return this;
}

BinaryTree.prototype.push = function(x) {
    if (this._head === null) {
        this._head = new BinaryTreeNode(x);
    } else {
        this._head = AddTo(this._head, x);
    }
    // this._count += 1;
};

function AddTo(node, value) {
    if (/[\+\-\*\$]/.test(value)) {
        let h = new BinaryTreeNode(value, node);
        return h;
    } else {
        let r = new BinaryTreeNode(value);
        node._rigth = r;
        return node;
    }
}

function BinaryTreeNode(value = null, left = null, rigth = null) {
    this._value = value;
    this._left = left;
    this._rigth = rigth;
    return this;
}

console.log(calculate('55+5+5'), 20);
// console.log(calculate('5-5-5-5'), -10);
// console.log(calculate('5*5*5*5'), 625);
// console.log(calculate('5$5$5$5'), 0.04);
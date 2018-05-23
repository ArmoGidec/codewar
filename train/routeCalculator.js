function calc(evaluate) {
    if (/[^0-9\.\+\-\*\$]/.test(evaluate))
        return '400: Bad request';
    if (!/\d+[\+\-\*\$]/.test(evaluate))
        return parseFloat(evaluate);
    var res = new RPN();
    return res.calculate(evaluate);
}
var RPN = /** @class */ (function () {
    function RPN() {
    }
    RPN.prototype.calculate = function (input) {
        var output = this.getExpression(input);
        var result = this.counting(output);
        return result;
    };
    RPN.prototype.getExpression = function (input) {
        var output = '';
        var stack = [];
        for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
            var c = input_1[_i];
            if (!this.isOperator(c)) {
                output += c;
            }
            else {
                output += " ";
                if (c === '(')
                    stack.push(c);
                else if (c === ')') {
                    var s = stack.pop();
                    while (s != '(') {
                        output += s + ' ';
                        s = stack.pop();
                    }
                }
                else {
                    if (stack.length > 0)
                        if (this.getPriority(c) <= this.getPriority(stack[stack.length - 1]))
                            output += stack.pop() + ' ';
                    stack.push(c);
                }
            }
        }
        while (stack.length > 0)
            output += ' ' + stack.pop();
        return output;
    };
    RPN.prototype.counting = function (input) {
        var result = 0;
        var temp = [];
        for (var i = 0, len = input.length; i < len; i++) {
            if (/\d/.test(input[i])) {
                var a = '';
                while (!this.isDelimiter(input[i]) && !this.isOperator(input[i])) {
                    a += input[i];
                    i += 1;
                    if (i === len)
                        break;
                }
                temp.push(parseFloat(a));
                i -= 1;
            }
            else if (this.isOperator(input[i])) {
                var a = temp.pop();
                var b = temp.pop();
                switch (input[i]) {
                    case '+':
                        result = b + a;
                        break;
                    case '-':
                        result = b - a;
                        break;
                    case '*':
                        result = b * a;
                        break;
                    case '$':
                        result = b / a;
                        break;
                }
                temp.push(result);
            }
        }
        return temp[temp.length - 1];
    };
    RPN.prototype.isDelimiter = function (c) { return c === ' '; };
    RPN.prototype.isOperator = function (c) { return /[\+\-\*\$]/.test(c); };
    RPN.prototype.getPriority = function (c) {
        var priority = { '(': 0, ')': 1, '+': 2, '-': 3, '*': 4, '$': 4 };
        return priority[c] || 6;
    };
    return RPN;
}());
console.log(calc('2+31*2-1'));

function calc(evaluate: string) {
    if (/[^0-9\.\+\-\*\$]/.test(evaluate)) return '400: Bad request';
    if (!/\d+[\+\-\*\$]/.test(evaluate)) return parseFloat(evaluate);
    let res = new RPN();
    return res.calculate(evaluate);
}

class RPN {
    calculate(input: string): number {
        let output = this.getExpression(input);
        let result = this.counting(output);
        return result;
    }

    private getExpression(input: string): string {
        let output = '';
        let stack = [];
        for (let c of input) {
            if (!this.isOperator(c)) {
                output += c;
            }
            else {
                output += " "
                if (c === '(') stack.push(c);
                else if (c === ')') {
                    let s = stack.pop();
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

        while (stack.length > 0) output += ' ' + stack.pop();
        return output;
    }

    private counting(input: string): number {
        let result = 0;
        let temp = [];
        for (let i = 0, len = input.length; i < len; i++) {
            if (/\d/.test(input[i])) {
                let a = '';
                while (!this.isDelimiter(input[i]) && !this.isOperator(input[i])) {
                    a += input[i];
                    i += 1;
                    if (i === len) break;
                }
                temp.push(parseFloat(a));
                i -= 1;
            }
            else if (this.isOperator(input[i])) {
                let a = temp.pop();
                let b = temp.pop();

                switch (input[i]) {
                    case '+': result = b + a; break;
                    case '-': result = b - a; break;
                    case '*': result = b * a; break;
                    case '$': result = b / a; break;
                }
                temp.push(result);
            }
        }
        return temp[temp.length - 1];
    }

    private isDelimiter(c: string) { return c === ' '; }

    private isOperator(c: string) { return /[\+\-\*\$]/.test(c); }

    private getPriority(c: string) {
        let priority = { '(': 0, ')': 1, '+': 2, '-': 3, '*': 4, '$': 4 };
        return priority[c] || 6;
    }
}

console.log(calc('2+31*2-1'));
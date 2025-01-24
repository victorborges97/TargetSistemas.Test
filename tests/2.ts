function isFibonacci(n: number): boolean {
    let a = 0;
    let b = 1;
    while (a < n) {
        // [a, b] = [b, a + b];
        let temp = a;
        a = b;
        b = temp + b;
    }
    return a === n;
}

function fibonacciSequence(n: number): string {
    if (isFibonacci(n)) {
        return `${n} pertence à sequência de Fibonacci.`;
    } else {
        return `${n} não pertence à sequência de Fibonacci.`;
    }
}

console.log(fibonacciSequence(13));
console.log(fibonacciSequence(14));
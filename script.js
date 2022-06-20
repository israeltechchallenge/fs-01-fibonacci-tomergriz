function Fibonacci(x) {

    let i;
    let fib = [0, 1]; 

    for (i = 2; i <= x; i++) {

        fib[i] = fib[i - 2] + fib[i - 1];
    }

    return fib[x];
}

const x = 6;
const y = Fibonacci(x);

document.getElementById("Fibonacci").innerText = `The Fibonacci of ${x} is ${y}`;

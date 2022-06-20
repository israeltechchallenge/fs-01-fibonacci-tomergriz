function Fibonacci(x) {

    let i;
    let fib = [0, 1];

    for (i = 2; i <= x; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib[x];
}

document.getElementById("button").addEventListener("click", function() {

var x = document.getElementById("inputNum").value;
    document.getElementById("result").innerHTML = Fibonacci(x);

})

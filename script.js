window.onload = listOnLoad;

function listOnLoad() {
    let url = 'http://localhost:5050/getFibonacciResults';

    fetch(url).then(response => {
        response.json().then(data => {
            data.results.sort(function (a, b) {
                return b.createdDate - a.createdDate
            });
            document.getElementById("list").innerHTML = "";
            for (let i = 0; i < 3; i++) {
                document.getElementById("list").innerHTML += `<li class="border-dark border-bottom mb-3 pb-2">The Fibonacci Of <b>${data.results[i].number}</b> is <b>${data.results[i].result}</b> Calculated at: ${new Date(data.results[i].createdDate)}</li>`;
            }
        });
    });
}

let outPut = document.getElementById("outPut");
let spinner = document.getElementById("spinner");
let input = document.getElementById('inputNum');
let largerFifty = document.getElementById('largerFifty')

// Get the inputNum x
document.getElementById("button").addEventListener("click", () => {

    outPut.classList.remove("border");
    outPut.classList.remove("text-danger");
    outPut.classList.add("d-none");
    spinner.classList.remove("d-none");
    largerFifty.classList.add("visually-hidden");
    input.classList.remove("inputNumRed");


    var x = document.getElementById("inputNum").value;


    if (x > 50) { // InputNum x More then 50


        spinner.classList.add("d-none");
        largerFifty.classList.remove("visually-hidden");
        input.classList.add("inputNumRed");


    } else {

        fetch(`http://localhost:5050/fibonacci/${x}`).then(response => {
            if (!response.ok) { //Server Error

                outPut.classList.remove("d-none");
                spinner.classList.add("d-none");
                outPut.classList.add("text-danger");
                largerFifty.classList.add("visually-hidden");
                input.classList.remove("inputNumRed");

                response.text().then((errorText) => {
                    outPut.innerHTML = `Server Error: ${errorText}`;
                })
            }
            
            response.json().then(data => { // inputNum ok getting results

                outPut.classList.remove("d-none");
                spinner.classList.add("d-none");
                largerFifty.classList.add("visually-hidden");

                outPut.innerHTML = data.result;


            });
        });
        listOnLoad();
    }

})
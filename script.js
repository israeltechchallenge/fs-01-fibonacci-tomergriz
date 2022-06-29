
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


// Get the inputNum x
document.getElementById("button").addEventListener("click", () => {

    document.getElementById("result").classList.remove("border");
    document.getElementById("result").classList.remove("text-danger");
    document.getElementById("result").classList.add("d-none");
    document.getElementById("spinner").classList.remove("d-none");
    document.getElementById('largerFifty').classList.add("visually-hidden");
    document.getElementById('inputNum').classList.remove("inputNumRed");


    var x = document.getElementById("inputNum").value;


    if (x > 50) { // InputNum x More then 50


        document.getElementById("spinner").classList.add("d-none");
        document.getElementById('largerFifty').classList.remove("visually-hidden");
        document.getElementById('inputNum').classList.add("inputNumRed");
        

    } else {

        fetch(`http://localhost:5050/fibonacci/${x}`).then(response => {
            if (!response.ok) { //Server Error

                document.getElementById("result").classList.remove("d-none");
                document.getElementById("spinner").classList.add("d-none");
                document.getElementById("result").classList.add("text-danger");
                document.getElementById('largerFifty').classList.add("visually-hidden");
                document.getElementById('inputNum').classList.remove("inputNumRed");


                document.getElementById("result").innerHTML = `Server Error: 42 is the meaning of life`;

            }
            response.json().then(data => { // inputNum ok getting results

                document.getElementById("result").classList.remove("d-none");
                document.getElementById("spinner").classList.add("d-none");
                document.getElementById('largerFifty').classList.add("visually-hidden");

                document.getElementById("result").innerHTML = data.result;


            });
        });
        listOnLoad();
    }

})
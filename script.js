document.getElementById("button").addEventListener("click", function () {

    var x = document.getElementById("inputNum").value;

    fetch(`http://localhost:5050/fibonacci/${x}`).then(response => {
        response.json().then(data => {

            document.getElementById("result").innerHTML = data.result;

        });
    });

})
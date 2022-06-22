
document.getElementById("button").addEventListener("click", function () {

    document.getElementById("result").classList.remove("text-danger");
    document.getElementById("result").classList.add("d-none");
    document.getElementById("spinner").classList.remove("d-none");

    var x = document.getElementById("inputNum").value;

    if (x > 50) {
        document.getElementById("result").classList.add("text-danger");

        
        document.getElementById("result").classList.remove("d-none");
        document.getElementById("spinner").classList.add("d-none");
        document.getElementById("result").innerHTML = "Can’t be larger than 50";
    } else {

        fetch(`http://localhost:5050/fibonacci/${x}`).then(response => {
            if (!response.ok) {

                document.getElementById("result").classList.remove("d-none");
                document.getElementById("spinner").classList.add("d-none");
                document.getElementById("result").classList.add("text-danger");


                document.getElementById("result").innerHTML = `Server Error: 42 is the meaning of life`;

            }
            response.json().then(data => {

                document.getElementById("result").classList.remove("d-none");
                document.getElementById("spinner").classList.add("d-none");

                document.getElementById("result").innerHTML = data.result;

            });
        });
    }
})
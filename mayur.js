window.addEventListener("load", function () {
    setTimeout(
        function open(event) {
            document.querySelector(".popup").style.
                display = "block";
        },
        9999999999999
    )
});

document.querySelector("#close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
});
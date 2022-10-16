let screen = document.getElementById("screen");

function display(num) {
    screen.value += num;
}

function calculate() {

    try {
        screen.value = eval(screen.value);
    }
    catch (err) {
        alert("Invalid input!");
    }
}

function Clear() {
    screen.value = " ";
}

function del() {
    screen.value = screen.value.slice(0, -1);
}


let icon = document.getElementById("dark-mode")


icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.class = "bx bxs-sun icon";
    }
    else {
        icon.class = "bx bx-moon icon";
    }
};
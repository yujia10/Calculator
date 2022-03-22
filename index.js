window.addEventListener('load', function () {

    const head = document.querySelector('head');
    const toggle = document.querySelector('.toggle-button')
    const link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = 'css/dark.css';
    head.appendChild(link);

    toggle.addEventListener('change', function () {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        if (!toggle.checked) {
            link.href = 'css/dark.css';
        } else {
            link.href = 'css/light.css';
        }
        head.appendChild(link);
    })

    const screen = document.querySelector('.screen');
    const key = document.querySelectorAll('.key');
    const txt = document.querySelectorAll('.text');
    const calc = document.querySelector('.equal-sign')
    let result = []

    for (let i = 0; i < key.length; i++) {
        key[i].onclick = function () {
            if (!isNaN(this.innerHTML) || this.innerHTML === ".") {
                if (screen.innerHTML.indexOf(".") !== -1) {
                    if (this.innerHTML !== ".") {
                        screen.innerHTML += this.innerHTML;
                    } 
                } else {
                    screen.innerHTML += this.innerHTML;
                }
            } else {
                result[result.length] = screen.innerHTML;
                result[result.length] = this.innerHTML;
                screen.innerHTML = "";

            }
        }
    }

    calc.onclick = function () {
        result[result.length] = screen.innerHTML;
        screen.innerHTML = eval(result.join(""));
        result = [];
    }

    for (let i = 0; i < txt.length; i++) {
        txt[i].onclick = function () {
            if (this.innerHTML === "AC") {
                result = [];
                screen.innerHTML = "";
            } else {
                screen.innerHTML = screen.innerHTML.substr(0, screen.innerHTML.length - 1);
            }
        }
    }

})



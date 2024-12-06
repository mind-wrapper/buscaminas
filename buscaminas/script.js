var list = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    []
]
const minas = [[rd(), rd()], [rd(), rd()], [rd(), rd()], [rd(), rd()], [rd(), rd()], [rd(), rd()], [rd(), rd()], [rd(), rd()], [rd(), rd()], [rd(), rd()], [rd(), rd()], [rd(), rd()]];

var contador = 0;

class casilla {
    constructor(x, y, st) {
        this.x = x;
        this.y = y;
        this.st = st;
        this.clicked = false;
    }

    crear() {
        const div = document.createElement("div");

        div.classList = (`unreveal`)
        div.id = `${this.x},${this.y}`;
        div.addEventListener("click", () => {

            if (div.classList == "unreveal") {
                if (this.st != "m") {
                    contador += 1;
                    if (contador == 88) {
                        alert("ganaste")
                    }
                    if (this.st == 0) {
                        div.classList = (`item s${this.st}`)
                        div.id = `${this.x},${this.y}`;
                        for (let i = -1; i <= 1; i++) {
                            for (let j = -1; j <= 1; j++) {
                                try { document.getElementById(`${this.x + i},${this.y + j}`).click(); } catch (error) { }
                            }
                        }



                    }
                    else {
                        div.innerHTML = `${this.st}`
                        div.classList = (`item s${this.st}`)
                    }
                }
                else {
                    const audio = document.getElementById("audio");
                    audio.play()
                    setTimeout(function () {
                        for (let i = 0; i < minas.length; i++) {
                            let mina = document.getElementById(`${minas[i][0]},${minas[i][1]}`)
                            mina.classList.remove("unreveal")
                            mina.classList.add("sm")
                        }
                    }, 1000);
                    setTimeout(function () {
                        msg.classList.remove("none")
                        msg.classList.add("back")
                    }, 2000);
                    div.classList = (`item s${this.st}`)
                    const msg = document.querySelector(".none")
                }

            }
        })

        div.addEventListener("contextmenu", (event) => {
            event.preventDefault();
            if (div.classList == "red") {
                div.classList = "unreveal";
            }
            if (div.classList == "unreveal") {
                div.classList = "red";
            }


        })




        return div;
    }
}
function rd() {
    return Math.round(Math.random() * 9)
}

const rev = (x, y) => {
    let n = 0
    if (list[x][y] == "m")
        return "m"
    if (x != 0 && list[x - 1][y] == "m") {

        n += 1;
    }
    if (list[x][y - 1] == "m") {

        n += 1;
    }
    if (x < 10 && list[x + 1][y] == "m") {

        n += 1;
    }

    if (list[x][y + 1] == "m") {

        n += 1;
    }

    if (x < 10 && list[x + 1][y - 1] == "m") {

        n += 1;
    }

    if (x != 0 && list[x - 1][y + 1] == "m") {

        n += 1;
    }

    if (x != 0 && list[x - 1][y - 1] == "m") {

        n += 1;
    }


    if (x < 10 && list[x + 1][y + 1] == "m") {

        n += 1;
    }

    return n;
}

id = document.getElementById("5,5")
console.log(id)



for (let i = 0; i < minas.length; i++) {
    list[minas[i][0]][minas[i][1]] = "m";
}

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        list[i][j] = rev(i, j)
    }
}

var lista = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];
const fr = document.createDocumentFragment();
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        lista[i][j] = new casilla(i, j, list[i][j])
        fr.appendChild(lista[i][j].crear())
    }
}
const cont = document.querySelector(".container")
cont.appendChild(fr);


const b = document.querySelector(".boton")
b.addEventListener("click", () => {
    location.reload();
})
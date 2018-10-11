//TIC TAC TOE

// Variables de cada casilla
A1 = document.querySelector("#A1");
A2 = document.querySelector("#A2");
A3 = document.querySelector("#A3");
B1 = document.querySelector("#B1");
B2 = document.querySelector("#B2");
B3 = document.querySelector("#B3");
C1 = document.querySelector("#C1");
C2 = document.querySelector("#C2");
C3 = document.querySelector("#C3");

const tablero = document.querySelectorAll(".nuevaTabla div");

// Variables del juego
let hayGanador = false;
let ganador = null;
let turno = "X";

// Todas las combinaciones que, si son iguales, ganan la partida
arriba = [A1,A2,A3];
medio = [B1,B2,B3];
abajo = [C1,C2,C3];
izquierda = [A1,B1,C1];
centro = [A2,B2,C2];
derecha = [A3,B3,C3];
diagonal1 = [A1,B2,C3];
diagonal2 = [A3,B2,C1];

// Array con todas las combinaciones
combinaciones = [arriba,medio,abajo,izquierda,centro,derecha,diagonal1,diagonal2];

boton = document.querySelector("#nuevo-juego");


// Resetea todos los valores y vacía las casillas
function nuevoJuego() {
	tablero.forEach(casilla => casilla.innerText = "");
	hayGanador = false;
	turno = "X";
    document.querySelector("#turno").innerText = turno;
    document.querySelector("#ganador").innerText = "";
    ganador = null;
}

// Comprueba que aún no se ha jugado esa casilla y pone la ficha que toque (X o O)
function ponerFicha() {
	if((this.innerText === "") && (!hayGanador)) {
		if (turno === "X") {
			this.innerText = "X";
			turno = "O";
		} else {
			this.innerText = "O";
			turno = "X";
		}
		document.querySelector("#turno").innerText = turno;
		comprobarGanador();

		if(hayGanador) {
			document.querySelector("#ganador").innerText = `Ha ganado ${ganador}!`;
		}
	}
}

// Comprueba si alguna de las posibles combinaciones tiene todos sus elementos iguales (no vacíos)
function comprobarGanador() {
	combinaciones.forEach(trio => {
		bote = [];
		trio.forEach(elemento => {
			bote.push(elemento.innerText);
		});

		if(bote.every(comprobarGanadorX)) {
           hayGanador = true;
           ganador = "X";
        } else if (bote.every(comprobarGanadorO)){
            hayGanador = true;
            ganador = "O";
        }
	});
}

function comprobarGanadorX(elemento) {
	return elemento === "X";
}

function comprobarGanadorO(elemento) {
	return elemento === "O";
}


// Manejadores de eventos
boton.addEventListener("click", nuevoJuego);

A1.addEventListener("click",ponerFicha);
A2.addEventListener("click",ponerFicha);
A3.addEventListener("click",ponerFicha);
B1.addEventListener("click",ponerFicha);
B2.addEventListener("click",ponerFicha);
B3.addEventListener("click",ponerFicha);
C1.addEventListener("click",ponerFicha);
C2.addEventListener("click",ponerFicha);
C3.addEventListener("click",ponerFicha);
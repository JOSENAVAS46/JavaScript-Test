const btnReg = document.getElementById("btnReg");

const btnClean = document.getElementById("btnClean");

const inputNombre = document.getElementById("inputNombre");
const inputApellido = document.getElementById("inputApellido");
const inputCorreo = document.getElementById("inputCorreo");
const inputCedula = document.getElementById("inputCedula");

const contadorCelda = document.getElementById("cont");


var i = 1;

btnReg.addEventListener("click", (e) => {
  //verificar();
  registrar();
});

btnClean.addEventListener("click", (e) => {
  limpiar();
});

function actualizarCont(cont) {
  contadorCelda.innerHTML = cont;
  i++;
}

function verificar() {
  var bnd = false;
  if (inputNombre.value.length > 0 || inputApellido.value.length > 0
    || inputCorreo.value.length > 0 || inputCedula.value.length > 0) {
    if (inputNombre.value.length > 0) {
      if (inputApellido.value.length > 0) {
        if (inputCorreo.value.length > 0) {
          if (inputCedula.value.length > 0) {
            bnd = true;
          } else {
            alert("Ingrese la Cedula")
          }
        } else {
          alert("Ingrese el Correo")
        }
      } else {
        alert("Ingrese el Apellido")
      }
    } else {
      alert("Ingrese el Nombre")
    }
  }else{
    bnd = false;
    alert("Ingrese los Campos");
  }
  return bnd;
}

function registrar() {
  if (verificar()) {
    const cuerpoTabla = document.querySelector("#cuerpoTabla");
    const tr = document.createElement("tr");

    let tdNombre = document.createElement("td");
    tdNombre.textContent = inputNombre.value;
    tr.appendChild(tdNombre);

    let tdApellido = document.createElement("td");
    tdApellido.textContent = inputApellido.value;
    tr.appendChild(tdApellido);

    let tdCorreo = document.createElement("td");
    tdCorreo.textContent = inputCorreo.value;
    tr.appendChild(tdCorreo);

    let tdCedula = document.createElement("td");
    tdCedula.textContent = inputCedula.value;
    tr.appendChild(tdCedula);

    cuerpoTabla.appendChild(tr);
    actualizarCont(i);
    limpiar();
  }
}

function limpiar() {
  inputNombre.value = "";
  inputApellido.value = "";
  inputCedula.value = "";
  inputCorreo.value = "";
}



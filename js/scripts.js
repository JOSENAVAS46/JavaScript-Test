const btnReg = document.getElementById("btnReg");

const btnClean = document.getElementById("btnClean");

const inputNombre = document.getElementById("inputNombre");
const inputApellido = document.getElementById("inputApellido");
const inputCorreo = document.getElementById("inputCorreo");
const inputCedula = document.getElementById("inputCedula");



let i = 0;

btnReg.addEventListener("click", (e) => {
  registrar();
});

btnClean.addEventListener("click", (e) => {
  limpiar();
});

function registrar() {
  if (inputNombre != "" || inputApellido != "" 
  || inputCorreo != "" || inputCedula != "") {
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
  limpiar();
  } else  {
    alert("Ingrese todos los Campos");
  }
}

function limpiar() {
  inputNombre.value = "";
  inputApellido.value = "";
  inputCedula.value = "";
  inputCorreo.value = "";
}



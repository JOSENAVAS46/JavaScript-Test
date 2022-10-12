function crearPersona(identificador, name, lastName, email, dni) {
  let persona = {
    id: identificador,
    nombre: name,
    apellido: lastName,
    correo: email,
    cedula: dni
  }
  return persona;
}


let lstPersonas = [];





const btnReg = document.getElementById("btnReg");

const btnCleanReg = document.getElementById("btnCleanReg");

const btnCleanEdit = document.getElementById("btnCleanEdit");


const btnSelect = document.getElementById("btnSelect");



const inputNombreReg = document.getElementById("inputNombreReg");
const inputApellidoReg = document.getElementById("inputApellidoReg");
const inputCorreoReg = document.getElementById("inputCorreoReg");
const inputCedulaReg = document.getElementById("inputCedulaReg");


const inputIDEdit = document.getElementById("inputIDEdit");
const inputNombreEdit = document.getElementById("inputNombreEdit");
const inputApellidoEdit = document.getElementById("inputApellidoEdit");
const inputCorreoEdit = document.getElementById("inputCorreoEdit");
const inputCedulaEdit = document.getElementById("inputCedulaEdit");

const contadorCelda = document.getElementById("cont");


btnReg.addEventListener("click", (e) => {
  registrar();
  llenarTabla();
});

btnCleanReg.addEventListener("click", (e) => {
  limpiarReg();
});

btnCleanEdit.addEventListener("click", (e) => {
  limpiarEdit();
});

btnSelect.addEventListener("click", (e) => {
  var id = inputIDEdit.value;
  if (lstPersonas.length >= id) {
    llenarInputsById(id);
  } else {
    alert("No existe una Persona con ese ID. \nNumero Maximo de ID: " + lstPersonas.length);
  }
});

function actualizarCont(cont) {
  contadorCelda.innerHTML = cont;
}

function llenarInputsById(identificador) {
  lstPersonas.forEach(p => {
    if (p.id == identificador) {
      inputNombreEdit.value = p.nombre;
      inputApellidoEdit.value = p.apellido;
      inputCorreoEdit.value = p.correo;
      inputCedulaEdit.value = p.cedula;
    }
  });
}

function registrar() {
  if (verificar()) {
    var id = lstPersonas.length + 1;
    var nombre = inputNombreReg.value;
    var apellido = inputApellidoReg.value;
    var correo = inputCorreoReg.value;
    var cedula = inputCedulaReg.value;
    p = crearPersona(id, nombre, apellido, correo, cedula);
    lstPersonas.push(p);
  }
}

function verificar() {
  var bnd = false;
  if (inputNombreReg.value.length > 0 || inputApellidoReg.value.length > 0
    || inputCorreo.valueReg.length > 0 || inputCedulaReg.value.length > 0) {
    if (inputNombreReg.value.length > 0) {
      if (inputApellidoReg.value.length > 0) {
        if (inputCorreoReg.value.length > 0) {
          if (inputCedulaReg.value.length > 0) {
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
  } else {
    alert("Ingrese los Campos");
  }
  return bnd;
}


function llenarTabla() {
  cuerpoTabla.innerHTML = "";
  lstPersonas.forEach(p => {
    const cuerpoTabla = document.querySelector("#cuerpoTabla");
    const tr = document.createElement("tr");

    let tdID = document.createElement("td");
    tdID.textContent = p.id;
    tr.appendChild(tdID);

    let tdNombre = document.createElement("td");
    tdNombre.textContent = p.nombre;
    tr.appendChild(tdNombre);

    let tdApellido = document.createElement("td");
    tdApellido.textContent = p.apellido;
    tr.appendChild(tdApellido);

    let tdCorreo = document.createElement("td");
    tdCorreo.textContent = p.correo;
    tr.appendChild(tdCorreo);

    let tdCedula = document.createElement("td");
    tdCedula.textContent = p.cedula;
    tr.appendChild(tdCedula);

    cuerpoTabla.appendChild(tr);
    actualizarCont(lstPersonas.length);
  });
  limpiarReg();
}


function limpiarReg() {
  inputNombreReg.value = "";
  inputApellidoReg.value = "";
  inputCedulaReg.value = "";
  inputCorreoReg.value = "";
}

function limpiarEdit() {
  inputNombreEdit.value = "";
  inputApellidoEdit.value = "";
  inputCedulaEdit.value = "";
  inputCorreoEdit.value = "";
}

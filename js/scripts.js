//Lista o Arreglo de Personas
let lstPersonas = [];

//Botones del HTML registrados
const btnReg = document.getElementById("btnReg");
const btnCleanReg = document.getElementById("btnCleanReg");
const btnSelectEdit = document.getElementById("btnSelectEdit");
const btnEdit = document.getElementById("btnEdit");
const btnCleanEdit = document.getElementById("btnCleanEdit");
const btnSelectDel = document.getElementById("btnSelectDel");
const btnDel = document.getElementById("btnDel");
const btnCleanDel = document.getElementById("btnCleanDel");

//Inputs del Registro 
const inputNombreReg = document.getElementById("inputNombreReg");
const inputApellidoReg = document.getElementById("inputApellidoReg");
const inputCorreoReg = document.getElementById("inputCorreoReg");
const inputCedulaReg = document.getElementById("inputCedulaReg");

//Inputs del Editar
const inputIDEdit = document.getElementById("inputIDEdit");
const inputNombreEdit = document.getElementById("inputNombreEdit");
const inputApellidoEdit = document.getElementById("inputApellidoEdit");
const inputCorreoEdit = document.getElementById("inputCorreoEdit");
const inputCedulaEdit = document.getElementById("inputCedulaEdit");

//Input ID y P_Views de Eliminar
const inputIDDel = document.getElementById("inputIDDel");
const viewNombreDel = document.getElementById("p_nombre");
const viewApellidoDel = document.getElementById("p_apellido");
const viewCorreoDel = document.getElementById("p_correo");
const viewCedulaDel = document.getElementById("p_cedula");

//Contador de la tabla
const contadorCelda = document.getElementById("cont");

// Eventos de los Botones
btnReg.addEventListener("click", (e) => {
  registrar();
  llenarTabla();
});

btnCleanReg.addEventListener("click", (e) => {
  limpiarReg();
});

btnEdit.addEventListener("click", (e) => {
  editar();
  llenarTabla();
});

btnCleanEdit.addEventListener("click", (e) => {
  limpiarEdit();
});

btnSelectEdit.addEventListener("click", (e) => {
  var id = inputIDEdit.value;
  if (lstPersonas.length == 0) {
    Swal.fire({
      title: "Aviso",
      text: "No existen Personas Registradas. \nRegistre una Persona.",
      icon: "warning"
    });
    limpiarEdit();
  } else if (lstPersonas.length >= id) {
    llenarInputsEditById(id);
  } else {
    Swal.fire({
      title: "!Aviso¡",
      text: "No existe una Persona con ese ID. \nNumero Maximo de ID: " + lstPersonas.length,
      icon: "warning"
    });
    limpiarEdit();
  }
});

btnDel.addEventListener("click", (e) => {
  verificarEliminar();

  llenarTabla();
});

btnCleanDel.addEventListener("click", (e) => {
  limpiarDel();
});

btnSelectDel.addEventListener("click", (e) => {
  var id = inputIDDel.value;
  if (lstPersonas.length == 0) {
    Swal.fire({
      title: "Aviso",
      text: "No existen Personas Registradas. \nRegistre una Persona.",
      icon: "warning"
    });
    limpiarDel();
  } else if (lstPersonas.length >= id) {
    llenarViewsDelById(id);
  } else {
    Swal.fire({
      title: "!Aviso¡",
      text: "No existe una Persona con ese ID. \nNumero Maximo de ID: " + lstPersonas.length,
      icon: "warning"
    });
    limpiarDel();
  }
});

/*
Funciones de la logica
*/

function actualizarCont(cont) {
  contadorCelda.innerHTML = cont;
}

//Llenar Inputs Edit
function llenarInputsEditById(identificador) {
  lstPersonas.forEach(p => {
    if (p.id == identificador) {
      inputNombreEdit.value = p.nombre;
      inputApellidoEdit.value = p.apellido;
      inputCorreoEdit.value = p.correo;
      inputCedulaEdit.value = p.cedula;
    }
  });
}

//Llenar Views Del
function llenarViewsDelById(identificador) {
  lstPersonas.forEach(p => {
    if (p.id == identificador) {
      viewNombreDel.innerHTML = p.nombre;
      viewApellidoDel.innerHTML = p.apellido;
      viewCorreoDel.innerHTML = p.correo;
      viewCedulaDel.innerHTML = p.cedula;
    }
  });
}

function registrar() {
  if (verificar(inputNombreReg.value, inputApellidoReg.value, inputCorreoReg.value, inputCedulaReg.value)) {
    var id = lstPersonas.length + 1;
    var nombre = inputNombreReg.value;
    var apellido = inputApellidoReg.value;
    var correo = inputCorreoReg.value;
    var cedula = inputCedulaReg.value;
    p = crearPersona(id, nombre, apellido, correo, cedula);
    lstPersonas.push(p);
  }
}

//Crear una Persona
function crearPersona(identificador, name, lastName, email, dni) {
  let persona = {
    id: identificador,
    nombre: name,
    apellido: lastName,
    correo: email,
    cedula: dni,
    estado: "A"
  }
  return persona;
}


function editar() {
  var id = inputIDEdit.value;
  if (verificar(inputNombreEdit.value, inputApellidoEdit.value, inputCorreoEdit.value, inputCedulaEdit.value)) {
    var nombreEdit = inputNombreEdit.value;
    var apellidoEdit = inputApellidoEdit.value;
    var correoEdit = inputCorreoEdit.value;
    var cedulaEdit = inputCedulaEdit.value;
    editarPersona(nombreEdit, apellidoEdit, correoEdit, cedulaEdit);
    Swal.fire({
      title: "!Exito¡",
      text: "Se ah editado a la Persona con el ID:" + id,
      icon: "success"
    });
    limpiarEdit();
  }
}

function editarPersona(nombreEdit, apellidoEdit, correoEdit, cedulaEdit) {
  lstPersonas.forEach(p => {
    if (p.id == inputIDEdit.value) {
      p.nombre = nombreEdit;
      p.apellido = apellidoEdit;
      p.correo = correoEdit;
      p.cedula = cedulaEdit;
    }
  });
}

function verificarInputsLleno(input) {
  bnd = false;
  if (input.value.length > 0) {
    bnd = true;
  }
  return bnd;
}

function verificarTamañoLista() {
  bnd = false;
  if (lstPersonas.length > 0) {
    bnd = true;
  }
  return bnd;
}

function verificarEliminar() {
  if (verificarInputsLleno(inputIDDel)) {
    if (verificarTamañoLista()) {
      Swal.fire({
        title: "¿Desea Eliminar?",
        text: "Seguro que desea Eliminar a la Persona con el ID: " + inputIDDel.value,
        icon: "question",
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: 'NO',
      }).then((result) => {
        if (result.isConfirmed) {
          eliminar();
        }
      }
      );
    } else {
      Swal.fire({
        title: "!Aviso¡",
        text: "No existe una Persona con ese ID. \nNumero Maximo de ID: " + lstPersonas.length,
        icon: "warning"
      });
    }
  } else {
    Swal.fire({
      title: "!Aviso¡",
      text: "Seleccione un ID",
      icon: "warning"
    });

  }
}

function eliminar() {
  let identificador = inputIDDel.value;
  if (verificar(viewNombreDel.value, viewApellidoDel.value, viewCorreoDel.value, viewCedulaDel.value)) {
    lstPersonas.forEach(p => {
      if (p.id == identificador) {
        p.estado = "I";
      }
      Swal.fire({
        title: "!Exito¡",
        text: "Se ah Eliminado a la Persona con el ID: " + p.id,
        icon: "success"
      });
    });
  }
}



function verificar(nombre, apellido, correo, cedula) {
  var bnd = false;
  if (nombre.length > 0 || apellido.length > 0
    || correo.length > 0 || cedula.length > 0) {
    if (nombre.length > 0) {
      if (apellido.length > 0) {
        if (correo.length > 0) {
          if (cedula.length > 0) {
            bnd = true;
          } else {
            Swal.fire({
              title: "!Aviso¡",
              text: "Ingrese la Cedula",
              icon: "warning"
            });
          }
        } else {
          Swal.fire({
            title: "!Aviso¡",
            text: "Ingrese el Correo",
            icon: "warning"
          });
        }
      } else {
        Swal.fire({
          title: "!Aviso¡",
          text: "Ingrese el Apellido",
          icon: "warning"
        });
      }
    } else {
      Swal.fire({
        title: "!Aviso¡",
        text: "Ingrese el Nombre",
        icon: "warning"
      });
    }
  } else {
    Swal.fire({
      title: "!Aviso¡",
      text: "Ingrese todos los Campos",
      icon: "warning"
    });
  }
  return bnd;
}


function llenarTabla() {
  let contador = 1;
  cuerpoTabla.innerHTML = "";
  lstPersonas.forEach(p => {
    if (p.estado == "A") {
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
      if (p.estado == "A") {
        actualizarCont(contador);
        contador++;
      }
    }
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
  inputIDEdit.value = "";
}

function limpiarDel() {
  viewNombreDel.innerHTML = "";
  viewApellidoDel.innerHTML = "";
  viewCorreoDel.innerHTML = "";
  viewCedulaDel.innerHTML = "";
  inputIDDel.value = "";
}

function mostrarObjetosLista() {
  lstPersonas.forEach(p => {
    console.log(p);
  });
}

function setInputFilter(textbox, inputFilter, errMsg) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout"].forEach(function (event) {
    textbox.addEventListener(event, function (e) {
      if (inputFilter(this.value)) {
        // Accepted value
        if (["keydown", "mousedown", "focusout"].indexOf(e.type) >= 0) {
          this.classList.remove("input-error");
          this.setCustomValidity("");
        }
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        // Rejected value - restore the previous one
        this.classList.add("input-error");
        this.setCustomValidity(errMsg);
        this.reportValidity();
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        // Rejected value - nothing to restore
        this.value = "";
      }
    });
  });
}
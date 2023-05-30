const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none";

function validarTexto() {
  let textoEscrito = document.querySelector(".text-area").value;
  let validador = textoEscrito.match(/^[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/);

  if (!validador || validador === 0) {
    alert("Solo se permiten letras minúsculas, mayúsculas, con acentos y espacios");
    location.reload();
    return true;
  }
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
  ];

  let stringEncriptado = stringEncriptada;

  for (let i = 0; i < matrizCodigo.length; i++) {
    let regex = new RegExp(matrizCodigo[i][0], "gi");
    stringEncriptado = stringEncriptado.replace(regex, matrizCodigo[i][1]);
  }

  return stringEncriptado;
}

function btnEncriptar() {
  if (!validarTexto()) {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    textArea.value = "";
    copia.style.display = "block";
  }
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
  ];

  let stringDesencriptado = stringDesencriptada;

  for (let i = 0; i < matrizCodigo.length; i++) {
    let regex = new RegExp(matrizCodigo[i][1], "gi");
    stringDesencriptado = stringDesencriptado.replace(regex, matrizCodigo[i][0]);
  }

  return stringDesencriptado;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  mensaje.value = textoDesencriptado;
  textArea.value = "";
}

function copiar() {
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.value = "";
  alert("Texto Copiado");
}

/* - Comentario formaulari - */
const formulario = document.getElementById("formulario");
/* - Comentario inputs - */
const txtCantiDollar = document.getElementById("dollar");
const txtCantiPersona = document.getElementById("persona");
const txtCantiCustom = document.getElementById("txtNumbre");
/* - Comentario lb Resultado - */
const resultAmount = document.getElementById("resultAmount");
const resultTotal = document.getElementById("resultTotal");
/* - Comentario: btn porcentaje - */
const btns = document.querySelectorAll(".btn");
/* - Comentario: btn Result - */
const btnReset = document.getElementById("btnResul");
/* - Comentario lb - */
let messegerError = document.getElementById("lbError");

/**
 *
 * Comentario variables
 *
 **/
let cantiDollar = 0;
let cantiPersona = 0;
let cantiPorcentaje = 0;
let Amount = 0;
let total = 0;

const Expresiones = {
  cantDolar: /^[a-zA-Z0-9\_\-]{3,10}$/,
  cantPersona: /^[a-zA-Z0-9]{6,10}$/,
  cantCustom: /^[0-300]{6,10}$/,
};

/* - Comentario: obtencion del valor del porcentaje - */
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    /* - Comentario: removemos la clase activa - */
    btns.forEach((item) => {
      item.classList.remove("btn-active");
    });

    txtCantiCustom.value = "";
    txtCantiCustom.placeholder = "Custom";

    btn.classList.add("btn-active");
    cantiPorcentaje = btn.innerHTML.slice(0, -1);
  });
});

const customValue = () => {
  /* - Comentario buttons are formatted - */
  btns.forEach((item) => {
    item.classList.remove("btn-active");
  });
  cantiPorcentaje = txtCantiCustom.value;
};

const validationNumberPeople = () => {
  if (txtCantiPersona.value == "") {
    messegerError.classList.add("lblError-activo");
    txtCantiPersona.classList.add("txt-error");
  } else {
    messegerError.classList.remove("lblError-activo");
    txtCantiPersona.classList.remove("txt-error");
    cantiPersona = txtCantiPersona.value;
  }
};

txtCantiCustom.addEventListener("blur", customValue);
txtCantiCustom.addEventListener("keyup", customValue);

txtCantiPersona.addEventListener("blur", validationNumberPeople);
txtCantiPersona.addEventListener("keyup", validationNumberPeople);

const calcular = () => {};
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(
    `cantidad en dolares: ${cantiDollar},
    cantidad de personas es: ${cantiPersona},
    porcentaje: ${cantiPorcentaje}`
  );
});

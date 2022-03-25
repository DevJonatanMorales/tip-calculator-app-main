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
let cantiPersona = 1; //valor por defecto
let cantiPorcentaje = 5; //valor por defecto
let Amount = 0;
let total = 0;

const Expresiones = {
  cantDolar: /^[a-zA-Z0-9\_\-]{3,10}$/,
  cantPersona: /^[a-zA-Z0-9]{6,10}$/,
  cantCustom: /^[0-300]{6,10}$/,
};

/* - Comentario: calculamos el total y el porcentaje de la porpina - */
const calcularTotal = () => {
  Amount = parseFloat((cantiDollar * cantiPorcentaje) / 100 / cantiPersona);
  Total = (parseFloat(cantiDollar) + parseFloat(Amount)) / cantiPersona;

  console.log(
    `cantidad dolar: ${cantiDollar}, porcentaje: ${cantiPorcentaje}, numero de persona: ${cantiPersona}, resultado amount: ${Amount}, total: ${Total}`
  );

  if (cantiDollar > 0) {
    resultAmount.innerHTML = `$${Amount.toFixed(2)}`;
    resultTotal.innerHTML = `$${Total.toFixed(2)}`;
    btnReset.disabled = false;
  }
};

/* - Comentario: obtencion del valor del porcentaje de los botones - */
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

    calcularTotal();
  });
});

/* - Comentario: obtenemos el valor del porcentaje del custom - */
const customValue = () => {
  /* - Comentario buttons are formatted - */
  btns.forEach((item) => {
    item.classList.remove("btn-active");
  });
  cantiPorcentaje = txtCantiCustom.value;
  calcularTotal();
};

/* - Comentario: validamos el numero de personas, que no sea cero - */
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

/* - Comentario  - */
const reset = () => {
  console.log("click");
  cantiDollar = 0;
  cantiPersona = 1; //valor por defecto
  cantiPorcentaje = 5; //valor por defecto
  Amount = 0;
  total = 0;

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      /* - Comentario: removemos la clase activa - */
      btns.forEach((item) => {
        item.classList.remove("btn-active");
      });
    });
  });

  btns[0].classList.add("btn-active");

  txtCantiDollar.value = "";
  txtCantiDollar.placeholder = "0.00";

  txtCantiCustom.value = "";
  txtCantiCustom.placeholder = "Custom";

  txtCantiPersona.value = "1";

  resultAmount.innerHTML = `$0.00`;
  resultTotal.innerHTML = `$0.00`;

  btnReset.disabled = true;
};

txtCantiCustom.addEventListener("blur", () => {
  customValue();
  calcularTotal();
});
txtCantiCustom.addEventListener("keyup", () => {
  customValue();
  calcularTotal();
});

txtCantiPersona.addEventListener("blur", () => {
  validationNumberPeople();
  calcularTotal();
});
txtCantiPersona.addEventListener("keyup", () => {
  validationNumberPeople();
  calcularTotal();
});

txtCantiDollar.addEventListener("blur", () => {
  cantiDollar = txtCantiDollar.value;
  calcularTotal();
});

txtCantiDollar.addEventListener("keyup", () => {
  cantiDollar = txtCantiDollar.value;
  calcularTotal();
});

btnReset.addEventListener("click", reset);

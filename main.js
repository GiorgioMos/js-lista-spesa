const listaDellaSpesa = [
    "acqua",
    "olio",
    "linguine",
    "guanciale",
    "uova",
];

const contenitore = document.body

//creo contatore
let i = 0;
//ciclo while con condizione di controllo
while (i < listaDellaSpesa.length) {
    //stampo elemento
    const element = listaDellaSpesa[i];
    console.log(element);

    const elementHTML = document.createElement("p");
    elementHTML.innerHTML = element;
    contenitore.append(elementHTML);

    //incremento il contatore
    i++;
}


//fatto dopo la correzione
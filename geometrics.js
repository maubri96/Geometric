//Area y perimetro de un cuadrado

const myModule = (()=>{
    'use strict'
    const valueResult = document.getElementById('result');
    const perimSquare = (side) => side * 4;
    const areaSquare = (side) => side * side;
    const perimTriangulo = (side, side2, side3) => side + side2 + side3;
    const areaTriangulo = (side, side2) => side * side2;
    const perimCirculo = (rd) => 2 * 3.1416 * rd;
    const areaCirculo = (rd) => 3.1416 * (rd * rd);
    const diamCirculo = (rd) => 2*rd;

    const btnAreaPerimDiamCircle = document.querySelector('#btnAreaPerimDiamCircle');
    const AreaTriangle = document.querySelector('#AreaTriangle');
    const btnPerimTriangle = document.querySelector('#btnPerimTriangle');
    const btnAreaSquare = document.querySelector('#btnAreaSquare');
    const btnPerimSquare = document.querySelector('#btnPerimSquare');
   

    btnPerimSquare.addEventListener('click', ()=>{
        let inputSide = document.getElementById('inputSide');
        let value = Number(inputSide.value);

        const result = `El perimetro de cuadrado es: ${perimSquare(value)} cm^2`;
        valueResult.innerText = result;
    });

    btnAreaSquare.addEventListener('click', ()=>{
        let inputSide = document.getElementById('inputSide');
        let value = Number(inputSide.value);

        const result = `El area del cuadrado es: ${areaSquare(value)} cm^2`;
        valueResult.innerText = result;
    });

    btnPerimTriangle.addEventListener('click', ()=>{
        let inputSideT = document.getElementById('inputSideT');
        let lado = Number(inputSideT.value);

        let inputSideT2 = document.getElementById('inputSideT2');
        let lado2 = Number(inputSideT2.value);

        let inputSideT3 = document.getElementById('inputSideT3');
        let lado3 = Number(inputSideT3.value)

        const result = `El perimetro del triangulo es: ${perimTriangulo(lado, lado2, lado3)} cm`;
        valueResult.innerText = result;
    });

    AreaTriangle.addEventListener('click', ()=>{
        let Base = document.getElementById('Base');
        let base = Number(Base.value);

        let Altura = document.getElementById('Altura');
        let altura = Number(Altura.value);

        const result = `El area del triangulo es: ${areaTriangulo(base, altura)} cm^2`
        valueResult.innerText = result;
    });

    btnAreaPerimDiamCircle('click', ()=>{
        let Radio = document.getElementById('Radio');
        let radio = Number(Radio.value);

        const result = `El area del triangulo es: ${areaCirculo(radio)} cm^2, El perimetro es: ${perimCirculo(radio)}, y el diametro es: ${diamCirculo(radio)}`;
        valueResult.innerText = result;
    });

})();

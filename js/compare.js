const cars = [
    {
        nome: "RANGER XL",
        preco: "227.990,00",
        alturaVeiculo: "1821",
        alturaSolo: "232",
        capacidadeCarga: "1.234",
        motor: "2.2 Duratorq",
        potencia: "160 cv @3.200 rpm",
        volumeCacamba: "1.180",
        roda: "16” aço",
        image: "assets/imagens/XL Cabine.jpg"
    },
    {
        nome: "RANGER XLS",
        preco: "262.590,00",
        alturaVeiculo: "1821",
        alturaSolo: "232",
        capacidadeCarga: "1.076",
        motor: "2.2 Duratorq",
        potencia: "160 cv @ 3200 rpm",
        volumeCacamba: "1.180",
        roda: "17” liga leve",
        image: "assets/imagens/xls 2.2 diesel.jpg"
    },
    {
        nome: "RANGER STORM",
        preco: "272.690,00",
        alturaVeiculo: "1821",
        alturaSolo: "232",
        capacidadeCarga: "1.040",
        motor: "2.2 Duratorq",
        potencia: "200 cv @3.000 rpm",
        volumeCacamba: "1.180",
        roda: "17” liga leve",
        image: "assets/imagens/storm.jpg"
    }
];

class Car {
    constructor(index, nome, preco, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.index = index;
        this.nome = nome;
        this.preco = preco;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}



const carInstances = cars.map((car, index) => {
    return new Car(
        index,
        car.nome,
        car.preco,
        car.alturaVeiculo,
        car.alturaSolo,
        car.capacidadeCarga,
        car.motor,
        car.potencia,
        car.volumeCacamba,
        car.roda,
        car.image
    );
});

// Função para criar as células da tabela
function createCarTableCells() {
    const tabela = document.querySelector('.tabela tr');
    tabela.classList.add('table_Cars');
    tabela.innerHTML = '';
    
    carInstances.forEach((car) => {
        const td = document.createElement('td');
        td.innerHTML = `
            <img src="${car.image}" alt="${car.nome}">
            <div class="info_Carro">
                <div class="titulo_Carro">
                    <a href="#"><p>${car.nome}</p></a>
                </div>
                <div class="titulo_Preco">
                    <input type="checkbox" name="compare" class="input_Box" 
                           data-car-index="${car.index}">
                    <p class="preco">A partir de R$ ${car.preco}</p>
                </div>
            </div>
        `;
        tabela.appendChild(td);
    });
}

let carsToCompare = []; // Array para armazenar os carros selecionados

// Função principal de comparação
function handleCompareSelection() {

    document.querySelectorAll('.input_Box').forEach(checkbox => {

        checkbox.addEventListener('change', function() {

            const carIndex = this.dataset.carIndex;
            const selectedCar = carInstances[carIndex];

            if (this.checked) {
                if (carsToCompare.length >= 2) {
                    this.checked = false;

                    // Mensagem de erro
                    div_Erro = document.getElementById("erro_Div");
                    div_Erro.style.display = "flex";
                    document.getElementById("erro_Span").innerHTML="Máximo de 2 veículos para comparação."
                    return;
                }
                // Adiciona se não existir ainda
                if (!carsToCompare.some(car => car.index === carIndex)) {
                    carsToCompare.push(selectedCar);
                }
            } else {
                // Remove usando findIndex para garantir que remove o certo
                const indexToRemove = carsToCompare.findIndex(car => car.index === carIndex);
            
                carsToCompare.splice(indexToRemove, 1);
            }
            div_Erro.style.display = "none";
            console.log("Carros selecionados:", carsToCompare); // Para debug
        });
    });
}


function showCompare() {
    div_Erro = document.getElementById("erro_Div");
    if (carsToCompare.length !== 2) {
        // Mensagem de erro
        document.getElementById("erro_Span").innerHTML="Selecione 2 veículos para comparação."
        div_Erro.style.display = "flex";

        return;
    }
    div_Erro.style.display = "none";
    UpdateCompareTable();
    document.getElementById("section_Btn").style.display = "none";
    document.getElementById("div_Comparacao").style.display = "flex";
}


function UpdateCompareTable() {

    let item1 = carsToCompare[0];
    let item2 = carsToCompare[1];

    document.getElementById("compare_image_0").innerHTML = `<img src="${item1.image}">`;
    document.getElementById("compare_image_1").innerHTML = `<img src="${item2.image}">`;


    document.getElementById("compare_modelo_0").innerHTML = `${item1.nome}`;
    document.getElementById("compare_modelo_1").innerHTML = `${item2.nome}`;
    
    document.getElementById("compare_alturaveiculo_0").innerHTML = `${item1.alturaVeiculo}`;
    document.getElementById("compare_alturaveiculo_1").innerHTML = `${item2.alturaVeiculo}`;

    document.getElementById("compare_alturasolo_0").innerHTML = `${item1.alturaSolo}`;
    document.getElementById("compare_alturasolo_1").innerHTML = `${item2.alturaSolo}`;

    document.getElementById("compare_capacidadecarga_0").innerHTML = `${item1.capacidadeCarga}`;
    document.getElementById("compare_capacidadecarga_1").innerHTML = `${item2.capacidadeCarga}`;

    document.getElementById("compare_motor_0").innerHTML = `${item1.motor}`;
    document.getElementById("compare_motor_1").innerHTML = `${item2.motor}`;

    document.getElementById("compare_potencia_0").innerHTML = `${item1.potencia}`;
    document.getElementById("compare_potencia_1").innerHTML = `${item2.potencia}`;

    document.getElementById("compare_volumecacamba_0").innerHTML = `${item1.volumeCacamba}`;
    document.getElementById("compare_volumecacamba_1").innerHTML = `${item2.volumeCacamba}`;

    document.getElementById("compare_roda_0").innerHTML = `${item1.roda}`;
    document.getElementById("compare_roda_1").innerHTML = `${item2.roda}`;

    document.getElementById("compare_preco_0").innerHTML = `${item1.preco}`;
    document.getElementById("compare_preco_1").innerHTML = `${item2.preco}`;


}

function close_Table() {
    document.getElementById("div_Comparacao").style.display = "none";
    document.getElementById("section_Btn").style.display = "flex";
}



















































// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    createCarTableCells();
    handleCompareSelection();
    
    document.querySelector('.botao_Comparar').addEventListener('click', (e) => {
        showCompare();
    });
});










































// // search on array if exist carClass returning 1 if not return -1
// function GetCarArrPosition(arr, carClass) {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].nome  === carClass.nome)
//             return i;
//     }
//     return -1;
// }

// function SetCarToCompare(el, carClass) {
   
//     if(carClass instanceof Car){       
//         if(el.checked){
                
            
//         } else {
          
//         } 
//     } else {
//         throw "You need set a Car Class";
//     }
// }

// function ShowCompare() {
//     if(carArr.length < 2) {
//         alert("Precisa marcar 2 carros para apresentar a comparação");
//         return;
//     }

//     UpdateCompareTable();
//     document.getElementById("compare").style.display = "block";
// }

// function HideCompare(){
//     document.getElementById("compare").style.display = "none"; 
// }

// function UpdateCompareTable() {
    
// }




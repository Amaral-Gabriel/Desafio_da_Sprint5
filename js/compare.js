

const cars = [

    {
    nome: "RANGER XL",
    preco: "227.990,00",
    alturaVeiculo: "1821 mm",
    alturaSolo: "232 mm",
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
        alturaVeiculo: "1821 mm",
        alturaSolo: "232 mm",
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
        alturaVeiculo: "1821 mm",
        alturaSolo: "232 mm",
        capacidadeCarga: "1.040 kg",
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
                    alert('Máximo de 2 carros para comparação!');
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
            console.log("Carros selecionados:", carsToCompare); // Para debug
        });
    });
}



// Função para exibir a comparação
function showCompare() {
    if (carsToCompare.length !== 2) {
        alert('Selecione exatamente 2 carros para comparar!');
        return;
    }
    

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




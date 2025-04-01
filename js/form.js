class Contato {
    constructor(nome, sobrenome, email, telefone, tipoContato, mensagem, data) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
        this.mensagem = mensagem;
        this.data = data;
    }
}

let mensage_Base = [];

document.querySelector(".form").addEventListener("submit", function(event) {
    event.preventDefault()

    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let tipoContato = document.getElementById("tipo_contato").value;
    let mensagem = document.getElementById("mensagem").value;
    let data = new Date().toLocaleString();


    let contato = new Contato(nome, sobrenome, email, telefone, tipoContato, mensagem, data);
    mensage_Base.push(contato);
    console.log(mensage_Base);

    nome.trim()
    clear_Erro()
    // alert(`Olá ${nome}, sua mensagem foi enviada!`);
    if(is_Empty(nome)){
        document.getElementById("error_Forms").innerHTML = "O nome é obrigatório!";
        return
    }
    clear_Erro()
    if(have_Special(nome)){
        document.getElementById("error_Forms").innerHTML = "O nome não pode conter caracteres especiais!";
        return
    }
    clear_Erro()
    if(!have_Number(nome)){
        document.getElementById("error_Forms").innerHTML = "O nome não pode conter número";
        return
    }

    console.log(have_Special(nome));
    
});

function clear_Erro() {
    document.getElementById("error_Forms").innerHTML = " ";
}

function is_Empty(value) {
    return value === ""
}

function have_Special(value){
    const regexEspecial = /[!@#$%^&*(),.?":{}|<>]/;
    return regexEspecial.test(value);
}

function have_Number(value) {
    const regexEspecial = /^\d+$/;
    return regexEspecial.test(value);
}



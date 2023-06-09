const form = document.querySelector('#novoItem');
const lista = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem('itens'))  || [];


itens.forEach(function(element){
    criaElemento(element)
})


form.addEventListener('submit', function(event){
    event.preventDefault()
    
    const nome = event.target.elements['nome'];
    const quantidade = event.target.elements['quantidade'];

    const existe = itens.find(elemento => elemento.nome === nome.value);

    const itemAtual = {
        'nome': nome.value,
        'quantidade': quantidade.value
    }

    if(existe){
        itemAtual.id = existe.id
        console.log(existe.id)
    }else{
        itemAtual.id = itens.lenght
    }

    
    nome.focus();



    

    criaElemento(itemAtual) 

    itens.push(itemAtual);

    localStorage.setItem('itens', JSON.stringify(itens))
        nome.value='';
        quantidade.value='';
     
})

function criaElemento(item){
    
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    const numeroItens = document.createElement('strong');
    numeroItens.innerHTML = item.quantidade;
    numeroItens.dataset.id = item.id

    novoItem.appendChild(numeroItens);
    novoItem.innerHTML += item.nome

    lista.appendChild(novoItem);

}

//Busca o form de envio no HMTl
const form = document.querySelector('#novoItem');

//busta a lista no HTML
const lista = document.getElementById('lista');

//Array para salvar no local Storage
//Ele foi salvo em string, usando o JSON.parse para transforar ele em array
//usou o localStorega.getitem para pegar da memoria o itens em parenteses
const itens = JSON.parse(localStorage.getItem('itens'))  || [];


itens.forEach(function(element){
    criaElemento(element)
})


form.addEventListener('submit', function(event){
    //Ele seta como default o evento
    event.preventDefault()
    
    //ele identifica dentro do form a caracteristica elements que tem um nome para cada item
    const nome = event.target.elements['nome'];
    const quantidade = event.target.elements['quantidade'];

    //Criada uma array para conter o nome e quantidade
    const itemAtual = {
        'nome': nome.value,
        'quantidade': quantidade.value
    }
    
    nome.focus();



    

    criaElemento(itemAtual) 

    //Usado para adicionar o item atual dentro da array dos itens
    itens.push(itemAtual);

    //Usado para salvar no navegador os dadaos alvos
    //usado o JSON.stringify para trasnformar o array em texto, pois o navegador só armageza strings
    localStorage.setItem('itens', JSON.stringify(itens))

        //Usado para apagar os dados no form
        nome.value='';
        quantidade.value='';
     
})

function criaElemento(item){
    
    //Criou um novo elemento li
    const novoItem = document.createElement('li');
    // adicionou uma classe para ele 'item'
    novoItem.classList.add('item');

    //criou um elemento strong
    const numeroItens = document.createElement('strong');
    //colocou a quantidade dentro do strong
    numeroItens.innerHTML = item.quantidade;

    //Colocou o strong dentro do li
    novoItem.appendChild(numeroItens);
    //Colocou o nome dentro do li depois do strong
    novoItem.innerHTML += item.nome

    // adiciona na lista o item que criamos
    lista.appendChild(novoItem);

}

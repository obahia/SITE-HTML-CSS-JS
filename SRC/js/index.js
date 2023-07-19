const personagens = document.querySelectorAll('.personagem');

personagens.forEach(personagem => {

    personagem.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado')

       
        personagem.classList.add('selecionado');
        
        // Objetivo 2 - quando passar o mouse em cima do personagem na listagem, trocar a  imagem, o nome e a descrição do personagem grande 
       
        //passo 1 - pegar o elemento do personagem grande pra adicionar ass informações nele 
        const imagemPersonagemGrande = document.querySelector ('.personagem-grande');
        console.log(imagemPersonagemGrande);

        //     passo 2 - alterar a imagem do personagem grande 
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./SRC/imagens/card-${idPersonagem}.png`;
       
        //     passo 3 - alterar o nome do personagem grande 
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');
        
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');



    })
});













// O que precisamos fazer? - Quando passar o mouse em cima do personagem
// na lista, temos que adicionar a borda azul de seleção na imagem pequena 
// do personagem e mostrar a imagem, o nome e o texto grande do personagem 
// que está selecionado. 

// Objetivo 1 - quando passar o mouse em cima do personagem na listagem, devemos
// selecioná-lo
//     passo1 - pegar os personagens no JS para poder verificar quando o usuário passar
//              o mouse em cima de um deles 
//     passo 2 - adicionar a classe selecionada no personagem que o usuário passar o 
//             o cursor do mouse
//     passo 3 - verificar se já exista um personagem selecionado, se sim devemos 
//             remover a seleção dele 




//     passo 4 - alterar a descrição do personagem grande
/*
OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

- passo 1 - dar um jeito de pegar o elemento HTML dos botoes

- passo 2 - dar um jeito de identificar o clique do usuario no botão

- passo 3 - desmarcar o botao selecionado anterior

- passo 4 - marcar o botao clicado como se estivesse selecionada

- passo 5 - esconder a imagem anterior

- passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

//- passo 1 - dar um jeito de pegar o elemento HTML dos botoes
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//- passo 2 - dar um jeito de identificar o clique do usuario no botão
   botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click',() => {

        //- passo 3 - desmarcar o botao selecionado anterior
        desativarBotaoSelecionado();

        //- passo 4 - marcar o botao clicado como se estivesse selecionado
        botao.classList.add('selecionado');
        
        //- passo 5 - esconder a imagem ativa de fundo
        esconderImagemAtiva();

        //- passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        imagens[indice].classList.add('ativa');


    })
})

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

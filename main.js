const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Racismo é derivado de algo cultural ou hístorico?",
        alternativas: [
            "cultural",
            "foi definido que uma cultura é melhor que a outra."
        ]
    },
    {
        enunciado: "Qual é o papel da educação na luta contra o racismo?",
        alternativas: [
            "A educação é fundamental para conscientizar as pessoas sobre as consequências do racismo.",
            "Não é importante, pois obrigação das escolas é ensinar apenas a grade curricular."
        ]
    },
    {
        enunciado: "Como o racismo se manifesta no dia a dia?",
        alternativas: [
            "O racismo pode se manifestar através de comentários ofensivos, brincadeiras e microagressoões, dificuldade de acesso a empregos, saúde e a educação.",
            "o racismo não se manifesta no dia a dia."
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

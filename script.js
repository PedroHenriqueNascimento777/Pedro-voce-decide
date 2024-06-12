const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as perguntas que uma pessoa pode ter, ele também gera imagens e aúdios híper-realistas. Qual o seu primeiro pensamento?",
    alternativas: [
      "Isso é assustador",
      "isso é maravilhoso"
    ]
  },
  
  {
    enunciado: "Com a descuberta dessa tecnologia, chamada inteligencia artificial (IA), uma professora de tecnologia de uma escola decidiu fazer uma sequência de aulas sobre essa ferramenta. No fim de uma aula ela pede que você escreva um trabalho sobre o uso da IA em sala de aula. Qual atitude você toma? ",
    alternativas: [
      "Utiliza uma ferramenta de busca na internmet que ultiliza IA para que ela ajude a encontrar informções relevantes para o trabalho e explique em uma linguagem que facilite o entendimento.",
      "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos proprios sobre o tema."
    ]
  },

  {
    enunciado: "Pergunta 3",
    alternativas: [
      "Resposta 1",
      "Resposta 2"
    ]
  },

  {
    enunciado: "Pergunta 4",
    alternativas: [
      "Resposta 1",
      "Resposta 2"
    ]
  },

  {
    enunciado: "Pergunta 5",
    alternativas: [
      "Resposta 1",
      "Resposta 2"
    ]
  }
];

let atual = 0;
  let perguntaAtual;

  function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa;
      caixaAlternativas.appendChild(botaoAlternativas);
    }
  }


  function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
  }


mostraPergunta();
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".magic-container");
    const numParticles = 100;
  
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
  
      // posição inicial aleatória
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
  
      // delay aleatório para variação
      const delay = Math.random() * 5;
      particle.style.animationDelay = `${delay}s`;
  
      // tamanho aleatório
      const size = Math.random() * 8 + 6;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
  
      container.appendChild(particle);
    }
  });
  

  document.addEventListener("DOMContentLoaded", () => {

  const casaSelecionada = [];
  const buttons = document.querySelectorAll(".botao-resposta");
  const contagemElement = document.querySelector(".contagem");
  
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let [numerador, denominador] = contagemElement.textContent.split("/").map(Number);
      numerador += 1; // Incrementa o numerador em 1
      contagemElement.textContent = `${numerador}/${denominador}`;
      
      const casa = button.getAttribute("data-casa");
      casaSelecionada.push(casa);

        if (numerador === 2){
        const pergunta = document.querySelector(".pergunta");
        const resposta1 = document.getElementById("botao1");
        const resposta2 = document.getElementById("botao2");
        const resposta3 = document.getElementById("botao3");
        const resposta4 = document.getElementById("botao4");
        pergunta.textContent = "O que te dá mais satisfação ao conquistar algo?";
        resposta1.textContent = "A - Aprender algo novo durante o processo.";
        resposta2.textContent = "B - Ver que cheguei onde queria, exatamente como planejei.";
        resposta3.textContent = "C - Superar um desafio que parecia impossível.";
        resposta4.textContent = "D - Sentir que fiz a coisa certa, mesmo que ninguém saiba.";

        resposta1.setAttribute("data-casa", "corvinal");
        resposta2.setAttribute("data-casa", "sonserina");
        resposta3.setAttribute("data-casa", "grifinoria");
        resposta4.setAttribute("data-casa", "lufa-lufa");
        

      } else if (numerador === 3){ 
        const pergunta = document.querySelector(".pergunta");
        const resposta1 = document.getElementById("botao1");
        const resposta2 = document.getElementById("botao2");
        const resposta3 = document.getElementById("botao3");
        const resposta4 = document.getElementById("botao4");
        pergunta.textContent = "Se alguém comete um erro grave, o que você pensa primeiro?";
        resposta1.textContent = "A - Como isso pode ser usado para evitar erros futuros ou influenciar decisões.";
        resposta2.textContent = "B - Todos erram, o importante é como a pessoa reage depois.";
        resposta3.textContent = "C - Tento entender os motivos e analisar a situação friamente.";
        resposta4.textContent = "D - Se fosse comigo, eu assumiria as consequências sem hesitar.";

        resposta1.setAttribute("data-casa", "sonserina");
        resposta2.setAttribute("data-casa", "lufa-lufa");
        resposta3.setAttribute("data-casa", "corvinal");
        resposta4.setAttribute("data-casa", "grifinoria");
        

      } else if (numerador === 4){ 
        const pergunta = document.querySelector(".pergunta");
        const resposta1 = document.getElementById("botao1");
        const resposta2 = document.getElementById("botao2");
        const resposta3 = document.getElementById("botao3");
        const resposta4 = document.getElementById("botao4");
        pergunta.textContent = "Num trabalho em grupo, como você costuma agir?";
        resposta1.textContent = "A - Assume o controle quando os outros hesitam. ";
        resposta2.textContent = "B - Garante que todos sejam ouvidos e se sintam parte.";
        resposta3.textContent = "C - Lidera com foco em resultados e eficiência.";
        resposta4.textContent = "D - Traz soluções criativas e fora da caixa.";

        resposta1.setAttribute("data-casa", "grifinoria");
        resposta2.setAttribute("data-casa", "lufa=-lufa");
        resposta3.setAttribute("data-casa", "sonserina");
        resposta4.setAttribute("data-casa", "corvinal");
        
      } else if (numerador === 5){ 
        const pergunta = document.querySelector(".pergunta");
        const resposta1 = document.getElementById("botao1");
        const resposta2 = document.getElementById("botao2");
        const resposta3 = document.getElementById("botao3");
        const resposta4 = document.getElementById("botao4");
        pergunta.textContent = "Como você lida com críticas?";
        resposta1.textContent = "A - Aceito se vierem de quem respeito. ";
        resposta2.textContent = "B - Reflito e vejo se posso crescer com elas. ";
        resposta3.textContent = "C - Uso como motivação para me superar. ";
        resposta4.textContent = "D - Tento entender o porquê, mas não deixo que me desmotivem. ";

        resposta1.setAttribute("data-casa", "sonserina");
        resposta2.setAttribute("data-casa", "corvinal");
        resposta3.setAttribute("data-casa", "grifinoria");
        resposta4.setAttribute("data-casa", "lufa-lufa");
        
       
      } else if (numerador === 6){ 
        const pergunta = document.querySelector(".pergunta");
        const resposta1 = document.getElementById("botao1");
        const resposta2 = document.getElementById("botao2");
        const resposta3 = document.getElementById("botao3");
        const resposta4 = document.getElementById("botao4");
        pergunta.textContent = "O que mais te inspira em outras pessoas?";
        resposta1.textContent = "A - Sua coragem em defender o que acredita.";
        resposta2.textContent = "B - Sua integridade, mesmo quando ninguém está olhando.";
        resposta3.textContent = "C - Sua força para conquistar o que deseja.";
        resposta4.textContent = "D - Sua capacidade de pensar diferente e ter ideias originais.";

        resposta1.setAttribute("data-casa", "grifinoria");
        resposta2.setAttribute("data-casa", "lufa-lufa");
        resposta3.setAttribute("data-casa", "sonserina");
        resposta4.setAttribute("data-casa", "corvinal");
        
        
      } else if (numerador === 7){ 
        const pergunta = document.querySelector(".pergunta");
        const resposta1 = document.getElementById("botao1");
        const resposta2 = document.getElementById("botao2");
        const resposta3 = document.getElementById("botao3");
        const resposta4 = document.getElementById("botao4");
        pergunta.textContent = "Diante de uma situação ambígua, você:";
        resposta1.textContent = "A - Toma a decisão mais estratégica para obter vantagem.";
        resposta2.textContent = "B - Avalia todas as variáveis antes de tomar uma posição.";
        resposta3.textContent = "C - Confia no seu instinto e age.";
        resposta4.textContent = "D - Observa os lados e tenta equilibrar justiça e empatia.";

        resposta1.setAttribute("data-casa", "sonserina");
        resposta2.setAttribute("data-casa", "corvinal");
        resposta3.setAttribute("data-casa", "grifinoria");
        resposta4.setAttribute("data-casa", "lufa-lufa");
        
       
      } else if (numerador === 8){ 
        const pergunta = document.querySelector(".pergunta");
        const resposta1 = document.getElementById("botao1");
        const resposta2 = document.getElementById("botao2");
        const resposta3 = document.getElementById("botao3");
        const resposta4 = document.getElementById("botao4");
        pergunta.textContent = "Como você reage a regras e tradições?";
        resposta1.textContent = "A - Questiono o porquê delas e se ainda fazem sentido. ";
        resposta2.textContent = "B - Sigo quando me favorecem, ignoro quando não. ";
        resposta3.textContent = "C - Respeito, mas não hesito em quebrá-las se for por um bem maior. ";
        resposta4.textContent = "D - Acredito que regras servem para manter a harmonia. ";

        resposta1.setAttribute("data-casa", "corvinal");
        resposta2.setAttribute("data-casa", "sonserina");
        resposta3.setAttribute("data-casa", "grifinoria");
        resposta4.setAttribute("data-casa", "lufa-lufa");
        
        
      } 
      else if (numerador === 9){ 
        const pergunta = document.querySelector(".pergunta");
        const resposta1 = document.getElementById("botao1");
        const resposta2 = document.getElementById("botao2");
        const resposta3 = document.getElementById("botao3");
        const resposta4 = document.getElementById("botao4");
        pergunta.textContent = "Você prefere ser reconhecido por:";
        resposta1.textContent = "A - Sua honestidade e dedicação.";
        resposta2.textContent = "B - Sua bravura em momentos difíceis. ";
        resposta3.textContent = "C - Suas conquistas e influência. ";
        resposta4.textContent = "D - Sua inteligência e capacidade de resolver problemas.";

        resposta1.setAttribute("data-casa", "lufa-lufa");
        resposta2.setAttribute("data-casa", "grifinoria");
        resposta3.setAttribute("data-casa", "sonserina");
        resposta4.setAttribute("data-casa", "corvinal");

      } 
      else if (numerador === 10){ 
        const pergunta = document.querySelector(".pergunta");
        const resposta1 = document.getElementById("botao1");
        const resposta2 = document.getElementById("botao2");
        const resposta3 = document.getElementById("botao3");
        const resposta4 = document.getElementById("botao4");
        pergunta.textContent = "Em situações difíceis, seu primeiro impulso é:";
        resposta1.textContent = "A - Tomar controle e virar o jogo a seu favor. ";
        resposta2.textContent = "B - Manter a calma e analisar as opções. ";
        resposta3.textContent = "C - Ajudar a manter o grupo unido.";
        resposta4.textContent = "D - Defender quem estiver mais vulnerável. ";

        resposta1.setAttribute("data-casa", "sonserina");
        resposta2.setAttribute("data-casa", "corvinal");
        resposta3.setAttribute("data-casa", "lufa-lufa");
        resposta4.setAttribute("data-casa", "grifinoria");
        
  
      } else if (numerador === 11){ 
        const pergunta = document.querySelector(".pergunta");
        const resposta1 = document.getElementById("botao1");
        const resposta2 = document.getElementById("botao2");
        const resposta3 = document.getElementById("botao3");
        const resposta4 = document.getElementById("botao4");
        pergunta.textContent = "O que mais te assusta em si mesmo(a)?";
        resposta1.textContent = "A - O impulso de agir por impulso e correr riscos.";
        resposta2.textContent = "B - A constante busca por respostas que talvez nunca cheguem. ";
        resposta3.textContent = "C - O medo de decepcionar quem confia em mim.";
        resposta4.textContent = "D - A ambição de ir longe demais, custe o que custar. ";

        resposta1.setAttribute("data-casa", "grifinoria");
        resposta2.setAttribute("data-casa", "corvinal");
        resposta3.setAttribute("data-casa", "lufa-lufa");
        resposta4.setAttribute("data-casa", "sonserina");
        
  
      }  else if (numerador === 12){ 
        const pergunta = document.querySelector(".pergunta");
        const resposta1 = document.getElementById("botao1");
        const resposta2 = document.getElementById("botao2");
        const resposta3 = document.getElementById("botao3");
        const resposta4 = document.getElementById("botao4");
        pergunta.textContent = "Quando você olha para trás, o que mais te transforma ao lembrar do passado?";
        resposta1.textContent = "A - As escolhas difíceis que fiz, mesmo sem certeza.";
        resposta2.textContent = "B - As conexões que marcaram minha jornada. → Lufa-Lufa ";
        resposta3.textContent = "C - As vezes que percebi algo escondido nas entrelinhas.";
        resposta4.textContent = "D - As situações em que virei o jogo, mesmo desacreditado. ";

        resposta1.setAttribute("data-casa", "grifinoria");
        resposta2.setAttribute("data-casa", "lufa-lufa");
        resposta3.setAttribute("data-casa", "corvinal");
        resposta4.setAttribute("data-casa", "sonserina");
        
  
      } else if (numerador === 13){ 
        const pergunta = document.querySelector(".pergunta");
        const resposta1 = document.getElementById("botao1");
        const resposta2 = document.getElementById("botao2");
        const resposta3 = document.getElementById("botao3");
        const resposta4 = document.getElementById("botao4");
        pergunta.textContent = "Qual dessas frases mais te intriga?";
        resposta1.textContent = "A - E se o erro for parte essencial do caminho?";
        resposta2.textContent = "B - Será que somos mesmo quem achamos ser? ";
        resposta3.textContent = "C - Tudo tem um código – até o silêncio.";
        resposta4.textContent = "D - Quem dita as regras raramente joga limpo. ";

        resposta1.setAttribute("data-casa", "grifinoria");
        resposta2.setAttribute("data-casa", "lufa-lufa");
        resposta3.setAttribute("data-casa", "corvinal");
        resposta4.setAttribute("data-casa", "sonserina");
        
  
      } else if (numerador === 14){ 
        const pergunta = document.querySelector(".pergunta");
        const resposta1 = document.getElementById("botao1");
        const resposta2 = document.getElementById("botao2");
        const resposta3 = document.getElementById("botao3");
        const resposta4 = document.getElementById("botao4");
        pergunta.textContent = "O que você tende a perceber que outros ignoram?";
        resposta1.textContent = "A - Como pequenas atitudes revelam muito sobre alguém";
        resposta2.textContent = "B - Que intenções importam tanto quanto ações. ";
        resposta3.textContent = "C - Que oportunidades surgem disfarçadas de caos.";
        resposta4.textContent = "D - Que todo padrão tem uma falha esperando ser vista. ";

        resposta1.setAttribute("data-casa", "lufa-lufa");
        resposta2.setAttribute("data-casa", "lufa-grifinoria");
        resposta3.setAttribute("data-casa", "sonserina");
        resposta4.setAttribute("data-casa", "corvinal");
        
  
      }else if (numerador === 15){ 
        const pergunta = document.querySelector(".pergunta");
        const resposta1 = document.getElementById("botao1");
        const resposta2 = document.getElementById("botao2");
        const resposta3 = document.getElementById("botao3");
        const resposta4 = document.getElementById("botao4");
        pergunta.textContent = "Quando ninguém está vendo... quem você escolhe ser?";
        resposta1.textContent = "A - Alguém que segue em frente, mesmo com medo.";
        resposta2.textContent = "B - Alguém que cuida dos outros, mesmo em silêncio. ";
        resposta3.textContent = "C - Alguém que pensa, questiona e observa antes de agir.";
        resposta4.textContent = "D - Alguém que prepara o próximo passo, mesmo no escuro. ";

        resposta1.setAttribute("data-casa", "grifinoria");
        resposta2.setAttribute("data-casa", "lufa-lufa");
        resposta3.setAttribute("data-casa", "corvinal");
        resposta4.setAttribute("data-casa", "sonserina");
        
  
      }else if( numerador > 15){
        const container = document.querySelector(".container");
        const botoes = document.querySelector(".botoes");
        const pergunta = document.querySelector(".pergunta");
        const resposta1 = document.getElementById("botao1");
        const resposta2 = document.getElementById("botao2");
        const resposta3 = document.getElementById("botao3");
        const resposta4 = document.getElementById("botao4");
        contagemElement.remove();
        pergunta.textContent = `Você pertence à casa: ${casaMaisFrequente(casaSelecionada)}!`;
        resposta1.remove();
        resposta2.remove();
        resposta3.remove();
        resposta4.remove();
        botoes.remove();
        const frase = document.createElement("p");
        const imagem = document.createElement("img");
        if(casaMaisFrequente(casaSelecionada) === "GRIFINORIA"){
          frase.textContent = "Coragem e bravura são suas maiores virtudes!";
          frase.style.color = "#D3A625";
          pergunta.style.color = "#D3A625";
          imagem.src = "images/Gryffindor_ClearBG.webp";
          container.appendChild(imagem);
        } else if(casaMaisFrequente(casaSelecionada) === "SONSERINA"){
          frase.textContent = "Ambição e astúcia são suas maiores virtudes!";
          frase.style.color = "#AAAAAA";
          pergunta.style.color = "#AAAAAA";
          imagem.src = "images/Slytherin_ClearBG.webp";
          container.appendChild(imagem);
        } else if(casaMaisFrequente(casaSelecionada) === "CORVINAL"){
          frase.textContent = "Inteligência e sabedoria são suas maiores virtudes!";
          frase.style.color = "#946B2D";
          pergunta.style.color = "#946B2D";
          imagem.src = "images/Ravenclaw_ClearBG.webp";
          container.appendChild(imagem);
        } else if(casaMaisFrequente(casaSelecionada) === "LUFA-LUFA"){
          frase.textContent = "Lealdade e trabalho em equipe são suas maiores virtudes!";
          frase.style.color = "black";
          pergunta.style.color = "black";
          imagem.src = "images/Hufflepuff_ClearBG.webp";
          container.appendChild(imagem);
        }

        frase.style.fontSize = "2rem";
        frase.style.marginTop = "20px";
        imagem.style.zIndex = "4";
        imagem.style.width = "300px";
        imagem.style.display = "block";
        imagem.style.margin = "0 auto";
        pergunta.style.fontWeight = "bolder";
        pergunta.style.marginBottom = "0";
        container.appendChild(frase);
      }
      });
    });
  });
  
  

  function casaMaisFrequente(lista) {

    const contagem = {};

    // Conta as ocorrências
    lista.forEach(item => {
      contagem[item] = (contagem[item] || 0) + 1;
    });
    
    // Encontra a string com maior contagem
    let maisFrequente = "";
    let maiorQuantidade = 0;
    
    for (const item in contagem) {
      if (contagem[item] > maiorQuantidade) {
        maisFrequente = item;
        maiorQuantidade = contagem[item];
      }
    }
    
    if (maisFrequente === "grifinoria") {
      const fundo = document.querySelector(".container");
      fundo.style.backgroundColor = "#b7140d";
    } else if(maisFrequente === "corvinal") {
      const fundo = document.querySelector(".container");
      fundo.style.backgroundColor = "#045d7c";
    } else if(maisFrequente === "lufa-lufa") {
      const fundo = document.querySelector(".container");
      fundo.style.backgroundColor = "#cc9f10";
    } else if(maisFrequente === "sonserina") {
      const fundo = document.querySelector(".container");
      fundo.style.backgroundColor = "#134c12";
    }
    
    return maisFrequente.toUpperCase();
  }


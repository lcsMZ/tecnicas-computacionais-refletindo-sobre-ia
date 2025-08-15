// Dados do quiz
const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: [
                    "No início ficou com medo do que essa tecnologia pode fazer.",
                    "Achou assustador pensar na velocidade na qual a tecnologia está avançando."
                ],
                proxima: 1,
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: [
                    "Quis saber como usar IA no seu dia a dia.",
                    "Pensou que IA pode ajudar em tarefas da sua vida."
                ],
                proxima: 2,
            },
        ]
    },
    {
        enunciado: "Utilizar uma IA pode ser aterrorizante mesmo, e foi pensando nisso que uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: [
                    "Conseguiu utilizar a IA para buscar informações úteis.",
                    "Percebeu que a IA pode ajudar a encontrar informações úteis na internet de forma mais rápida e direcionada.",
                    "Percebeu que a IA consegue explicar termos complicados de forma simplificada e isso ajudou muito suas pesquisas sobre assuntos complexos."
                ],
                proxima: 3,
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: [
                    "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho.",
                    "Achou que era muito mais fácil procurar por respostas utilizando alguns meios mais tradicionais mesmo que levasse mais tempo.",
                    "Sentiu um pouco de medo de quais dados pessoais seus a IA poderia utilizar e por isso prefere fazer suas coisas com pouca intromissão da tecnologia."
                ],
                proxima: 4,
            },
        ]
    },
    {
        enunciado: "Um chat com IA pode ser uma boa alternativa para realizar tarefas do dia a dia e foi pensando nisso que uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: [
                    "Conseguiu utilizar a IA para buscar informações úteis.",
                    "Percebeu que a IA pode ajudar a encontrar informações úteis na internet de forma mais rápida e direcionada.",
                    "Percebeu que a IA consegue explicar termos complicados de forma simplificada e isso ajudou muito suas pesquisas sobre assuntos complexos."
                ],
                proxima: 3,
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: [
                    "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho.",
                    "Achou que era muito mais fácil procurar por respostas utilizando alguns meios mais tradicionais mesmo que levasse mais tempo.",
                    "Sentiu um pouco de medo de quais dados pessoais seus a IA poderia utilizar e por isso prefere fazer suas coisas com pouca intromissão da tecnologia."
                ],
                proxima: 4,
            },
        ]
    },
    {
        enunciado: "Ferramentas de busca que utilizam IA podem facilitar muito nosso processo de busca por informações. Agora imagine que você precisa participar de um debate sobre o quanto a IA impacta no trabalho do futuro. Qual posicionamento tomar?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: [
                    "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA.",
                    "Participa ativamente do desenvolvimento de soluções criativas e na melhoria de processos em IA."
                ],
                proxima: 5,
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: [
                    "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética.",
                    "Criou grupos de ética voltado para IA e busca ativamente reduzir as desigualdades geradas pela automação."
                ],
                proxima: 6,
            },
        ]
    },
    {
        enunciado: "Utilizar informações próprias traz um toque pessoal ao nosso trabalho. Agora imagine que você precisa participar de um debate sobre o quanto a IA impacta no trabalho do futuro. Qual posicionamento tomar?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: [
                    "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA.",
                    "Participa ativamente do desenvolvimento de soluções criativas e na melhoria de processos em IA."
                ],
                proxima: 5,
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: [
                    "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética.",
                    "Criou grupos de ética voltado para IA e busca ativamente reduzir as desigualdades geradas pela automação."
                ],
                proxima: 6,
            },
        ]
    },
    {
        enunciado: "Novas tecnologias trazem novos desafios, por isso após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: [
                    "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA.",
                    "Participa ativamente do desenvolvimento de soluções criativas e na melhoria de processos em IA."
                ],
                proxima: 7,
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: [
                    "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética.",
                    "Criou grupos de ética voltado para IA e busca ativamente reduzir as desigualdades geradas pela automação."
                ],
                proxima: 7,
            },
        ]
    },
    {
        enunciado: "É muito importante refletir sobre os trabalhadores do futuro. Por isso a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: [
                    "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA.",
                    "Participa ativamente do desenvolvimento de soluções criativas e na melhoria de processos em IA."
                ],
                proxima: 7,
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: [
                    "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética.",
                    "Criou grupos de ética voltado para IA e busca ativamente reduzir as desigualdades geradas pela automação."
                ],
                proxima: 7,
            },
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: [
                    "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes.",
                    "Ainda acha que os meios de desenho tradicionais são mais eficazes para a criatividade, por isso vem estimulando pessoas em suas redes sociais a fazer pintura em aquarela."
                ],
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: [
                    "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!",
                    "Compartilhou artes em redes sociais como forma de ensinar como se comunicar através da arte.",
                    "Percebeu que muitas pessoas têm dificuldade em expressar suas ideias desenhando e acha que a IA é capaz de empoderar essas pessoas a tirarem ideias do papel."
                ],
            },
        ]
    }
];

// Nomes aleatórios
const nomes = ["Alex", "Jordan", "Casey", "Morgan", "Riley", "Avery", "Quinn", "Sage", "Rowan", "Blake"];

// Variáveis do jogo
let perguntaAtual = 0;
let historiaFinal = "";
const nomeEscolhido = nomes[Math.floor(Math.random() * nomes.length)];

// Elementos DOM
const telaInicial = document.getElementById('telaInicial');
const quizContainer = document.getElementById('quizContainer');
const resultadoContainer = document.getElementById('resultadoContainer');
const iniciarBtn = document.getElementById('iniciarBtn');
const perguntaTexto = document.getElementById('perguntaTexto');
const alternativasContainer = document.getElementById('alternativasContainer');
const textoResultado = document.getElementById('textoResultado');
const jogarNovamente = document.getElementById('jogarNovamente');
const progressFill = document.getElementById('progressFill');

// Event Listeners
iniciarBtn.addEventListener('click', iniciarQuiz);
jogarNovamente.addEventListener('click', reiniciarQuiz);

function iniciarQuiz() {
    telaInicial.style.display = 'none';
    quizContainer.classList.add('ativo');
    perguntaAtual = 0;
    historiaFinal = "";
    mostrarPergunta();
}

function mostrarPergunta() {
    if (perguntaAtual >= perguntas.length) {
        mostrarResultado();
        return;
    }

    const pergunta = perguntas[perguntaAtual];
    perguntaTexto.textContent = pergunta.enunciado;
    
    // Atualizar barra de progresso
    const progresso = ((perguntaAtual) / perguntas.length) * 100;
    progressFill.style.width = progresso + '%';

    // Limpar alternativas anteriores
    alternativasContainer.innerHTML = '';

    // Criar botões das alternativas
    pergunta.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement('button');
        botao.classList.add('alternativa-btn');
        botao.textContent = alternativa.texto;
        botao.addEventListener('click', () => selecionarAlternativa(alternativa));
        alternativasContainer.appendChild(botao);
    });
}

function selecionarAlternativa(alternativa) {
    // Escolher afirmação aleatória
    const afirmacao = alternativa.afirmacao[Math.floor(Math.random() * alternativa.afirmacao.length)];
    historiaFinal += afirmacao + " ";

    // Ir para próxima pergunta
    if (alternativa.proxima !== undefined) {
        perguntaAtual = alternativa.proxima;
    } else {
        perguntaAtual = perguntas.length; // Finalizar quiz
    }

    // Delay para melhor experiência
    setTimeout(() => {
        mostrarPergunta();
    }, 300);
}

function mostrarResultado() {
    quizContainer.classList.remove('ativo');
    
    // Finalizar barra de progresso
    progressFill.style.width = '100%';
    
    setTimeout(() => {
        resultadoContainer.classList.add('mostrar');
        textoResultado.textContent = `Em 2049, ${nomeEscolhido}: ${historiaFinal}`;
    }, 500);
}

function reiniciarQuiz() {
    resultadoContainer.classList.remove('mostrar');
    quizContainer.classList.remove('ativo');
    progressFill.style.width = '0%';
    
    setTimeout(() => {
        telaInicial.style.display = 'block';
    }, 300);
}

// Substituir "você" pelo nome escolhido nas perguntas
function substituirNomes() {
    perguntas.forEach(pergunta => {
        pergunta.enunciado = pergunta.enunciado.replace(/Você/g, nomeEscolhido);
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nomeEscolhido);
    });
}

// Inicializar
substituirNomes();
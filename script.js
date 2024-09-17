const questions = [
    { image: "fotos/f1.JPEG", question: "Em qual cidade tiramos esta foto?", answers: ["Dom Eliseu", "Salinas", "Imperatriz", "Itinga"], correct: 2 },
    { image: "fotos/f2.JPEG", question: "Em qual cidade tiramos esta foto?", answers: ["Manu Batidão", "Natan", "Evoney Fernandez", "Biu do Piseiro"], correct: 0 },
    { image: "fotos/r12.JPEG", question: "Ano do nosso Primeiro Beijo?", answers: ["2016", "2019", "2017", "2018"], correct: 3 },
  { image: "fotos/r1.JPEG", question: "Qual foi o presente mais memorável que já te dei?", answers: ["Calcinhas", "Cestas cacau show", "Caneca e agenda personalizado", "Brincos, cordão"], correct: 1 },
    { image: "fotos/f3.JPEG", question: "Em qual cidade tiramos esta foto?", answers: ["Dom Eliseu", "Salinas", "Imperatriz", "Ulianópolis"], correct: 3 },
    { image: "fotos/r20.JPEG", question: "Em qual Agro fest tirei essa foto sua?", answers: ["2023", "2022", "2024", "2021"], correct: 0 },
    { image: "fotos/f4.JPEG", question: "Qual ano tiramos esta foto?", answers: ["2021", "2023", "2024", "2020"], correct: 2 },
    { image: "fotos/f5.JPEG", question: "Em qual cidade tiramos esta foto?", answers: ["Dom Eliseu", "Ulianópolis", "Imperatriz", "Itinga"], correct: 0 },
    { image: "fotos/f6.JPEG", question: "Em qual cidade tiramos esta foto?", answers: ["Itinga", "Salinas", "Imperatriz", "Dom Eliseu"], correct: 3 },
    { image: "fotos/f7.JPEG", question: "Qual mês tiramos essa foto?", answers: ["Fevereiro", "Março", "Abril", "Junho"], correct: 2 },
    { image: "fotos/r23.JPEG", question: "Qual parte do seu corpo que acha que mais tenho desejo?", answers: ["Bunda, bucetinha e peitos", "boca e olhos", "Cabelos e cintura",], correct: 0 },
    { image: "fotos/r21.JPEG", question: "Qual habilidade ou talento que acha que mais admiro em você?", answers: ["Seu talento artístico ou criativo", "Sua capacidade de criar conexões e amizades", " Sua habilidade de resolver problemas", "Sua habilidade culinária"], correct: 3 },
    { image: "fotos/f8.JPEG", question: "Qual foi o ano dessa foto?", answers: ["2022", "2023", "2024", "2021"], correct: 3 },
    { image: "fotos/f9.JPEG", question: "Qual cidade tiramos essa foto?", answers: ["Ulianópolis", "Dom Eliseu", "Imperatriz", "Itinga"], correct: 1 },
    { image: "fotos/f10.JPEG", question: "Qual show tiramos essa foto?", answers: ["Manu Batidão", "Natan", "Evoney Fernandez", "Biu do Piseiro"], correct: 3 },
    { image: "fotos/r2.JPEG", question: "Qual rio que mais fomos juntos?", answers: ["Concren", "Por do sol", "Água azul",], correct: 1 },
    { image: "fotos/r3.JPEG", question: "Melhor passeio juntos?", answers: ["Salinas", "Sumauma", "Park freitas",], correct: 0 },
    { image: "fotos/r4.JPEG", question: "Qual foi o nosso primeiro destino de viagem juntos?", answers: ["Belém", "Itinga", "ITZ", "Salinas"], correct: 3 },
    { image: "fotos/r5.JPEG", question: "Essa foto foi tirada em qual rio?", answers: ["rio do jacaré (ulianópolis)", "Rio da ponte no Itinga-ma", "festa no rio com seus colegas da faculdade", "Rio Por do sol Itinga-ma"], correct: 2 },
    { image: "fotos/r6.JPEG", question: "Estavamos em qual cidade?", answers: ["Dom Eliseu", "Itinga", "Ulianópolis",], correct: 0 },
    { image: "fotos/r7.JPEG", question: "Qual é o melhor presente que você já me deu?", answers: ["Pulseiras", "Cuecas",], correct: 1 },
    { image: "fotos/r8.JPEG", question: "Série de TV que ja assistimos juntos até o final?", answers: ["Jovem cheodon", "The Walking Dead ", "Good Doctor"], correct: 1 },
    { image: "fotos/r9.JPEG", question: "Para onde fomos no último feriado?", answers: ["Roça", "Desfile Escolar", "Faculdade"], correct: 1 },
    { image: "fotos/r10.JPEG", question: "Para onde eu estava indo nesse dia?", answers: ["Itinga", "Belém", "Roraima", "Ulianópolis"], correct: 2 },
    { image: "fotos/r11.JPEG", question: "Em qual ano foi me encontrar em Belém?", answers: ["2021", "2022", "2024", "2017"], correct: 0 },
    { image: "fotos/r13.JPEG", question: "Qual cidade estavamos nessa foto?", answers: ["Itinga", "Ulianópolis", "Campestre", "Roça"], correct: 2 },
    { image: "fotos/r14.JPEG", question: "Qual é o apelido carinhoso que gosto de chamar você?", answers: ["Amor", "Jaque", "Linda", "Docinho"], correct: 3 },
    { image: "fotos/r15.JPEG", question: "Onde tiramos essa foto?", answers: ["Roça", "casa Irlene", "Em Casa", "Casa do Adriano"], correct: 3 },
    { image: "fotos/r16.JPEG", question: "Qual Show tirei essa foto sua?", answers: ["Manu Batidão", "Natan", "Mary Fernandez", "Zé Felipe"], correct: 2 },
    { image: "fotos/r17.JPEG", question: "Qual é a Qualidade que mais acha que admiro em você?", answers: ["Bondosa com todos ", "Exelente Mãe e Filha", "Dedicada ao trabalho", "Estudiosa"], correct: 1 },
    { image: "fotos/r18.JPEG", question: "Qual seria o superpoder que você gostaria que ambos tivessem para melhorar nosso relacionamento?", answers: ["Telepatia para entender os pensamentos", " Poder de cura para resolver desentendimentos instantaneamente", "Invisibilidade para surpreender o outro", "Controle do tempo para aproveitar cada momento"], correct: 1 },
    { image: "fotos/r19.JPEG", question: "Qual ano fizemos sexo pela primeira vez?", answers: ["2020", "2017", "2019", "2018"], correct: 3 },
    { image: "fotos/r22.JPEG", question: "Como você prefere que eu demonstre meu desejo e atração por você?", answers: ["Com ações que mostrem que você está sempre em meus pensamentos", "Com toques e carícias sensuais", "Com palavras de afeto e elogios", "Através de gestos carinhosos e espontâneos"], correct: 0 },

];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion(questionIndex) {
    const question = questions[questionIndex];
    const photo = document.getElementById('photo');
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');

    photo.src = question.image;
    questionText.innerHTML = question.question;
    answersContainer.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerHTML = answer;
        button.onclick = () => checkAnswer(index);
        answersContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correct) {
        score++;
        alert('Resposta correta! Te amo❤️😘');
    } else {
        alert('Poxa resposta errada. 😢😞');
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');

    const percentage = (score / questions.length) * 100;

    if (percentage > 50) {
        resultText.innerHTML = `Parabéns! Você acertou mais de 50% das questões! I Love You. ❤️😘`;
        resultContainer.style.backgroundColor = '#d4edda'; // Fundo verde claro para mensagem positiva
        resultText.style.color = '#155724'; // Cor do texto verde escuro para mensagem positiva
    } else {
        resultText.innerHTML = `você acertou menos da metade das questões. 😢😞`;
        resultContainer.style.backgroundColor = '#f8d7da'; // Fundo vermelho claro para mensagem negativa
        resultText.style.color = '#721c24'; // Cor do texto vermelho escuro para mensagem negativa
    }

    resultContainer.style.display = 'block';
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('next-button').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    showQuestion(currentQuestionIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showQuestion(currentQuestionIndex);
});
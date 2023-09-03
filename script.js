// Mapeia os nomes dos bichos para números de 1 a 25
const bichos = {
    'avestruz': 1,
    'aguia': 2,
    'borboleta': 3,
    'burro': 4,
    'cabra': 5,
    'cachorro': 6,
    'camelo': 7,
    'carneiro': 8,
    'cavalo': 9,
    'cobra': 10,
    'coelho': 11,
    'elefante': 12,
    'galo': 13,
    'gato': 14,
    'jacare': 15,
    'leao': 16,
    'macaco': 17,
    'pavao': 18,
    'peru': 19,
    'porco': 20,
    'tigre': 21,
    'touro': 22,
    'urso': 23,
    'vaca': 24,
    'veado': 25
};

// Função para selecionar uma imagem e armazenar o número correspondente
function selecionarImagem(animal) {
    const imagens = document.querySelectorAll(".imagem");
    imagens.forEach(imagem => {
        imagem.classList.remove("selecionada");
    });

    const imagemSelecionada = document.querySelector(`.imagem[onclick="selecionarImagem('${animal}')"]`);
    if (imagemSelecionada) {
        imagemSelecionada.classList.add("selecionada");

        // Armazena o número do bicho selecionado
        const numeroSelecionado = bichos[animal];

        // Mostra o número selecionado no console (você pode removê-lo mais tarde)
        console.log(`Você escolheu o bicho ${animal}, que corresponde ao número ${numeroSelecionado}.`);
    }
}

// Função para verificar o sorteio
function verificarSorteio() {
    // Simule um sorteio de 1 a 25 (você pode usar sua lógica real aqui)
    const numeroSorteado = Math.floor(Math.random() * 25) + 1;

    // Obtém o nome do bicho correspondente ao número sorteado
    let bichoGanhador;
    for (const bicho in bichos) {
        if (bichos[bicho] === numeroSorteado) {
            bichoGanhador = bicho;
            break;
        }
    }

    // Exibe o nome do bicho vencedor
    const resultado = document.getElementById("animalGanhador");
    resultado.innerHTML = `O bicho vencedor é: <strong>${bichoGanhador}</strong>`;

    // Estilize o resultado para torná-lo maior e centralizado
    resultado.style.textAlign = "center";
    resultado.style.fontSize = "24px"; // Tamanho semelhante a um h2
}

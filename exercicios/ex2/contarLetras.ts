// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’,
// seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

function contarLetras(texto: string, letra: string): number {
    // Cria uma expressão regular para encontrar a letra informada
    const regex = new RegExp(letra, 'gi');
    const matches = texto.match(regex);

    // Se houver correspondência, retorna a quantidade de vezes que a letra foi encontrada
    if (matches) {
        return matches.length;
    }
    return 0;
}

export default contarLetras;

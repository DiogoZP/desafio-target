import * as readline from 'readline';
import contarLetras from './contarLetras';

// Configuração do readline para receber input do console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Pergunta ao usuário
rl.question('Informe um texto: ', (texto) => {
    rl.question('Informe uma letra: ', (letra) => {
        console.log(`A letra "${letra}" aparece ${contarLetras(texto, letra)} vezes no texto.`);
        rl.close();
        rl.removeAllListeners();
    });
});

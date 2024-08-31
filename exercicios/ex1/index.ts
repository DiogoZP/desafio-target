import isFibonacci from './isFibonacci';
import * as readline from 'readline';

// Configuração do readline para receber input do console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta ao usuário
rl.question('Informe um número: ', (numero) => {
    if (isNaN(Number(numero))) {
        console.log('O valor informado não é um número.');
    } else {
        console.log(isFibonacci(Number(numero)));
    }
    rl.close();
    rl.removeAllListeners();
});




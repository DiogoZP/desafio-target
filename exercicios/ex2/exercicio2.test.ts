import contarLetras from './contarLetras';

describe('Exercício 2', () => {
    it("deve contar a quantidade de vezes que a letra 'a' aparece no texto", () => {
        const texto = 'A abelha abelhuda abelhante abelhava abelhadamente';
        const letra = 'a';
        const resultado = contarLetras(texto, letra);
        expect(resultado).toBe(13);
    });
});

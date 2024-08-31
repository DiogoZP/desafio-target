import isFibonacci from './isFibonacci';

describe('Exercício 1', () => {
    it('deve retornar que 0 pertence à sequência de Fibonacci', () => {
        expect(isFibonacci(0)).toBe('O número 0 pertence à sequência de Fibonacci.');
    });

    it('deve retornar que 5 pertence à sequência de Fibonacci', () => {
        expect(isFibonacci(5)).toBe('O número 5 pertence à sequência de Fibonacci.');
    });

    it('deve retornar que 4 não pertence à sequência de Fibonacci', () => {
        expect(isFibonacci(4)).toBe('O número 4 não pertence à sequência de Fibonacci.');
    });

    it('deve retornar que -1 não pertence à sequência de Fibonacci', () => {
        expect(isFibonacci(-1)).toBe('O número -1 não pertence à sequência de Fibonacci.');
    });
});

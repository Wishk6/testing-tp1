export function addition(a, b) {
    return a + b;
}

export function soustraction(a, b) {
    return a - b;
}

export function multiplication(a, b) {
    return a * b;
}

export function division(a, b) {
    if (b === 0) {
        throw new Error('Division par zéro no no no');
    }
    return a / b;
}

export function exponentiation(a, b) {
    return Math.pow(a, b);
}

describe('Tous les tests', () => {
    /*  Les tests de la calculatrice */
    describe('Exercice 1 - Calculatrice', () => {
        test('addition de deux nombres', () => {
            expect(addition(2, 3)).toBe(5);
            expect(addition(2, -3)).toBe(-1);
            expect(addition(0.1, 0.2)).toBeCloseTo(0.3);
        });

        test('soustraction de deux nombres', () => {
            expect(soustraction(5, 3)).toBe(2);
            expect(soustraction(5, -3)).toBe(8);
            expect(soustraction(0.3, 0.1)).toBeCloseTo(0.2);
        });

        test('multiplication de deux nombres', () => {
            expect(multiplication(2, 3)).toBe(6);
            expect(multiplication(5, 0)).toBe(0);
            expect(multiplication(2, -3)).toBe(-6);
        });

        test('division de deux nombres', () => {
            expect(division(6, 2)).toBe(3);
            expect(division(6, -2)).toBe(-3);
            expect(() => division(5, 0)).toThrow('Division par zéro no no no');
        });

        test('exponentiation de deux nombres', () => {
            expect(exponentiation(2, 3)).toBe(8);
            expect(exponentiation(5, 0)).toBe(1);
            expect(exponentiation(2, -1)).toBe(0.5);
            expect(exponentiation(2, -2)).toBe(0.25);
            expect(exponentiation(9, 0.5)).toBe(3);
        });
    });
}); 
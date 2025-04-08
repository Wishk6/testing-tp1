

/* Tests */
describe('Tous les tests', () => {
    describe('Exercice 1 - Calculatrice', () => {
        let calc;

        beforeEach(() => {
            calc = new Calculatrice();
        });

        test('addition de deux nombres', () => {
            expect(calc.addition(2, 3)).toBe(5);
            expect(calc.addition(2, -3)).toBe(-1);
            expect(calc.addition(0.1, 0.2)).toBeCloseTo(0.3);
        });

        test('soustraction de deux nombres', () => {
            expect(calc.soustraction(5, 3)).toBe(2);
            expect(calc.soustraction(5, -3)).toBe(8);
            expect(calc.soustraction(0.3, 0.1)).toBeCloseTo(0.2);
        });

        test('multiplication de deux nombres', () => {
            expect(calc.multiplication(2, 3)).toBe(6);
            expect(calc.multiplication(5, 0)).toBe(0);
            expect(calc.multiplication(2, -3)).toBe(-6);
        });

        test('division de deux nombres', () => {
            expect(calc.division(6, 2)).toBe(3);
            expect(calc.division(6, -2)).toBe(-3);
            expect(() => calc.division(5, 0)).toThrow('Division par zéro no no no');
        });

        test('exponentiation de deux nombres', () => {
            expect(calc.exponentiation(2, 3)).toBe(8);
            expect(calc.exponentiation(5, 0)).toBe(1);
            expect(calc.exponentiation(2, -1)).toBe(0.5);
            expect(calc.exponentiation(2, -2)).toBe(0.25);
            expect(calc.exponentiation(9, 0.5)).toBe(3);
        });
    });
});

/* Class Calculatrice */
class Calculatrice {
    addition(a, b) {
        return a + b;
    }

    soustraction(a, b) {
        return a - b;
    }

    multiplication(a, b) {
        return a * b;
    }

    division(a, b) {
        if (b === 0) {
            throw new Error('Division par zéro no no no');
        }
        return a / b;
    }

    exponentiation(a, b) {
        return Math.pow(a, b);
    }
}

/* Class FizzBuzz */
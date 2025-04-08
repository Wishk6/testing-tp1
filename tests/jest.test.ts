/* Class Calculatrice */
class Calculatrice {
    public addition(a: number, b: number): number {
        return a + b;
    }

    public soustraction(a: number, b: number): number {
        return a - b;
    }

    public multiplication(a: number, b: number): number {
        return a * b;
    }

    public division(a: number, b: number): number {
        if (b === 0) {
            throw new Error('Division par zéro no no no');
        }
        return a / b;
    }

    public exponentiation(a: number, b: number): number {
        return Math.pow(a, b);
    }
}

/* Class FizzBuzz */
class FizzBuzz {
    public fizzBuzz(n: number): string {
       switch (true) {
        case n % 3 === 0 && n % 5 === 0:
            return 'FizzBuzz';
        case n % 3 === 0:
            return 'Fizz';
        case n % 5 === 0:
            return 'Buzz';
        default:
            return n.toString();
        }
    }
}


/* Tests */
describe('Tous les tests', () => {
    describe('Exercice 1 - Calculatrice', () => {
        const calc: Calculatrice = new Calculatrice();

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
        });
    });

    describe('Exercice 2 - FizzBuzz', () => {
       const fizzBuzz: FizzBuzz = new FizzBuzz();
       test('FizzBuzz', () => {
        expect(fizzBuzz.fizzBuzz(2000000001)).toBe('Fizz');
        });
    });
});
export function capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function multiply(a: number, b: number): number {
    return a * b;
}

export function isEven(a: number): boolean {
    return a % 2 === 0
}

export function fizzBuzz(a: number): number | string {
    if (a % 15 === 0) return 'fizzbuzz'
    if (a % 3 === 0) return 'fizz'
    if (a % 5 === 0) return 'buzz'

    return a
}

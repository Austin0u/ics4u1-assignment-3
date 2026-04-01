type CubicEquationProps = {
    a: number;
    b: number;
    c: number;
    d: number;
};

export const CubicEquation = ({ a, b, c, d }: CubicEquationProps) => {
    let equation: string = "";

    // a term (x^3 coefficient)
    if (a === 1) {
        equation = "x³";
    } else if (a === -1) {
        equation = "-x³";
    } else {
        equation = a + "x³";
    }

    // b term (x^2 coefficient)
    if (b !== 0) {
        const sign = b > 0 ? " + " : " - ";
        const coeff = Math.abs(b);
        equation += coeff === 1 ? sign + "x²" : sign + coeff + "x²";
    }

    // c term (x coefficient)
    if (c !== 0) {
        const sign = c > 0 ? " + " : " - ";
        const coeff = Math.abs(c);
        equation += coeff === 1 ? sign + "x" : sign + coeff + "x";
    }

    // d term (constant)
    if (d !== 0) {
        const sign = d > 0 ? " + " : " - ";
        equation += sign + Math.abs(d);
    }

    return (
        <div className="mt-8 w-full max-w-4xl mx-auto">
            <h3 className="text-center text-2xl font-bold text-[#333]">{equation} = 0</h3>
        </div>
    );
};


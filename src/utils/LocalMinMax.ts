// Reusable helper for derivative
function derivative(fx: number[][]): number[][] {
    // structure: array of terms -> [termA, termB], each term is array of coef and exp -> [coef, exp]
    // e.g. [[3,2],[-1,2]] -> 3x^2 - x^2
    let gx: number[][] = [];

    const powerRule = (coef: number, exp: number): number[] => {
        return [coef * exp, exp - 1]; 
    };

    for (const term of fx) {
        if (term[1]-1 >= 0) {
            gx.push(powerRule(term[0],term[1]));
        };
    }

    return gx;
}

// finding roots
function quadraticRoots(a: number, b: number, c: number): number[] {
    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
        console.log("No Roots");
        return [];
    } else if (discriminant > 0) {
        const rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
        const rootTwo = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [rootOne, rootTwo];
    } else {
        const rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
        return [rootOne];
    };
};

// solving for y value
function solveY(fx: number[][], x: number): number {
    let y = 0;

    for (const term of fx) {
        y += term[0] * Math.pow(x, term[1]);
    };

    return y;
}

// make function to determine local min max points (x AND y, solve using the solveY function), as well as if it is min or max (string)?
export function localMinMax(fx: number[][]): Array<{x: number, y: number, type: string}> {
    const gx = derivative(fx);
    const roots = quadraticRoots(gx[0][0], gx[1][0], gx[2][0]); // takes the derivative (a quadratic) and finds x-ints / roots
    let minMaxPoints: Array<{x: number, y: number, type: string}> = []; // initalize

    // Analyze each crtical point 
    for (const root of roots) {
        const secondDerivative = derivative(gx);
        const secondDerivativeValue = solveY(secondDerivative, root);

        if (secondDerivativeValue !== 0) {
            minMaxPoints.push({ x: root, y: solveY(fx, root), type: (secondDerivativeValue > 0) ? "Min" : "Max" });
        };
    };

    return minMaxPoints.sort((a, b) => a.x - b.x); // sort by x value
}

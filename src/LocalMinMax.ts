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

//finding roots
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

// set up 
const cubic =[[1,3],[6,2],[11,1], [6,0]];
const quadratic = derivative(cubic);
const linear = derivative(quadratic);

const roots = quadraticRoots(quadratic[0][0],quadratic[1][0],quadratic[2][0]);

console.log(roots);

// find min or max
for (const root of roots) {
    console.log([root, solveY(linear, root)]);
};
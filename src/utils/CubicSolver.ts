// Helper functions
function trigonometricMethod(a: number, b: number, p: number, q: number): number[] {
    const theta: number = (1 / 3) * Math.acos(-q / (2 * Math.sqrt(-Math.pow(p / 3, 3))));

    const calcRoot = (angle: number): number => {
        return 2 * Math.sqrt(-p / 3) * Math.cos(angle) - b / (3 * a);
    };

    return [calcRoot(theta), calcRoot(theta + 2 * Math.PI / 3), calcRoot(theta + 4 * Math.PI / 3)];
};

function cardanosMethod(a: number, b: number, q: number, discriminant: number): number {
    return Math.cbrt((-q / 2) + Math.sqrt(discriminant)) + Math.cbrt((-q / 2) - Math.sqrt(discriminant)) - b / (3 * a);
};

// Main function
export function calculateCubicRoots(a: number, b: number, p: number, q: number, discriminant: number): number[] {
    let roots: number[] = [];

    // Determining Case
    if (discriminant < 0) { // three distinct roots 
        roots = trigonometricMethod(a, b, p, q);
    } else if (discriminant > 0) { // one real root and two complex roots
        roots = [cardanosMethod(a, b, q, discriminant)];
    } else { // one real root with a double, or a triple root
        const rootOne = cardanosMethod(a, b, q, discriminant);
        if (p === 0 && q === 0) {
            roots = [rootOne, rootOne, rootOne];
        } else {
            const rootTwo = Math.cbrt(q / 2) - b / (3 * a);
            roots = [rootOne, rootTwo, rootTwo];
        }
    }

    return roots.sort((a, b) => a - b);
};
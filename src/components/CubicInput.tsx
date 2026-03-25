import { useState } from "react";

// Methods to solve for roots
function trigonometricMethod(a: number, b: number, p: number, q: number): number[] {
    const theta: number = (1 / 3) * Math.acos(-q / (2 * Math.sqrt(-Math.pow(p / 3, 3))));

    const calcRoot = (angle: number): number => {
        return 2 * Math.sqrt(-p / 3) * Math.cos(angle) - b / (3 * a);
    };

    return [calcRoot(theta), calcRoot(theta + 2 * Math.PI / 3), calcRoot(theta + 4 * Math.PI / 3)];
}

function cardanosMethod(a: number, b: number, p: number, q: number): number {
    return Math.cbrt((-q / 2) + Math.sqrt(Math.pow(q / 2, 2) + Math.pow(p / 3, 3))) + Math.cbrt((-q / 2) - Math.sqrt(Math.pow(q / 2, 2) + Math.pow(p / 3, 3))) - b / (3 * a);
}

export const CubicSolver = () => {
    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);
    const [c, setC] = useState<number>(0);
    const [d, setD] = useState<number>(0);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (a !== 0) { // a value cannot be 0
            const p: number = (3 * a * c - Math.pow(b, 2)) / (3 * a * a);
            const q: number = (27 * a * a * d - 9 * a * b * c + 2 * Math.pow(b, 3)) / (27 * Math.pow(a, 3));
            const discriminant: number = (q / 2) * (q / 2) + (p / 3) * (p / 3) * (p / 3); // Math.pow() causes some issues in some cases
    
            // Root cases
            if (discriminant < 0) { // three distinct roots 
                const roots: number[] = trigonometricMethod(a, b, p, q);
                console.log(roots)
            } else if (discriminant > 0) { // one real root and two complex roots
                const root: number = cardanosMethod(a, b, p, q);
                console.log(root)
            } else { // one real root with a double, or a triple root
                const rootOne: number = cardanosMethod(a, b, p, q);
                if (p === 0 && q === 0) { // triple root
                    console.log(rootOne)
                } else { // one real root with a double
                    const rootTwo: number = Math.cbrt(q / 2) - b / (3 * a);
                    console.log(rootTwo)
                }
            }
        } else { // give an alert when a = 0
            alert("Coefficient a cannot be 0");
        }
    };

    return (
        <div>
            <div>
                <h1>
                    Cubic Solver
                </h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        a value:
                    </label>
                    <input
                        type="number"
                        value={a}
                        onChange={(e) => setA(Number(e.target.value))}
                        required
                    />

                    <label>
                        b value:
                    </label>
                    <input
                        type="number"
                        value={b}
                        onChange={(e) => setB(Number(e.target.value))}
                        required
                    />

                    <label>
                        c value:
                    </label>
                    <input
                        type="number"
                        value={c}
                        onChange={(e) => setC(Number(e.target.value))}
                        required
                    />

                    <label>
                        d value:
                    </label>
                    <input
                        type="number"
                        value={d}
                        onChange={(e) => setD(Number(e.target.value))}
                        required
                    />

                    <input
                        type="submit"
                        value="Save"
                    />
                </form>
            </div>
        </div>
    );
};
import { useState, useRef } from "react";

export const CubicSolver = () => {
    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);
    const [c, setC] = useState<number>(0);
    const [d, setD] = useState<number>(0);

    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const discriminant = b * b - 4 * a * c;

        if (inputRef.current) {
            if (discriminant < 0) {
                inputRef.current.value = "No Roots";
            } else if (discriminant > 0) {
                const rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
                const rootTwo = (-b - Math.sqrt(discriminant)) / (2 * a);
                inputRef.current.value = `x1=${rootOne}, x2=${rootTwo}`;
            } else {
                const rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
                inputRef.current.value = `x=${rootOne}`;
            }
        }
    };

    return (
        <div>
            <div>
                <h1>
                    Cubic Formula
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

                    <label>Result:</label>
                    <input
                        ref={inputRef}
                        type="text"
                        readOnly
                    />

                    <input
                        type="submit"
                        value="Calculate"
                    />
                </form>
            </div>
        </div>
    );
};
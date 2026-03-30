type CubicProps = {
    a: number;
    b: number;
    c: number;
    d: number;
    setA: (value: number) => void;
    setB: (value: number) => void;
    setC: (value: number) => void;
    setD: (value: number) => void;
    onSave: () => void;
};

export const CubicInput = ({ a, b, c, d, setA, setB, setC, setD, onSave }: CubicProps) => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        onSave();
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
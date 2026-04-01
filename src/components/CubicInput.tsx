type CubicInputProps = {
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

export const CubicInput = ({ a, b, c, d, setA, setB, setC, setD, onSave }: CubicInputProps) => {
    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSave();
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="px-0 py-1">
                <h1 className="text-3xl font-bold text-[#2B4570] text-center">Cubic Solver</h1>
                <form onSubmit={handleSubmit} className="mt-6 flex flex-wrap items-end justify-center gap-5">
                    <div className="flex flex-col items-center gap-2">
                        <label className="text-sm font-bold text-[#2B4570]">a value:</label>
                        <input
                            className="w-24 rounded-md border border-gray-300 px-2 py-1 text-slate-800"
                            type="number"
                            value={a}
                            onChange={(e) => setA(Number(e.target.value))}
                            required
                        />
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <label className="text-sm font-bold text-[#2B4570]">b value:</label>
                        <input
                            className="w-24 rounded-md border border-gray-300 px-2 py-1 text-slate-800"
                            type="number"
                            value={b}
                            onChange={(e) => setB(Number(e.target.value))}
                            required
                        />
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <label className="text-sm font-bold text-[#2B4570]">c value:</label>
                        <input
                            className="w-24 rounded-md border border-gray-300 px-2 py-1 text-slate-800"
                            type="number"
                            value={c}
                            onChange={(e) => setC(Number(e.target.value))}
                            required
                        />
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <label className="text-sm font-bold text-[#2B4570]">d value:</label>
                        <input
                            className="w-24 rounded-md border border-gray-300 px-2 py-1 text-slate-800"
                            type="number"
                            value={d}
                            onChange={(e) => setD(Number(e.target.value))}
                            required
                        />
                    </div>

                    <input
                        className="rounded-lg bg-[#2B4570] px-5 py-2 text-white font-bold shadow-sm hover:opacity-90"
                        type="submit"
                        value="Save"
                    />
                </form>
            </div>
        </div>
    );
};
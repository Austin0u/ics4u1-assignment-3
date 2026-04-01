type CubicHistoryProps = {
    history: Array<[number, number, number, number]>;
    onSelect: (a: number, b: number, c: number, d: number) => void;
};

export const CubicHistory = ({ history, onSelect }: CubicHistoryProps) => {
    return (
        <div className="w-full">
            <h2 className="mb-4 text-lg font-bold text-[#2B4570]">History</h2>
            <div className="overflow-auto rounded-xl border border-gray-200 bg-transparent">
                <table className="min-w-full border-collapse text-sm">
                    <thead>
                        <tr className="bg-[#2B4570] text-white">
                            <th className="px-3 py-2 text-center font-semibold">a</th>
                            <th className="px-3 py-2 text-center font-semibold">b</th>
                            <th className="px-3 py-2 text-center font-semibold">c</th>
                            <th className="px-3 py-2 text-center font-semibold">d</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map(([a, b, c, d], index) => (
                            <tr
                                key={`${a}-${b}-${c}-${d}-${index}`}
                                onClick={() => onSelect(a, b, c, d)}
                                className="cursor-pointer border-t border-gray-200 hover:bg-[#f5f8fc]"
                            >
                                <td className="px-3 py-2 text-center">{a}</td>
                                <td className="px-3 py-2 text-center">{b}</td>
                                <td className="px-3 py-2 text-center">{c}</td>
                                <td className="px-3 py-2 text-center">{d}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


type CubicTableProps = {
    p: number;
    q: number;
    discriminant: number;
    roots: number[];
    minMaxPoints: Array<{ x: number, y: number, type: string }>;
};

const formatRoot = (roots: number[], index: number): string => {
    const value = roots[index];
    if (value === undefined || Number.isNaN(value)) {
        return "Imaginary";
    }
    return value.toFixed(2);
};

export const CubicTable = ({ p, q, discriminant, roots, minMaxPoints }: CubicTableProps) => {
    return (
        <div className="space-y-4">
            <table className="w-full rounded-xl border border-gray-200 bg-transparent text-sm text-black overflow-hidden border-separate border-spacing-0">
                <tbody>
                    <tr>
                        <td className="px-3 py-2 font-semibold text-[#2B4570]">p:</td>
                        <td className="px-3 py-2 font-semibold text-right">
                            {(!Number.isNaN(p)) ? p.toFixed(5) : "—"}
                        </td>
                    </tr>
                    <tr>
                        <td className="border-t border-gray-200 px-3 py-2 font-semibold text-[#2B4570]">q:</td>
                        <td className="border-t border-gray-200 px-3 py-2 font-semibold text-right">
                            {(!Number.isNaN(q)) ? q.toFixed(5) : "—"}
                        </td>
                    </tr>
                    <tr>
                        <td className="border-t border-gray-200 px-3 py-2 font-semibold text-[#2B4570]">Discriminant:</td>
                        <td className="border-t border-gray-200 px-3 py-2 font-semibold text-right">
                            {(!Number.isNaN(discriminant)) ? discriminant.toFixed(5) : "—"}
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="w-full table-fixed overflow-hidden text-sm rounded-xl border border-gray-200 bg-transparent border-separate border-spacing-0">
                <colgroup>
                    <col className="w-1/3" />
                    <col className="w-1/3" />
                    <col className="w-1/3" />
                </colgroup>

                <thead>
                    <tr className="bg-[#2B4570] text-white font-bold text-center">
                        <th className="px-3 py-2">Root</th>
                        <th className="px-3 py-2">x</th>
                        <th className="px-3 py-2">y</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr>
                        <td className="border-t border-gray-200 px-3 py-2 font-medium">Root 1</td>
                        <td className="border-t border-gray-200 px-3 py-2">{formatRoot(roots, 0)}</td>
                        <td className="border-t border-gray-200 px-3 py-2">
                            {formatRoot(roots, 0) === "Imaginary" ? "Imaginary" : 0}
                        </td>
                    </tr>
                    <tr>
                        <td className="border-t border-gray-200 px-3 py-2 font-medium">Root 2</td>
                        <td className="border-t border-gray-200 px-3 py-2">{formatRoot(roots, 1)}</td>
                        <td className="border-t border-gray-200 px-3 py-2">
                            {formatRoot(roots, 1) === "Imaginary" ? "Imaginary" : 0}
                        </td>
                    </tr>
                    <tr>
                        <td className="border-t border-gray-200 px-3 py-2 font-medium">Root 3</td>
                        <td className="border-t border-gray-200 px-3 py-2">{formatRoot(roots, 2)}</td>
                        <td className="border-t border-gray-200 px-3 py-2">
                            {formatRoot(roots, 2) === "Imaginary" ? "Imaginary" : 0}
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="w-full table-fixed overflow-hidden text-sm rounded-xl border border-gray-200 bg-transparent border-separate border-spacing-0">
                <colgroup>
                    <col className="w-1/3" />
                    <col className="w-1/3" />
                    <col className="w-1/3" />
                </colgroup>

                <thead>
                    <tr className="bg-[#2B4570] text-white font-bold text-center">
                        <th className="px-3 py-2">Min/Max</th>
                        <th className="px-3 py-2">x</th>
                        <th className="px-3 py-2">y</th>
                    </tr>
                </thead>

                <tbody className="text-center">
                    <tr>
                        <td className="border-t border-gray-200 px-3 py-2 font-medium">
                            {minMaxPoints[0]?.type || "N/A"}
                        </td>
                        <td className="border-t border-gray-200 px-3 py-2">
                            {minMaxPoints[0]?.x.toFixed(2) || "—"}
                        </td>
                        <td className="border-t border-gray-200 px-3 py-2">
                            {minMaxPoints[0]?.y.toFixed(2) || "—"}
                        </td>
                    </tr>
                    <tr>
                        <td className="border-t border-gray-200 px-3 py-2 font-medium">
                            {minMaxPoints[1]?.type || "N/A"}
                        </td>
                        <td className="border-t border-gray-200 px-3 py-2">
                            {minMaxPoints[1]?.x.toFixed(2) || "—"}
                        </td>
                        <td className="border-t border-gray-200 px-3 py-2">
                            {minMaxPoints[1]?.y.toFixed(2) || "—"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
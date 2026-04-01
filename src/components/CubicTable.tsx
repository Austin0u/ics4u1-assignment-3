type CubicTableProps = {
    p: number;
    q: number;
    discriminant: number;
    roots: number[];
};

const formatRoot = (roots: number[], index: number): string => { // Checking if the value is there, otherwise returns imaginary
    const value = roots[index];
    if (value === undefined || Number.isNaN(value)) {
        return "Imaginary";
    }
    return value.toFixed(2);
};

export const CubicTable = ({ p, q, discriminant, roots }: CubicTableProps) => {
    return (
        <div className="space-y-4">
            <div className="rounded-xl border border-gray-200 bg-transparent p-2 text-sm text-black">
                <div className="flex items-center justify-between px-3 py-2">
                    <span className="font-semibold text-[#2B4570]">p:</span>
                    <span className="font-semibold">{p.toFixed(5)}</span>
                </div>
                <div className="border-t border-gray-200 flex items-center justify-between px-3 py-2">
                    <span className="font-semibold text-[#2B4570]">q:</span>
                    <span className="font-semibold">{q.toFixed(5)}</span>
                </div>
                <div className="border-t border-gray-200 flex items-center justify-between px-3 py-2">
                    <span className="font-semibold text-[#2B4570]">Discriminant:</span>
                    <span className="font-semibold">{discriminant.toFixed(5)}</span>
                </div>
            </div>

            <div className="overflow-hidden text-sm rounded-xl border border-gray-200 bg-transparent">
                <div className="grid grid-cols-3 gap-2 bg-[#2B4570] px-3 py-2 text-center text-white font-bold">
                    <span>Root</span>
                    <span>x</span>
                    <span>y</span>
                </div>
                <div className="grid grid-cols-3 gap-2 border-t border-gray-200 px-3 py-2 text-center">
                    <span className="font-medium">Root 1</span>
                    <span>{formatRoot(roots, 0)}</span>
                    <span>{formatRoot(roots, 0) === "Imaginary" ? "Imaginary" : 0}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 border-t border-gray-200 px-3 py-2 text-center">
                    <span className="font-medium">Root 2</span>
                    <span>{formatRoot(roots, 1)}</span>
                    <span>{formatRoot(roots, 1) === "Imaginary" ? "Imaginary" : 0}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 border-t border-gray-200 px-3 py-2 text-center">
                    <span className="font-medium">Root 3</span>
                    <span>{formatRoot(roots, 2)}</span>
                    <span>{formatRoot(roots, 2) === "Imaginary" ? "Imaginary" : 0}</span>
                </div>
            </div>
        </div>
    );
};


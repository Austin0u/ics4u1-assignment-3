type CubicProps = {
    p: number;
    q: number;
    discriminant: number;
    roots: number[];
};

const formatRoot = (roots: number[], index: number): string => {
    const value = roots[index];
    if (value === undefined || Number.isNaN(value)) {
        return "complex";
    }
    return value.toFixed(2);
};

export const CubicTable = ({p, q, discriminant, roots }: CubicProps) => {
    return (
        <div>
            <div>
                <div>
                    <span>p:</span>
                    <span>{p.toFixed(2)}</span>
                </div>
                <div></div>
                <div>
                    <span>q:</span>
                    <span>{q.toFixed(2)}</span>
                </div>
                <div></div>
                <div>
                    <span>Discriminant:</span>
                    <span>{discriminant.toFixed(2)}</span>
                </div>
            </div>
            <div>
                <div>
                    <span>Root</span>
                    <span>x</span>
                    <span>y</span>
                </div>
                <div>
                    <span>Root 1</span>
                    <span>{formatRoot(roots, 0)}</span>
                    <span>0</span>
                </div>
                <div>
                    <span>Root 2</span>
                    <span>{formatRoot(roots, 1)}</span>
                    <span>0</span>
                </div>
                <div>
                    <span>Root 3</span>
                    <span>{formatRoot(roots, 2)}</span>
                    <span>0</span>
                </div>
            </div>
        </div>
    );
};


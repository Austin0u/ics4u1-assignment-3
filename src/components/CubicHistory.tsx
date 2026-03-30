type CubicHistoryProps = {
    history: Array<[number, number, number, number]>;
    onSelect: (a: number, b: number, c: number, d: number) => void;
};

export const CubicHistory = ({ history, onSelect }: CubicHistoryProps) => {
    const rows = [];

    // Loops through history and creates table of arrays
    for (let i = 0; i < history.length; i += 1) {
        const entry = history[i];
        const a = entry[0];
        const b = entry[1];
        const c = entry[2];
        const d = entry[3];

        rows.push(
            <tr
                key={a + "-" + b + "-" + c + "-" + d + "-" + i}
                onClick={() => onSelect(a, b, c, d)}
                style={{ cursor: "pointer" }}
            >
                <td>{a}</td>
                <td>{b}</td>
                <td>{c}</td>
                <td>{d}</td>
            </tr>
        );
    }

    return (
        <div>
            <h2>History</h2>
            <table>
                <thead>
                    <tr>
                        <th>a</th>
                        <th>b</th>
                        <th>c</th>
                        <th>d</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
};


import { useRef, useEffect } from 'react';

type CubicGraphProps = {
    a: number;
    b: number;
    c: number;
    d: number;
    roots: number[];
};

function drawGraph(canvas: HTMLCanvasElement, a: number, b: number, c: number, d: number, roots: number[]): void {
    const ctx = canvas.getContext("2d")!;
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    ctx.clearRect(0, 0, width, height);

    const gridSize: number = 20; // scaling (e.g. 10 = 5 units left and right, going from -5 to 5). should be an even number

    // convert graph coords to canvas (aka translating cartesian coordinates)
    const toCanvasX = (x: number): number => {
        return width / 2 + (x / gridSize) * width; //ex. x = 5, -> (5 + 10) / 20 becomes the % on the graph, then times width to scale it
    };

    const toCanvasY = (y: number): number => {
        return height / 2 - (y / gridSize) * height; // canvas y starts at top, so move to middle and subtract % of graph
    };

    // Draw grid
    ctx.strokeStyle = "#e0e0e0";
    ctx.lineWidth = 0.5;

    for (let x = -gridSize / 2; x <= gridSize / 2; x++) { // vertical lines
        const cx: number = toCanvasX(x);
        ctx.beginPath();
        ctx.moveTo(cx, 0);
        ctx.lineTo(cx, height);
        ctx.stroke();
    }

    for (let y = -gridSize / 2; y <= gridSize / 2; y++) { // horizontal lines
        const cy = toCanvasY(y);
        ctx.beginPath();
        ctx.moveTo(0, cy);
        ctx.lineTo(width, cy);
        ctx.stroke();
    }

    // Draw axes
    ctx.strokeStyle = "#aaaaaa";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, height / 2); ctx.lineTo(width, height / 2); // x axis
    ctx.moveTo(width / 2, 0); ctx.lineTo(width / 2, height); // y axis
    ctx.stroke();

    // Draw curve
    ctx.strokeStyle = "#E49273";
    ctx.lineWidth = 2;
    ctx.beginPath();

    for (let x = -gridSize / 2; x < gridSize / 2; x += 0.15) { // smaller step = more detailed curve.
        const cx = toCanvasX(x);
        const cy = toCanvasY(a * Math.pow(x, 3) + b * Math.pow(x, 2) + c * x + d); // use abcd values to calculate y for each x

        ctx.lineTo(cx, cy);
    }

    ctx.stroke();

    // Draw roots as dots
    ctx.fillStyle = "#7180acff";

    for (const root of roots) {
        const cx = toCanvasX(root);
        const cy = toCanvasY(0);
        ctx.beginPath();
        ctx.arc(cx, cy, 4, 0, Math.PI * 2); // makes a circle (x, y, radius, startAngle, endAngle)
        ctx.fill();
    }
}

export const CubicGraph = ({ a, b, c, d, roots }: CubicGraphProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            drawGraph(canvasRef.current, a, b, c, d, roots);
        }
    }, [a, b, c, d, roots]);

    return (
        <div className="flex flex-col items-center justify-center">
            <canvas ref={canvasRef} width="500" height="500" className="rounded-lg" />
        </div>
    );
};


import { useRef, useEffect, useState } from 'react';

type CubicGraphProps = {
    a: number;
    b: number;
    c: number;
    d: number;
    roots: number[];
};

function drawGraph(canvas: HTMLCanvasElement, a: number, b: number, c: number, d: number, roots: number[], gridSize: number): void {
    const ctx = canvas.getContext("2d")!;
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    ctx.clearRect(0, 0, width, height);

    const toCanvasX = (x: number): number => {
        return width / 2 + (x / (2 * gridSize)) * width;
    };

    const toCanvasY = (y: number): number => {
        return height / 2 - (y / (2 * gridSize)) * height;
    };

    ctx.strokeStyle = "#e0e0e0";
    ctx.lineWidth = 0.5;

    for (let x = -gridSize; x <= gridSize; x++) {
        const cx = toCanvasX(x);
        ctx.beginPath();
        ctx.moveTo(cx, 0);
        ctx.lineTo(cx, height);
        ctx.stroke();
    }

    for (let y = -gridSize; y <= gridSize; y++) {
        const cy = toCanvasY(y);
        ctx.beginPath();
        ctx.moveTo(0, cy);
        ctx.lineTo(width, cy);
        ctx.stroke();
    }

    ctx.strokeStyle = "#aaaaaa";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.stroke();

    ctx.strokeStyle = "#E49273";
    ctx.lineWidth = 2;
    ctx.beginPath();

    for (let x = -gridSize; x < gridSize; x += 0.15) {
        const cx = toCanvasX(x);
        const cy = toCanvasY(a * x ** 3 + b * x ** 2 + c * x + d);
        ctx.lineTo(cx, cy);
    }

    ctx.stroke();

    ctx.fillStyle = "#7180acff";
    for (const root of roots) {
        const cx = toCanvasX(root);
        const cy = toCanvasY(0);
        ctx.beginPath();
        ctx.arc(cx, cy, 4, 0, Math.PI * 2);
        ctx.fill();
    }
}

export const CubicGraph = ({ a, b, c, d, roots }: CubicGraphProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [localGridSize, setLocalGridSize] = useState<number>(10);

    useEffect(() => {
        if (canvasRef.current) {
            drawGraph(canvasRef.current, a, b, c, d, roots, localGridSize);
        }
    }, [a, b, c, d, roots, localGridSize]);

    return (
        <div className="flex flex-col items-center">
            <canvas ref={canvasRef} width="500" height="500" />
            <div className="mt-2 w-full flex justify-end items-center gap-2 text-sm">
                <span className="text-[#2B4570] font-medium">Grid Size:</span>
                <input
                    type="number"
                    value={localGridSize}
                    onChange={(e) => {
                        const value = Number(e.target.value);
                        if (!Number.isNaN(value) && value > 0) {
                            setLocalGridSize(value);
                        }
                    }}
                    className="w-15 rounded-md border border-gray-300 px-2 py-1 text-right"
                />
            </div>
        </div>
    );
};
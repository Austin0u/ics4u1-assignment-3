import { useState } from "react";
import { CubicInput } from "./components/CubicInput";
import { CubicEquation } from "./components/CubicEquation";
import { CubicTable } from "./components/CubicTable";
import { CubicGraph } from "./components/CubicGraph";
import { CubicHistory } from "./components/CubicHistory";
import cat from "./images/cat.jpg";

function calculateRoots(a: number, b: number, p: number, q: number, discriminant: number): number[] {
  let roots: number[] = [];

  // Helper functions
  const trigonometricMethod = (a: number, b: number, p: number, q: number): number[] => {
    const theta: number = (1 / 3) * Math.acos(-q / (2 * Math.sqrt(-Math.pow(p / 3, 3))));

    const calcRoot = (angle: number): number => {
      return 2 * Math.sqrt(-p / 3) * Math.cos(angle) - b / (3 * a);
    };

    return [calcRoot(theta), calcRoot(theta + 2 * Math.PI / 3), calcRoot(theta + 4 * Math.PI / 3)];
  };

  const cardanosMethod = (a: number, b: number, p: number, q: number): number => {
    return Math.cbrt((-q / 2) + Math.sqrt(Math.pow(q / 2, 2) + Math.pow(p / 3, 3))) + Math.cbrt((-q / 2) - Math.sqrt(Math.pow(q / 2, 2) + Math.pow(p / 3, 3))) - b / (3 * a);
  }

  // Determining Case
  if (discriminant < 0) { // three distinct roots 
    roots = trigonometricMethod(a, b, p, q);
  } else if (discriminant > 0) { // one real root and two complex roots
    roots = [cardanosMethod(a, b, p, q)];
  } else { // one real root with a double, or a triple root
    const rootOne = cardanosMethod(a, b, p, q);
    if (p === 0 && q === 0) {
      roots = [rootOne, rootOne, rootOne];
    } else {
      const rootTwo = Math.cbrt(q / 2) - b / (3 * a);
      roots = [rootOne, rootTwo, rootTwo];
    }
  }

  return roots;
}

export const App = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [c, setC] = useState<number>(0);
  const [d, setD] = useState<number>(0);

  // Saving history of a b c d inputs
  const [history, setHistory] = useState<Array<[number, number, number, number]>>([]);

  const handleSave = (): void => {
    setHistory(history.concat([[a, b, c, d]]));
  };

  const handleReplace = (a: number, b: number, c: number, d: number): void => { // when table row is clicked, updates values
    setA(a);
    setB(b);
    setC(c);
    setD(d);
  };

  // Derived States
  const p: number = (3 * a * c - Math.pow(b, 2)) / (3 * a * a);
  const q: number = (27 * a * a * d - 9 * a * b * c + 2 * Math.pow(b, 3)) / (27 * Math.pow(a, 3));
  const discriminant: number = (q / 2) * (q / 2) + (p / 3) * (p / 3) * (p / 3); // Math.pow() causes some issues in some cases
  const discRounded = Math.round(discriminant * 1e12) / 1e12; // round to avoid floating point error
  const roots: number[] = calculateRoots(a, b, p, q, discRounded);

  console.log(a, b, c, d, p, q, discriminant);

  return (
    <div className="min-h-screen bg-white text-[#2B4570] font-sans p-5">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        <div className="w-full px-2 md:px-0">
          <CubicInput
            a={a}
            b={b}
            c={c}
            d={d}
            setA={setA}
            setB={setB}
            setC={setC}
            setD={setD}
            onSave={handleSave}
          />
          <CubicEquation
            a={a}
            b={b}
            c={c}
            d={d}
          />
        </div>

        <section className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.4fr_1fr]">
          <div className="p-4">
            <CubicTable
              p={p}
              q={q}
              discriminant={discriminant}
              roots={roots}
            />
            <img id="cat" className="mt-16 mx-auto block max-h-[120px] hover:animate-spin hover:duration-500 hover:ease-linear" src={cat} alt="A cat on a computer" />
          </div>

          <div className="p-4">
            <CubicGraph
              a={a}
              b={b}
              c={c}
              d={d}
              roots={roots}
            />
          </div>

          <div className="p-4">
            <CubicHistory
              history={history}
              onSelect={handleReplace}
            />
          </div>
        </section>
      </div>
    </div>
  );
};
import { useState } from "react";
import { CubicInput } from "./components/CubicInput";
import { CubicEquation } from "./components/CubicEquation";
import { CubicTable } from "./components/CubicTable";
import { CubicGraph } from "./components/CubicGraph";
import { CubicHistory } from "./components/CubicHistory";
import { localMinMax } from "./utils/LocalMinMax";
import { calculateCubicRoots } from "./utils/CubicSolver";
import cat from "./images/cat.jpg";

export const App = () => {
  const [a, setA] = useState<number>(1);
  const [b, setB] = useState<number>(0);
  const [c, setC] = useState<number>(0);
  const [d, setD] = useState<number>(0);

  // Saving history of a b c d inputs (state + functions to pass as props)
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
  const roots: number[] = calculateCubicRoots(a, b, p, q, discRounded);
  const minMaxPoints = localMinMax([[a, 3], [b, 2], [c, 1], [d, 0]]);

  // if a is 0, then dont show other elements besides form + a note (using alert loops weirdly))
  if (a === 0) {
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
            <div className="mt-8 w-full max-w-4xl mx-auto">
              <h3 className="text-center text-2xl font-bold text-[DarkOrange]">a-value cannot be zero</h3>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
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
                minMaxPoints={minMaxPoints}
              />
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
              <img id="cat" className="mt-16 mx-auto block max-h-[120px] hover:animate-spin hover:duration-300 hover:ease-linear" src={cat} alt="A cat on a computer" />
            </div>
          </section>
        </div>
      </div>
    );
  }
};
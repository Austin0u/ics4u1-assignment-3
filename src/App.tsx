import { useState } from "react";
import { CubicInput } from "./components/CubicInput";
import { CubicEquation } from "./components/CubicEquation";
// import { CubicGraph } from "./components/CubicGraph";
// import { CubicHistory } from "./components/CubicHistory";
// import { CubicTable } from "./components/CubicTable";

export const App = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [c, setC] = useState<number>(0);
  const [d, setD] = useState<number>(0);

  // Derived States
  const p: number = (3 * a * c - Math.pow(b, 2)) / (3 * a * a);
  const q: number = (27 * a * a * d - 9 * a * b * c + 2 * Math.pow(b, 3)) / (27 * Math.pow(a, 3));
  const discriminant: number = (q / 2) * (q / 2) + (p / 3) * (p / 3) * (p / 3); // Math.pow() causes some issues in some cases


  console.log(a, b, c, d, p, q, discriminant);

  return (
    <div>
      <CubicInput
        a={a}
        b={b}
        c={c}
        d={d}
        setA={setA}
        setB={setB}
        setC={setC}
        setD={setD}
      />
      <CubicEquation
        a={a}
        b={b}
        c={c}
        d={d}
      />
    </div>
  );
};
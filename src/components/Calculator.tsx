import { useState } from "react";
import Button from "./Button";
import Screen from "./Screen";

const Calculator = () => {
  const [calc, setCalc]=useState("")

  return (
    <div className="flex flex-col align-baseline gap-8 h-screen">
      <h1 className="text-4xl">Calculadora em React</h1>
      <div className="h-1/2 w-96 bg-gradient-to-t from-indigo-500 to indigo-300 border-2 border-black ml-80">
        <Screen value={calc} />

        <div className="grid grid-flow-row grid-cols-4 grid-rows-4 gap-4 text-xl m-6">
          <Button value="1" onClick={() => setCalc(calc + "1")} />
          <Button value="2" onClick={() => setCalc(calc + "2")} />
          <Button value="3" onClick={() => setCalc(calc + "3")} />
          <Button value="+" onClick={() => setCalc(calc + "+")} />
          <Button value="4" onClick={() => setCalc(calc + "4")} />
          <Button value="5" onClick={() => setCalc(calc + "5")} />
          <Button value="6" onClick={() => setCalc(calc + "6")} />
          <Button value="-" onClick={() => setCalc(calc + "-")} />
          <Button value="7" onClick={() => setCalc(calc + "7")} />
          <Button value="8" onClick={() => setCalc(calc + "8")} />
          <Button value="9" onClick={() => setCalc(calc + "9")} />
          <Button value="*" onClick={() => setCalc(calc + "*")} />
          <Button value="0" onClick={() => setCalc(calc + "0")} />
          <Button value="." onClick={() => setCalc(calc + ".")} />
          <Button value="=" onClick={() => setCalc(eval(calc))} />
          <Button value="/" onClick={() => setCalc(calc + "/")} />
          <Button value="C" onClick={() => setCalc("")} />
        </div>
      </div>
    </div>
  );
}

export default Calculator
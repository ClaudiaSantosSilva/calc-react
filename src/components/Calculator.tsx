import Button from "./Button";

const Calculator = () => {
  return (
    <div className="flex flex-col gap-16 bg-yellow-300">
      <h1 className="text-xl">Calculadora em React</h1>
      <div className="h-96 w-96 bg-purple-300 border-2 border-black ml-40">
        <div className="grid grid-flow-row grid-cols-4 grid-rows-4 gap-4 text-xl m-2">
          <Button value="1" />
          <Button value="2" />
          <Button value="3" />
          <Button value="4" />
          <Button value="5" />
          <Button value="6" />
          <Button value="7" />
          <Button value="8" />
          <Button value="9" />
          <Button value="0" />
          <Button value="+" />
          <Button value="-" />
          <Button value="*" />
          <Button value="/" />
          <Button value="=" />
          <Button value="C" />
        </div>
      </div>
    </div>
  );
}

export default Calculator
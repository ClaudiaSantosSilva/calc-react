type buttonProps = {
  value: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" |"."| "+" | "-"|"*"|"/"|"C"|"=";
  onClick:()=>void  
};

const Button: React.FC<buttonProps> = ({value, onClick}) => {
  return (
    <div className="bg-white rounded-lg p-2" onClick={onClick}>
    {value}</div>
  )
}

export default Button
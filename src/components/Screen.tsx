type screenProps = {
  value: string;
};

const Screen:React.FC<screenProps> = ({value}) => {
  return (
    <div className="bg-black w-3/4 h-1/4 mt-4 mb-4 ml-12 rounded text-white text-2xl flex justify-center">
      <div className="m-auto">
      { value }
      </div>
    </div>
  )
}

export default Screen
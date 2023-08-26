type screenProps = {
  children: any;
};

const Screen:React.FC<screenProps> = ({children}) => {
  return (
    <div className="bg-black w-3/4 h-1/4 mt-4 mb-4 ml-12 rounded">
      { children }
    </div>
  )
}

export default Screen
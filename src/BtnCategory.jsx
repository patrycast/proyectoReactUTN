
const BtnCategory = ({text, category, functionFather}) => {
    
    const handleSetCategory= ()=>{
        functionFather(category)
    }

  return (
    <button onClick={handleSetCategory}>{text}</button>
  );
};

export default BtnCategory

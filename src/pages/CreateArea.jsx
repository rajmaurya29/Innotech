import React, {useState } from "react";
function CreateArea(props) {

  const[inputText,setInputText]=useState(["",""]);

  function handleInputTitle(event){
    
  
    let newInputText=["",""];
      newInputText[0]=inputText[0];
      newInputText[1]=inputText[1];
  
      if(event.target.name==='title'){
      newInputText[0]=event.target.value;
      }
      else if(event.target.name==='content'){
        newInputText[1]=event.target.value;
      }
      setInputText(newInputText);
  }

  return (
    <div>
      <form> 
        <input name="title" placeholder="Title" onChange={handleInputTitle} value={inputText[0]}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleInputTitle} value={inputText[1]}/>
        <button type="submit" onClick={(event)=>(props.arAddItem(inputText),setInputText(["",""]),event.preventDefault())}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

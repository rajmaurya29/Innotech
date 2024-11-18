import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

function Todo() {
  const [arStore,setArStore]=useState([]);
  function addItem(inputText){
    if(!(inputText[0]=='' && inputText[1]==''))
    setArStore((preValue)=>([...preValue,inputText]));
  
  }
  function deleted(id){
    setArStore((preValue)=>{return preValue.filter((item,index)=>{
      return index!=id;
    })})
  }
  return (
    <>
    <head>
        <style>
            {`
            * {
  padding: 0;
  margin: 0;
}
html {
  font-family: Arial, Helvetica, sans-serif;
}
body {
  background: #EBE3D5;
  padding: 0 16px;
}

header {
  background-color: #B0A695;
  margin: 0px -16px;
  padding: 16px 32px;
}

header h1 {
  color: #561884;
  text-align: center;
  font-family: cursive;
  font-weight: 200;
}
.note {
  background: #bab4b4;
  border-radius: 7px;
  padding: 10px;
  width: 240px;
  
  margin: 16px;
  margin-top: 29px;
  float: left;
}
.note h1 {
  font-size: 1.1em;
  margin-bottom: 6px;
}
.note p {
  font-size: 1.1em;
  margin-bottom: 10px;
}

.note button {
  position: relative;
  float: right;
  margin-right: 10px;
  color: #935f5f;
  width: 80px;
  height: 36px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

form {
  position: relative;
  width: 480px;
  margin: 30px auto 20px auto;
  background: #fff;
  padding: 15px;
  border-radius: 8px;
}
form input,form textarea {
  width: 100%;
  border: none;
  padding: 4px;
  outline: none;
  font-size: 1.2em;
  font-family: inherit;
  resize: none;
}
form button {
  position: absolute;
  right: 18px;
  bottom: -50px;
  background: #57544d;
  
  color: #fff;
  border: none;
  border-radius: 20%;
  width: 50px;
  height: 36px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  outline: none;
  margin-top: 10px;
  margin-bottom: 10px;
}
form button:hover{
  background-color: #935f5f;
  scale: 1.1;
  transition-duration: 200ms;
}`}
        </style>
    </head>
    <div>
      <Header />
      <CreateArea arAddItem={addItem}/>
      
    </div>
    {arStore.map((toDoItem,index)=>(<Note
    
    key={index}
    id={index}
    title={toDoItem[0]}
    content={toDoItem[1]}
    onDelete={deleted}
    
    />))}
    </>
  );
}

export default Todo;

import React, {useState} from "react";

function App() {

const [title, setTitle] = useState("Hello");
const [isOver, setOver] = useState(false);
function changeName(){
  setTitle("Submitted"); 
}

function changeOnOver(){
 setOver(true);
  }

  function changeOnOut(){
    setOver(false);
  }

  return (
    <div className="container">
      <h1>{title}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick = { changeName } style = {{backgroundColor : isOver ? "black" : "white"}}
     onMouseOver= { changeOnOver }
     onMouseOut = { changeOnOut }>Submit</button>
    </div>
  );
}

export default App;

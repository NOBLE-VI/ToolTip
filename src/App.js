

import { Component } from 'react';
import ToolTip from './Components/toolTip';
class App extends Component {


render(){


  return (
    <div className="App">
      <ToolTip position = {bottom}/>
    </div>
  );
}
}

export default App;
 

const top = {
position: "absolute",
border: "2px solid black",
width: 300,
top: -50,
left: 20,
borderRadius: 10,
padding: 5,

}


const bottom = {
  position: "absolute",
  border: "2px solid black",
  width: 250,
  bottom: -50,
  left: -60,
  borderRadius: 10,
  padding: 5,
  
  }

  
const right = {
  position: "absolute",
  border: "2px solid black",
  width: 300,
  top: 10,
  left: 220,
  borderRadius: 10,
  padding: 5,
  
  }

  
const left = {
  position: "absolute",
  border: "2px solid black",
  width: 250,
  top: 10,
  left: -270,
  borderRadius: 10,
  padding: 5,
  
  }
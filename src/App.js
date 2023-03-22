import "./App.css";
import "./component.css";
import ComputerBox from "./component/ComputerBox";
import UserBox from "./component/UserBox";
import { useState } from "react";
 

const choice = {
  rock:{
    name:"rock",
    img:"./images/rock.png"
  },
  scissors:{
    name:"scissors",
    img:"./images/scissors.png"
  },
  paper:{
    name:"paper",
    img:"./images/paper.png"
  }
}

function App() {
const [userSelect,setUserSelect]=useState(null);
const [computerChoice,serComputerChoice]=useState(null);
const [result,setResult]=useState("...");
//const [score,setScore]=useState(null);


const play=(userChoice)=>{
  setUserSelect(choice[userChoice]);
const computerChoice =randomChoice(); 
  serComputerChoice(computerChoice);
  setResult(judgment(choice[userChoice],computerChoice));
  //setScore(userCount(result));
}



/*const userCount =(uesrResult)=>{
  let userScore = 0;
  if(uesrResult==="WIN!"){
    userScore=userScore+1;
  }else if(uesrResult==="TIE" || uesrResult==="LOSE"){
    userScore = userScore
  };
  console.log(userScore)
  return userScore
}*/

const judgment =(user,computer)=>{
  if(user.name==computer.name){
    return "TIE"
  }else if(user.name==="rock")return computer.name==="scissors"? "WIN!":"LOSE"
  else if(user.name==="scissors")return computer.name==="paper"? "WIN!":"LOSE"
  else if(user.name==="paper")return computer.name==="rock"? "WIN!":"LOSE"
}

const randomChoice=()=>{
  let itemArray =Object.keys(choice);
  let randomItem = Math.floor(Math.random()*itemArray.length);
  let final = itemArray[randomItem];
  return choice[final];
}

  return (
    <div className="main">
      <div className="game">
        <div className="game-score">0:0</div>
        <div className="game-screen">
          <UserBox item={userSelect} />
          <div className="game-screen-line"></div>
          <ComputerBox item={computerChoice} />
        </div>
        <div className="game-but">
          <button onClick={()=>play("rock")}><img src="./images/rock icon.png"/></button>
          <button onClick={()=>play("scissors")}><img src="./images/scissors icon.png"/></button>
          <button onClick={()=>play("paper")}><img src="./images/paper icon.png"/></button>
        </div>
        <h2 className="game-result">{result}</h2>
      </div>
    </div>
  );
};

export default App;

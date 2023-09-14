
import "./App.css";
import "./component.css";
import { useEffect, useState } from "react";
 

//브금,눌렀을때 효과음 추가
//점수기록 마무리
//3점되면 유저승리 창 만들기 

const item = [
{
    name:"rock",
    img:"./images/rock.png"
  },
{
    name:"scissors",
    img:"./images/scissors.png"
  },
{
    name:"paper",
    img:"./images/paper.png"
  }
]

function App() {
let [user,setUser]=useState(
  {
    name:'',
    img:'',
    count:0,
    result:"...",
  }
);
let [computer,setComputer]=useState(
  {
    name:'',
    img:'',
    count:0
  }
);
let random =Math.floor(Math.random()*item.length)

function play(a){
  let copy ={...user}
    copy.name=item[a].name
    copy.img=item[a].img
    let copy2 ={...computer}
    copy2.name=item[random].name
    copy2.img=item[random].img
    setComputer(copy2)
    if(a==random){
      copy.result='TIE'
    }else if(a==0){
      if(random==1){
        copy.result='WIN!'
        copy.count++
      }else{
        copy.result='LOSE'
        copy2.count++
      }
    }else if(a==1){
      if(random==2){
        copy.result='WIN!'
        copy.count++
      }else{
        copy.result='LOSE'
        copy2.count++
      }
    }else if(a==2){
      if(random==0){
        copy.result='WIN!'
        copy.count++
      }else{
        copy.result='LOSE'
        copy2.count++
      }
    }
    setUser(copy)
}


  return (
    <div className="main">
      <div className="game">
        <div className="game-score">{user.count}:{computer.count}</div>
        <div className="game-screen">
        <div className='user-box'>
          <h2>you</h2>
          <Card select={user}/>
        </div>
          <div className="game-screen-line"></div>
          <div className='computer-box'>
          <h2>computer</h2>
           <Card select={computer}/>
          </div>
        </div>
        <div className="game-but">
          <button onClick={()=>play(0)}><img src="./images/rock icon.png"/></button>
          <button onClick={()=>play(1)}><img src="./images/scissors icon.png"/></button>
          <button onClick={()=>play(2)}><img src="./images/paper icon.png"/></button>
        </div>
        <h2 className="game-result">{user.result}</h2>
      </div>
    </div>
  );

  function Card({select}){
    return (
      <>
      <img className='item-img' src={select&&select.img}></img>
      <div>{select&&select.name}</div>
      </>
    )
  }

};




export default App;

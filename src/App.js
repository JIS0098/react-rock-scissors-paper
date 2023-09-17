
import "./App.css";
import { useEffect, useState } from "react";

const item = [
  {
    name: "rock",
    img: "./images/rock.png"
  },
  {
    name: "scissors",
    img: "./images/scissors.png"
  },
  {
    name: "paper",
    img: "./images/paper.png"
  }
]

function App() {
  let [user, setUser] = useState(
    {
      name: "rock",
      img: "./images/rock.png",
      count: 0,
      result: "...",
    }
  );
  let [computer, setComputer] = useState(
    {
      name: "rock",
      img: "./images/rock.png",
      count: 0
    }
  );
  let [result, setResult] = useState(false)
  let random = Math.floor(Math.random() * item.length)


  function reset() {
    let copy = { ...user }
    copy.name = 'rock'
    copy.img = "./images/rock.png"
    copy.result = '...'
    copy.count = 0
    setUser(copy)
    setComputer(copy)
    setResult(false)
  }

  function play(a) {
    let copy = { ...user }
    copy.name = item[a].name
    copy.img = item[a].img
    let copy2 = { ...computer }
    copy2.name = item[random].name
    copy2.img = item[random].img
    setComputer(copy2)
    if (a == random) {
      copy.result = 'TIE'
    } else if (a == 0) {
      if (random == 1) {
        copy.result = 'WIN!'
        copy.count++
      } else {
        copy.result = 'LOSE'
        copy2.count++
      }
    } else if (a == 1) {
      if (random == 2) {
        copy.result = 'WIN!'
        copy.count++
      } else {
        copy.result = 'LOSE'
        copy2.count++
      }
    } else if (a == 2) {
      if (random == 0) {
        copy.result = 'WIN!'
        copy.count++
      } else {
        copy.result = 'LOSE'
        copy2.count++
      }
    }
    setUser(copy)
  }

  useEffect(() => {
    if (user.count === 5) {
      setResult(true)
    } else if (computer.count === 5) {
      setResult(true)
    }
  }, [user, computer])
  return (
    <div className="main">
      <div className="title">
        <h1>Rock Scissors Paper</h1>
        <p>먼저 5점을 내면 승리합니다</p>
      </div>

      <div className='game'>
        {
          result === true && user.count === 5 ?
            <div className="game-modal">
              <h1>Player Win!</h1>
              <div onClick={() => reset()}>Replay</div>
            </div>
            : result === true && computer.count === 5 ?
              <div className="game-modal">
                <h1>Computer Win!</h1>
                <div onClick={() => reset()}>Replay</div>
              </div> : ""
        }
        <div className="game-header">
          <h2 className="game-score"> {user.count} : {computer.count}</h2>
          <button onClick={() => reset()}>reset</button>
        </div>
        <div className="game-screen">
          <div className='user-box'>
            <h2>player</h2>
            <Card select={user} />
          </div>
          <div className="game-screen-line"></div>
          <div className='computer-box'>
            <h2>computer</h2>
            <Card select={computer} />
          </div>
        </div>
        <div className="game-but">
          <button onClick={() => play(0)}><img src="./images/rock icon.png" /></button>
          <button onClick={() => play(1)}><img src="./images/scissors icon.png" /></button>
          <button onClick={() => play(2)}><img src="./images/paper icon.png" /></button>
        </div>
        <h2 className="game-result">{user.result}</h2>
      </div>
    </div>
  );

  function Card({ select }) {
    return (
      <>
        <img className='item-img' src={select && select.img}></img>
        <div>{select && select.name}</div>
      </>
    )
  }

};




export default App;

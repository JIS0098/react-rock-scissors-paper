import React from "react";

const ComputerBox = (props) => {
  return (
    <div className='computer-box'>
      <h2>computer</h2>
      <img className="computer-item-img" src={props.item&&props.item.img}></img>
      <div>{props.item&&props.item.name}</div>
    </div>
  );
};

export default ComputerBox;

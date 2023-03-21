import React from 'react'


const UserBox = (props) => {
  return (
    <div className='user-box'>
      <h2>you</h2>
      <img className='user-item-img' src={props.item && props.item.img}></img>
      <div>{props.item&&props.item.name}</div>
    </div>
  )
}

export default UserBox

import React from 'react';
import Icon from '../Icons/Icon';
import "./Card.css";
 function Card({gameEnd, player, onPlay, index}) {
    let icon = <Icon />
    if (player === 'O') {
        icon = <Icon name="circle" />
      } else if (player=== 'X') {   
        icon = <Icon name="cross" />
      } else{
        icon = <Icon name="pen" />
      }
  return (
    <>
      <div className="card" onClick={()=> !gameEnd  && player==='' && onPlay(index)}>
      {icon}</div>
    </>
  )
}
export default Card;
import React from 'react';
import '../Game.css'
import { GAME_STATE_PLAYING } from "../Constants";


const Footer = ({onNewGameClick, onSuggestClick, gameState}) => {
  const renderButtons =() => {
    if (gameState === GAME_STATE_PLAYING) {
      return <button onClick={onSuggestClick}>Suggest</button>
    }
    return <button onClick={onNewGameClick}>New Game</button>
  }
  return (
    <div className="panel footer">
      {
      /* {
        gameState === GAME_STATE_PLAYING &&
        <button onClick={onSuggestClick}>Suggest</button>
      }
      {
        gameState !== GAME_STATE_PLAYING &&
        <button onClick={onNewGameClick}>New Game</button>

      } */
        renderButtons()
      }
    </div>
  )
}

export default Footer
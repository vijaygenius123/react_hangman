import React, { useState, useEffect } from 'react';

import Header from './components/Header'
import Figure from './components/Figure'
import WrongLetters from './components/WrongLetters'
import Word from './components/Word'
import Popup from './components/Popup'
import Notification from './components/Notification'
import './App.css';


const words = ["application", "programming", "interface", "wizard"]

let selectedWord = words[Math.floor(Math.random() * words.length)]

let playable = true



function App() {

  const [playable, setPlayable] = useState(true)
  const [correctLetters, setCorrectLetters] = useState(['a'])
  const [wrongLetters, setWrongLetters] = useState(['b'])


  useEffect(() => {
    const handleKeyDown = event => {
      const { key, keyCode } = event
      if (playable) {
        if (keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase()
          if (selectedWord.includes(letter)) {
            if (!(correctLetters.includes(letter)))
              setCorrectLetters(correctLetters => [...correctLetters, letter]);
            else {
            }
          } else {
            if (!wrongLetters.includes(letter)) {
              setWrongLetters(wrongLetters => [...wrongLetters, letter]);
            }
            else {

            }
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)

  }, [playable, correctLetters, wrongLetters])

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>

    </>
  );
}

export default App;

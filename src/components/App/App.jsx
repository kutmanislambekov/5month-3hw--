import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { guessNumber, restartGame } from "../../store/actions/actions";

const App = () => {
  const dispatch = useDispatch();
  const { answer, over } = useSelector((state) => state);

  const [inputValue, setInputValue] = useState("");

  const onGuess = () => {
    const inputNumber = parseInt(inputValue);

    if (!isNaN(inputNumber)) {
      dispatch(guessNumber(inputNumber));
    }

    setInputValue("");
  };

  const onRestart = () => {
    dispatch(restartGame());
  };

  return (
    <div>
      <h1>Угадай число</h1>
      {over ? (
        <p>{answer}</p>
      ) : (
        <>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={onGuess}>Отгадать</button>
        </>
      )}
      <p>{answer}</p>
      <button onClick={onRestart}>Начать заново</button>
    </div>
  );
};

export default App;
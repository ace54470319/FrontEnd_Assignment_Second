import { useState } from 'react';
import LikeApp from './Like/LikeApp';
import InputFocusApp from './Input_Focus/InputFocusApp';

function App() {
  const [chooseProblem, setChooseProblem] = useState(0);

  function changeProblem(value) {
    setChooseProblem(value);
  }
  return (
    <div className="App">
      {[1, 2, 3].map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              changeProblem(index + 1);
            }}
          >
            문제{index + 1}
          </button>
        );
      })}
      {chooseProblem == 1 && <LikeApp></LikeApp>}
      {chooseProblem == 2 && <InputFocusApp></InputFocusApp>}
    </div>
  );
}

export default App;

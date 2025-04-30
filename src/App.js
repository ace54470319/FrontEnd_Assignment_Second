import { useState } from 'react';
import LikeApp from './Like/LikeApp';
import InputFocusApp from './Input_Focus/InputFocusApp';

function App() {
  const [chooseProblem, setChooseProblem] = useState(0);

  const propsState = {
    chooseProblem,
    setChooseProblem,
  };
  return (
    <div className="App">
      <Problem_Filter {...propsState}></Problem_Filter>
      {chooseProblem == 1 && <LikeApp></LikeApp>}
      {chooseProblem == 2 && <InputFocusApp></InputFocusApp>}
      {chooseProblem == 3 && <></>}
    </div>
  );
}

function Problem_Filter(props) {
  function changeProblem(value) {
    props.setChooseProblem(value);
  }
  return (
    <div>
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
    </div>
  );
}

export default App;

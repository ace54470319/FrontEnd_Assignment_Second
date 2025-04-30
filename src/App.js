import { useState } from 'react';
import LikeApp from './Like/LikeApp';

function App() {
  const [chooseProblem, setChooseProblem] = useState(0);

  return (
    <div className="App">
      <button
        onClick={() => {
          setChooseProblem(1);
        }}
      >
        문제1
      </button>
      {chooseProblem == 1 && <LikeApp></LikeApp>}
    </div>
  );
}

export default App;

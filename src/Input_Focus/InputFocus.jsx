import { useEffect, useRef, useState } from 'react';

function InputFocus() {
  const focusInput = useRef(null);
  const [count, setCount] = useState('');
  useEffect(() => {
    focusInput.current.focus();
  }, []);

  const changeCount = (e) => {
    setCount(e.target.value);
  };
  return (
    <div>
      <div>
        텍스트 입력 : <input onChange={changeCount} type="text" ref={focusInput} />
      </div>
      <span>현재 텍스트 길이 : {count.length}</span>
    </div>
  );
}

export default InputFocus;

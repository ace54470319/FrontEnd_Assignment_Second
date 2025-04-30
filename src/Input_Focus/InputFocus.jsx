import { useEffect, useRef } from 'react';

function InputFocus() {
  const focusInput = useRef(null);
  useEffect((e) => {
    //alert('내용 입력하시오.');
    return focusInput.current.focus();
  }, []);
  return (
    <div>
      텍스트 입력 : <input type="text" ref={focusInput} />
    </div>
  );
}

export default InputFocus;

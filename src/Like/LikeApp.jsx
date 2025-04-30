import React, { useState } from 'react';
import LikeButton from './LikeButton';

function LikeApp() {
  const [like, setLike] = useState(0);
  const propsState = {
    like,
    setLike,
  };
  return (
    <div>
      <LikeButton {...propsState}></LikeButton>
    </div>
  );
}

export default LikeApp;

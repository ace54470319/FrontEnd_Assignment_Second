import React, { useState } from 'react';
import styles from './LikeButton_styles';

function LikeApp() {
  const [like, setLike] = useState(0);
  return (
    <div>
      <span
        style={{
          ...styles,
          ...(like >= 10 ? styles.redText : styles.blueText),
        }}
      >
        {like}
      </span>
      <span
        onClick={() => {
          setLike((prev) => prev + 1);
        }}
        style={styles}
      >
        👍
      </span>
    </div>
  );
}

export default LikeApp;

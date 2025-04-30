import React from 'react';
import styles from './LikeButton_styles';

function LikeButton(props) {
  return (
    <div>
      <span
        style={{
          ...styles,
          ...(props.like >= 10 ? styles.redText : styles.blueText),
        }}
      >
        {props.like}
      </span>
      <span
        onClick={() => {
          props.setLike((prev) => prev + 1);
        }}
        style={styles}
      >
        👍
      </span>
    </div>
  );
}

export default LikeButton;

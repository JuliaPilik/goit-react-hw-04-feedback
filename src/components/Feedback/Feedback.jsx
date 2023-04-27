import React from 'react';
import css from './Feedback.module.css';

export default function FeedbackOptions({ onLeaveFeedback, options }) {
  const optionsName = options;
  return (
    <div className="Feedback__options">
      {optionsName.map(option => (
        <button
          type="button"
          className={css.button}
          id={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

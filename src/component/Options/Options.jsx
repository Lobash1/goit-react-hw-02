import css from './Options.module.css';

export default function Options({ onLeaveFeedback, totalFeedback, onReset }) {
  return (
    <div className={css.container}>
      <button onClick={() => onLeaveFeedback('good')} className={css.btn}>
        Good
      </button>
      <button onClick={() => onLeaveFeedback('neutral')} className={css.btn}>
        Neutral
      </button>
      <button onClick={() => onLeaveFeedback('bad')} className={css.btn}>
        Bad
      </button>

      {totalFeedback > 0 && (
        <button className={css.btn} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}

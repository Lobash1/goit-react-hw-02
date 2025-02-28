import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import css from './App.module.css';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

export default function App() {
  // Ініціалізація стану з локального сховища
  const getSaved = () => {
    const saved = localStorage.getItem('feedback');
    return saved ? JSON.parse(saved) : { good: 0, neutral: 0, bad: 0 };
  };
  // Використовуємо useState для зберігання стану
  const [feedback, setFeedback] = useState(getSaved);

  // Використовуємо useEffect для запису в локальне сховище при зміні feedback
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  //обновляem состояние (feedback) при клике на кнопку.
  const updateFeedback = (feedbackType) => {
    setFeedback((prevState) => {
      const newFeedback = {
        ...prevState,
        [feedbackType]: prevState[feedbackType] + 1,
      };
      // Запис в локальне сховище після зміни стану
      localStorage.setItem('feedback', JSON.stringify(newFeedback));
      return newFeedback;
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const pozitivFeedback =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;
  //reset
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={css.container}>
      <Description />
      <Options
        onLeaveFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        onReset={resetFeedback}
      />

      {totalFeedback === 0 ? (
        <Notification message="No feedback yet" />
      ) : (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positivePercentage={pozitivFeedback}
        />
      )}
    </div>
  );
}

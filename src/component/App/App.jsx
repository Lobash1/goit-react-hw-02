import { useState } from 'react';
// import Accordion from '../Accordion/Accordion';
// import Reader from '../Reader/Reader';
import css from './App.module.css';
import articles from '../../articles.json';
// import Counter from '../Counter/Counter';
// import CountDisplay from '../CountDisplay/CountDisplay';

// const accordionItems = [
//   {
//     title: 'How does an accordion work?',
//     content:
//       'An accordion allows users to expand and collapse sections of content, typically showing only one open section at a time.',
//   },
//   {
//     title: 'What are the benefits of using an accordion?',
//     content:
//       'Accordions help organize content efficiently, reduce scrolling, and improve user experience by displaying only relevant information.',
//   },
//   {
//     title: "Can an accordion be styled to match a website's design?",
//     content:
//       'Yes, accordions can be fully customized with CSS or component libraries to fit the look and feel of any website.',
//   },
//   {
//     title: 'How to create an accordion in React?',
//     content:
//       'In React, you can create an accordion using state to track the open section and conditionally render content.',
//   },
//   {
//     title: 'Are there any ready-made libraries for accordions?',
//     content:
//       'Yes, libraries like Material-UI, Bootstrap, and React-Accordion provide pre-built accordion components for easy implementation.',
//   },
// ];

export default function App() {
  const [values, setValues] = useState({
    x: 0,
    y: 0,
  });
  const updateX = () => {
    setValues({
      ...values,
      x: values.x + 1,
    });
  };
  const updateY = () => {
    setValues({
      ...values,
      y: values.y + 1,
    });
  };
  return (
    <div className={css.container}>
      <h1 className={css.title}>React</h1>
      <p>
        x: {values.x}, y: {values.y}
      </p>
      <button onClick={updateX}>Update x</button>
      <button onClick={updateY}>Update y</button>
    </div>
  );
}

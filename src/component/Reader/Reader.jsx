// import { useState } from 'react';
// import styles from './Reader.module.css';

// export default function Reader({ items }) {
//   const [selectedIdx, setSelectedIdx] = useState(0);

//   const handlePrev = () => {
//     setSelectedIdx(selectedIdx - 1);
//   };

//   const handleNext = () => {
//     setSelectedIdx(selectedIdx + 1);
//   };

//   const currentArticle = items[selectedIdx];
//   const isFirstEl = selectedIdx === 0;
//   const isLastEl = selectedIdx === items.length - 1;

//   return (
//     <div className={styles.container}>
//       <header className={styles.header}>
//         <div className={styles.controls}>
//           <button
//             className={styles.button}
//             onClick={handlePrev}
//             disabled={isFirstEl}
//           >
//             Prev
//           </button>
//           <button
//             className={styles.button}
//             onClick={handleNext}
//             disabled={isLastEl}
//           >
//             Next
//           </button>
//         </div>
//         <p className={styles.progress}>
//           {selectedIdx + 1}/{items.length}
//         </p>
//       </header>

//       <article className={styles.article}>
//         <h2 className={styles.title}>{currentArticle.topic}</h2>
//         <p className={styles.text}>{currentArticle.text}</p>
//       </article>
//     </div>
//   );
// }

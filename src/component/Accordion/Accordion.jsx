// import { useState } from 'react';
// import css from './Accordion.module.css';

// export default function Accordion({ items }) {
//   const [selectedIdx, setSelectedIdx] = useState(-1);

//   const changeIndex = (value) => {
//     setSelectedIdx(selectedIdx === value ? -1 : value);
//   };

//   return (
//     <div className={css.accordion}>
//       {items.map((item, index) => (
//         <div key={index} className={css.item}>
//           <button className={css.button} onClick={() => changeIndex(index)}>
//             {item.title}
//           </button>
//           {index === selectedIdx && (
//             <div className={css.content}>
//               <p>{item.content}</p>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

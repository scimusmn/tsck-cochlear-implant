// import React, { forwardRef, useContext } from 'react';
// import * as styles from '@styles/modules/secondaryinfo.module.scss';
// import { LOCALES } from '@content/locales';
// import LocaleContext from '@context/LocaleContext';
// import cochlearEng from '@utils/images/cochlear-eng.png';
// import cochlearArb from '@utils/images/cochlear-ar.png';

// const SecondaryInfo = forwardRef((props, ref) => {
//   // const { locale } = useContext(LocaleContext);
//   const imgSrc = locale === LOCALES.ARABIC ? cochlearArb : cochlearEng;

//   const closeModal = () => {
//     if (ref.current) {
//       const container = ref.current;
//       container.style.visibility = 'hidden';
//     }
//   };

//   return (
//     <div ref={ref} className={styles.secondaryContainer}>
//       <div className={styles.imageContainer}>
//         <img className={styles.image} alt="cochlear-how-to" src={imgSrc} />
//         <span
//           role="button"
//           tabIndex={0}
//           onKeyDown={closeModal}
//           onClick={closeModal}
//           className={styles.cross}
//         >
//           &#10006;
//         </span>
//       </div>
//     </div>
//   );
// });

// export default SecondaryInfo;

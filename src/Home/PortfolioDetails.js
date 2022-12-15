// import React from 'react';

// const PortfolioDetails = ({ isVisible, onClose, sites }) => {

//   console.log(sites);
//   const { detail } = sites;
//   // console.log(detail);

//   if (!isVisible) return null;

//   const handleClose = (e) => {
//     if (e.target.id === 'wrapper') onClose()
//   }

//   return (
//     <div>
//       <div id='wrapper' onClick={handleClose} className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
//         <div className='w-[600px] flex flex-col'>
//           <button onClick={() => onClose()} className='text-white text-xl place-self-end'>X</button>
//           <div className='text-white text-xl bg-gray-800 rounded'>
//             <h4 className='px-10 py-4'>
//               Protected Routes || Login & Register Functionality with Firebase || Courses data load from database etc.
//               {detail}
//             </h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PortfolioDetails;
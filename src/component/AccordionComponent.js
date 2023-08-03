// import React, { useState } from 'react';
// import { Accordion, AccordionTab } from 'primereact/accordion';

// const AccordionComponent = () => {
//   const [sections, setSections] = useState([]);
//   const [sectionHeader, setSectionHeader] = useState('');
//   const [sectionDetails, setSectionDetails] = useState('');

//   const handleAddSection = () => {
//     if (sectionHeader && sectionDetails) {
//       const newSection = { header: sectionHeader, details: sectionDetails };
//       setSections([...sections, newSection]);
//       setSectionHeader('');
//       setSectionDetails('');
//     }
//   };

//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           placeholder="Section Header"
//           value={sectionHeader}
//           onChange={(e) => setSectionHeader(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Section Details"
//           value={sectionDetails}
//           onChange={(e) => setSectionDetails(e.target.value)}
//         />
//         <button onClick={handleAddSection}>Add</button>
//       </div>

//       <Accordion>
//         {sections.map((section, index) => (
//           <AccordionTab key={index} header={section.header}>
//             {section.details}
//           </AccordionTab>
//         ))}
//       </Accordion>
//     </>
//   );
// };

// export default AccordionComponent;

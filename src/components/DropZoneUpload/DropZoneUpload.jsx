// import React from 'react';
// // import {useDropzone} from 'react-dropzone';
// import './dropzone.scss'

// export default function Basic(props) {
//   const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
//   const files = acceptedFiles.map(file => (
//     <li key={file.path}>
//       {file.path} - {file.size} bytes
//     </li>
//   ));

//   return (
//     <section className="dorp_zone_upload">
//       <div {...getRootProps({className: 'dropzone'})}>
//         <input {...getInputProps()} />
//         <p className='text big' >Drop your files here or <span className='darkName'>browse</span> </p>
//         <p className='text light' >Maximum size: 50MB </p>
//       </div>
//       <aside>
//         {/* <h4 className='' >Files</h4> */}
//         <ul>{files}</ul>
//       </aside>
//     </section>
//   );
// }

// <Basic />
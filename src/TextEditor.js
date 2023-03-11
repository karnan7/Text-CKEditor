// import React, { useState } from 'react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { Container } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import parse from 'html-react-parser';

// const App = () => {
//   const [lines, setLines] = useState([]);
//   const [comments, setComments] = useState([]);

//   const handleOnChange = ( e, editor) =>{
//     const data = editor.getData();
//     const linesArray = data.split('.').map(line => line.trim());
//     setLines(linesArray);
//     setComments(Array(linesArray.length).fill([]));
//   };

//   const handleAddComment = (index) => {
//     const newComment = prompt('Enter your comment:');
//     setComments(comments.map((c, i) => i === index ? [...c, newComment] : c));
//   };

//   return(
//     <Container>
//       <h1 className='text-center mt-5  text-white bg-danger bg-gradient'>TEXT EDITOR</h1>
//       <CKEditor
//         editor={ ClassicEditor }
//         onChange={handleOnChange}
//       />
//       <div className='m-5'>
//         {lines.map((line, index) => (
//           <div key={index}>
//             <p>{parse(line)}</p>
//             <button onClick={() => handleAddComment(index)}>Add Comment</button>
//             {comments[index].map((comment, i) => (
//               <p key={i}>{comment}</p>
//             ))}
//           </div>
//         ))}
//       </div>
//     </Container>
//   );
// };

// export default App;

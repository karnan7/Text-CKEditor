import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import parse from 'html-react-parser';

const App = () => {
  const[text, setText] = useState("")

  const handleOnChange = ( e, editor) =>{
    const data = editor.getData()
    setText(data)
  }
  return(
    <Container>
      <h1 className='text-center mt-5  text-white bg-danger bg-gradient'>TEXT EDITOR</h1>
      <CKEditor
        editor={ ClassicEditor }
        onChange={handleOnChange}
      />
      <div className='m-5'>
        {parse(text)}
      </div>
    </Container>
  )
}

export default App;
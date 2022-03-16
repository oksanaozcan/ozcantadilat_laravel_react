import axios from 'axios';
import { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const PostForm = ({getPosts}) => {
  const [title, setTitle] = useState('');
  // const [category_id, setCategoryId] = useState(null);
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  ); 
  const [previewImage, setPreviewImage] = useState({file: null});
    
  const store = (e) => {
    e.preventDefault();

    let content = convertToHTML(editorState.getCurrentContent());

    let data = new FormData();
    data.append('title', title);
    data.append('content', content);
    data.append('preview_image', previewImage);
    
    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
    }

    axios.post('/api/posts/store', data, config)
    .then(res => {
      getPosts();
    })
    .catch(error => console.log(error.res))
    
  }

  return (
    <div className="card mt-1">
      <div className="card-body">
        <h5 className="card-title pb-1">Create New Post</h5>
        <form onSubmit={store}>

          <div className="form-group mb-3">
            <input type="text" className="form-control" placeholder="Enter Title of Post" name="title" value={title} onChange={e => setTitle(e.target.value)}/>       
          </div>

          <div className="form-group mb-3">
            <Editor 
              editorState={editorState}
              onEditorStateChange={setEditorState}
              wrapperClassName="border border-secondary"
              editorClassName="bg-light"
              toolbarClassName="bg-secondary"
            />     
          </div>

          <div className="form-group mb-3 mt-3">
            <div className='mb-1'>
              <label htmlFor="preview_image">Preview Image </label>
            </div>            
            <input type="file" id='preview_image' className="form-control-file" name='preview_image' onChange={e => setPreviewImage({file:e.target.files[0]})}/>
          </div>      

          <div className="d-block">
            <button type="submit" className="btn btn-primary btn-lg btn-block mt-1 w-100">Submit</button> 
          </div>                   
        </form>            
      </div>
    </div>   
  )
}

export default PostForm;
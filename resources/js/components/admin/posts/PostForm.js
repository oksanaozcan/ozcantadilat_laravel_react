import axios from 'axios';
import { useState, useCallback, useEffect } from 'react';
import { EditorState } from 'draft-js';
import {useDropzone} from 'react-dropzone';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import Select from 'react-select';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { getFields } from '../../../helpers/helperFunctions';

const PostForm = ({categories, tags}) => {
  const [title, setTitle] = useState('');  
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  ); 
  const [dropedFiles, setDropedFiles] = useState([]);   
  const [selectedCategory, setSelectedCategory] = useState({id: ''});  
  const [selectedTags, setSelectedTags] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    setDropedFiles(state => [...state, ...acceptedFiles])
  }, [])  
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({onDrop});
     
  const store = (e) => {
    e.preventDefault();    
    let content = convertToHTML(editorState.getCurrentContent());
    let tagIdx = getFields(selectedTags);

    let data = new FormData();
    data.append('title', title);
    data.append('content', content);
    dropedFiles.forEach(file => {
      data.append('preview_image', file)      
    })    
    data.append('category_id', selectedCategory.id)
    tagIdx.forEach(id => {
      data.append('tags[]', id)
    })
    
    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
    }
    axios.post('/api/admin/posts/store', data, config)
    .then(res => {
      if (res.status == 200) {
        setTitle('');
        setEditorState(() => EditorState.createEmpty());
        setDropedFiles([]);
        setSelectedCategory({id: ''});
        setSelectedTags([]);
      }
    })
    .catch(error => console.log(error.res))    
  }  

  const files = dropedFiles.map((file, i) => (
    <li className={`list-group-item ${
        i+1 == dropedFiles.length ?
        'text-success' : 
        'text-danger'
    }`} key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

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

          <div {...getRootProps({className: 'dropzone'})} className="bg-secondary text-light p-3 btn">
            <input {...getInputProps()} />
            <p>Drag 'n' drop <strong>only 1</strong> preview image, or click to select files</p>
          </div>  
          <div>
            <ul className='list-group'>{files}</ul>
          </div> 

          <div className='form-group  mt-5 mb-3'>          
            <label htmlFor="select_category" className="form-label">Select Category</label>
            <select id='select_category' className="form-select" 
              name='category_id' 
              value={selectedCategory.id} 
              onChange={e => setSelectedCategory({id: e.target.value})}
            >         
              <option value={''}>No category</option>
              {
                categories.map(item => (
                  <option key={item.id} value={item.id}>{item.title}</option>
                ))
              }      
            </select> 
          </div>

          <div className='form-group  mt-3 mb-5'>
            <label htmlFor="select_tags" className="form-label">Select #Tags</label>
            <Select
              name='tags[]'
              id='select_tags'
              className='mb-5'
              isMulti
              defaultValue={selectedTags}
              onChange={setSelectedTags}            
              getOptionLabel={option => option.title}
              getOptionValue={option => option.id}
              options={tags}              
            />
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


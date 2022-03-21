import axios from 'axios';
import {useState, useEffect, useCallback} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { EditorState } from 'draft-js';
import {useDropzone} from 'react-dropzone';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import Select from 'react-select';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { createStateToDraft, getFields, getPreviewImage } from '../../helpers/helperFunctions';

const PostEditForm = ({categories, tags}) => {
  const {postId} = useParams();
  let navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [editorState, setEditorState] = useState(() => EditorState.createWithContent(createStateToDraft('')));
  const [dropedFiles, setDropedFiles] = useState([]);  
  const [selectedCategory, setSelectedCategory] = useState({id: ''});  
  const [selectedTags, setSelectedTags] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    setDropedFiles(state => [...state, ...acceptedFiles])
  }, [])  
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({onDrop});

  const getPost = () => {
    axios.get(`/api/posts/${postId}`)
    .then(res => {
      setTitle(res.data.data.title);               
      setEditorState(() => EditorState.createWithContent(createStateToDraft(res.data.data.content)));
      setDropedFiles(state => [...state, ...res.data.data.images])
      setSelectedCategory({id: res.data.data.category_id})
      setSelectedTags([...res.data.data.tags])
    })
    .catch(error => console.log(error.res))
  }

  useEffect(() => {
    getPost();
  }, []);  

  const update = (e) => {
    e.preventDefault();

    let content = convertToHTML(editorState.getCurrentContent());
    let newPrev = getPreviewImage(dropedFiles);
    let tagIdx = getFields(selectedTags);

    let data = new FormData();
    data.append('title', title);
    data.append('content', content);       
    data.append('preview_image', newPrev);
    data.append('category_id', selectedCategory.id)
    tagIdx.forEach(id => {
      data.append('tags[]', id)
    })
    
    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
    }

    axios.patch(`/api/posts/${postId}`, data, config)
    .then(res => {
      // navigate('/admin/posts');
    })
    .catch(error => console.log(error.res))      
  }

 
  const files = dropedFiles.map((file, i) => (
    <li className={`list-group-item ${
        i+1 == dropedFiles.length ?
        'text-success' : 
        'text-danger'
    }`} key={i}>
       <img src={file.preview_url} alt='new preview image'/> |
         -{file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="card mt-1">
      <div className="card-body">
        <h5 className="card-title pb-1">Edit Post</h5>
        <form onSubmit={update}>
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
              name="content"
            />     
          </div>

          <div {...getRootProps({className: 'dropzone'})} className="bg-secondary text-light p-3 btn">
            <input {...getInputProps()} />
            <p>Drag 'n' drop <strong>only 1</strong> preview image, or click to select files</p>
          </div>  
          <div>
            {files}
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
              value={selectedTags}
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

export default PostEditForm;
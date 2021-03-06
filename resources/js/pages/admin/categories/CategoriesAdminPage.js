import axios from 'axios';
import {useState, useEffect} from 'react';
import CategoriesList from "../../../components/admin/categories/CategoriesList";
import CategoryForm from "../../../components/admin/categories/CategoryForm";

const CategoriesAdminPage = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    axios.get('/api/admin/categories')
    .then(res => {
      setCategories(res.data.data);
    })
  }
  
  useEffect(() => {
    getCategories()
  }, []);

  const deleteCategory = (id) => {
    axios.delete(`/api/admin/categories/${id}`)
    .then(res => {})
    .catch(error => console.log(error.res))
  }

  return (
    <div className="container">
      <div className="row">
      <div className="col-6 col-md-4">
          Info
        </div>
        <div className="col-12 col-md-8">
          <CategoryForm getCategories={getCategories}/>
        </div>        
      </div>
      <div className="row">
        <div className="col-12">
          <CategoriesList categories={categories} deleteCategory={deleteCategory} getCategories={getCategories}/>
        </div>       
      </div>
      <div className="row align-items-end">        
        <div className="col-md-6 offset-md-3">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex="-1">Previous</a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default CategoriesAdminPage;
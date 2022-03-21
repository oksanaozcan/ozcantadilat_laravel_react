import PostEditForm from "../../../components/posts/PostEditForm";

const PostEditPage = ({categories, tags}) => {
  return (
    <div className="container">
      <div className="row align-items-center page">
        <div className="col">
          <PostEditForm categories={categories} tags={tags}/>
        </div>        
      </div>
    </div>
  )
}

export default PostEditPage;
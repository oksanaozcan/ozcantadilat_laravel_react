import PostForm from "../../../components/admin/posts/PostForm"

const PostCreatePage = ({categories, tags}) => {
  return (
    <>
      <PostForm categories={categories} tags={tags}/>
    </>    
  )
}

export default PostCreatePage;
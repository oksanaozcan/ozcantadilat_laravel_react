import UserEditForm from "../../../components/users/UserEditForm";

const UserEditPage = ({roles}) => {
  return (
    <div className="container">
      <div className="row align-items-center page">
        <div className="col">
          <UserEditForm roles={roles}/>
        </div>        
      </div>
    </div>
  )
}

export default UserEditPage;
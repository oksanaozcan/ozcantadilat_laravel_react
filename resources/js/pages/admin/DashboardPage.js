import { useEffect, useState } from "react";
import Infobox from "../../components/Infobox";
import { CardImage, FilePost, People, ChatDots } from "react-bootstrap-icons";
import axios from "axios";

const DashboardPage = () => {
  const [info, setInfo] = useState({
    posts: null,
    users: null
  });

  useEffect(() => {
    getMainInfo();
  }, []);

  const getMainInfo = () => {
    axios.get('/api/admin')
    .then(res => {
      setInfo({
        posts: res.data.posts,
        users: res.data.users
      })
    })
    .catch(error => console.log(error.res));
  }

  return (
    <div className="container">
  <div className="row">
    <div className="col-sm">
      <Infobox val={150} title={'Images'} colorClass={'bg-info'} icon={<CardImage className="text-muted" size={70}/>} route={'#'}/>
    </div>
    <div className="col-sm">
      <Infobox val={info.posts} title={'Posts'} colorClass={'bg-success'} icon={<FilePost className="text-muted" size={70}/>} route={'posts'}/>
    </div>
    <div className="col-sm">
      <Infobox val={info.users} title={'Users'} colorClass={'bg-warning'} icon={<People className="text-muted" size={70}/>} route={'users'}/>
    </div>
    <div className="col-sm">
      <Infobox val={23} title={'Comments'} colorClass={'bg-danger'} icon={<ChatDots className="text-muted" size={70}/>} route={'#'}/>
    </div>
  </div>
</div>
  )
}

export default DashboardPage;
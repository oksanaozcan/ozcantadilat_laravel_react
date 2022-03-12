import Infobox from "../../components/Infobox";
import { CardImage, FilePost, People, ChatDots } from "react-bootstrap-icons";

const DashboardPage = () => {
  return (
    <div className="container">
  <div className="row">
    <div className="col-sm">
      <Infobox val={150} title={'Images'} colorClass={'bg-info'} icon={<CardImage className="text-muted" size={70}/>} route={'#'}/>
    </div>
    <div className="col-sm">
      <Infobox val={25} title={'Posts'} colorClass={'bg-success'} icon={<FilePost className="text-muted" size={70}/>} route={'#'}/>
    </div>
    <div className="col-sm">
      <Infobox val={10} title={'Users'} colorClass={'bg-warning'} icon={<People className="text-muted" size={70}/>} route={'#'}/>
    </div>
    <div className="col-sm">
      <Infobox val={23} title={'Comments'} colorClass={'bg-danger'} icon={<ChatDots className="text-muted" size={70}/>} route={'#'}/>
    </div>
  </div>
</div>
  )
}

export default DashboardPage;
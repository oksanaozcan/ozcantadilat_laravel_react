import { ArrowRight, CardImage } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';

const Infobox = ({val, title, colorClass, icon, route}) => {
  return (
    <div className={`small-box ${colorClass}`}>
      <div className="inner p-3">
        <h3>{val}</h3>
        <p>{title}</p>
      </div>
      <div className="icon">
        {icon}
      </div>
      <Link to={route} className="small-box-footer">More info <ArrowRight/> </Link>
    </div>
  )
}

export default Infobox;
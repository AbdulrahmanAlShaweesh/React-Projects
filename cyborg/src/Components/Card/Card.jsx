import "./Card.css";

import popular_01 from "../../assets/images/popular-01.jpg";
const Card = (props) => {
  return (
    <div key={props.id} className="most-popular-item">
      <div className="card-wrapper">
        <img src={props.image} className="most-popular-item-image" />
        <div className="most-popular-item-content">
          <h4 className="most-popular-item-title">
            {props.title} <p>{props.category}</p>
          </h4>
          <ul>
            <li>
              <span>{props.rating}</span>
            </li>
            <li>
              <span>{props.downloaded}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;

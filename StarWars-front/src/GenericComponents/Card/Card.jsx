import './Card.scss'

const Card = (props) => {
  return (
    <div className="container">
      <div>
        <p>{props.name}</p>
      </div>

      <div>{props.children}</div>
    </div>
  );
};

export default Card;
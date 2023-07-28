import './Card.scss'

const Card = (props) => {
  return (
    <div className="container">
      <div>
        <p>{props.name || props.title}</p>
      </div>

      <div>{props.children}</div>
    </div>
  );
};

export default Card;
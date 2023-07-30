import './Card.scss'
// import '../../../public/Assets';

const Card = (props) => {
  return (
    <div className="container">
      <div>
        <p>{props.name || props.title}</p>
      </div>
      {/* <img src="StarWars-front/public/Assets/planets1.svg" alt="" /> */}
      <div>{props.children}</div>
    </div>
  );
};

export default Card;
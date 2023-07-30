import './Card.scss'
// import planetsSVG from './../Assets/planet'


const svgMap = {
  // 'container-planet-card': planetsSVG,

};


const Card = (props) => {
  const cardClassName = `container-${props.type}-card`;
  const svgToRender = svgMap[cardClassName];

  return (
    <div className={`container ${cardClassName}`}>
      {svgToRender && (
        <div className="svg-background">
          <img src={svgToRender} alt="SVG" />
        </div>
      )}

      <div>
        <p>{props.name || props.title}</p>
      </div>

      <div>{props.children}</div>
    </div>
  );
};

export default Card;
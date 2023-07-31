import './Card.scss'
import planetsSVG from '../Assets/planets.svg';
import personSVG from '../Assets/characters.svg';
import filmSVG from '../Assets/films.svg';
import vehicleSVG from '../Assets/vehicles.svg'

const svgMap = {
  'container-planet-card': planetsSVG,
  'container-person-card': personSVG,
  'container-films-card': filmSVG,

  'container-vehicle-card': vehicleSVG,

};


const Card = (props) => {
  const cardClassName = `container-${props.type}-card`;
  const svgToRender = svgMap[cardClassName];

  return (
    <div className={`container ${cardClassName}`}>
      {svgToRender && (
        <div className="svg-background">
          <img src={svgToRender} alt="SVG" className="card-svg"/>
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
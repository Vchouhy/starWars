import Card from '../Card/Card';
import { useSelector } from 'react-redux';

const Container = () => {
  const people = useSelector((state) => state.people);
  return (
    <div>
      {people.map((person) => {
        return <Card 
        name={person.name} 
        films={person.films} 
        birth_year={person.birth_year} />;
      })}
    </div>
  );
};

export default Container;
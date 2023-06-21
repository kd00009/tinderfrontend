import React from 'react'
import TinderCard from 'react-tinder-card'
import './Tindercard.css'
import axios from './Axios.js'
const TinderCards = () => {
    const [people, setPeople] = React.useState([]);
  
    React.useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/tinder/cards');
      setPeople(req.data);
    }
    fetchData();
    },[])
    const onSwipe = (direction, person) => {
      console.log(`You swiped ${direction} on ${person.name}`);
    };
  
    const onCardLeftScreen = (person) => {
      console.log(`${person.name} left the screen`);
    };
  
    return (
      <div className='tindercard-container'>
        {people.map((person) => (
          <TinderCard
          className='swipe'
            key={person.name}
            onSwipe={(dir) => onSwipe(dir, person.name)}
            onCardLeftScreen={() => onCardLeftScreen(person.name)}
            preventSwipe={['up', 'down']}
          >
            <div className='card'>
              <h2>{person.name}</h2>
              <img src={person.image} alt={person.name} />
            </div>
          </TinderCard>
        ))}
      </div>
    );
  };
  
  export default TinderCards;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '/src/assets/css/Box.css';
import img3 from '/src/assets/images/back.jpg'

const Box = () => {

  const pets = [
    {
      id: 1,
      name: 'Java fullstack',
      image: '/src/assets/images/Java.png',
    },
    {
      id: 2,
      name: 'React Developer',
      image: '/src/assets/images/react.png',
    },
    {
      id: 3,
      name: 'Business Development Executive',
       image: '/src/assets/images/busss.jpeg',
    },
    {
      id: 4,
      name: 'Coustmer Care Excutive',
      image: '/src/assets/images/custm.jpg',
    },
    {
      id: 5,
      name: 'UI and UX Design',
      image: '/src/assets/images/ui.png',
    },
    {
      id: 6,
      name: 'Graphic Designer',
      image: '/src/assets/images/gra.jpg',
    },
    
   
    
    
  ];
  
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  
 
  return (
    <div className='menubody1'>
    

      <h1 className='h123'>Available Jobs</h1>
      <div className="menu-list1">
        {pets.map((pet) => (
          <div key={pet.id} className="menu-card1">
            <h2 className='h1'>{pet.name}</h2>
            <img src={pet.image} alt={pet.name} className="menu-image1" />
            
            <nav>
            <Link to='/job/1'>
              <button onClick={() => addToCart(pet)}>Learn more</button></Link>
              
            </nav>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Box;
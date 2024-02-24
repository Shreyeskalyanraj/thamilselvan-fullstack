// import React from 'react';
// import Navbar from '../../Components/ui/Navbar'; 
// import Footer from '../../Components/ui/Footer';
// import '../../assets/css/home.css'; // Adjust the path to your CSS file
// import img from '../../assets/images/cust-rem.png';
// import img2 from '../../assets/images/jj.jpg';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className='gif'>
//         <div className='card'>
//           <img src={img} alt="Custom Image" className='card-image' />
//           <div className="card-content">
//             <h2 className='header1'>Your work people are here</h2>
//             <p>Your career journey is serious, but should never be lonely or dull. With the new Glassdoor, work communities are right at your fingertips.</p>
//             <center><Link to="/jobs"><button type='submit'>Find jobs</button></Link></center>
//           </div>
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default Home;/

// Home.jsx

import React from 'react';
import Navbar from '../../Components/ui/Navbar';
import Footer from '../../Components/ui/Footer';
import '../../assets/css/home.css'; // Adjust the path to your CSS file
import img from '../../assets/images/cust-rem.png';
import img2 from '../../assets/images/jj.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='gif'>
        <div className='card'>
          <img src={img} alt="Custom Image" className='card-image' />
          <div className="card-content">
            <h2 className='header1'>Your work people are here</h2>
            <p>Your career journey is serious, but should never be lonely or dull. With the new Glassdoor, work communities are right at your fingertips.</p>
            <center><Link to="/jobs"><button type='submit'>Find jobs</button></Link></center>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;


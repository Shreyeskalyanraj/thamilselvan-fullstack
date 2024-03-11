import React, { useState, useEffect } from 'react';
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../assets/images/Slide1.png";
import image2 from "../assets/images/Slide2.png";
import Front from "../assets/images/Front.png";
import "../assets/css/Home.css"
import Navbar from '../components/Navbar';
import Footer from './Footer';
import Loader from '../components/Loader';
const Home = () => {
  const placeholders = ["Job", "Skill", "Company"];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Change the placeholder text every second
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); 
  const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
		  setLoading(false);
		},1000);
	  }, []);
  const currentPlaceholder = placeholders[placeholderIndex];
  const images = [image1, image2];
  return (
    <>
  {loading ? (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", padding: "18%" }}>
      <Loader />
    </div>
  ) : (
    <>
      <Navbar />
      
        
        <center><button>Find Jobs</button></center>

      <br></br>
      <h1>India's <strong>Largest</strong> Job Portal</h1>
      <br></br>
      <br></br>
      <div className='Front'>
        <img src={Front} />
      </div>
      <div className='Sides'>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={2800}
          showThumbs={false}
          showStatus={false}
          stopOnHover={false}
          className="hover-pointer">
          {images.map((image, i) => (
            <div key={i}>
              <img src={image} alt="Slider" />
            </div>
          ))}
        </Carousel>
      </div>
      <Footer />
    </>
  )}
</>

  );
};

export default Home;

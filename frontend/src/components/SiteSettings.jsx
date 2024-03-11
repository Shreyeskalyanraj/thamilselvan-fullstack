import { useEffect, useState } from "react";
import AdminDash from "../pages/AdminSide/AdminDash";

function SiteSet() {
    const [title, setTitle] = useState('Medium');

    useEffect(() => {
        const storedTitle = localStorage.getItem("title");
        if (storedTitle) {
            setTitle(storedTitle);
        }
    }, []);
    // console.log("titile",title)

    const handleSubmit = (event) => {
        event.preventDefault();  
        const formData = new FormData(event.target);
        const newTitle = formData.get('field1');
        setTitle(newTitle); 
        localStorage.setItem("title", newTitle);
    };
    return (  
        <>
        <AdminDash/>
        <div className="pricing-container">
      <div className="pricing-plan">
        <p className="pricing-plan-name">Basic</p>
        <p className="pricing-plan-features">$19.99 for 3 Months</p>
        <button className="pricing-plan-button">BUY NOW</button>
      </div>
      <div className="pricing-plan">
        <p className="pricing-plan-name">Medium</p>
        <p className="pricing-plan-features">${title} for 6 Months</p>
        <button className="pricing-plan-button">BUY NOW</button>
      </div>
      <div className="pricing-plan">
        <p className="pricing-plan-name">Expert</p>
        <p className="pricing-plan-features">$129.99 for 1 Year</p>
        <button className="pricing-plan-button">BUY NOW</button>
      </div>
    </div>
        <form onSubmit={handleSubmit}>
        <label for="field1">JobTitle:</label>
        <input type="text" id="field1" name="field1"/>

        <input type="submit" value="Submit"/>
        </form>
    </>
    );
}

export default SiteSet;
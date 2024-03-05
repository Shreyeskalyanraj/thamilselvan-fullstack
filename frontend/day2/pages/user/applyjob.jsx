import { useState } from 'react';
import '/src/assets/css/applyjob.css'
import { Link } from 'react-router-dom';

const ApplyJobForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        resume: '',
        coverLetter: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        // Reset form fields after submission
        setFormData({
            name: '',
            email: '',
            phoneNumber: '',
            resume: '',
            coverLetter: ''
        });
    };

    return (
        <form className="jobApplicationForm" onSubmit={handleSubmit}>
            <h2 className='formTitle'>Job Application Form</h2>
            <input className="inputField" type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input className="inputField" type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <input className="inputField" type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
            <input className="inputField" type="url" name="resume" placeholder="Link to your Resume/CV" value={formData.resume} onChange={handleChange} required />
            <textarea className="textareaField" name="coverLetter" placeholder="Your Cover Letter" value={formData.coverLetter} onChange={handleChange} required />
            <button className="submitBtn" type="submit"><Link to={`/job/${job.id}`}>Submit Application<Link/></button>
        </form>
    );
}

export default ApplyJobForm;




import React, { useState } from 'react';
import { FaEnvelope, FaMobileAlt, FaUser } from 'react-icons/fa';
import AnimatedBtn from './AnimatedBtn';

const Form = () => {
  
  const positions = [
    { id: 1, position: 'Full-stack developer' },
    { id: 2, position: 'Front-end developer' },
    { id: 3, position: 'Back-end developer' },
    { id: 4, position: 'UI/UX developer' },
  ];

  // To handle user input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('');
  const [resume, setResume] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(Date.now());
  const [position, setPosition] = useState(''); 

  // To handle error
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [contactError, setContactError] = useState('');
  const [resumeError, setResumeError] = useState('');
  const [positionError, setPositionError] = useState(''); 

  // To handle validation
  const nameRegex = /^[a-zA-Z ]{2,30}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const contactRegex = /^\d{10}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameIsValid = nameRegex.test(name);
    const emailIsValid = emailRegex.test(email);
    const contactIsValid = contactRegex.test(contact);

    // Validate name
    if (!nameIsValid) {
      setNameError("Name must contain only letters and spaces (2-30 characters)");
    } else {
      setNameError('');
    }

    // Validate email
    if (!emailIsValid) {
      setEmailError("Enter a valid email address");
    } else {
      setEmailError('');
    }

    // Validate contact
    if (!contactIsValid) {
      setContactError('Contact number must be exactly 10 digits');
    } else {
      setContactError('');
    }

    // Validate resume
    if (!resume) {
      setResumeError('Please upload your resume');
    } else {
      setResumeError('');
    }

    // Validate position selection
    if (!position) {
      setPositionError('Please select a position');
    } else {
      setPositionError('');
    }

    // Only proceed if all are valid
    if (nameIsValid && emailIsValid && contactIsValid && resume && position) {
      console.log("Form is valid:", { name, email, contact, gender, position });

      // Clear fields
      setName('');
      setEmail('');
      setContact('');
      setGender('');
      setResume(null);
      setPosition('');

      // Reset file input by changing key
      setFileInputKey(Date.now());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='bg-[#212058] flex h-screen flex-col items-center'>
        <h1 className='text-2xl font-medium text-white my-2'>Job Application Form</h1>

        {/* Name */}
        <div className='flex gap-2 items-center w-3/4 md:w-2/6 border mx-auto my-2 p-2 rounded-md'>
          <FaUser size={20} color="white" />
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder='Enter Name'
            className='bg-transparent text-white w-[90%] outline-none'
          />
        </div>
        {nameError && <p className='text-red-400 text-sm'>{nameError}</p>}

        {/* Email */}
        <div className='flex gap-2 items-center w-3/4 md:w-2/6 border mx-auto my-2 p-2 rounded-md'>
          <FaEnvelope size={20} color="white" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder='Enter Email'
            className='bg-transparent text-white w-[90%] outline-none'
          />
        </div>
        {emailError && <p className='text-red-400 text-sm'>{emailError}</p>}

        {/* Contact */}
        <div className='flex gap-2 items-center w-3/4 md:w-2/6 border mx-auto my-2 p-2 rounded-md'>
          <FaMobileAlt size={20} color="white" />
          <input
            onChange={(e) => setContact(e.target.value)}
            value={contact}
            type="tel"
            placeholder='Enter Contact Number'
            maxLength={10}
            className='bg-transparent text-white w-[90%] outline-none'
          />
        </div>
        {contactError && <p className='text-red-400 text-sm'>{contactError}</p>}

        {/* Gender */}
        <div className='flex gap-2 items-center w-3/4 md:w-2/6 border mx-auto my-2 p-2 rounded-md'>
          <input
            type="radio"
            name="gender"
            id="male"
            value='male'
            checked={gender === 'male'}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="male" className='text-white'>Male</label>
          <input
            type="radio"
            name="gender"
            id="female"
            value='female'
            checked={gender === 'female'}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="female" className='text-white'>Female</label>
        </div>

        {/* Resume */}
        <div className='flex gap-2 items-center w-3/4 md:w-2/6 border mx-auto my-2 p-2 rounded-md'>
          <label className='text-white'>
            Upload Resume : <br />
            <input
              key={fileInputKey}  // Reset input on successful submit
              className='my-1 p-1'
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                setResume(e.target.files[0]);
                setResumeError('');
              }}
            />
          </label>
        </div>
        {resumeError && <p className='text-red-400 text-sm'>{resumeError}</p>}

        {/* Position */}
        <div className='flex gap-2 items-center w-3/4 md:w-2/6 border mx-auto my-2 p-2 rounded-md'>
          <select
            className='bg-transparent text-white w-full'
            name="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            <option className='text-black' value="">Select Position</option>
            {positions.map((item) => (
              <option className='text-black' key={item.id} value={item.position}>
                {item.position}
              </option>
            ))}
          </select>
        </div>
        {positionError && <p className='text-red-400 text-sm'>{positionError}</p>}

        {/* Animated Button */}
        <AnimatedBtn />
      </div>
    </form>
  );
};

export default Form;

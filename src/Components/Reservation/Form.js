import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { device } from '../../Theme/MediaQueries';
import buttonLine from '../../assets/home/button_line.png';

const MainBtn = styled.div`
  button {
    display: block;
    margin: 0 auto;
    font-family: "Cabin", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    font-size: 1.8rem;
    color: var(--goldBtn);
    border: 2px solid var(--goldBtn);
    padding: 16px 10px;
    margin-top: 68px;
    margin-bottom: 138px;
    -webkit-transition: 0.5s all ease;
    -o-transition: 0.5s all ease;
    transition: 0.5s all ease;
    width: 260px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 50px;

    &:hover {
      background: var(--goldBtn);
      color: var(--white);
    }

    &::before {
      content: url(${buttonLine});
      position: absolute;
      right: 300px;
    }
    &::after {
      content: url(${buttonLine});
      position: absolute;
      left: 300px;
    }
  }
`;

const FormWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  .flex__parent_form {
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media ${device.tablet} {
      flex-direction: column;
    }
  }
  .form__item {
    width: 100%;
    max-width: 48.4%;
    @media ${device.tablet} {
      max-width: 100%;
    }

    input {
      width: 100%;
      margin-bottom: 20px;
      font-family: "Cabin", sans-serif;
      font-weight: 400;
      font-size: 1.5rem;
      padding: 10px 0;
      padding-left: 5px;
      border: 1px solid #cbc8c8;
      color: #4b4747;
      border-radius: 0px;
      -webkit-border-radius: 0px;
      -moz-border-radius: 0px;
      -webkit-appearance: none;
    }
  }

  .textarea__form {
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    display: block;
    margin-bottom: 20px;
    font-family: "Cabin", sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    padding: 7px 0 0 5px;
    border: 1px solid #cbc8c8;
    color: #4b4747;
    border-radius: 0px;
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    -webkit-appearance: none;
  }

  h6 {
    font-family: "Cabin", sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
  }

  button {
    padding: 10px 20px;
    font-size: 1.5rem;
    background-color: #ABBA7C;
    color: white;
    border: none;
    cursor: pointer;
    &:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
  }
  .number {
    margin-top: 2.8px;
  }
  .occasion {
    margin-top: 2.5px;
  }
  
`;

const Form = () => {
  const [formData, setFormData] = useState({
    date: '',
    startTime: '',
    endTime: '',
    name: '',
    contactNumber: '',
    occasion: '',
    message: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid = () => {
    return Object.values(formData).every((field) => field.trim() !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      // Handle the form submission (e.g., send data to an API)
      console.log('Form submitted', formData);

      // Redirect to the NotFound page after submission
      navigate('/notfound'); // Adjust path as necessary
    } else {
      // Optionally handle the invalid form case
      console.log('Please fill all the fields.');
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <div className="flex__parent_form">
          <div className="form__item">
            <h6>Date</h6>
            <input
              type="Date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            <br />
            <h6>Start-Time</h6>
            <input
              type="Time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
            />
            <br />
            <h6>End-Time</h6>
            <input
              type="Time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
            />
          </div>

          <div className="form__item">
            <h6>Name</h6>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Anubhav Pandya"
            />
            <br />
            <h6>Contact-Number</h6>
            <input
              type="Number"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder='+919855664422'
              className="number"
            />
            <br />
            <h6>Occasion</h6>
            <input
              type="text"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              placeholder="Birthday, Anniversary, etc."
              className="occasion"
            />
          </div>
        </div>

        <textarea
          className="textarea__form"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          cols="30"
          rows="10"
        ></textarea>

        <MainBtn>
          <button type="submit" disabled={!isFormValid()}>
            Make Reservation
          </button>
        </MainBtn>
      </form>
    </FormWrapper>
  );
};

export default Form;

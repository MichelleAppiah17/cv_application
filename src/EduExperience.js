import React, { useState, useEffect } from 'react';

function EducationalExperience(props) {
  const [formInfo, setFormInfo] = useState({
    school: '',
    degree: '',
    startYear: '',
    endYear: '',
    location: '',
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    if (props.isEditing) {
      setFormInfo(props.infoToEdit);
    }
  }, [props.isEditing, props.infoToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInfo((prevFormInfo) => ({
      ...prevFormInfo,
      [name]: value,
    }));
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const submitForm = (e) => {
    e.preventDefault();

    props.saveInputValue(formInfo);

    setFormInfo({
      school: '',
      degree: '',
      startYear: '',
      endYear: '',
      location: '',
    });

    setIsFormVisible(false);
  };

  return(
    <div className='educationInfo'>
      <div className='eduExperienceDiv'>
        <div className='eduformTitle'>
          <h3>
            Educational Experience{' '}
             <span
              className='formToggleArrow'
              onClick={toggleFormVisibility}
            >
              {isFormVisible ? '▼'  : '▲'}
            </span>
          </h3>
        </div>
      </div>
       {isFormVisible && (
      <div className='eduForm'>
       <form onSubmit={submitForm}>
        <div className='inputContainer'>
          <label htmlFor='school'>School</label>
          <input
            type='text'
            id='school'
            name='school'
            placeholder='Enter name of school'
            value={formInfo.school}
            onChange={handleChange}
          />
        </div>
        <div className='inputContainer'>
          <label htmlFor='degree'>Degree</label>
          <input
             type='text'
             id='degree'
             name='degree'
             placeholder='Enter name of degree'
             value={formInfo.degree}
             onChange={handleChange}
          />
        </div>
        <div className='inputContainer'>
          <label htmlFor='startYear'>Start Year</label>
          <input
             type='month'
             id='startYear'
             name='startYear'
             placeholder='Enter Start Year'
             value={formInfo.startYear}
             onChange={handleChange}
          />
        </div>
        <div className='inputContainer'>
          <label htmlFor='endYear'>End Year</label>
          <input
             type='month'
             id='endYear'
             name='endYear'
             placeholder='Enter End Year'
             value={formInfo.endYear}
             onChange={handleChange}
          />
        </div>
        <div className='inputContainer'>
          <label htmlFor='location'>Location</label>
          <input
             type='text'
             id='location'
             name='location'
             placeholder='Enter Location'
             value={formInfo.location}
             onChange={handleChange}
          />
        </div>
        <div className='formButtons'>
          <button>Delete</button>
          <button type='submit'>Add</button>
        </div>
       </form>
      </div>
     )} 
    </div>
  )
}

export default EducationalExperience;

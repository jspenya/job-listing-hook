import React, { useState } from 'react';

const NewJobForm = props => {
  const [job, setJob] = useState(props.initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target
    setJob({...job, [name]: value })
  };

  return(
    <form onSubmit={event => {
      event.preventDefault()

      if (!job.company || !job.position || !job.description) return;
      props.addJob(job)
      setJob(props.initialFormState)
    }}>
    <label>Company</label>
    <input type="text" name="company" value={job.company} onChange={handleInputChange}></input>
    <label>Position</label>
    <input type="text" name="position" value={job.position} onChange={handleInputChange}></input>
    <label>Description</label>
    <input type="text" name="description" value={job.description} onChange={handleInputChange}></input>
    <button>Create Job</button>
    </form>
  )
};

export default NewJobForm;

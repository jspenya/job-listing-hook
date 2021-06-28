import React from 'react';

const Job = ({ job, removeJob, editJob, editing }) => (
    <div className="col-md-4" key={job.id}>
      <div className="job-container">
        
      </div>
      <h4>{job.company}</h4>
      <p>{job.position}</p>
      <p>{job.description}</p>

      { editing ? (null) : (
        <button className="edit-button" onClick={() => {editJob(job)}} >Edit</button>
      ) }

      <button onClick={() => removeJob(job.id)}>Remove</button>
    </div>
);

export default Job;

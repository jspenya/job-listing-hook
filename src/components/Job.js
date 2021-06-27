import React from 'react';
import EditJobForm from './EditJobForm';

const Job = ({ job, removeJob, editJob, editing }) => (
    <div className="job" key={job.id}>
      <h4>{job.company}</h4>
      <p>{job.position}</p>
      <p>{job.description}</p>

      { editing ? (null) : (
        <button onClick={() => {editJob(job)}} >Edit</button>
      ) }

      <button onClick={() => removeJob(job.id)}>Remove</button>
    </div>
);

export default Job;

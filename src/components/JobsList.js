import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewJobForm from './NewJobForm'

const JobsList = props => {
  
  useEffect(() => {
    axios.get('/api/v1/jobs.json')
      .then(res => setJobs (res.data))
  }, []);

  const [jobs, setJobs] = useState([]);

  const initialFormState = {
    company: '',
    position: '',
    description: ''
  };

  const addJob = job => {
    const qs = require('qs');

    axios.post('api/v1/jobs', qs.stringify({
      job: {
        company: job.company,
        position: job.position,
        description: job.description
      }
    }))
    .then(res =>(console.log(res)))
    .catch( error => console.log(error))

    setJobs([...jobs, job]);
  };

  return(
    <div>
      <div>
        <NewJobForm addJob={addJob} initialFormState={initialFormState}/>
      </div>
      <div className="jobs-list">
        {jobs.map((job, index) => (
          <div key={index}>
            { job.company } | { job.position } | { job.description }
          </div>
        )
        )}
      </div>
    </div>
  )
};

export default JobsList;

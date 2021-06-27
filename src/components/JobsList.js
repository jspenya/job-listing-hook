import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewJobForm from './NewJobForm'
import Job from './Job'

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

  const removeJob = id => {
    axios.delete( '/api/v1/jobs/' + id )
        .then(response => {
          setJobs(jobs.filter(job => job.id !== id))
        })
        .catch(error => console.log(error))
  };

  return (
    <div>
      <div className="jobs-list">
        <div>
          <NewJobForm addJob={addJob} initialFormState={initialFormState} />
        </div>
        <br/>
        <hr/>
        {jobs.map((job, _) => (
            <Job job={job} removeJob={removeJob} />
          ))}
      </div>
    </div>
  )
};

export default JobsList;

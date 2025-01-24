import React from "react";
import Job from "../components/Job";
import jobs from "../data/jobs.json";

const JobsContainer = () => {
  const jobsList = jobs.map((job, index) => (
    <Job {...job} key={"job-item-" + index} />
  ));

  return (
    <ul className="list-disc pl-5">
      {jobsList}
    </ul>
  );
};

export default JobsContainer;
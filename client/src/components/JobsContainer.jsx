import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Wrapper from "../assets/wrappers/JobsContainer";
import Job from "./Job";
import Loading from "./Loading";
import { useGetAllJobsQuery } from "../state/apis/jobsApi";
import { setAllJobs } from "../state/features/allJobsSlice";
function JobsContainer() {
  const { jobs } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();
  const { data, error, isLoading, refetch } = useGetAllJobsQuery();

  //   fetch jobs on initial render
  useEffect(() => {
    if (data?.jobs) {
      // console.log(data);
      dispatch(setAllJobs({ jobs: data.jobs }));
    }
  }, [data]);

  if (isLoading) {
    return <Loading center={true} />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>jobs info</h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} refetch={refetch} />;
        })}
      </div>
    </Wrapper>
  );
}

export default JobsContainer;

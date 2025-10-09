import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Wrapper from "../assets/wrappers/JobsContainer";
import Job from "./Job";
import Loading from "./Loading";
import { useGetAllJobsQuery } from "../state/apis/jobsApi";
import { setAllJobs } from "../state/features/AllJobsSlice";
import PageBtnContainer from "./PageBtnContainer";
function JobsContainer() {
  const { jobs, page, totalJobs, numOfPages } = useSelector(
    (store) => store.allJobs
  );
  const dispatch = useDispatch();
  const { data, error, isLoading, refetch } = useGetAllJobsQuery();

  //   fetch jobs on initial render
  useEffect(() => {
    if (!isLoading && data?.jobs?.length) {
      dispatch(setAllJobs({ data }));
    }
  }, [isLoading, data]);

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
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} refetch={refetch} />;
        })}
      </div>
      {/* if total num of pages is > 1 */}
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
}

export default JobsContainer;

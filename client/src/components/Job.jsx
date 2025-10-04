import React from "react";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Job";
import { setEditJob } from "../state/features/jobSlice";
import { useDispatch } from "react-redux";
import JobInfo from "./JobInfo";
import moment from "moment";
import { useDeleteJobMutation } from "../state/apis/jobsApi";
import { toast } from "react-toastify";
function Job({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
  refetch,
}) {
  const dispatch = useDispatch();
  const [deleteJob, { isLoading }] = useDeleteJobMutation();

  const handleDelete = async () => {
    try {
      const response = await deleteJob(_id);
      // console.log(response);
      if ("data" in response) {
        toast.success("Job Delete Successfully!");
        await refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };
  // format date
  const date = moment(createdAt).format("MMM Do, YYYY");
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              className="btn edit-btn"
              onClick={() =>
                dispatch(
                  setEditJob({
                    editJobId: _id,
                    position,
                    company,
                    jobLocation,
                    jobType,
                    status,
                  })
                )
              }
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={handleDelete}
              disabled={isLoading}
            >
              {isLoading ? "Deleting" : "Delete"}
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
}

export default Job;

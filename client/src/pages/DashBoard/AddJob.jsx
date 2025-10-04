import React, { useEffect } from "react";
import FormRow from "../../components/FormRow";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import FormRowSelect from "../../components/FormRowSelect";
import {
  clearValues,
  handleChange,
  setEditJob,
} from "../../state/features/jobSlice";
import {
  useCreateJobMutation,
  useUpdateJobMutation,
} from "../../state/apis/jobsApi";
import { useNavigate } from "react-router-dom";

function AddJob() {
  const {
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);

  const { user } = useSelector((state) => state.user);
  // add default joblocation from user state
  useEffect(() => {
    if (!isEditing) {
      dispatch(clearValues());
      dispatch(handleChange({ name: "jobLocation", value: user.location }));
    }
  }, [isEditing]);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [createJob, { isLoading }] = useCreateJobMutation();
  const [updateJob, { isLoading: updateLoading }] = useUpdateJobMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error("Please Fill Out All Fields");
      return;
    }
    // for creating new job
    if (!isEditing) {
      try {
        const response = await createJob({
          position,
          company,
          jobLocation,
          jobType,
          status,
        });
        if (response.data.status !== 400) {
          // clear value
          dispatch(clearValues());
          toast.success("job created successfully!");
          navigate("/all-jobs");
        }
      } catch (error) {
        console.log("error in creating job");
      }
    }
    // for editing existing job
    if (isEditing) {
      try {
        const response = await updateJob({
          jobId: editJobId,
          jobData: {
            position,
            company,
            jobLocation,
            jobType,
            status,
          },
        });
        // console.log(response.data);
        // update with new edit value
        if (response.data.status !== 400) {
          const job = response.data.job;
          dispatch(setEditJob({ editJobId: job._id, ...job }));
          toast.success("job updated successfully!");
        }
      } catch (error) {
        console.log("error in creating job");
      }
    }
  };
  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // update the state
    dispatch(handleChange({ name, value }));
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>

        <div className="form-center">
          {/* position */}
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          {/* location */}
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* job status */}
          <FormRowSelect
            name="status"
            value={status}
            list={statusOptions}
            handleChange={handleJobInput}
          />

          {/* job type */}
          <FormRowSelect
            name="jobType"
            labelText="job type"
            value={jobType}
            list={jobTypeOptions}
            handleChange={handleJobInput}
          />

          {/* btn container */}
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading || updateLoading}
            >
              {isLoading || updateLoading ? "submitting" : "submit"}
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
}

export default AddJob;

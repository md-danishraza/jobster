import React, { useEffect } from "react";
import FormRow from "../../components/FormRow";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import FormRowSelect from "../../components/FormRowSelect";
import { clearValues, handleChange } from "../../state/features/jobSlice";
import { useCreateJobMutation } from "../../state/apis/jobsApi";
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
      dispatch(handleChange({ name: "jobLocation", value: user.location }));
    }
  }, []);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [createJob, { isLoading }] = useCreateJobMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error("Please Fill Out All Fields");
      return;
    }

    try {
      await createJob({ position, company, jobLocation, jobType, status });
      // clear value
      dispatch(clearValues());
      toast.success("job created successfully!");
      navigate("/all-jobs");
    } catch (error) {
      console.log("error in creating job");
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
              disabled={isLoading}
            >
              {isLoading ? "submitting" : "submit"}
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
}

export default AddJob;

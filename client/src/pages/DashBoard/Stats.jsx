import React from "react";
import { useShowStatsQuery } from "../../state/apis/jobsApi";
import StatsContainer from "../../components/StatsContainer";
import ChartsContainer from "../../components/ChartsContainer";
import { useEffect } from "react";
import Loading from "../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { setStats } from "../../state/features/allJobsSlice";
function Stats() {
  const { data, isLoading, error } = useShowStatsQuery();
  const { monthlyApplications } = useSelector((state) => state.allJobs);
  const dispatch = useDispatch();
  //   fetch jobs on initial render
  useEffect(() => {
    // console.log(data);
    if (data) {
      dispatch(setStats(data));
    }
  }, [data]);

  if (isLoading) {
    return <Loading center />;
  }
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
}

export default Stats;

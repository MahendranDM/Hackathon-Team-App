import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";

const ViewTeam = () => {
  const [data, changeData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);

    axios
      .get("http://localhost:3000/api/view-teams")
      .then((response) => {
  changeData(response.data.data);
  setLoading(false);
})
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
<NavBar/>
      <div className="container mt-4">
        <h2 className="text-center mb-4">View All Teams</h2>

        {loading ? (
          <h4 className="text-center text-primary">Loading...</h4>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover text-center align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Team ID</th>
                  <th>Team Name</th>
                  <th>Leader Name</th>
                  <th>Leader Email</th>
                  <th>Leader Phone</th>
                  <th>College Name</th>
                  <th>No. of Members</th>
                  <th>Project Title</th>
                  <th>Problem Statement Track</th>
                  <th>Technology Stack</th>
                  <th>Mentor Name</th>
                  <th>Registration Date</th>
                  <th>Table / Station No.</th>
                </tr>
              </thead>

              <tbody>
                {data.map((value, index) => (
                  <tr key={index}>
                    <td>{value.team_id}</td>
                    <td>{value.team_name}</td>
                    <td>{value.team_leader_name}</td>
                    <td>{value.leader_email}</td>
                    <td>{value.leader_phone}</td>
                    <td>{value.college_name}</td>
                    <td>{value.number_of_members}</td>
                    <td>{value.project_title}</td>
                    <td>{value.problem_statement_track}</td>
                    <td>{value.technology_stack}</td>
                    <td>{value.mentor_name}</td>
                    <td>{value.registration_date}</td>
                    <td>{value.table_station_number}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewTeam;
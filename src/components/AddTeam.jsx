import React, { useState } from "react";
import axios from "axios";

const AddTeam = () => {
  const [input, changeInput] = useState({
    team_id: "",
    team_name: "",
    team_leader_name: "",
    leader_email: "",
    leader_phone: "",
    college_name: "",
    number_of_members: "",
    project_title: "",
    problem_statement_track: "",
    technology_stack: "",
    mentor_name: "",
    registration_date: "",
    table_station_number: "",
  });

  const inputHandler = (event) => {
    changeInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const readValue = () => {
    console.log(input);

    axios
      .post("https://example.com/api/add-team", input)
      .then((response) => {
        console.log(response.data);
        alert("Team Added Successfully");
      })
      .catch((error) => {
        console.log(error);

        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Something went wrong");
        }
      });
  };

  return (
    <div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-12">

            <h3 className="text-center mb-4">Add Team</h3>

            <div className="row g-3">

              {/* Team ID */}
              <div className="col-md-4">
                <label className="form-label">Team ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="team_id"
                  value={input.team_id}
                  onChange={inputHandler}
                />
              </div>

              {/* Team Name */}
              <div className="col-md-4">
                <label className="form-label">Team Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="team_name"
                  value={input.team_name}
                  onChange={inputHandler}
                />
              </div>

              {/* Team Leader */}
              <div className="col-md-4">
                <label className="form-label">Team Leader Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="team_leader_name"
                  value={input.team_leader_name}
                  onChange={inputHandler}
                />
              </div>

              {/* Email */}
              <div className="col-md-4">
                <label className="form-label">Leader Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="leader_email"
                  value={input.leader_email}
                  onChange={inputHandler}
                />
              </div>

              {/* Phone */}
              <div className="col-md-4">
                <label className="form-label">Leader Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="leader_phone"
                  value={input.leader_phone}
                  onChange={inputHandler}
                />
              </div>

              {/* College */}
              <div className="col-md-4">
                <label className="form-label">College Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="college_name"
                  value={input.college_name}
                  onChange={inputHandler}
                />
              </div>

              {/* Members */}
              <div className="col-md-4">
                <label className="form-label">Number of Members</label>
                <input
                  type="number"
                  className="form-control"
                  name="number_of_members"
                  value={input.number_of_members}
                  onChange={inputHandler}
                />
              </div>

              {/* Project */}
              <div className="col-md-4">
                <label className="form-label">Project Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="project_title"
                  value={input.project_title}
                  onChange={inputHandler}
                />
              </div>

              {/* Track */}
              <div className="col-md-4">
                <label className="form-label">Problem Statement Track</label>
                <input
                  type="text"
                  className="form-control"
                  name="problem_statement_track"
                  value={input.problem_statement_track}
                  onChange={inputHandler}
                />
              </div>

              {/* Technology */}
              <div className="col-md-4">
                <label className="form-label">Technology Stack</label>
                <input
                  type="text"
                  className="form-control"
                  name="technology_stack"
                  value={input.technology_stack}
                  onChange={inputHandler}
                />
              </div>

              {/* Mentor */}
              <div className="col-md-4">
                <label className="form-label">Mentor Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="mentor_name"
                  value={input.mentor_name}
                  onChange={inputHandler}
                />
              </div>

              {/* Registration Date */}
              <div className="col-md-4">
                <label className="form-label">Registration Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="registration_date"
                  value={input.registration_date}
                  onChange={inputHandler}
                />
              </div>

              {/* Table Number */}
              <div className="col-md-4">
                <label className="form-label">Table / Station Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="table_station_number"
                  value={input.table_station_number}
                  onChange={inputHandler}
                />
              </div>

              {/* Button */}
              <div className="col-12 text-center mt-3">
                <button
                  className="btn btn-primary px-5"
                  onClick={readValue}
                >
                  Add Team
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeam;
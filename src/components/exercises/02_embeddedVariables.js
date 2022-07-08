import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  const course = "HDip Computer Science - Modules table";
  const modules = [
    {
      name: "DevOps",
      noLectures: 2,
      noPraticals: 3,
    },
    {
      name: "Enterprise Web Dev",
      noLectures: 1,
      noPraticals: 1,
    },
  ];
  return (
    <div>
      <h2>{course}</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{modules[0].name}</td>
            <td>{modules[0].noLectures}</td>
            <td>{modules[0].noPraticals}</td>
          </tr>
          <tr>
            <td>{modules[1].name}</td>
            <td>{modules[1].noLectures}</td>
            <td>{modules[1].noPraticals}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Demo;

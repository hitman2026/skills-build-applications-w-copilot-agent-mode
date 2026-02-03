import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setTeams(results);
        console.log('Teams API endpoint:', apiUrl);
        console.log('Fetched teams:', results);
      });
  }, [apiUrl]);

  return (
    <div>
      <h2 className="mb-4">Teams</h2>
      <div className="card">
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, idx) => (
                <tr key={team.id || idx}>
                  <td>{idx + 1}</td>
                  <td>{team.name}</td>
                  <td>{team.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Teams;

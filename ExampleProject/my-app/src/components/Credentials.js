import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Credentials() {
    let [charList, setCredList] = useState([]);
    let navigate = useNavigate();

    let data_url = "/api/credentials";

    const fetchCredentials = () => {
        fetch(data_url)
        .then((res) => res.json())
        .then((credList) => {
            setCredList(credList);
        });
    };

    useEffect(fetchCredentials, []);

  return (
    <>
      <section id="CredentialList">
        {charList.map((credential) => (
          <div key={credential.id} >
            {"Name: " + credential.name}
            {" || Username: " + credential.user}
            {" || Password: " + credential.password}
          </div>
        ))}
      </section>
    </>
  );
}
export default Credentials;

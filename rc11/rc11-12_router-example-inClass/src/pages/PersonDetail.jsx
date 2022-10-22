import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";


const PersonDetail = () => {
  const { id } = useParams();
  console.log(id);

  const { state: person } = useLocation();

  const navigate = useNavigate();

  return <div className="container text-center" >
    <h3>
        {person.first_name} {person.last_name}
    </h3>
    <img className="rounded" src={person.avatar} alt="" />
    <p>{person.email}</p>
    <div>
        <button className="btn btn-success me-2" onClick={()=> navigate('/')} >Home</button>
        <button className="btn btn-warning" onClick={()=> navigate(-1)} >Go Back</button>
      </div>
  </div>;
};

export default PersonDetail;

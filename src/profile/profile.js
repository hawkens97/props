import React from "react";
import PropTypes from "prop-types";
const CompProfile = ({
  fullName = "name",
  bio = "parag",
  profession = "Pirate",
  children,
}) => {
  return (
    <div className="profile">
      <h1 style={{ color: "blue", fontSize: "60px", fontFamily: "Parisienne" }}>
        {fullName}
      </h1>
      <p style={{ fontSize: "30px", fontFamily: "cursive" }}>{bio}</p>
      <h4 style={{ color: "black", fontSize: "20px", fontFamily: "serif" }}>
        {profession}
      </h4>
    </div>
  );
};

CompProfile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};
export default CompProfile;

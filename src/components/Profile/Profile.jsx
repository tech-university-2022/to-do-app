import "./Profile.scss";
import profileImg from "../../assets/images/me.png";
function Profile({ name }) {
  return (
    <div className="profile-container">
      <img
        className="profile-image"
        src={profileImg} // "./images/workshop.jpg"
        alt="sada"
      />
      <div className="profile-name">{name}</div>
      <div>Date : Time</div>
    </div>
  );
}

export default Profile;

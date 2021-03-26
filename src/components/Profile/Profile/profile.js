import React from "react";
import PropTypes from "prop-types";
import s from "./profile.module.css";

const Profile = ({ avatar, name, tag, location, followers, views, likes }) => {
  return (
    <div className={s.profileSection}>
      <img src={avatar} alt="" className={s.profilePic} />
      <p className={s.nameClass}>{name}</p>
      <p className={s.tagClass}>{tag}</p>
      <p className={s.locationClass}>{location}</p>
      <ul>
        <li>
          Followers
          <span>{followers}</span>
        </li>
        <li>
          Views<span>{views}</span>
        </li>
        <li>
          Likes<span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;

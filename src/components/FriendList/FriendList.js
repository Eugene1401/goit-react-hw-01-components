import React from "react";
import PropTypes from "prop-types";
import s from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, id, isOnline }) => {
  const checkIfOnline = isOnline ? s.active : s.offline;
  return (
    <li key={id} className={s.item}>
      <span className={checkIfOnline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

const FriendList = ({ items }) => {
  return <ul className={s.friendList}>{items.map(FriendListItem)}</ul>;
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendList;

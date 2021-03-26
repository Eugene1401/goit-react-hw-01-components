import React from "react";
import s from "./statistic.module.css";
import PropTypes from "prop-types";

const StatsListItem = ({ id, label, percentage }) => {
  return (
    <li key={id} className={s.item}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};

const StatsList = ({ items }) => {
  return <ul className={s.stat_list}>{items.map(StatsListItem)}</ul>;
};

const Statistics = ({ items }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>

      <StatsList items={items} />
    </section>
  );
};

StatsListItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number,
};

export default Statistics;

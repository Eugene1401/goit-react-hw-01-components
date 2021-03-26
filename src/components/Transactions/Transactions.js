import React from "react";
import PropTypes from "prop-types";

import s from "./Transactions.module.css";

const TransactionTr = ({ id, type, amount, currency }, i) => {
  const trClassName = i % 2 === 1 ? s.grey : s.white;
  return (
    <tr key={id} className={trClassName}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

const TransactionBody = ({ items }) => {
  return <tbody className={s.tbody}>{items.map(TransactionTr)}</tbody>;
};

const Transactions = ({ transactions }) => {
  return (
    <table class={s.transactionHistory}>
      <thead className={s.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <TransactionBody items={transactions} />
    </table>
  );
};

TransactionTr.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Transactions;

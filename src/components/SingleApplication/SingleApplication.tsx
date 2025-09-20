import React from "react";
import styles from "./SingleApplication.module.css";
import {TApplication} from "../../types/types.ts";

type SingleApplicationProps = {
  application: TApplication
}

const SingleApplication = ({application}: SingleApplicationProps) => {
  const formatAmount = (amount:number) => {
    return `£${(amount / 100).toFixed(2)}`;
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-GB').format(new Date(date));
  }

  return (
    <div className={styles.SingleApplication}>
      <div className={styles.cell}>
        <sub>Company</sub>
        {application.company}
      </div>
      <div className={styles.cell}>
        <sub>Name</sub>
        {application.first_name} {application.last_name}
      </div>
      <div className={styles.cell}>
        <sub>Email</sub>
        <span className={styles.cellEmail}>{application.email}</span>
      </div>
      <div className={styles.cell}>
        <sub>Loan Amount</sub>
        {formatAmount(application.loan_amount)}
      </div>
      <div className={styles.cell}>
        <sub>Application Date</sub>
        {formatDate(application.date_created)}
      </div>
      <div className={styles.cell}>
        <sub>Expiry date</sub>
        {formatDate(application.expiry_date)}
      </div>
    </div>
  );
};

export default SingleApplication;

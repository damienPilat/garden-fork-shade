import React, {useCallback, useEffect, useRef, useState} from "react";
import SingleApplication from "../SingleApplication/SingleApplication.tsx";
import styles from "./Applications.module.css";
import {useApplications} from "../../hooks/useApplications.tsx";
import {Button} from "../../ui/Button/Button.tsx";

const Applications = () => {
  const [page, setPage] = useState(1);
  const limit = 5;

  const { getApplications, error, loading } = useApplications({});
  const [applications, setApplications] = useState([]);


  useEffect(() => {
    handleLoadMoreClick();
  },[])

  const handleLoadMoreClick = async () => {
    const newData = await getApplications(page, limit);
    // Deduplicate by id:
    setApplications(prev => {
      const combined = [...prev, ...newData];
      const unique = Array.from(new Map(combined.map(item => [item.id, item])).values());
      return unique;
    });
    setPage(prevValue => prevValue + 1);
    console.log('page:', page)
  };

  return (
    <div className={styles.Applications}>
      {applications.map(application => (
        <SingleApplication application={application} key={application.id} />
      ))}

      <div className={styles.ButtonContainer}>
        <Button
          className="load-more"
          onClick={handleLoadMoreClick}
          disabled={loading}
        >
          Load more {loading && '...'}
        </Button>
      </div>

      {error && <p>{error}</p>}
    </div>
  );
};



export default Applications;

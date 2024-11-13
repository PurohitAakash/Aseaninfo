
import React, { useState, useEffect } from 'react';
import './styles/App.css';
import HeaderComponent from './components/HeaderComponent';
import TTR from './components/TTR';
import ListComponent from './components/ListComponent';
import Pagination from './components/Pagination';
import axiosInstance from './axiosInstance';

function App() {
  const [records, setRecords] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    axiosInstance.get('crawldata/')
      .then(response => {
        const recordsWithIds = response.data.records.map((record, index) => ({
          id: record.id, // Assuming your API returns an 'id' field
          uid: index + 1,
          ...record,
          success_rate: record.success_rate ? record.success_rate.toFixed(2) : 0
        }));
        setRecords(recordsWithIds);
        setTotalCount(recordsWithIds.length);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  const addRecord = (newRecord) => {
    axiosInstance.post('crawldata/create/', newRecord)
      .then(response => {
        const createdRecord = {
          ...newRecord,
          id: response.data.id
        };
        setRecords([...records, createdRecord]);
        setIsCreating(false);
      })
      .catch(error => {
        console.error('Error adding record:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up request:', error.message);
        }
      
      });
  };
  

  const handleCreateClick = () => {
    setIsCreating(true);
  };

  const handleCancelCreate = () => {
    setIsCreating(false);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const lastRecordIndex = currentPage * recordsPerPage;
  const firstRecordIndex = lastRecordIndex - recordsPerPage;
  const currentRecord = Array.isArray(records) ? records.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  ) : [];

  return (
    <div className="App">
      <HeaderComponent />
      <TTR></TTR>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ListComponent
            records={currentRecord}
            totalCount={totalCount}
          />
          <Pagination
            recordsPerPage={recordsPerPage}
            totalRecords={records.length}
            currentPage={currentPage}
            setCurrentPage={handlePageChange}
          />
        </>
      )}
    </div>
  );
}

export default App;

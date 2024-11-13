import React from "react";
import { useState,useEffect } from "react";
import FilterComponent from "./FilterComponent";
import SearchComponent from "./SearchComponent";

const ListComponent = ({ records , totalCount }) => {


  const [filterValue, setFilterValue] = useState("");
  const [formData , setFormData] = useState({ carrier : "" });
  const [searchResult, setSearchResult] = useState([]);
  const [dateTime, setDateTime] = useState(new Date());

  const handleSubmit = (carrier) => {
    const trimmedCarrier = carrier.trim().toLowerCase();
    const filteredRecords = records.filter((record) =>
      record.fields["carrier"].toLowerCase().includes(trimmedCarrier)
    );
    setSearchResult(filteredRecords);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);


  const filteredRecords = records.filter((record) =>
    record.fields["carrier"].toLowerCase().includes(filterValue.toLowerCase())
  );



  const formattedDateTime = dateTime.toLocaleString();

  // const filteredRecords = records.filter((record) =>
  //   record.fields['carrier'].toLowerCase().includes(filterValue.toLowerCase())
  // );




   
  const formatDuration = (durationMinutes) => {
    if (typeof durationMinutes !== 'number' || isNaN(durationMinutes)) {
      return '';
    }

    const hours = Math.floor(durationMinutes / 60);
    const minutes = durationMinutes % 60;

    let formattedDuration = '';

    if (hours > 0) {
      formattedDuration += `${hours} hr `;
    }

    if (minutes > 0) {
      formattedDuration += `${minutes} min`;
    }

    return formattedDuration.trim();
  };




  const formatDurationmin = (durationMinutes) => {
    if (typeof durationMinutes !== 'number' || isNaN(durationMinutes)) {
      return '';
    }

    const minutes = durationMinutes % 60;

    return `${minutes} min`;
  };


  
  return (
    <div>
     <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-16">
  <h1 className="text-3xl font-semibold text-gray-800 p-6">Records</h1>

      <div className="container">
          <FilterComponent filterValue={filterValue} setFilterValue={setFilterValue} />

      <div>
        <SearchComponent
         handleSubmit = {handleSubmit} 
        />

  <div className="px-8 py-4 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">
        <div className="bg-gray-400 text-white rounded-md shadow-md p-2">
          <p className="text-lg font-semibold">{totalCount}</p>
          <p className="text-xs text-gray-300 ">Total Records</p>
        </div>
      </div>
      </div>
    

  <div className="container">
    <h2 className="text-center text-xl font-semibold mb-4">List of Data</h2>

    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-8 py-4 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">Carrier</th>
            <th className="px-8 py-4 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">Active</th>
            <th className="px-8 py-4 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">Last Run</th>
            <th className="px-8 py-4 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">Duration</th>
            <th className="px-8 py-4 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">Success</th>
            <th className="px-8 py-4 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">RNF(404)</th>
            <th className="px-8 py-4 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">Fail</th>
            <th className="px-8 py-4 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">Crawl Frequency</th>
            <th className="px-8 py-4 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">Duration to Launch</th>
            <th className="px-8 py-4 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">Start Time</th>
            <th className="px-8 py-4 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">End Time</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
        {filteredRecords.map(
                (record) => (
            <tr key={record.id}>
              <td className="px-8 py-6 whitespace-nowrap text-lg">{record.fields['carrier']}</td>
              <td className="px-8 py-6 whitespace-nowrap text-lg">{record.fields['active']}</td>
              <td className="px-8 py-6 whitespace-nowrap text-lg">{formatDuration(record.fields.lastrun) + ' ago'}</td>
              <td className="px-8 py-6 whitespace-nowrap text-lg">{formatDuration(record.fields['duration'])}</td>
              <td className="px-8 py-6 whitespace-nowrap text-lg">{record.fields['success']} ({parseFloat(record.fields['success_rate']).toFixed(3)}%)</td>
              <td className="px-8 py-6 whitespace-nowrap text-lg">{record.fields['rnf']} ({parseFloat(record.fields['rnf_rate']).toFixed(2)}%)</td>
              <td className="px-8 py-6 whitespace-nowrap text-lg">{record.fields['fail']} ({parseFloat(record.fields['fail_perc']).toFixed(3)}%)</td>
              <td className="px-8 py-6 whitespace-nowrap text-lg">{formatDurationmin(record.fields['crawlfrequency'])}</td>
              <td className="px-8 py-6 whitespace-nowrap text-lg">{formatDuration(record.fields['durationtolaunch'])}</td>
              <td className="px-8 py-6 whitespace-nowrap text-lg">{formatDuration(record.fields['starttime'])} <br></br> {formattedDateTime}</td>
              <td className="px-8 py-6 whitespace-nowrap text-lg">{formatDuration(record.fields['endtime'])}  <br></br>{formattedDateTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

</div>
     
   </div>
 
  );
}

export default ListComponent;



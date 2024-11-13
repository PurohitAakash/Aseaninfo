

import React, { useState } from 'react';

const CreateComponent = ({ onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    carrier: '',
    active: '',
    lastrun: '',
    duration: '',
    success: '',
    rnf: '',
    fail: '',
    crawlfrequency: '',
    durationtolaunch: '',
    starttime: '',
    endtime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ensure numeric fields are converted to numbers before saving
    const dataToSave = {
      ...formData,
      active: parseInt(formData.active),
      lastrun: parseFloat(formData.lastrun),
      duration: parseFloat(formData.duration),
      success: parseInt(formData.success),
      rnf: parseInt(formData.rnf),
      fail: parseInt(formData.fail),
      crawlfrequency: parseInt(formData.crawlfrequency),
      durationtolaunch: parseInt(formData.durationtolaunch),
      starttime: parseFloat(formData.starttime),
      endtime: parseFloat(formData.endtime),
    };

    onSave(dataToSave);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <h1 className="text-3xl font-semibold text-gray-800 p-6">Create New Record</h1>

      <form onSubmit={handleSubmit} className="p-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <label htmlFor="carrier" className="block text-lg font-semibold">
              Carrier:
            </label>
            <input
              type="text"
              id="carrier"
              name="carrier"
              value={formData.carrier}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              required
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="active" className="block text-lg font-semibold">
              Active:
            </label>
            <input
              type="number"
              id="active"
              name="active"
              value={formData.active}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              required
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="lastrun" className="block text-lg font-semibold">
              Last Run:
            </label>
            <input
              type="number"
              id="lastrun"
              name="lastrun"
              value={formData.lastrun}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              step="0.1" // Adjust according to your decimal precision
              required
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="duration" className="block text-lg font-semibold">
              Duration:
            </label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              step="0.1" // Adjust according to your decimal precision
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="success" className="block text-lg font-semibold">
              Success:
            </label>
            <input
              type="number"
              id="success"
              name="success"
              value={formData.success}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="rnf" className="block text-lg font-semibold">
              RNF:
            </label>
            <input
              type="number"
              id="rnf"
              name="rnf"
              value={formData.rnf}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="fail" className="block text-lg font-semibold">
              Fail:
            </label>
            <input
              type="number"
              id="fail"
              name="fail"
              value={formData.fail}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="crawlfrequency" className="block text-lg font-semibold">
              Crawl Frequency:
            </label>
            <input
              type="number"
              id="crawlfrequency"
              name="crawlfrequency"
              value={formData.crawlfrequency}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="durationtolaunch" className="block text-lg font-semibold">
              Duration to Launch:
            </label>
            <input
              type="number"
              id="durationtolaunch"
              name="durationtolaunch"
              value={formData.durationtolaunch}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="starttime" className="block text-lg font-semibold">
              Start Time:
            </label>
            <input
              type="number"
              id="starttime"
              name="starttime"
              value={formData.starttime}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              step="0.01" // Adjust according to your decimal precision
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="endtime" className="block text-lg font-semibold">
              End Time:
            </label>
            <input
              type="number"
              id="endtime"
              name="endtime"
              value={formData.endtime}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              step="0.01" // Adjust according to your decimal precision
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateComponent;

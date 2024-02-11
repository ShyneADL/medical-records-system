import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import addDays from 'date-fns/addDays';
import subDays from 'date-fns/subDays';

const DateRangePicker = ({ onChange }) => {
  const [startDate, setStartDate] = useState(null);

  const handleDateChange = (date) => {
    setStartDate(date);
    onChange(date);
  };

  const endDate = addDays(startDate, 6); // Set end date as 6 days after start date

  return (
    <DatePicker
      selected={startDate}
      onChange={handleDateChange}
      startDate={startDate}
      endDate={endDate}
      minDate={subDays(new Date(), 6)} // Set min date as 7 days ago
      maxDate={new Date()} // Set max date as today
      selectsRange
      inline
    />
  );
};

export default DateRangePicker;

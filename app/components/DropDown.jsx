"use client"

import React, { useState } from 'react';
import DateRangePicker from './DateRangePicker';

const DropdownMenu = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleDateChange = (startDate, endDate) => {
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
  };

  const filteredOptions = options.filter(option => {
    if (!selectedStartDate || !selectedEndDate) {
      return true; // No date range selected, return all options
    } else {
      // Date range selected, filter options based on the range
      // You can add your own logic here, I'm assuming the options have a date property
      const optionDate = new Date(option.date);
      return optionDate >= selectedStartDate && optionDate <= selectedEndDate;
    }
  });

  return (
    <div className="dropdown-menu">
      <div className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || 'Select an option'}
      </div>
      {isOpen && (
        <div className="dropdown-options">
          <DateRangePicker onChange={handleDateChange} />
          {filteredOptions.map(option => (
            <div
              key={option.value}
              className="dropdown-option"
              onClick={() => handleOptionSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

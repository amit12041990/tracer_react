import React, { useState } from 'react';
import { DateRangePicker } from 'rsuite';
import "rsuite/dist/rsuite.css"

function DateRangeCal() {
  const [value, setValue] = useState([new Date(), new Date()]); // Set initial value for date range

  // Handle change event
  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <div>
    
      <DateRangePicker value={value} onChange={handleChange} />
    </div>
  );
}

export default DateRangeCal;

import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneComponent = () => {
  const [countryCode, setCountryCode] = useState('');

  const handleCountryChange = (country) => {
    setCountryCode(country.dialCode);
  };

  return (
    <div>
      <label>Country Code:</label>
      <input
        type="text"
        value={countryCode}
        readOnly // Prevents editing of the input field
      />
      <div style={{  }}>
        {/* Hidden PhoneInput component */}
        <PhoneInput
          country={'auto'}
          onlyCountries={['']}
          onChange={handleCountryChange}
        />
      </div>
    </div>
  );
};



export default PhoneComponent;

import React, { useEffect, useState, useMemo } from 'react';

const debounce = (func, delay) => {
  let timeoutID;
  return function (...args) {
    if (timeoutID) clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const debouncedSearch = useMemo(() => debounce(onSearch, 500), [onSearch]);

  useEffect(() => {
    debouncedSearch(input);
  }, [input, debouncedSearch]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input
      
        type="text"
        placeholder="Search books..."
        value={input}
        onChange={handleChange}
        style={{ padding: "8px", width: "300px", fontSize: "16px" }}
      />
    </div>
  );
};

export default SearchBar;

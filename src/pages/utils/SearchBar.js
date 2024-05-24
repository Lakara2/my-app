import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={searchInput}
        onChange={handleChange}
      />
    </Form>
  );
};

export default SearchBar;

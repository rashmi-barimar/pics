import "./SearchBar.css";
import { useState } from "react";
const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label>Search Term</label>
        <input onChange={handleChange} value={term} />
      </form>
    </div>
  );
};
export default SearchBar;

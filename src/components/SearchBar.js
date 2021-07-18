import { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => setSearchTerm(event.target.value);

  const handleSubmit = (event) => {
    onFormSubmit(searchTerm);
    event.preventDefault();
  };
  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleChange}
          className="border-4 text-2xl rounded-md border-white"
        />
      </form>
    </div>
  );
};

export default SearchBar;

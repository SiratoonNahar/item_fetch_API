
import { useState } from "react";

//eslint-disable-next-line react/prop-types
const SearchBar = ({ onSearch }) => {
   const [query, setQuery] = useState("");

   const handleInputChange = (e) => {
      setQuery(e.target.value);
   };

   const handleSearch = () => {
      onSearch(query);
   };

   return (
      <div className="search-bar">
         <input
            type="text"
            placeholder="Search stories..."
            value={query}
            onChange={handleInputChange}
         />
         <button onClick={handleSearch}>Search</button>
      </div>
   );
};

export default SearchBar;

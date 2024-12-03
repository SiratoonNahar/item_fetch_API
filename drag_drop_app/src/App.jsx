// import  { useState, useEffect } from "react";
// import ItemList from "./components/itemList";
// import SearchBar from "./components/SearchBar";
// import Pagination from "./components/Pagination";
// import { fetchItems } from "./api";
// import "./App.css";



// const App = () => {
//   const [items, setItems] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const itemsPerPage = 10;

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         setIsLoading(true);
//         const data = await fetchItems();
//         setItems(data);
//       } catch (err) {
//         setError("Failed to fetch items. Please try again later.",err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     loadData();
//   }, []);

//   const handleSearch = (term) => setSearchTerm(term);
//   const handlePageChange = (page) => setCurrentPage(page);

//   const filteredItems = items.filter((item) =>
//     item.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const paginatedItems = filteredItems.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <div className="app">
//       <h1>React App with Drag-and-Drop</h1>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="error">{error}</p>
//       ) : (
//         <>
//           <SearchBar onSearch={handleSearch} />
//           <ItemList items={paginatedItems} />
//           <Pagination
//             totalItems={filteredItems.length}
//             itemsPerPage={itemsPerPage}
//             currentPage={currentPage}
//             onPageChange={handlePageChange}
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default App;


import Stories from "./components/list_products";

import "./App.css";

const App = () => {
   return (
      <>
         
         <Stories />
      </>
   );
};

export default App;
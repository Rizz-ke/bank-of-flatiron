// SearchBar component
const SearchBar = ({ setTransactions, items }) => {
  // Handle input changes
  const handleChange = (e) => {
    const info = e.target.value.trim();
    setTransactions(
      info.length > 0
        ? items.filter((t) =>
            t.Description.toLowerCase().includes(info.toLowerCase())
          )
        : items
    );
  };

  // Render input element with change handler
  return (
    <div className="mb-3">
      <input
        onChange={handleChange}
        className="form-control"
        type="text"
        placeholder="Search Your Recent Transactions"
      />
    </div>
  );
};

// Export the SearchBar component
export default SearchBar;

function SearchBar({ setTransactions, items }) {
    function handleChange(e) {
      const info = e.target.value.trim();
      if (info.length > 0) {
        const filtered = items.filter((transaction) => transaction.Description.toLowerCase().includes(info.toLowerCase()));
        setTransactions(filtered);
      } else {
        setTransactions(items); 
      }
    }
  
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
}

export default SearchBar;

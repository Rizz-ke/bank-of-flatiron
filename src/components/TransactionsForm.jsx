// Import necessary modules
import React, { useState } from "react";
// Define the TransactionForm component
function TransactionForm({ transactions, setTransactions }) {
  // Use the useState hook to manage the state of the new transaction
  //The initial state is an empty transaction object
  const [newTransaction, setNewTransaction] = useState({
    Date: "",
    Description: "",
    Category: "",
    Amount: "",
  });
  // Define a handleInputChange function to input changes
  const handleInputChange = (e) => {
    // Destructure the name and value properties from the event target
    const { name, value } = e.target;
    // Update the new transaction state with the new value
    setNewTransaction({
      ...newTransaction,
      [name]: value,
    });
  };
  // Define a handleAddTransaction function to handle form submission
  const handleAddTransaction = () => {
    // Check if all input fields are filled
    if (
      newTransaction.Date &&
      newTransaction.Description &&
      newTransaction.Category &&
      newTransaction.Amount
    ) {
      // Add the new transaction to the transaction array
      setTransactions([...transactions, newTransaction]);

      // Reset the new transaction state to an empty object
      setNewTransaction({
        Date: "",
        Description: "",
        Category: "",
        Amount: "",
      });
    }
  };
  // Return the jsx to be rendered
  // Render input fields and button for new transaction
  return (
    <div className="row border">
      <div className="col-3">
        <input
          type="date"
          name="Date"
          value={newTransaction.Date}
          onChange={handleInputChange}
        />
      </div>{" "}
      <div className="col-3">
        <input
          type="text"
          name="Description"
          placeholder="Description"
          value={newTransaction.Description}
          onChange={handleInputChange}
        />
      </div>{" "}
      <div className="col-3">
        <input
          type="text"
          name="Category"
          placeholder="Category"
          value={newTransaction.Category}
          onChange={handleInputChange}
        />
      </div>{" "}
      <div className="col-3">
        <input
          type="text"
          name="Amount"
          placeholder="Amount"
          value={newTransaction.Amount}
          onChange={handleInputChange}
        />
      </div>{" "}
      <div className="col-12">
        <button onClick={handleAddTransaction}>Add New Transaction</button>
      </div>
    </div>
  );
}

// Export the TransactionForm component for use in other files
export default TransactionForm;

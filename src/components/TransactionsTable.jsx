// TransactionTable component
function TransactionTable({ transactions }) {
  // Return table with headers and rows for each transaction
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.Date}</td>
            <td>{transaction.Description}</td>
            <td>{transaction.Category}</td>
            <td>{transaction.Amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
// Export TransactionTable
export default TransactionTable;

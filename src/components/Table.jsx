// Table component
function Table({ transactions }) {
  // Map through transactions and return table rows
  const info = transactions.map((exchange, index) => {
    return (
      <tr key={index+1}>
        <td>{exchange.Date}</td>
        <td>{exchange.Description}</td>
        <td>{exchange.Category}</td>
        <td>{exchange.Amount}</td>
      </tr>
    );
  });

  // Render table rows
  return (<>{info}</>)
}
// Export Table
export default Table;

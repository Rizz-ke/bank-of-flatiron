function Table({ transactions }) {
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

  return (<>{info}</>)
}

export default Table;

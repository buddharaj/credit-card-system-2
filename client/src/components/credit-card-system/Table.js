export default function Table({ creditCardData }) {
  return (
    <div>
      {creditCardData && creditCardData.length ? (
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Card Number</th>
              <th>Balance</th>
              <th>Limit</th>
            </tr>
          </thead>
          <tbody>
            {creditCardData.map((creditCardDetails) => (
              <tr key={creditCardDetails._id}>
                <td data-label="name">{creditCardDetails.name}</td>
                <td data-label="cardNumber">{creditCardDetails.cardNumber}</td>
                <td data-label="Balance">£{creditCardDetails.balance}</td>
                <td data-label="limit">{creditCardDetails.limit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        ""
      )}
    </div>
  );
}

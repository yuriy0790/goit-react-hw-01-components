import PropTypes from 'prop-types';

export default function TransactionHistory({ transactions }) {
  return (
    <>
      <table class="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transact => (
            <tr key={transact.id}>
              <td>{transact.type}</td>
              <td>{transact.amount}</td>
              <td>{transact.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

import TransactionsContent from "./TransactionsContent";
import UpcomingPaymentContent from "./UpcomingPaymentContent";

export const ParentPayment = () => {
    return (
        <div className='Parent-payment'>
            <h1>Upcoming Payments</h1>
            <div className='Parent-upcomingPayments'>
                <UpcomingPaymentContent></UpcomingPaymentContent>
            </div>
            <h1>Transactions</h1>
            <div className='Parent-transactions'>
                <TransactionsContent></TransactionsContent>
            </div>
        </div>
    )
};

export default ParentPayment;

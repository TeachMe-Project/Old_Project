import React, {Component} from 'react';

class Parent extends Component {
    render() {
        return (
            <div className="Parent">
                <div className="Parent-header">
                    <h1>Parent</h1>
                </div>
                <div className="Parent-tab-content">
                    <button className="Parent-tab-content-item">
                        Payment
                    </button>
                    <button className="Parent-tab-content-item">
                        Summary
                    </button>
                    <button className="Parent-tab-content-item">
                        Notification
                    </button>
                </div>
                <div className='Parent-payment'>
                    <div className='Parent-upcomingPayments'>
                        <h1>Upcoming Payments</h1>
                        <div className='Parent-upcomingPayments-content'>
                            <div className='Parent-upcomingPayments-item'>
                                <p>Class</p>
                                <p>Teacher</p>
                                <button>Pay now</button>
                            </div>
                            <div className='Parent-upcomingPayments-item'>
                                <p>Class</p>
                                <p>Teacher</p>
                                <button>Pay now</button>
                            </div>
                            <div className='Parent-upcomingPayments-item'>
                                <p>Class</p>
                                <p>Teacher</p>
                                <button>Pay now</button>
                            </div>
                            <div className='Parent-upcomingPayments-item'>
                                <p>Class</p>
                                <p>Teacher</p>
                                <button>Pay now</button>
                            </div>
                        </div>
                    </div>
                    <div className='Parent-transactions'>
                        <h1>Transactions</h1>
                        <div className='Parent-transactions-content'>
                            <div className='Parent-upcomingPayments-item'>
                                <p>Class</p>
                                <p>Teacher</p>
                                <button>Pay now</button>
                            </div>
                            <div className='Parent-upcomingPayments-item'>
                                <p>Class</p>
                                <p>Teacher</p>
                                <button>Pay now</button>
                            </div>
                            <div className='Parent-upcomingPayments-item'>
                                <p>Class</p>
                                <p>Teacher</p>
                                <button>Pay now</button>
                            </div>
                            <div className='Parent-upcomingPayments-item'>
                                <p>Class</p>
                                <p>Teacher</p>
                                <button>Pay now</button>
                            </div>
                            <div className='Parent-upcomingPayments-item'>
                                <p>Class</p>
                                <p>Teacher</p>
                                <button>Pay now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Parent;

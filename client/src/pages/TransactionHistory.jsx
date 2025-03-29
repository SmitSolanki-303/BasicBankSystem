import React from "react";

import "../styles/TransactionHistory.css"

function TransactionHistory() {
    return (
        <div className="main-content-transactionHistory">
            <title className="title">Transaction History</title>

            <div className="sub-content-transactionHistory">
                <table className="transaction-list">
                    <thead className="transaction-title">
                        <tr>
                            <th>Sender</th>
                            <th>Receiver</th>
                            <th>Amount</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Smit Solanki</td>
                            <td>John Doe</td>
                            <td>500</td>
                        </tr>

                        <tr>
                            <td>Michael Lee</td>
                            <td>David Davis</td>
                            <td>5100</td>
                        </tr>

                        <tr>
                            <td>Emma Miller</td>
                            <td>Bob Johnson</td>
                            <td>1000</td>
                        </tr>

                        <tr>
                            <td>Smit Solanki</td>
                            <td>John Doe</td>
                            <td>500</td>
                        </tr>

                        <tr>
                            <td>Michael Lee</td>
                            <td>David Davis</td>
                            <td>5100</td>
                        </tr>

                        <tr>
                            <td>Emma Miller</td>
                            <td>Bob Johnson</td>
                            <td>1000</td>
                        </tr>

                        <tr>
                            <td>Emma Miller</td>
                            <td>Bob Johnson</td>
                            <td>1000</td>
                        </tr>

                        <tr>
                            <td>Smit Solanki</td>
                            <td>John Doe</td>
                            <td>500</td>
                        </tr>

                        <tr>
                            <td>Michael Lee</td>
                            <td>David Davis</td>
                            <td>5100</td>
                        </tr>

                        <tr>
                            <td>Emma Miller</td>
                            <td>Bob Johnson</td>
                            <td>1000</td>
                        </tr>

                        <tr>
                            <td>Emma Miller</td>
                            <td>Bob Johnson</td>
                            <td>1000</td>
                        </tr>

                        <tr>
                            <td>Smit Solanki</td>
                            <td>John Doe</td>
                            <td>500</td>
                        </tr>

                        <tr>
                            <td>Michael Lee</td>
                            <td>David Davis</td>
                            <td>5100</td>
                        </tr>

                        <tr>
                            <td>Emma Miller</td>
                            <td>Bob Johnson</td>
                            <td>1000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TransactionHistory;
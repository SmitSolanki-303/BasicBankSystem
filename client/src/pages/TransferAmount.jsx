import React from "react";

import "../styles/TransferAmount.css";
import { Link } from "react-router-dom";
import { Form, Card } from "react-bootstrap";

function TransferAmount() {
    return (
        <div className="main-content-transferAmount">
            <title className="title">Transfer Amount</title>

            <div className="sub-content-transferAmount">
                <table className="transfer-list">
                    <thead className="transfer-title">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Balance</th>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Smit Solanki</td>
                            <td>smit.solanki@example.com</td>
                            <td>10000</td>
                        </tr>
                    </tbody>
                </table>

                <div className="bottom-details">
                    <Card>
                        <Card.Body className="to-card">To :-</Card.Body>
                    </Card>

                    <div className="select-box">
                        <Form.Select
                            aria-label="Default select example"
                            className="select-input-field"
                        >
                            <option>Choose</option>
                            <option value="2">John Doe</option> //Dynamic data
                        </Form.Select>
                    </div>

                    <div className="amount-input">
                        <label>Amount:</label>
                        <input type="text" className="input-amount-field" />
                    </div>

                    <div className="button-content">
                        <Link to="/" className="transfer-btn">
                            Transfer
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransferAmount;

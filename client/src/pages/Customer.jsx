import React from "react";

import "../styles/Customer.css";

import { Link } from "react-router-dom";
import { FaMoneyBillTransfer } from "react-icons/fa6";

function Customer() {
    const data = [
        {
            id: "1",
            name: "Smit Solanki",
            email: "smit.solanki@example.com",
            balance: "10000",
            transfer: "Send Money",
        },
        {
            id: "2",
            name: "John Doe",
            email: "john.doe@example.com",
            balance: "12000",
            transfer: "Send Money",
        },
        {
            id: "3",
            name: "Alice Smith",
            email: "alice.smith@example.com",
            balance: "1050",
            transfer: "Send Money",
        },
        {
            id: "4",
            name: "Bob Johnson",
            email: "bob.johnson@example.com",
            balance: "20000",
            transfer: "Send Money",
        },
        {
            id: "5",
            name: "Emily Brown",
            email: "emily.brown@example.com",
            balance: "7000",
            transfer: "Send Money",
        },
        {
            id: "6",
            name: "Michael Lee",
            email: "michael.lee@example.com",
            balance: "6580",
            transfer: "Send Money",
        },
        {
            id: "7",
            name: "Sophia Wilson",
            email: "sophia.wilson@example.com",
            balance: "6900",
            transfer: "Send Money",
        },
        {
            id: "8",
            name: "David Davis",
            email: "david.davis@example.com",
            balance: "20000",
            transfer: "Send Money",
        },
        {
            id: "9",
            name: "Emma Miller",
            email: "emma.miller@example.com",
            balance: "11000",
            transfer: "Send Money",
        },
        {
            id: "10",
            name: "Oliver Garcia",
            email: "oliver.garcia@example.com",
            balance: "19000",
            transfer: "Send Money",
        },
    ];

    return (
        <div className="main-content-customer">
            <div className="sub-content-customer">
                <table className="customer-list">
                    <thead className="customer-title">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Balance</th>
                            <th>Transfer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.balance}</td>
                                    <td>
                                        <Link to="/TransferAmount" className="transfer-link">
                                            <span className="icon">
                                                Send <FaMoneyBillTransfer />
                                            </span>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Customer;

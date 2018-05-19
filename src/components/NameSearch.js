import React from 'react';
//import Button from "react";
const Button = () => (
    <button className="btn btn-primary fn-submit-name">Search Name</button>
)

const NameSearch = () => (
    <div className="search">


        <div className="row search-wrapper">
            <div className="col">
                <div className="form-group search-box">
                    <label htmlFor="customerName">Customer Name</label>
                    <div className="search-row">
                        <input type="text" id="customerName" className="form-control" placeholder="Customer Name" />
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default NameSearch;


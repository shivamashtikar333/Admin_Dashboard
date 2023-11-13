import React from "react";

function Body() {
  return (
    <div className="body-container">
      <div className="body-left">
        <h3 style={{ marginLeft: "10px" }}>Product Sell</h3>
      </div>

      <div className="body-right">
        <span>
          <input type="text" placeholder="Search.." />
          <button style={{ marginRight: "10px" }}>Last 30 days</button>
        </span>
      </div>

      <table>
        <thead>
          <tr>
            <th style={{ color: "#82ca9d" }}>Product Name</th>
            <th style={{ color: "#82ca9d" }}>Stock</th>
            <th style={{ color: "#82ca9d" }}>Price</th>
            <th style={{ color: "#82ca9d" }}>Total Sales</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Abstract 3D</td>
            <td>32 in stock</td>
            <td>45.99</td>
            <td>20</td>
          </tr>

          <tr>
            <td>Sarphens Illustration</td>
            <td>32 in stock</td>
            <td>45.99</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Body;

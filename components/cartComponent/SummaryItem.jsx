"use client";
import React from "react";

// Define SummaryItem Component
const SummaryItem = ({ label, value }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid #e0dffeff', fontFamily: 'Montserrat', fontWeight: '500', fontSize: '18px', color: '#3c3c3cff' }}>
      <div>{label}</div>
      <div>{value}</div>
    </div>
  );


export default SummaryItem;
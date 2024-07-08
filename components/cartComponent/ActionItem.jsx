"use client";
import React from "react";


// Define ActionItem Component
const ActionItem = ({ icon, label }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
      {icon}
      <span style={{ fontFamily: 'Montserrat', fontWeight: '500', fontSize: '14px', color: '#111111' }}>{label}</span>
    </div>
  );
  
export default ActionItem;
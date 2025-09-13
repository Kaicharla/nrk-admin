import React from "react";

const NumberInput = ({ label, name, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      type="number"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border rounded px-3 py-2"
    />
  </div>
);

export default NumberInput;

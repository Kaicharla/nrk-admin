import React from "react";

const TextInput = ({ label, name, value, onChange, required = false, type = "text" }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full border rounded px-3 py-2"
    />
  </div>
);

export default TextInput;

import React from "react";

const Input = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  customstyle,
  disabled = false,
}) => {
  const baseStyles =
    "w-full rounded-lg border border-blue-primary font-outfit px-4 py-2 text-sm transition duration-200 outline-none font-outfit font-bold bg-blue-primary dark:bg-blue-primary";

  const stateStyles = error
    ? "border-red-500 focus:border-red-500"
    : value
      ? " text-blue-tertiary dark:text-gray-dark font-bold focus:border-blue-tertiary focus:dark:bg-tertiary-light"
      : "  text-blue-tertiary dark:text-gray-dark focus:border-blue-tertiary focus:dark:bg-tertiary-light";

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-primary-light"
        >
          {label}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        customstyle={customstyle}
        className={`${baseStyles} ${stateStyles} ${customstyle} ${
          disabled ? "bg-gray-100 cursor-not-allowed" : "bg-blue-primary"
        } dark:text-gray-dark`}
      />

      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default Input;

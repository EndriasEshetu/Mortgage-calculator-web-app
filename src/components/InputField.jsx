function InputField({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "number",
  min,
  step,
  prefix,
  suffix,
  error,
}) {
  const hasAdornment = prefix || suffix;

  return (
    <div className="form-field">
      <label htmlFor={id} className="field-label">
        {label}
      </label>

      <div className={`field-control ${error ? "has-error" : ""}`}>
        {prefix ? <span className="field-adornment">{prefix}</span> : null}

        <input
          id={id}
          name={id}
          type={type}
          inputMode="decimal"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          min={min}
          step={step}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={hasAdornment ? "input-with-adornment" : ""}
        />

        {suffix ? <span className="field-adornment">{suffix}</span> : null}
      </div>

      {error ? (
        <p id={`${id}-error`} className="field-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default InputField;

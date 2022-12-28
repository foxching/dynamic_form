import { ErrorMessage } from "@hookform/error-message";

type InpSelectProps = {
  label: string;
  fieldName: string;
  register: any;
  config: any;
  defaultValue: any;
  errors: any;
  options: any[];
};

const InpSelect = ({
  label,
  fieldName,
  register,
  config = {},
  defaultValue,
  errors = null,
  options = [],
}: InpSelectProps) => {
  return (
    <>
      <label htmlFor={fieldName} className="form-label">
        {label}
      </label>
      <select
        className="form-select"
        {...register(fieldName, config)}
        defaultValue={defaultValue}
        name={fieldName}
        id={fieldName}
      >
        {options.map((o: any, index: any) => (
          <option key={index} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <ErrorMessage
        errors={errors}
        name={fieldName}
        render={({ message }) => (
          <div className="invalid-feedback">{message}</div>
        )}
      />
    </>
  );
};

export default InpSelect;

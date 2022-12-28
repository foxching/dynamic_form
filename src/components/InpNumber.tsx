import { ErrorMessage } from "@hookform/error-message";

type InpNumberProps = {
  label: string;
  fieldName: string;
  register: any;
  config: any;
  defaultValue: any;
  errors: any;
};

const InpNumber = ({
  label,
  fieldName,
  register,
  config,
  defaultValue,
  errors,
}: InpNumberProps) => {
  return (
    <>
      <label htmlFor={fieldName} className="form-label">
        {label}
      </label>
      <input
        type="number"
        className={`form-control ${errors[fieldName] ? "is-invalid" : ""}`}
        {...register(fieldName, config)}
        defaultValue={defaultValue}
      />
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
export default InpNumber;

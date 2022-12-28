import { ErrorMessage } from "@hookform/error-message";

type InpTextProps = {
  label: string;
  fieldName: string;
  register: any;
  config: any;
  defaultValue: any;
  errors: any;
};

const InpText = ({
  label,
  fieldName,
  register,
  config,
  defaultValue,
  errors,
}: InpTextProps) => {
  return (
    <>
      <label htmlFor={fieldName} className="form-label">
        {label}
      </label>
      <input
        type="text"
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
export default InpText;

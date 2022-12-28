import { ErrorMessage } from "@hookform/error-message";

type InpFileProps = {
  label: string;
  fieldName: string;
  errors: any;
  register: any;
  config: any;
  defaultValue: any;
};

const InpFile = ({
  label,
  fieldName,
  errors = null,
  register,
  config = {},
  defaultValue,
}: InpFileProps) => {
  return (
    <>
      <label htmlFor={fieldName} className="form-label">
        {label}
      </label>
      <input
        className={`form-control ${errors[fieldName] ? "is-invalid" : ""}`}
        type="file"
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

export default InpFile;

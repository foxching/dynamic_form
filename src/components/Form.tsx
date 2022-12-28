import { FormProvider, useForm } from "react-hook-form";
import { DynamicFieldData } from "../types/dynamic-control-types";
import { DynamicControl } from "./DynamicControl";
import { ErrorMessage } from "@hookform/error-message";

interface FormProps {
  fields: DynamicFieldData[];
}

export const Form = ({ fields }: FormProps) => {
  const formMethods = useForm();

  const {
    handleSubmit,
    formState: { isSubmitting, errors, isDirty, isValid },
  } = formMethods;

  function onSubmit(data: any, error: any) {
    if (isValid) {
      alert("ok");
    }
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormProvider {...formMethods}>
        {fields.map((d, i) => (
          <div className="mb-3" key={i}>
            <DynamicControl {...d} errors={errors} />
          </div>
        ))}
      </FormProvider>
      <div className="text-center">
        <button
          className="btn btn-primary"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
      </div>
    </form>
  );
};

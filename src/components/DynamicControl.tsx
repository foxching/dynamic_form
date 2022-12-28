import { useFormContext } from "react-hook-form";
import { DynamicFieldData } from "../types/dynamic-control-types";
import InpFile from "./InpFile";
import InpNumber from "./InpNumber";
import InpSelect from "./InpSelect";
import InpText from "./InpText";

type DynamicProps = DynamicFieldData & {
  errors: any;
};
export const DynamicControl = ({
  inputType,
  label,
  fieldName,
  defaultValue,
  options = [],
  config = {},
  errors = null,
}: DynamicProps) => {
  const { register } = useFormContext();

  switch (inputType) {
    case "text":
      return (
        <InpText
          label={label}
          register={register}
          fieldName={fieldName}
          config={config}
          defaultValue={defaultValue}
          errors={errors}
        />
      );
    case "select": {
      return (
        <InpSelect
          label={label}
          register={register}
          fieldName={fieldName}
          config={config}
          defaultValue={defaultValue}
          errors={errors}
          options={options}
        />
      );
    }
    case "number":
      return (
        <InpNumber
          label={label}
          register={register}
          fieldName={fieldName}
          config={config}
          defaultValue={defaultValue}
          errors={errors}
        />
      );
    case "file":
      return (
        <InpFile
          label={label}
          register={register}
          fieldName={fieldName}
          config={config}
          defaultValue={defaultValue}
          errors={errors}
        />
      );
    default:
      return (
        <InpText
          label={label}
          register={register}
          fieldName={fieldName}
          config={config}
          defaultValue={defaultValue}
          errors={errors}
        />
      );
  }
};

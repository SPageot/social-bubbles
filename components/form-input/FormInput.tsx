import React from "react";
import {
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
} from "../ui/form-control";
import { Input, InputField } from "../ui/input";
import { FormInputPropType } from "@/types/types";

const FormInput: React.FC<FormInputPropType> = ({
  labelName,
  placeholderLabel,
  inputValue,
  onChangeInputText,
  textType = "text",
}): React.ReactElement => {
  return (
    <>
      <FormControlLabel>
        <FormControlLabelText>{labelName}</FormControlLabelText>
      </FormControlLabel>
      <Input className="my-1">
        <InputField
          type={textType}
          placeholder={placeholderLabel}
          value={inputValue}
          onChangeText={onChangeInputText}
        />
      </Input>
      <FormControlHelper>
        <FormControlHelperText />
      </FormControlHelper>
      <FormControlError>
        <FormControlErrorIcon />
        <FormControlErrorText />
      </FormControlError>
    </>
  );
};

export default FormInput;

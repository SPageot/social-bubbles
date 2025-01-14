import React from "react";
import FormInput from "../form-input/FormInput";
import { FormControl } from "../ui/form-control";
import { FormLoginPropsType } from "@/types/types";

const FormLogin: React.FC<FormLoginPropsType> = ({
  state,
  dispatch,
}): React.ReactElement => {
  return (
    <FormControl
      style={{
        padding: 30,
      }}
    >
      <FormInput
        labelName="Username"
        placeholderLabel="Username"
        inputValue={state.username}
        onChangeInputText={(text) =>
          dispatch({ type: "username", payload: text })
        }
      />
      <FormInput
        textType="password"
        labelName="Password"
        placeholderLabel="Password"
        inputValue={state.password}
        onChangeInputText={(text) =>
          dispatch({ type: "password", payload: text })
        }
      />
    </FormControl>
  );
};

export default FormLogin;

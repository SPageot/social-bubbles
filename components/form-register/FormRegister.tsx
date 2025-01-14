import React from "react";
import FormInput from "../form-input/FormInput";
import { FormControl } from "../ui/form-control";
import { FormLoginPropsType } from "@/types/types";

const FormRegister: React.FC<FormLoginPropsType> = ({
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
      <FormInput
        labelName="First Name"
        placeholderLabel="First Name"
        inputValue={state.firstName}
        onChangeInputText={(text) =>
          dispatch({ type: "firstName", payload: text })
        }
      />
      <FormInput
        labelName="Last Name"
        placeholderLabel="Last Name"
        inputValue={state.lastName}
        onChangeInputText={(text) =>
          dispatch({ type: "lastName", payload: text })
        }
      />
      <FormInput
        labelName="Email"
        placeholderLabel="Email"
        inputValue={state.email}
        onChangeInputText={(text) => dispatch({ type: "email", payload: text })}
      />
      <FormInput
        labelName="Phone Number"
        placeholderLabel="Phone Number"
        inputValue={state.phoneNumber}
        onChangeInputText={(text) =>
          dispatch({ type: "phoneNumber", payload: text })
        }
      />
    </FormControl>
  );
};

export default FormRegister;

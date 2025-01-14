import React, { useReducer, useState } from "react";
import { SafeAreaView } from "react-native";
import { Heading } from "@/components/ui/heading";
import { AuthAction, AuthState } from "@/types/types";
import FormLogin from "@/components/form-login/FormLogin";
import AuthButton from "@/components/auth-button/AuthButton";
import { ButtonGroup } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import FormRegister from "@/components/form-register/FormRegister";

const authState: AuthState = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "username":
      return {
        ...state,
        username: action.payload,
      };
    case "password":
      return {
        ...state,
        password: action.payload,
      };

    case "firstName":
      return {
        ...state,
        firstName: action.payload,
      };

    case "lastName":
      return {
        ...state,
        lastName: action.payload,
      };

    case "email":
      return {
        ...state,
        email: action.payload,
      };

    case "phoneNumber":
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case "resetState":
      return {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      };
    default:
      return state;
  }
};

export default function Index() {
  const [state, dispatch] = useReducer(authReducer, authState);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmitPress = (): void => {
    console.log(state);
  };

  const handleLoginPress = (): void => {
    console.log(state);
  };

  const handleCancelPress = () => {
    dispatch({ type: "resetState" });
    setIsRegistering(false);
  };

  const handleIsRegisteringPress = () => setIsRegistering(true);
  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#009dc4",
        position: "relative",
      }}
    >
      <Heading style={{ color: "#f2fcff", textAlign: "center" }} size="4xl">
        Social Bubbles
      </Heading>
      <Box
        style={{
          padding: 10,
          margin: 10,
        }}
      >
        {isRegistering ? (
          <FormRegister state={state} dispatch={dispatch} />
        ) : (
          <FormLogin state={state} dispatch={dispatch} />
        )}
        <ButtonGroup style={{ flexDirection: "row", justifyContent: "center" }}>
          {isRegistering ? (
            <>
              <AuthButton onPress={handleSubmitPress} buttonLabel="Submit" />
              <AuthButton onPress={handleCancelPress} buttonLabel="Cancel" />
            </>
          ) : (
            <>
              <AuthButton onPress={handleLoginPress} buttonLabel="Login" />
              <AuthButton
                onPress={handleIsRegisteringPress}
                buttonLabel="Register"
              />
            </>
          )}
        </ButtonGroup>
      </Box>
    </SafeAreaView>
  );
}

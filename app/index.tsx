import React, { useReducer, useState } from "react";
import { SafeAreaView } from "react-native";
import { Heading } from "@/components/ui/heading";
import { AuthAction, AuthState } from "@/types/types";
import FormLogin from "@/components/form-login/FormLogin";
import AuthButton from "@/components/auth-button/AuthButton";
import { ButtonGroup } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import FormRegister from "@/components/form-register/FormRegister";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

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
  const { mutate: createUser } = useMutation({
    mutationFn: async () => {
      const registerNewUser = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/user/create`,
        state
      );
      return registerNewUser.data;
    },
  });
  const { mutate: authUser } = useMutation({
    mutationFn: async () => {
      const registerNewUser = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/login`,
        {
          username: state.username,
          password: state.password,
        }
      );
      return registerNewUser.data;
    },
  });

  const handleSubmitPress = (): void => {
    createUser();
  };

  const handleLoginPress = (): void => {
    authUser();
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

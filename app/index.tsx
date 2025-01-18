import React, { useEffect, useReducer, useState } from "react";
import { SafeAreaView } from "react-native";
import { Heading } from "@/components/ui/heading";
import FormLogin from "@/components/form-login/FormLogin";
import AuthButton from "@/components/auth-button/AuthButton";
import { ButtonGroup } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import FormRegister from "@/components/form-register/FormRegister";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "expo-toast";
import axios, { AxiosError } from "axios";
import { authReducer } from "@/reducers/userReducer";
import { authState } from "@/state/userState";
import { router } from "expo-router";

export default function Index() {
  const toast = useToast();
  const [state, dispatch] = useReducer(authReducer, authState);
  const [isRegistering, setIsRegistering] = useState(false);
  const { mutate: createUser, data: newUserData } = useMutation({
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response) {
          if (error.response.data.detail) {
            toast.show(error.response.data.detail, {
              duration: 5000,
            });
          } else {
            toast.show(error.response.data.error, {
              duration: 5000,
            });
          }
        } else {
          toast.show(error.message, {
            duration: 5000,
          });
        }
      }
    },
    mutationFn: async () => {
      const registerNewUser = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/register`,
        state
      );
      return registerNewUser.data;
    },
  });
  const { mutate: authUser, data: authUserData } = useMutation({
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response) {
          if (error.response.data.detail) {
            toast.show(error.response.data.detail, {
              duration: 5000,
            });
          } else {
            toast.show(error.response.data.error, {
              duration: 5000,
            });
          }
        } else {
          toast.show(error.message, {
            duration: 5000,
          });
        }
      }
    },
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

  useEffect(() => {
    if (newUserData) {
      dispatch({ type: "resetState" });
      setIsRegistering(false);
      toast.show(newUserData, {
        duration: 5000,
      });
    }

    if (authUserData) {
      dispatch({ type: "authState", payload: authUserData });
      router.push("/Dashboard");
    }
  }, [newUserData, authUserData]);

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

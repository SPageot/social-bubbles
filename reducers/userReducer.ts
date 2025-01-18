import { AuthAction, AuthState } from "@/types/types";

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
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
    case "authState":
      return { ...action.payload, password: "" };
    default:
      return state;
  }
};

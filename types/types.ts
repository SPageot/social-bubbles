export type AuthState = {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

export type AuthUserType = {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

export type AuthAction =
  | { type: "username"; payload: string }
  | { type: "password"; payload: string }
  | { type: "firstName"; payload: string }
  | { type: "lastName"; payload: string }
  | { type: "email"; payload: string }
  | { type: "phoneNumber"; payload: string }
  | { type: "resetState" }
  | { type: "authState"; payload: AuthUserType };

export type FormInputPropType = {
  labelName: string;
  placeholderLabel: string;
  inputValue: string;
  onChangeInputText: (text: string) => void;
  textType?: "text" | "password" | undefined;
};

export type FormLoginPropsType = {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
};

export type AuthButtonPropsType = {
  onPress?: () => void;
  buttonLabel: string;
  disabled?: boolean;
};

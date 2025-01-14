import React from "react";
import {
  Button,
  ButtonText,
  ButtonSpinner,
  ButtonIcon,
  ButtonGroup,
} from "@/components/ui/button";
import { AuthButtonPropsType } from "@/types/types";

const AuthButton: React.FC<AuthButtonPropsType> = ({
  buttonLabel,
  onPress,
  disabled,
}): React.ReactElement => {
  return (
    <>
      <Button onPress={onPress} disabled={disabled}>
        <ButtonText>{buttonLabel}</ButtonText>
      </Button>
    </>
  );
};

export default AuthButton;

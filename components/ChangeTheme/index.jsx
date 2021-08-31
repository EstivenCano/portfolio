import React from "react";
// MUI Components
import { FormGroup, FormControlLabel } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setTheme } from "../../redux/features/theme.slice";
import { ThemeSwitch } from "./style";

export const ChangeTheme = () => {
  const dispatch = useDispatch();
  return (
    <FormGroup>
      <FormControlLabel
        control={<ThemeSwitch defaultChecked />}
        label=''
        onClick={() => dispatch(setTheme())}
      />
    </FormGroup>
  );
};

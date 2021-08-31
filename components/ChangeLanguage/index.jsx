import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
// Theme management
import { SelectLan, FormControlLan } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage, setData } from "../../redux/features/data.slice";

export const ChangeLanguage = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.data.language);

  return (
    <FormControlLan sx={{ mr: 2, minWidth: 120 }}>
      <SelectLan
        value={language}
        onChange={() => {
          dispatch(setLanguage());
          dispatch(setData());
        }}
        displayEmpty>
        <MenuItem value='English'>English</MenuItem>
        <MenuItem value='Español'>Español</MenuItem>
      </SelectLan>
    </FormControlLan>
  );
};

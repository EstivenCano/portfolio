import { styled } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { outlinedInputClasses } from "@material-ui/core/OutlinedInput";

export const SelectLan = styled(Select)(({ theme }) => ({
  height: 35,
  borderRadius: 20,
  fontSize: 15,
  background:
    theme.palette.mode === "dark"
      ? theme.palette.primary.main
      : theme.palette.primary.main,
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
  "&:hover": {
    background:
      theme.palette.mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.dark,
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
  },
}));

export const FormControlLan = styled(FormControl)(({ theme }) => ({
  /* Change border color of the form control when is selected */
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
    {
      borderColor:
        theme.palette.mode === "dark"
          ? theme.palette.primary.main
          : theme.palette.primary.main,
    },
}));

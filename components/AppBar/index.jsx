import React from "react";
import {
  AppBar,
  Box,
  FormGroup,
  FormControlLabel,
  IconButton,
  Typography,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

// Theme management
import { ThemeSwitch } from "./style";
import { useDispatch } from "react-redux";
import { setTheme } from "../../redux/features/theme.slice";

//TODO: Create links for pages
export default function MainAppBar() {
  const dispatch = useDispatch();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant='subtitle1' component='div' sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={<ThemeSwitch sx={{ m: 1 }} defaultChecked />}
              label=''            
              onClick={() => dispatch(setTheme())}
            />
          </FormGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

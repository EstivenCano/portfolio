import React, { useEffect } from "react";
import {
  AppBar,
  Box,
  FormGroup,
  FormControlLabel,
  IconButton,
  Grid,
  MenuItem,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";

// Theme management
import { ThemeSwitch, SelectLan, FormControlLan, StyledLink } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/features/theme.slice";
import { setLanguage, setData } from "../../redux/features/data.slice";

//TODO: Create links for pages
export default function MainAppBar() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.data.language);
  const data = useSelector((state) => state.data.data);

  return (
    <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "row" }}>
      <AppBar>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Grid item xs={10}>
            {data.links.map((link, index) => (
              <Link key={index} href={link.path} passHref>
                <StyledLink>{link.name}</StyledLink>
              </Link>
            ))}
          </Grid>
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

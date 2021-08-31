import React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Grid,
  Toolbar,
  useMediaQuery,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import Link from "next/link";
import { ChangeLanguage } from "../ChangeLanguage";
import { ChangeTheme } from "../ChangeTheme";

import { StyledLink } from "./style";

import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion";

export default function MainAppBar() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const matches = useMediaQuery("(min-width:850px)");

  return (
    <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "row" }}>
      <AppBar>
        <Toolbar
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "row",
            paddingRight: 0,
          }}>
          {matches ? (
            <Grid item container xs={10}>
              {data.links.map((link, index) => (
                <motion.div
                  key={index}
                  animate={{ scale: 1 }}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}>
                  <Link href={link.path} passHref>
                    <StyledLink>{link.name}</StyledLink>
                  </Link>
                </motion.div>
              ))}
            </Grid>
          ) : (
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          )}
          {/** Configuration for theme and language */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}>
            <ChangeLanguage />
            <ChangeTheme />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

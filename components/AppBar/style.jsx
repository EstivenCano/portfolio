import { styled } from "@material-ui/core/styles";

export const StyledLink = styled("a")(({ theme }) => ({
  marginInline: 20,
  "&: after": {
    color: theme.palette.neutral.light,
    transform: "translateX(22px)",
  },
  "&: hover": {
    color: theme.palette.neutral.light,
  },
}));

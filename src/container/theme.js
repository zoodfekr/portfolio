import { createTheme } from "@mui/material/styles";

const FONT = "vazir, 'Segoe UI', roboto, sans-serif";

const sharedTypography = {
  fontFamily: FONT,
  h1: { fontFamily: FONT, fontWeight: 800, letterSpacing: "-0.02em" },
  h2: { fontFamily: FONT, fontWeight: 800, letterSpacing: "-0.02em" },
  h3: { fontFamily: FONT, fontWeight: 700, letterSpacing: "-0.02em" },
  h4: { fontFamily: FONT, fontWeight: 700 },
  h5: { fontFamily: FONT, fontWeight: 600 },
  h6: { fontFamily: FONT, fontWeight: 600 },
  button: { fontFamily: FONT, fontWeight: 600, textTransform: "none" },
  body1: { fontFamily: FONT, lineHeight: 1.85 },
  body2: { fontFamily: FONT, lineHeight: 1.75 },
};

export const GRADIENT =
  "linear-gradient(135deg, #7C5CFF 0%, #5B8CFF 50%, #22D3EE 100%)";
export const GRADIENT_ACCENT = "linear-gradient(120deg, #A78BFA, #22D3EE)";

export const darktheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: { main: "#7C5CFF", light: "#A78BFA", dark: "#5B3FD6" },
    secondary: { main: "#22D3EE", light: "#67E8F9", dark: "#0891B2" },
    info: { main: "#5B8CFF" },
    success: { main: "#34D399" },
    error: { main: "#F87171" },
    warning: { main: "#FBBF24" },
    danger: { main: "#F87171" },
    lightBlue: { main: "#22D3EE" },
    tabs: { main: "rgba(255,255,255,0.04)" },
    background: {
      default: "#0B1020",
      paper: "#121A2E",
      main: "#0B1020",
    },
    text: { primary: "#E8ECF4", secondary: "#94A0B8" },
    divider: "rgba(255,255,255,0.08)",
  },
  shape: { borderRadius: 18 },
  typography: sharedTypography,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0B1020",
          backgroundImage:
            "radial-gradient(900px 600px at 85% -5%, rgba(124,92,255,0.18), transparent 60%), radial-gradient(800px 500px at 0% 110%, rgba(34,211,238,0.14), transparent 55%)",
          backgroundAttachment: "fixed",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 18px 40px rgba(3,6,20,0.45)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 12, fontWeight: 600 },
        containedPrimary: {
          background: GRADIENT,
          boxShadow: "0 10px 24px rgba(124,92,255,0.35)",
          ":hover": { filter: "brightness(1.08)" },
        },
      },
    },
    MuiTextField: {
      defaultProps: { variant: "outlined" },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: "rgba(255,255,255,0.03)",
          "& fieldset": { borderColor: "rgba(255,255,255,0.12)" },
          "&:hover fieldset": { borderColor: "rgba(124,92,255,0.5)" },
          "&.Mui-focused fieldset": { borderColor: "#7C5CFF" },
        },
      },
    },
    MuiChip: {
      styleOverrides: { root: { borderRadius: 10 } },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#7C5CFF",
          fontSize: 12,
          borderRadius: 8,
        },
      },
    },
  },
});



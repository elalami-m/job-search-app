import { ThemeProvider, createTheme } from "@rneui/themed";
import Navigation from "./navigation";

const theme = createTheme({
  // lightColors: {
  //   primary: "#e7e7e8",
  // },
  // darkColors: {
  //   primary: "#000",
  // },
  mode: "light",
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}

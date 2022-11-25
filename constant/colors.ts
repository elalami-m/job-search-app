type TColor = {
  [key: number]: string;
};

type TColors = {
  [key: string]: TColor;
};

const colors: TColors = {
  primary: {
    50: "#e0cad5",
    100: "#cfb1c5",
    200: "#a883ac",
    300: "#775d8c",
    400: "#4c406e",
    500: "#2d2a55",
    600: "#1b1c40",
    700: "#10122f",
    800: "#090a21",
    900: "#060515",
  },
};

export default colors;

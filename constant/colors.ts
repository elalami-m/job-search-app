type TColor = {
  [key: number]: string;
};

type TColors = {
  [key: string]: TColor;
};

const colors: TColors = {
  primary_1: {
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
  primary_2: {
    50: "#f5f4f7",
    100: "#eaeaee",
    200: "#cbcad5",
    300: "#abaabb",
    400: "#6c6a88",
    500: "#2d2a55",
    600: "#29264d",
    700: "#222040",
    800: "#1b1933",
    900: "#16152a",
  },
};

export default colors;

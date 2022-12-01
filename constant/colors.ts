type TColor = {
  [key: number]: string;
};

type TColors = {
  [key: string]: TColor;
};

const colors: TColors = {
  primary: {
    0: "#0A73DB",
    50: "#B6F7FC",
    100: "#85ECF9",
    200: "#4BD2F7",
    300: "#2DB8F5",
    400: "#1098F4",
    500: "#0A73DB",
    600: "#084CAF",
    700: "#062D84",
    800: "#041658",
    900: "#02072C",
  },
  gray: {
    0: "#e5e7eb",
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
};

export default colors;

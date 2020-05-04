import { createMuiTheme } from "@material-ui/core/styles";

import { pink } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#f48fb1" },
    secondary: { main: "#FFFFFF" },
  },
  status: {
    danger: "orange",
  },
});

export default theme;

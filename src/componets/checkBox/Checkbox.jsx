import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

const ControlledCheckbox = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
      color="success"
    />
  );
};
export default ControlledCheckbox;

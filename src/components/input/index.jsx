import { Box, InputLabel, TextField } from "@mui/material";

export const Input = (props) => {
  const { label, ...rest } = props;
  return (
    <Box marginBottom={1}>
      <InputLabel style={{ color: "white" }}>{label}</InputLabel>
      <TextField required variant="outlined" margin="dense" {...rest} />
    </Box>
  );
};

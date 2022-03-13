import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  Link,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

import { TabPanel } from "../../components";
import { FanSignup } from "./fan-signup";
import { TalentSignup } from "./talent-signup";

const validationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  username: yup.string().required("Username is required"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  checked: yup
    .boolean()
    .oneOf([true], "You must agree to the terms and conditions"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  checked: false,
};

export const HomePage = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const onSubmit = async (values, helper) => {
    helper.setSubmitting(true);
    try {
      const url = value === 0 ? "/api/sign-up/fan" : "/api/sign-up/talent";
      const path = "http://wren.in:3200";

      const response = await axios.post(path + url, values);
      console.log(response);
      helper.resetForm();
      alert("Successfully Signed Up");
    } catch (err) {
      alert("Error: " + err);
    } finally {
      helper.setSubmitting(false);
    }
  };

  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    handleSubmit,
    isValid,
    isSubmitting,
    setFieldValue,
  } = useFormik({
    validationSchema,
    initialValues,
    onSubmit,
    validateOnMount: true,
  });

  const handleTabChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      minHeight="100vh"
      width="100vw"
      bgcolor={theme.palette.common.black}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bgcolor={"rgb(36,36,36)"}
        sx={{
          width: {
            mobile: "100%",
            laptop: 700,
            desktop: 700,
          },
        }}
        padding={4}
        borderRadius={3}
        margin={2}
      >
        <Box width="max-content" margin="auto">
          <Tabs value={value} onChange={handleTabChange}>
            <Tab label="FAN SIGNUP" />
            <Tab label="TALENT SIGNUP" />
          </Tabs>
        </Box>

        <Box
          sx={{
            width: {
              mobile: "100%",
              laptop: 400,
              desktop: 400,
            },
          }}
          margin="auto"
        >
          <form onSubmit={handleSubmit}>
            <Typography
              textAlign="center"
              fontSize={24}
              color="white"
              marginY={3}
            >
              Create Your Fan Account
            </Typography>
            <TabPanel value={value} index={0}>
              <FanSignup
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <TalentSignup
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
              />
            </TabPanel>

            <Box display="flex" flexDirection="column" alignItems="center">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox color="success" />}
                  checked={values.checked}
                  name="checked"
                  onChange={() => setFieldValue("checked", !values.checked)}
                  label={
                    <Typography color="white">
                      I agree to the <Link>Terms and Conditions</Link>
                    </Typography>
                  }
                />
              </FormGroup>
              <Box width={200}>
                <Button
                  color="success"
                  variant="contained"
                  disableElevation
                  disableRipple
                  type="submit"
                  disabled={!isValid}
                  fullWidth
                  startIcon={
                    isSubmitting ? (
                       <CircularProgress size={16} color="inherit" />
                    ) : null
                  }
                >
                  SIGN UP
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

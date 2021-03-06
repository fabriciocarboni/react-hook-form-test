import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useForm, Controller, control } from "react-hook-form";
import { DevTool } from "react-hook-form-devtools";

import {
  Button,
  CssBaseline,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  Container,
  Grid,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Card,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  tableHeadBackground: {
    backgroundColor: "#f5f2f2",
  },
}));
function CreateStudent(props) {
  const classes = useStyles();

  const { register, handleSubmit, watch, control, errors } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Container component="main" maxWidth="lg">
      <DevTool control={control} />
      <CssBaseline />
      <div className={classes.paper}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classes.form}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="button" display="block">
                Student's info
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="studentFirstName"
                control={control}
                inputRef={register({ required: true })}
                size="small"
                autoComplete="off"
                variant="outlined"
                label="First Name"
                fullWidth
                error={errors.studentFirstName && true}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="studentLastName"
                control={control}
                // inputRef={register}
                inputRef={register({ required: true })}
                // inputRef={register({
                //   required: true,
                //   minLength: { value: 8, message: "Too Short" },
                // })}
                size="small"
                autoComplete="off"
                variant="outlined"
                label="Last Name"
                fullWidth
                error={errors.studentLastName && true}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="studentAddress"
                control={control}
                size="small"
                autoComplete="off"
                variant="outlined"
                label="Student Address"
                fullWidth
                inputRef={register({ required: true })}
                error={errors.studentAddress && true}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                name="studentBirthDay"
                control={control}
                size="small"
                autoComplete="off"
                variant="outlined"
                label="Birthday"
                fullWidth
                inputRef={register({ required: true })}
                error={errors.studentAddress && true}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel>Gender</InputLabel>
                <Controller
                  control={control}
                  name="studentGender"
                  defaultValue=""
                  rules={{ required: true }}
                  error={errors.studentGender && true}
                  as={
                    <Select label="Gender *" defaultValue="">
                      <MenuItem value="M">M</MenuItem>
                      <MenuItem value="F">F</MenuItem>
                    </Select>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={2}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel>Language</InputLabel>
                <Controller
                  control={control}
                  name="studentLanguage"
                  defaultValue=""
                  rules={{ required: true }}
                  error={errors.studentLanguage && true}
                  as={
                    <Select label="Language *">
                      <MenuItem value="french">French</MenuItem>
                      <MenuItem value="english">English</MenuItem>
                    </Select>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="button" display="block">
                Planned Attendance
              </Typography>
            </Grid>

            {/* Planned Attendance */}
            <Grid item xs={12}>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.tableHeadBackground}>
                        Period
                      </TableCell>
                      <TableCell
                        className={classes.tableHeadBackground}
                        align="center"
                      >
                        Monday
                      </TableCell>
                      <TableCell
                        className={classes.tableHeadBackground}
                        align="center"
                      >
                        Tuesday
                      </TableCell>
                      <TableCell
                        className={classes.tableHeadBackground}
                        align="center"
                      >
                        Wednesday
                      </TableCell>
                      <TableCell
                        className={classes.tableHeadBackground}
                        align="center"
                      >
                        Thursday
                      </TableCell>
                      <TableCell
                        className={classes.tableHeadBackground}
                        align="center"
                      >
                        Friday
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        className={classes.tableHeadBackground}
                        align="left"
                        variant="head"
                      >
                        Morning
                      </TableCell>
                      <TableCell align="center">
                        <Checkbox
                          name="mondayMorning"
                          size="small"
                          color="primary"
                          inputRef={register}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Checkbox
                          name="tuesdayMorning"
                          size="small"
                          color="primary"
                          inputRef={register}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Checkbox
                          name="wednesdayMorning"
                          size="small"
                          color="primary"
                          inputRef={register}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Checkbox
                          name="thursdayMorning"
                          size="small"
                          color="primary"
                          inputRef={register}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Checkbox
                          name="fridayMorning"
                          size="small"
                          color="primary"
                          inputRef={register}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        className={classes.tableHeadBackground}
                        align="left"
                        variant="head"
                      >
                        Afternoon
                      </TableCell>
                      <TableCell align="center">
                        <Checkbox
                          name="mondayAfternoon"
                          size="small"
                          color="primary"
                          inputRef={register}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Checkbox
                          name="tuesdayAfternoon"
                          size="small"
                          color="primary"
                          inputRef={register}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Checkbox
                          name="wednesdayAfternoon"
                          size="small"
                          color="primary"
                          inputRef={register}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Checkbox
                          name="thursdayAfternoon"
                          size="small"
                          color="primary"
                          inputRef={register}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Checkbox
                          name="fridayAfternoon"
                          size="small"
                          color="primary"
                          inputRef={register}
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>

            {/* Parent's Info */}
            <Grid item xs={12}>
              <Typography variant="button" display="block">
                Parents's info
              </Typography>
              <Typography variant="caption" display="block">
                Mother / Tutor
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="MotherTutorName"
                control={control}
                size="small"
                autoComplete="off"
                variant="outlined"
                label="Mother/Tutor"
                fullWidth
                inputRef={register({ required: true })}
                error={errors.MotherTutorName && true}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="MotherTutorEmail"
                control={control}
                size="small"
                autoComplete="off"
                variant="outlined"
                label="Mother / Tutor E-mail"
                fullWidth
                inputRef={register({ required: true })}
                error={errors.MotherTutorEmail && true}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel>Same address child?</InputLabel>
                <Controller
                  control={control}
                  name="MotherSameAddressStudentSelect"
                  defaultValue=""
                  // rules={{ required: true }}
                  error={errors.MotherSameAddressStudentSelect && true}
                  as={
                    <Select label="Same child address *" defaultValue="">
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="MotherSameAddressStudentDetail"
                control={control}
                size="small"
                autoComplete="off"
                variant="outlined"
                label="Mother / Tutor Address"
                fullWidth
                inputRef={register}
                error={errors.MotherSameAddressStudentDetail && true}
                // disabled={watch("MotherSameAddressStudentSelect", "yes")}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="MotherHomePhoneNumber"
                size="small"
                autoComplete="off"
                variant="outlined"
                fullWidth
                label="Home phone number"
                inputRef={register({ required: true })}
                error={errors.MotherHomePhoneNumber && true}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="MotherCellPhoneNumber"
                size="small"
                autoComplete="off"
                variant="outlined"
                fullWidth
                label="Cell phone number"
                inputRef={register}
                // error={errors.MotherHomePhoneNumber && true}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="MotherOfficePhoneNumber"
                size="small"
                autoComplete="hphone"
                variant="outlined"
                required
                fullWidth
                label="Office phone number"
                inputRef={register}
                // error={errors.MotherOfficePhoneNumber && true}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption" display="block">
                Father / Tutor
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="FatherTutorName"
                size="small"
                autoComplete="off"
                variant="outlined"
                fullWidth
                label="Father/Tutor"
                inputRef={register({ required: true })}
                error={errors.FatherTutorName && true}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="FatherTutorEmail"
                size="small"
                variant="outlined"
                fullWidth
                label="Father / Tutor E-mail"
                autoComplete="off"
                inputRef={register({ required: true })}
                error={errors.MotherTutorName && true}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel>Same address child?</InputLabel>
                <Controller
                  control={control}
                  name="FatherSameAddressStudentSelect"
                  defaultValue=""
                  // rules={{ required: true }}
                  error={errors.FatherSameAddressStudentSelect && true}
                  as={
                    <Select label="Same child address *" defaultValue="">
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="FatherSameAddressStudentDetail"
                control={control}
                size="small"
                autoComplete="off"
                variant="outlined"
                label="Father / Tutor Address"
                fullWidth
                inputRef={register}
                error={errors.FatherSameAddressStudentDetail && true}
                // disabled={watch("FatherSameAddressStudentSelect", "yes")}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="FatherHomePhoneNumber"
                size="small"
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                label="Home phone number"
                inputRef={register({ required: true })}
                error={errors.FatherHomePhoneNumber && true}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="FatherCellPhoneNumber"
                size="small"
                autoComplete="off"
                variant="outlined"
                fullWidth
                label="Cell phone number"
                inputRef={register}
                // error={errors.FatherSameAddressStudentDetail && true}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="FatherOfficePhoneNumber"
                size="small"
                autoComplete="off"
                variant="outlined"
                fullWidth
                label="Office phone number"
                inputRef={register}
                // error={errors.FatherSameAddressStudentDetail && true}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="button" display="block">
                Persons authorized to pick up the child
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="RespPickupChildName"
                size="small"
                autoComplete="off"
                variant="outlined"
                fullWidth
                label="Name"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="RespLinkWithChild"
                size="small"
                autoComplete="off"
                variant="outlined"
                fullWidth
                label="Link with child"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="RespPickupChildPhoneNumber"
                size="small"
                autoComplete="off"
                variant="outlined"
                fullWidth
                label="Phone number"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="RespPickupAddress"
                size="small"
                autoComplete="off"
                variant="outlined"
                fullWidth
                label="Address"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="button" display="block">
                Contact in case of urgency (other than parents)
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="UrgencyContactName"
                size="small"
                autoComplete="off"
                variant="outlined"
                fullWidth
                label="Name"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="UrgencyLinkWithChild"
                size="small"
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                label="Link with child"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="UrgencyContactPhoneNumber"
                size="small"
                autoComplete="off"
                variant="outlined"
                fullWidth
                label="Phone number"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="UrgencyContactAddress"
                size="small"
                autoComplete="off"
                variant="outlined"
                fullWidth
                label="Address"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="button" display="block">
                Child health information
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="ChildSin"
                size="small"
                autoComplete="off"
                variant="outlined"
                fullWidth
                label="SIN"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="ChildSinExpirationDate"
                size="small"
                autoComplete="off"
                variant="outlined"
                fullWidth
                label="Exp Date"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}></Grid>
            <Grid item xs={6} sm={12} md={4}>
              <Typography variant="body2">
                Are there any health problems that require special care?
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel>Special care?</InputLabel>
                <Controller
                  control={control}
                  name="ChildSpecialCareSelect"
                  defaultValue=""
                  // rules={{ required: true }}
                  error={errors.ChildSpecialCareSelect && true}
                  as={
                    <Select label="Special Care *" defaultValue="">
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="ChildSpecialCareDetail"
                size="small"
                autoComplete="off"
                variant="outlined"
                fullWidth
                label="Special care detail"
                inputRef={register}
                // disabled={
                //   formState.ChildSpecialCareSelect === "yes" ? false : true
                // }
              />
            </Grid>
            <Grid item xs={6} sm={12} md={4}>
              <Typography variant="body2">
                Does he/she take medication on a regular basis?
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel>Medication</InputLabel>
                <Controller
                  control={control}
                  name="ChildMedicationSelect"
                  defaultValue=""
                  // rules={{ required: true }}
                  error={errors.ChildMedicationSelect && true}
                  as={
                    <Select label="Medication" defaultValue="">
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="ChildMedicationDetail"
                size="small"
                autoComplete="off"
                variant="outlined"
                fullWidth
                label="Medication"
                inputRef={register}
                // disabled={
                //   formState.ChildMedicationSelect === "yes" ? false : true
                // }
              />
            </Grid>
            <Grid item xs={6} sm={12} md={4}>
              <Typography variant="body2">
                Is there any possible side effects for these medication?
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel>Side effects</InputLabel>
                <Controller
                  control={control}
                  name="ChildMedicationSideEffectsSelect"
                  defaultValue=""
                  // rules={{ required: true }}
                  // error={errors.ChildMedicationSideEffectsSelect && true}
                  as={
                    <Select label="Side effects" defaultValue="">
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="ChildMedicationSideEffectsDetail"
                size="small"
                autoComplete="off"
                variant="outlined"
                fullWidth
                label="Side effects"
                inputRef={register}
                // disabled={
                //   formState.ChildMedicationSideEffectsSelect === "yes"
                //     ? false
                //     : true
                // }
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <Typography variant="body2">
                Has the child received all vaccines?
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel>Vaccines</InputLabel>
                <Controller
                  control={control}
                  name="ChildVaccines"
                  defaultValue=""
                  // rules={{ required: true }}
                  // error={errors.ChildMedicationSideEffectsSelect && true}
                  as={
                    <Select label="Vaccines" defaultValue="">
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={4}></Grid>
            <Grid item xs={6} sm={6} md={4}>
              <Typography variant="body2">
                Is the vaccination up to date?
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel>Is the vaccination up to date?</InputLabel>
                <Controller
                  control={control}
                  name="ChildVaccinesUpToDateSelect"
                  defaultValue=""
                  // rules={{ required: true }}
                  // error={errors.ChildMedicationSideEffectsSelect && true}
                  as={
                    <Select
                      label="Is the vaccination up to date?"
                      defaultValue=""
                    >
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={4}></Grid>
            <Grid item xs={6} sm={6} md={4}>
              <Typography variant="body2">
                Does your child have allergies (medication or food)?
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel>Allergies</InputLabel>
                <Controller
                  control={control}
                  name="ChildAllergiesSelect"
                  defaultValue=""
                  // rules={{ required: true }}
                  // error={errors.ChildMedicationSideEffectsSelect && true}
                  as={
                    <Select label="Allergies *" defaultValue="">
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <TextField
                name="ChildAllgergiesDetail"
                size="small"
                autoComplete="allergies"
                variant="outlined"
                required
                fullWidth
                label="If yes, which?"
                inputRef={register}
                // helperText={
                //   formState.ChildAllergiesSelect === "yes"
                //     ? "A medical document is necessary for each allergy mentioned."
                //     : ""
                // }
                // disabled={
                //   formState.ChildAllergiesSelect === "yes" ? false : true
                // }
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <Typography variant="body2">
                Are there provisions to be taken for his health according to the
                diseases and / or allergies mentioned above in case of
                emergency?
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel>Health prov.</InputLabel>
                <Controller
                  control={control}
                  name="ChildHealthCareProvisionSelect"
                  defaultValue=""
                  // rules={{ required: true }}
                  // error={errors.ChildMedicationSideEffectsSelect && true}
                  as={
                    <Select label="Health prov. *" defaultValue="">
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <TextField
                name="ChildHealthCareProvisionsDetail"
                label="If yes, what?"
                size="small"
                autoComplete="off"
                variant="outlined"
                fullWidth
                inputRef={register}
                // disabled={
                //   formState.ChildHealthCareProvisionSelect === "yes"
                //     ? false
                //     : true
                // }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body2">
                Name of Pediatrician And / or family doctor:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="ChildFamilyDoctorName"
                size="small"
                autoComplete="off"
                variant="outlined"
                fullWidth
                label="Name"
                inputRef={register({ required: true })}
                error={errors.ChildFamilyDoctorName && true}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="ChildFamilyDoctorAddress"
                size="small"
                autoComplete="off"
                variant="outlined"
                fullWidth
                label="Address"
                inputRef={register({ required: true })}
                error={errors.ChildFamilyDoctorAddress && true}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                name="ChildFamilyDoctorPhone"
                autoComplete="off"
                size="small"
                variant="outlined"
                fullWidth
                label="Phone"
                inputRef={register({ required: true })}
                error={errors.ChildFamilyDoctorPhone && true}
              />
            </Grid>
            <Grid item xs={12} sm={10}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography variant="button" display="block">
                    Authorizations
                  </Typography>

                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={12}>
                      <Typography variant="body2" display="block">
                        <br />
                        J’autorise mon enfant à participer aux activités
                        extérieures organisées par le service de garde de
                        l’École Montessori de Beauport (sorties éducatives ou
                        sportives).
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <br />
                      Parent's Authorization:
                      <Checkbox
                        name="ParentExtraActivitiesAuthorization"
                        size="small"
                        color="primary"
                        inputRef={register({ required: true })}
                      />
                    </Grid>
                    <Grid item xs={3} sm={3}>
                      <TextField
                        name="ParentExtraActivitiesAuthorizationDate"
                        label="Authorization Date"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputRef={register}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <Typography variant="body2" display="block">
                        <br />
                        J’autorise l’équipe de l’École Montessori de Beauport à
                        prendre les mesures nécessaires en cas d’urgence pour la
                        santé et la sécurité de mon enfant.
                        <br />
                        <br />Y a-t-il des dispositions particulières à prendre
                        en cas d’urgence (ambulance, hôpital, premiers soins)?
                        Si oui, lesquelles?
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <br />
                      <TextField
                        name="UrgencyMeasuresDetail"
                        autoComplete="off"
                        label="+ Info"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        inputRef={register}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <br />
                      {/* <FormControlLabel
                          control={
                            <Checkbox
                              color="primary"
                              size="small"
                              name="ParentAdmissionAuthorization"
                            />
                          }
                          label="Parent's Admission Authorization:"
                          labelPlacement="start"
                          inputRef={register}
                        /> */}
                      {/* <FormControlLabel
                        control={
                          <Controller
                            as={Checkbox}
                            control={control}
                            name="ParentAdmissionAuthorization"
                            color="primary"
                            size="small"
                            defaultValue={false}
                          />
                        }
                        label="Parent's authorization"
                        labelPlacement="start"
                      /> */}
                      Parent's Authorization:
                      <Checkbox
                        name="ParentAdmissionAuthorization"
                        size="small"
                        color="primary"
                        inputRef={register({ required: true })}
                      />
                    </Grid>
                    <Grid item xs={12} sm={3} />
                    <Grid item xs={12} sm={3}>
                      <TextField
                        name="studentAdmissionDate"
                        label="Admission Date"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>{" "}
          {/*--end grid Container */}
          <Grid item xs={2}>
            <br />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Add
            </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
export default CreateStudent;

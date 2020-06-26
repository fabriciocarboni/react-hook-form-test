import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useForm, Controller } from "react-hook-form";


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


  const { register, handleSubmit, control, errors } = useForm();
  
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div className={classes.paper}>
        <form
          onSubmit={handleSubmit}
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
            <Controller
                as={TextField}
                name="studentFirstName"
                control={control}
                rules={{ required: true, minLength: {value: 8, message: "Too Short"} }}
                size="small"
                autoComplete="off"
                variant="outlined"
                label="First Name"
                fullWidth
                error={errors.studentFirstName && true}
                helperText={errors.studentFirstName && errors.studentFirstName.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Controller
                as={TextField}
                name="studentLastName"
                control={control}
                rules={{ required: true, minLength: {value: 8, message: "Too Short"} }}
                size="small"
                autoComplete="off"
                variant="outlined"
                label="Last Name"
                fullWidth
                autoFocus
                error={errors.studentLastName && true}
                helperText={errors.studentLastName && errors.studentLastName.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                as={TextField}
                name="studentAddress"
                control={control}
                size="small"
                autoComplete="off"
                variant="outlined"
                label="Student Address"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={2}>
               <Controller
                as={TextField}
                name="studentBirthDay"
                control={control}
                size="small"
                autoComplete="off"
                variant="outlined"
                label="Birthday"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={2}>
                <Controller
                as={<Select options={options} />}
                control={control}
                rules={{ required: true }}
                onChange={([selected]) => {
                  // Place your logic here
                  return selected;
                }}
                name="gender"
                defaultValue={{ value: "chocolate" }}
                variant="outlined" 
                size="small" 
                required 
                fullWidth
              />

            </Grid>
            <Grid item xs={12} sm={2}>
            <Controller
                as={<Select options={options} />}
                control={control}
                rules={{ required: true }}
                onChange={([selected]) => {
                  // Place your logic here
                  return selected;
                }}
                name="studentLanguage"
                defaultValue={{ value: "chocolate" }}
                variant="outlined" 
                size="small" 
                required 
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="button" display="block">
                Planned Attendance
              </Typography>
            </Grid>
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
                          onChange={handleChange}
                          name="mondayMorning"
                          size="small"
                          color="primary"
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Checkbox
                          onChange={handleChange}
                          name="tuesdayMorning"
                          size="small"
                          color="primary"
                          />
                      </TableCell>
                      <TableCell align="center">
                        <Checkbox
                          onChange={handleChange}
                          name="wednesdayMorning"
                          size="small"
                          color="primary"
                          />
                      </TableCell>
                      <TableCell align="center">
                        {" "}
                        <Checkbox
                          onChange={handleChange}
                          name="thursdayMorning"
                          size="small"
                          color="primary"
                          />
                      </TableCell>
                      <TableCell align="center">
                        {" "}
                        <Checkbox
                          onChange={handleChange}
                          name="fridayMorning"
                          size="small"
                          color="primary"
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
                        {" "}
                        <Checkbox
                          onChange={handleChange}
                          name="mondayAfternoon"
                          size="small"
                          color="primary"
                          />
                      </TableCell>
                      <TableCell align="center">
                        <Checkbox
                          onChange={handleChange}
                          name="tuesdayAfternoon"
                          size="small"
                          color="primary"
                          />
                      </TableCell>
                      <TableCell align="center">
                        <Checkbox
                          onChange={handleChange}
                          name="wednesdayAfternoon"
                          size="small"
                          color="primary"
                          />
                      </TableCell>
                      <TableCell align="center">
                        <Checkbox
                          onChange={handleChange}
                          name="thursdayAfternoon"
                          size="small"
                          color="primary"
                          />
                      </TableCell>
                      <TableCell align="center">
                        <Checkbox
                          onChange={handleChange}
                          name="fidayAfternoon"
                          size="small"
                          color="primary"
                          />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
                          {/* 
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
                onChange={handleChange}
                size="small"
                autoComplete="off"
                name="MotherTutorName"
                variant="outlined"
                required
                fullWidth
                label="Mother/Tutor"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                onChange={handleChange}
                size="small"
                variant="outlined"
                required
                fullWidth
                label="Mother / Tutor E-mail"
                name="MotherTutorEmail"
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControl variant="outlined" size="small" required fullWidth>
                <InputLabel>Same address student?</InputLabel>
                <Select
                  onChange={handleChange}
                  name="MotherSameAddressStudentSelect"
                  value={formState.MotherSameAddressStudentSelect}
                  label="Same address student? *"
                >
                  <MenuItem value={"yes"}>Yes</MenuItem>
                  <MenuItem value={"no"}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                onChange={handleChange}
                name="MotherSameAddressStudentDetail"
                value={formState.MotherSameAddressStudentDetail}
                size="small"
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                label="Mother / Tutor Address"
                disabled={
                  formState.MotherSameAddressStudentSelect === "no"
                    ? false
                    : true
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                onChange={handleChange}
                name="MotherHomePhoneNumber"
                value={formState.MotherHomePhoneNumber}
                size="small"
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                label="Home phone number"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                onChange={handleChange}
                name="MotherCellPhoneNumber"
                value={formState.MotherCellPhoneNumber}
                size="small"
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                label="Cell phone number"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                onChange={handleChange}
                name="MotherOfficePhoneNumber"
                value={formState.MotherOfficePhoneNumber}
                size="small"
                autoComplete="hphone"
                variant="outlined"
                required
                fullWidth
                label="Office phone number"
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="caption" display="block">
                Father / Tutor
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                onChange={handleChange}
                name="FatherTutorName"
                value={formState.FatherTutorName}
                size="small"
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                label="Father/Tutor"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                onChange={handleChange}
                name="FatherTutorEmail"
                value={formState.FatherTutorEmail}
                size="small"
                variant="outlined"
                required
                fullWidth
                label="Father / Tutor E-mail"
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControl variant="outlined" size="small" required fullWidth>
                <InputLabel>Same address student?</InputLabel>
                <Select
                  onChange={handleChange}
                  name="FatherSameAddressStudentSelect"
                  value={formState.FatherSameAddressStudentSelect}
                  label="Same address student? *"
                >
                  <MenuItem value={"yes"}>Yes</MenuItem>
                  <MenuItem value={"no"}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                onChange={handleChange}
                name="FatherSameAddressStudentDetail"
                value={formState.FatherSameAddressStudentDetail}
                size="small"
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                label="Father / Tutor Address"
                disabled={
                  formState.FatherSameAddressStudentSelect === "no"
                    ? false
                    : true
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                onChange={handleChange}
                name="FatherHomePhoneNumber"
                value={formState.FatherHomePhoneNumber}
                size="small"
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                label="Home phone number"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                onChange={handleChange}
                name="FatherCellPhoneNumber"
                value={formState.FatherCellPhoneNumber}
                size="small"
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                label="Cell phone number"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                onChange={handleChange}
                name="FatherOfficePhoneNumber"
                value={formState.FatherOfficePhoneNumber}
                size="small"
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                label="Office phone number"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="button" display="block">
                Persons authorized to pick up the child
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                onChange={handleChange}
                name="RespPickupChildName"
                value={formState.RespPickupChildName}
                size="small"
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                label="Name"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                onChange={handleChange}
                name="RespLinkWithChild"
                value={formState.RespLinkWithChild}
                size="small"
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                label="Link with child"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                onChange={handleChange}
                name="RespPickupChildPhoneNumber"
                value={formState.RespPickupChildPhoneNumber}
                size="small"
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                label="Phone number"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                onChange={handleChange}
                name="RespPickupAddress"
                value={formState.RespPickupAddress}
                size="small"
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                label="Address"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="button" display="block">
                Contact in case of urgency (other than parents)
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                onChange={handleChange}
                name="UrgencyContactName"
                value={formState.UrgencyContactName}
                size="small"
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                label="Name"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                onChange={handleChange}
                name="UrgencyLinkWithChild"
                value={formState.UrgencyLinkWithChild}
                size="small"
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                label="Link with child"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                onChange={handleChange}
                name="UrgencyContactPhoneNumber"
                value={formState.UrgencyContactPhoneNumber}
                size="small"
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                label="Phone number"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                onChange={handleChange}
                name="UrgencyContactAddress"
                value={formState.UrgencyContactAddress}
                size="small"
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                label="Address"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="button" display="block">
                Child health information
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                onChange={handleChange}
                name="ChildSin"
                value={formState.ChildSin}
                size="small"
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                label="SIN"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                onChange={handleChange}
                name="ChildSinExpirationDate"
                value={formState.ChildSinExpirationDate}
                size="small"
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                label="Exp Date"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}></Grid>
            <Grid item xs={6} sm={12} md={4}>
              <Typography variant="body2">
                Are there any health problems that require special care?
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <FormControl variant="outlined" size="small" required fullWidth>
                <InputLabel>Special care?</InputLabel>
                <Select
                  onChange={handleChange}
                  name="ChildSpecialCareSelect"
                  value={formState.ChildSpecialCareSelect}
                  label="Special Care *"
                >
                  <MenuItem value={"yes"}>Yes</MenuItem>
                  <MenuItem value={"no"}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                onChange={handleChange}
                name="ChildSpecialCareDetail"
                value={formState.ChildSpecialCareDetail}
                size="small"
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                label="Special care detail"
                disabled={
                  formState.ChildSpecialCareSelect === "yes" ? false : true
                }
              />
            </Grid>
            <Grid item xs={6} sm={12} md={4}>
              <Typography variant="body2">
                Does he/she take medication on a regular basis?
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <FormControl variant="outlined" size="small" required fullWidth>
                <InputLabel>Medication</InputLabel>
                <Select
                  onChange={handleChange}
                  name="ChildMedicationSelect"
                  value={formState.ChildMedicationSelect}
                  label="Medication *"
                >
                  <MenuItem value={"yes"}>Yes</MenuItem>
                  <MenuItem value={"no"}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                onChange={handleChange}
                name="ChildMedicationDetail"
                value={formState.ChildMedicationDetail}
                size="small"
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                label="Medication"
                disabled={
                  formState.ChildMedicationSelect === "yes" ? false : true
                }
              />
            </Grid>

            <Grid item xs={6} sm={12} md={4}>
              <Typography variant="body2">
                Is there any possible side effects for these medication?
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <FormControl variant="outlined" size="small" required fullWidth>
                <InputLabel>Side effects</InputLabel>
                <Select
                  onChange={handleChange}
                  name="ChildMedicationSideEffectsSelect"
                  value={formState.ChildMedicationSideEffectsSelect}
                  label="Side effects"
                >
                  <MenuItem value={"yes"}>Yes</MenuItem>
                  <MenuItem value={"no"}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                onChange={handleChange}
                name="ChildMedicationSideEffectsDetail"
                value={formState.ChildMedicationSideEffectsDetail}
                size="small"
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                label="Side effects"
                disabled={
                  formState.ChildMedicationSideEffectsSelect === "yes"
                    ? false
                    : true
                }
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <Typography variant="body2">
                Has the child received all vaccines?
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <FormControl variant="outlined" size="small" required fullWidth>
                <InputLabel>Vaccines</InputLabel>
                <Select
                  onChange={handleChange}
                  name="ChildVaccines"
                  value={formState.ChildVaccines}
                  label="Vaccines"
                >
                  <MenuItem value={"yes"}>Yes</MenuItem>
                  <MenuItem value={"no"}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={4}></Grid>
            <Grid item xs={6} sm={6} md={4}>
              <Typography variant="body2">
                Is the vaccination up to date?
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <FormControl variant="outlined" size="small" required fullWidth>
                <InputLabel>Is the vaccination up to date?</InputLabel>
                <Select
                  onChange={handleChange}
                  name="ChildVaccinesUpToDateSelect"
                  value={formState.ChildVaccinesUpToDateSelect}
                  label="Is the vaccination up to date?"
                >
                  <MenuItem value={"yes"}>Yes</MenuItem>
                  <MenuItem value={"no"}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={4}></Grid>
            <Grid item xs={6} sm={6} md={4}>
              <Typography variant="body2">
                Does your child have allergies (medication or food)?
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <FormControl variant="outlined" size="small" required fullWidth>
                <InputLabel>Allergies</InputLabel>
                <Select
                  onChange={handleChange}
                  name="ChildAllergiesSelect"
                  value={formState.ChildAllergiesSelect}
                  label="Allergies *"
                >
                  <MenuItem value={"yes"}>Yes</MenuItem>
                  <MenuItem value={"no"}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <TextField
                onChange={handleChange}
                name="ChildAllgergiesDetail"
                value={formState.ChildAllgergiesDetail}
                size="small"
                autoComplete="allergies"
                variant="outlined"
                required
                fullWidth
                label="If yes, which?"
                helperText={
                  formState.ChildAllergiesSelect === "yes"
                    ? "A medical document is necessary for each allergy mentioned."
                    : ""
                }
                disabled={
                  formState.ChildAllergiesSelect === "yes" ? false : true
                }
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
              <FormControl variant="outlined" size="small" required fullWidth>
                <InputLabel>Health prov.</InputLabel>
                <Select
                  onChange={handleChange}
                  name="ChildHealthCareProvisionSelect"
                  value={formState.ChildHealthCareProvisionSelect}
                  label="Health prov. *"
                >
                  <MenuItem value={""}>None</MenuItem>
                  <MenuItem value={"yes"}>Yes</MenuItem>
                  <MenuItem value={"no"}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <TextField
                onChange={handleChange}
                name="ChildHealthCareProvisionsDetail"
                value={formState.ChildHealthCareProvisionsDetail}
                label="If yes, what?"
                size="small"
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                disabled={
                  formState.ChildHealthCareProvisionSelect === "yes"
                    ? false
                    : true
                }
              />
            </Grid>

            <Grid item xs={6} sm={6} md={4}>
              <Typography variant="body2">
                Name of Pediatrician And / or family doctor:
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <TextField
                onChange={handleChange}
                name="ChildFamilyDoctorName"
                value={formState.ChildFamilyDoctorName}
                size="small"
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                label="Name"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                onChange={handleChange}
                name="ChildFamilyDoctorAddress"
                value={formState.ChildFamilyDoctorAddress}
                size="small"
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                label="Address"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                onChange={handleChange}
                name="ChildFamilyDoctorPhone"
                value={formState.ChildFamilyDoctorPhone}
                autoComplete="off"
                size="small"
                variant="outlined"
                required
                fullWidth
                label="Phone"
              />
            </Grid>

            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
              style={{ minHeight: "60vh" }}
            >
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
                        <Typography variant="body2" display="block">
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={handleChange}
                                name="ParentExtraActivitiesAuthorization"
                                color="primary"
                              />
                            }
                            label="Parent's Authorization:"
                            labelPlacement="start"
                          />
                        </Typography>
                      </Grid>
                      <Grid item xs={3} sm={3}>
                        <TextField
                          onChange={handleChange}
                          name="ParentExtraActivitiesAuthorizationDate"
                          label="Authorization Date"
                          type="date"
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <Typography variant="body2" display="block">
                          <br />
                          J’autorise l’équipe de l’École Montessori de Beauport
                          à prendre les mesures nécessaires en cas d’urgence
                          pour la santé et la sécurité de mon enfant.
                          <br />
                          <br />Y a-t-il des dispositions particulières à
                          prendre en cas d’urgence (ambulance, hôpital, premiers
                          soins)? Si oui, lesquelles?
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={8}>
                        <br />
                        <TextField
                          onChange={handleChange}
                          name="UrgencyMeasuresDetail"
                          value={formState.UrgencyMeasuresDetail}
                          autoComplete="off"
                          label="+ Info"
                          multiline
                          rows={4}
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <br />
                        <Typography variant="body2" display="block">
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={handleChange}
                                color="primary"
                                name="ParentAdmissionAuthorization"
                              />
                            }
                            label="Parent's Admission Authorization:"
                            labelPlacement="start"
                          />
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={3} />
                      <Grid item xs={12} sm={3}>
                        <TextField
                          onChange={handleChange}
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
            </Grid>*/}
          </Grid>
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

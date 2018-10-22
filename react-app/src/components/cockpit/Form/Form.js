import React from "react";
import { Container, Row, Button, Alert, Input } from "reactstrap";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { submitForm } from "../../../cockpit/fetch";

const ContainerStyled = styled(Container)`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const FormStyled = styled(Form)`
  width: 75%;
  .row {
    padding: 0.25rem 1rem;
    input,
    textarea {
      width: 100%;
      padding: 0.25rem 0.5rem;
      font-size: 0.9rem;
    }
  }
`;

const ErrorStyled = styled(ErrorMessage)`
  color: red;
  font-size: 0.8rem;
  padding: 0.1rem 0.5rem;
`;

const TextArea = styled.textarea``;

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.message) {
    errors.message = "Message is required";
  }
  return errors;
};

export default ({ name, form }) => (
  <ContainerStyled className={`component--${name}`}>
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={(values, { setStatus, setSubmitting }) => {
        setTimeout(() => {
          submitForm(form, values).then(result => {
            if (result === 200) {
              setStatus("success");
            } else {
              setStatus("danger");
            }
            setSubmitting(false);
          });
        }, 400);
      }}
    >
      {({ isSubmitting, status }) => (
        <FormStyled>
          {status &&
            status === "success" && (
              <Alert color={status}>Thank you so much for your message!</Alert>
            )}
          {status &&
            status === "danger" && (
              <Alert color={status}>
                Oops! Something wrong happened. Please try again.
              </Alert>
            )}
          <Row>
            <Field
              type="text"
              name="name"
              placeholder="Your name"
              className="form-control"
            />
            <ErrorStyled name="name" component="div" />
          </Row>
          <Row>
            <Field
              type="email"
              name="email"
              placeholder="Your email"
              className="form-control"
            />
            <ErrorStyled name="email" component="div" />
          </Row>
          <Row>
            <Field
              name="message"
              rows="4"
              className="form-control"
              component="textarea"
            />
            <ErrorStyled name="message" component="div" />
          </Row>
          <Row>
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Row>
        </FormStyled>
      )}
    </Formik>
  </ContainerStyled>
);

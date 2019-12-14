import React, {useState, Component} from "react";
import { withFormik, Field, Form } from "formik"
import { __values } from "tslib";

const TheForm = ({values}) => {
  return (
      <Form>
        <label htmlFor="name">
            Name:
            <Field type="text" name="name" value={values.name} />
        </label>
        <label htmlFor="email">
            Email:
            <Field type="text" name="email" value={values.email} />
        </label>
        <label htmlFor="password">
            Password:
            <Field type="text" name="password" value={values.password} />
        </label>
        <label htmlFor="TOS" >
            Terms of Service
            <Field type="checkbox" name="TOS" checked={values.TOS} />
        </label>
        <button type="submit">Submit</button>
      </Form>
  )
}

const FormikForm = withFormik({
    mapPropsToValues({name, email, password, TOS}) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            TOS: TOS || false,
        };
    }
})(TheForm);

export default FormikForm;
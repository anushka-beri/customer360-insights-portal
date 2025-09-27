import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const DynamicForm = ({ fields,onSubmit, innerRef }) => {

  const initialValues = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const validationSchema = Yup.object(
    fields.reduce((acc, field) => {
      acc[field.name] = field.validation;
      return acc;
    }, {})
  );

  return (
    <Formik
      innerRef={innerRef}           
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}   
      validateOnBlur={false}
    >
      {() => (
        <Form className="space-y-4">
          {fields.map((field) => (
            <div key={field.name} className="flex flex-col">
              <label
                htmlFor={field.name}
                className="mb-1 text-gray-700 font-medium"
              >
                {field.label}
              </label>
              <Field
                id={field.name}
                name={field.name}
                type={field.type}
                className={`border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400`}
              />
              <ErrorMessage
                name={field.name}
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          ))}
        </Form>
      )}
    </Formik>
  );
};

export default DynamicForm;

import React, { useState, useEffect, Profiler } from "react";
//Below we import Formik which will build the form and keep track of changes in the form
import { Formik, Form, Field } from "formik";
import { resourceSchema } from "../../Utilities/validationsSchemas";
import axios from "axios";

export default function ResourceForm(props) {
  //Below is the functinality to get categories to populae the dropdown list in the form
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    axios.get("http://localhost:51766/api/categories/").then((response) => {
      setCategories(response.data);
    });
  };

  //Create a local function that will submit the form to the ResourceAPI
  const handleSubmit = (values) => {
    console.log(values);
    //If statement that checks to see if a prop called resource is being passed in. If not we will execute the create code. If so we will execute the edit code.
    if (!props.resource) {
      //console.log('create mode')

      //Assemble a variable that will house the data from the form so we can send the object in the dataportion of the request to the API
      const resourceToCreate = {
        Name: values.Name,
        Description: values.Description,
        LinkText: values.LinkText,
        Url: values.Url,
        CategoryId: values.CategoryId,
      };

      axios
        .post("http://localhost:51766/api/resources/", resourceToCreate)
        .then(() => {
          //run a get request against the api to get a new list of resources
          props.getResources();
          //close the create form
          props.setShowCreate(false);
        });
    } 
    else {
      console.log("edit mode");
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Formik
      initialValues={{
        //Here we assign the values of the objects in the forms's initialValues prop. For Create, we will set all of the values to an empty string. But we need a ternary operator in each value to check against if there is a prop called resource (which will pass in an Edit version), then we set the value to that object's value.
        Name: props.resource ? props.resource.Name : "",
        Url: props.resource ? props.resource.Url : "",
        LinkText: props.resource ? props.resource.LinkText : "",
        Description: props.resource ? props.resource.Description : "",
        CategoryId: props.resource ? props.resource.CategoryId : "",
      }}
      validationSchema={resourceSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ errors, touched }) => (
        <Form id="resourceForm">
          <div className="form-group m-3">
            <Field name="Name" className="form-control" placeholder="Name" />
            {/* Below is the validation UI */}
            {errors.Name && touched.Name ? (
              <div className="text-danger">{errors.Name}</div>
            ) : null}
          </div>
          <div className="form-group m-3">
            <Field name="Url" className="form-control" placeholder="Url" />
            {/* Below is the validation UI */}
            {errors.Url && touched.Url ? (
              <div className="text-danger">{errors.Url}</div>
            ) : null}
          </div>
          <div className="form-group m-3">
            <Field
              name="LinkText"
              className="form-control"
              placeholder="LinkText"
            />
            {/* Below is the validation UI */}
            {errors.LinkText && touched.LinkText ? (
              <div className="text-danger">{errors.LinkText}</div>
            ) : null}
          </div>
          <div className="form-group m-3">
            <Field
              name="Description"
              as="textarea"
              className="form-control"
              placeholder="Description"
              style={{ resize: "none", height: "5em" }}
            />
            {/* Below is the validation UI */}
            {errors.Description && touched.Description ? (
              <div className="text-danger">{errors.Description}</div>
            ) : null}
          </div>
          {/* Below we will handle the input for CategoryId, showing CategoryName */}
          <div className="form-gourp m-3">
            <Field as="select" name="CategoryId" className="form-control">
              <option value="" disabled>
                --Please Choose Category--
              </option>
              {/* Below we map each category to another option element in this select list. The value is what we are passing to handleSubmit and the name is what the user will see. */}
              {categories.map((cat) => (
                <option key={cat.CategoryId} value={cat.CategoryId}>
                  {cat.CategoryName}
                </option>
              ))}
            </Field>
          </div>
          <div className="form-group m-3">
            <button type="submit" className="btn btn-info m-3">
              Submit Resources to API
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

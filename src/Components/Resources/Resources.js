//Step 1 - Read - Add useEffect and useState to the import
import React, { useState, useEffect } from "react";
import "./Resources.css";
import { Container } from "react-bootstrap";
import axios from "axios";
import SingleResource from "./SingleResource";

export default function Resources() {
  //Step 2 - Create a hook to house the data - usf => tab
  const [resources, setResources] = useState([]);
  //Above we put empty brackets in the initial value for resources so that this file will recongnize resources as an array fom the beginning. Below we are going to use .map() to read the data, and .map() is only avilable with collections in JS.

  //Step 3- Create the function to get the Resources from our API.
  //Make sure that if the API is not deployed, that it is actively running in your browers.  We will CTRL + F5 in the ResourcesAPI and have an instance running to make this function work properly.
  //Sean / Your - Local port: http://localhost:51766/  (in this case) + api/resources
  const getResources = () => {
    //In order to make the request to the API, we must first install and import axios - npm install axios
    axios.get("http://localhost:51766/api/resources/").then((response) => {
      console.log(response);
      setResources(response.data);
    });
  };

  //Step 4 - useEffect will automate the component getting the resources as it renders in the virtual DOM. uef +> tab
  useEffect(() => {
    getResources();
  }, []); //An empty array in the 2nd param will allow useEffect to run once.
  //At this point, we can visit the Resources component in the brower and test to to see our data.

  return (
    <section className="resources">
      <article className="bg-info p-5">
        <h1 className="text-center">Resources Dashboard</h1>
      </article>
      {/* Step - 5 - READ - creat the UI - See SingleResource.js for full implementation */}
      <Container>
        <article className="resourceGallery row justify-content-center">
          {resources.map((x) => (
            <SingleResource
              key={x.ResourceId}
              resource={x} />
          ))}
        </article>
      </Container>
    </section>
  );
}

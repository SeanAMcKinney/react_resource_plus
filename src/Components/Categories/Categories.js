//Step 1 - CategoriesRead
import React, { useState, useEffect } from "react";
import "./Categories.css";
import { Container } from "react-bootstrap";
import axios from "axios";
import SingleCategory from "./SingleCategory";

export default function Categories() {
  //Step 2 - CategoriesRead
  const [categories, setCategories] = useState([]);

  //Step 3 - CategoriesRead (includes axios import)
  const getCategories = () => {
    axios.get("http://localhost:51766/api/categories/").then((response) => {
      setCategories(response.data);
    });
  };

  //Step 4 - CategoriesRead
  useEffect(() => {
    getCategories();
  }, []); //at this point you can test in the browser. inspect the components state data

  return (
    <section className="categories">
      <article className="bg-info p-5">
        <h1 className="text-center">Categories Dashboard</h1>
      </article>
      <Container>
        <table className="table bg-info table-dark mt-3 mb-3">
          <thead className="table-secondary text-uppercase">
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {/* Step 5 CategoriesRead - Map the categories to the SingleCategory component */}
            {categories.map((x) => (
              <SingleCategory 
              key={x.CategoryId} 
              category={x} />
            ))}
          </tbody>
        </table>
      </Container>
    </section>
  );
}

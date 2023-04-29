import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h3>数据总览</h3>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;

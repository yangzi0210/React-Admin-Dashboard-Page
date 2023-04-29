import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>最新消息</h3>
        <Updates />
      </div>
      <div>
        <h3>顾客访问量</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;

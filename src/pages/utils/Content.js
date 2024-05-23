import React from "react";
import Card from "./Card";

const Content = () => {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </a>
      </div>
      <div className="row">
        <Card
          title="Earnings (Monthly)"
          value="$40,000"
          icon="fas fa-calendar"
        />
        <Card
          title="Earnings (Annual)"
          value="$215,000"
          icon="fas fa-dollar-sign"
        />
        <Card title="Tasks" value="50%" icon="fas fa-clipboard-list" />
        <Card title="Pending Requests" value="18" icon="fas fa-comments" />
      </div>
    </div>
  );
};

export default Content;

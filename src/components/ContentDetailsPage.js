import React from "react";
import "./ContentDetailsPage.scss";

const ContentDetailsPage = () => {
  return (
    <div className="content-layout">
      <div className="image-content">
        <div className="shape-circle"></div>
        <div className="image-covid-vaccine">
          <img src="https://image.freepik.com/free-photo/doctor-holding-preparing-vaccine-while-wearing-protective-equipment_23-2148847188.jpg"></img>
        </div>
        <div className="wave-image">
          <img
            src="https://www.transparentpng.com/thumb/wave/png-best-wave-15.png"
            alt="image"
          ></img>
        </div>
      </div>
      <div className="text-content">
        <h3>Cillum adipisicing adipisicing ad labore labore nulla aliqua.</h3>
        <h2>
          View Covid <span>Status</span>
        </h2>
        <p>
          Sunt eiusmod et eiusmod cupidatat. Reprehenderit laboris duis est ex
          occaecat pariatur deserunt. Ut elit laboris incididunt occaecat
          occaecat consequat eiusmod ipsum ad nulla excepteur.
        </p>
        <a href="#">READ MORE</a>
      </div>
    </div>
  );
};

export default ContentDetailsPage;

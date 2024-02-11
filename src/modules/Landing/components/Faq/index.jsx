import React from "react";
import "./style.css";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";

const Faq = (props) => {
  return (
    <div className="faq" id="FAQ">
      <div className="container row">
        <div className="col-lg-6 col-12 title-container">
          <p className="faq-title mb-3">Frequently Asked Question</p>
          <p className="faq-desc mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>
        <div className="col-lg-6 col-12">
          {props.data.map((FaqSection, index) => (
            <div key={index} className="faq-group mb-3">
              <Dropdown>
                <div>
                  <Dropdown.Toggle id="dropdown-basic" className="faq-wrapper">
                    {FaqSection.text}
                  </Dropdown.Toggle>
                </div>
                <Dropdown.Menu className="faq-item">
                  <Dropdown.Item href="#/action-1">Agra</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Agya</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Ayla</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

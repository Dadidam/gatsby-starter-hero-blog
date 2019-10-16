/* eslint no-unused-vars: 0 */

import { navigate } from "gatsby";
// import Button from "antd/lib/button";
import Form from "antd/lib/form";
// import Input from "antd/lib/input";
import PropTypes from "prop-types";
import React from "react";

// const FormItem = Form.Item;
// const { TextArea } = Input;
// import FaFacebook from "react-icons/fa";
import "antd/lib/form/style/index.css";
import "antd/lib/input/style/index.css";
import "antd/lib/button/style/index.css";
import { ThemeContext } from "../../layouts";

const Contact = props => {
  const { getFieldDecorator } = props.form;

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        sendMessage(values);
      }
    });
  }

  function sendMessage(values) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values })
    })
      .then(() => {
        console.log("Form submission success");
        navigate("/success");
      })
      .catch(error => {
        console.error("Form submission error:", error);
        this.handleNetworkError();
      });
  }

  function handleNetworkError(e) {
    console.log("submit Error");
  }

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <div>
            <h1>Информация по телефонам:</h1>
            <br />
            <p>240 330 0600</p>
            <p>240 731 5387</p>
            <br />
            <p>
              <a
                href="https://www.facebook.com/Amazingfox.org/"
                target="blank"
                style={{ textDecoration: "underline" }}
              >
                Наша группа на Фейсбук
              </a>
            </p>
          </div>
        )}
      </ThemeContext.Consumer>
    </React.Fragment>
  );
};

Contact.propTypes = {
  form: PropTypes.object
};

const ContactForm = Form.create({})(Contact);

export default ContactForm;

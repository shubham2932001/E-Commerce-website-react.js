import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation after form submission
import styled from "styled-components";

const Contact = () => {
  const navigate = useNavigate(); // Use navigate for programmatic navigation
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // On successful submission, redirect to the products page
        navigate("/products");
      } else {
        console.error("Failed to submit the form");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>

      <div className="container">
        <div className="contact-form">
          <form onSubmit={handleSubmit} className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="10"
              value={formData.message}
              onChange={handleChange}
              required
              autoComplete="off"
              placeholder="Enter your message"
            ></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

export default Contact;


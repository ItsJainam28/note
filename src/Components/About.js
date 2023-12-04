import React from "react";

export default function About() {
  const headingStyle = {
    fontSize: "2.5em",
    fontWeight: "bold",
    color: "#2c3e50", // Dark Blue
    marginBottom: "20px",
  };

  const sectionStyle = {
    backgroundColor: "#ecf0f1", // Light Gray
    padding: "40px 20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "40px",
  };

  const paragraphStyle = {
    fontSize: "1.2em",
    lineHeight: "1.6",
    textAlign: "center",
    color: "#34495e", // Dark Gray
  };

  return (
    <div className="container">
      <div className="text-center my-5" style={sectionStyle}>
        <p style={headingStyle}>
          <strong>
            Welcome to <span style={{ color: "#3498db" }}>Notes.</span>
          </strong>
        </p>
        <p style={paragraphStyle}>
          Your personal space for capturing thoughts, ideas, and inspirations.
          In the fast-paced world, keeping track of important information is
          crucial, and <span style={{ color: "#3498db" }}>Notes</span> is here
          to simplify your life. Whether it's a brilliant idea, a to-do list, or
          simply a moment you want to remember, our application provides an
          intuitive and organized platform to manage your notes effortlessly.
          With a user-friendly interface and powerful features,{" "}
          <span style={{ color: "#3498db" }}>Notes</span> is designed to enhance
          your productivity and creativity. Start documenting your journey with{" "}
          <span style={{ color: "#3498db" }}>Notes</span> today and turn every
          thought into a meaningful story!
        </p>
      </div>

      <div style={sectionStyle}>
        <p style={headingStyle} className="text-center">
          <strong>Meet Our Team</strong>
        </p>
        <p style={paragraphStyle}>
          Meet the minds behind <span style={{ color: "#3498db" }}>Notes.</span>{" "}
          Our team consists of individuals with diverse skills and perspectives:
          <strong>Jainam Patel, Dhruv Solanki, Hiba Syed, Kaleb Dubale, and Vivek Parekh</strong > Each team member is united by a shared passion for technology and innovation. Together, we've crafted a user-friendly note-taking experience aimed at simplifying and enhancing the way you organize your thoughts.
        </p>
      </div>

      <div style={sectionStyle}>
        <p style={headingStyle} className="text-center">
          <strong>Under the Hood of <span style={{ color: '#3498db' }}>Notes.</span></strong>
        </p>
        <p style={paragraphStyle}>
          <span style={{ color: '#3498db' }}>Notes.</span> is built on the MERN stack (MongoDB, Express.js, React, and Node.js) with a sleek Bootstrap frontend. This powerful combination provides a seamless and responsive user experience. From capturing your ideas to organizing them effortlessly, <span style={{ color: '#3498db' }}>Notes.</span> is designed to be your go-to platform for efficient note-taking.
        </p>
      </div>
    </div>
  );
}

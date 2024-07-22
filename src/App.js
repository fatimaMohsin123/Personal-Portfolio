import React from "react";
import { Layout } from "antd";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar";
import Home from "./components/Home/index.jsx";
import Education from "./components/Education/index.jsx";
import Projects from "./components/Projects/index.jsx";
import Skills from "./components/Skills/index.jsx";
import Experience from "./components/Experience/index.jsx";
import Testimonials from "./components/Testimonials/index.jsx";
import Contact from "./components/Contact/index.jsx";

const { Content } = Layout;

const App = () => {
  return (
    <Layout hasSider style={{ background: "#fff" }}>
      <Navbar />
      <Layout
        style={{
          marginLeft: 430, // Adjust the margin-left to match the Sider width
          background: "#fff", // Set background to white
        }}
      >
        <Content
          style={{
            overflow: "initial",
            background: "#fff", // Set background to white
          }}
        >
          <div
            style={{
              textAlign: "center",
              background: "#fff", // Ensure inner div also has a white background
            }}
          >
            <Element name="home">
              <Home />
            </Element>
            <Element name="education">
              <Education />
            </Element>
            <Element name="skills">
              <Skills />
            </Element>
            <Element name="projects">
              <Projects />
            </Element>

            <Element name="experience">
              <Experience />
            </Element>
            <Element name="testimonials">
              <Testimonials />
            </Element>

            <Element name="contact">
              <Contact />
            </Element>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;

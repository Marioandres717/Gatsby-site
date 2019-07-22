import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/card"
import Section from "../components/section"
import Wave from "../components/wave"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Learn to <br /> design and code React apps
        </h1>
        <p>
          Complete courses about the best tools and design systems. Prototype
          and build apps with React and Swift.
        </p>
        <Link to="/page-2/">Watch the video</Link>
        <div className="Logos">
          <img
            src={require("../images/logo-sketch.png")}
            width="50"
            alt="sketch logo"
          />
          <img
            src={require("../images/logo-figma.png")}
            width="50"
            alt="sketch logo"
          />
          <img
            src={require("../images/logo-react.png")}
            width="50"
            alt="sketch logo"
          />
          <img
            src={require("../images/logo-studio.png")}
            width="50"
            alt="sketch logo"
          />
          <img
            src={require("../images/logo-framer.png")}
            width="50"
            alt="sketch logo"
          />
          <img
            src={require("../images/logo-swift.png")}
            width="50"
            alt="sketch logo"
          />
        </div>
        <Wave />
      </div>
      <div className="Cards">
        <h2>11 Courses, more coming</h2>
        <div className="CardGroup">
          <Card
            title="Design System"
            text="10 sections"
            image={require("../images/wallpaper.jpg")}
          />
          <Card
            title="React For Designers"
            text="12 sections"
            image={require("../images/wallpaper2.jpg")}
          />
          <Card
            title="Sound Design"
            text="5 sections"
            image={require("../images/wallpaper3.jpg")}
          />
          <Card
            title="ARKit 2"
            text="10 sections"
            image={require("../images/wallpaper4.jpg")}
          />
        </div>
      </div>
      <Section
        image={require("../images/wallpaper2.jpg")}
        logo={require("../images/logo-react.png")}
        title="React For Designers"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem consequatur nemo expedita doloribus. Praesentium dignissimos facilis delectus eius minus blanditiis quod dicta. Possimus totam placeat nostrum quaerat, et aliquid ex."
      />
    </div>
  </Layout>
)

export default IndexPage

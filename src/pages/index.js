import * as React from "react";
import Layout from "../components/Layout"
import Slider from "../components/Slider";
import Project from "../components/Project"


// markup
const IndexPage = () => {
  return (
    <Layout>
      <main className="relative">
        <Slider />
        <Project />
      </main>
    </Layout>
  )
}

export default IndexPage

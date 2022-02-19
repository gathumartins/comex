import * as React from "react";
import Layout from "../components/Layout"
import Slider from "../components/Slider";
import Project from "../components/Project"
import WhyHome from "../components/WhyHome";
import Process from "../components/Process";


// markup
const IndexPage = () => {
  return (
    <Layout>
      <main className="relative">
        <Slider />
        <Project />
        <WhyHome />
        <Process />
      </main>
    </Layout>
  )
}

export default IndexPage

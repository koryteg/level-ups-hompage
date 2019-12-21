import React from "react"
import { Link } from "gatsby"

import LightningBolt from "../components/lightning-bolt"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Level Up you Dev Skillzzzzz" />
    <h1>Level Up Your Dev Skills</h1>
    <p>
      Welcome Levelups.dev. Where we will make you a better programmer. by
      leveling you up at all kinds of software development skills.
    </p>
    <p>
      we will cover languages and topics such as: Ruby, React, Dev Ops, Web
      developemnt, CSS, Deployment, Career Success.
    </p>
    <LightningBolt fill={"#ffe500"} />
    {/* <Image /> */}
  </Layout>
)

export default IndexPage

// colors
// #ffe500
// #000000
// #00a6fb
// #0582ca
// #006494

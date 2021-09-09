// import React from "react"
// import Layout from "../components/Layout"
// import Img from "gatsby-image"
// import * as styles from "../styles/project-details.module.css"
// import { graphql } from "gatsby"

// export default function ProjectDetails() {
//   return (
//     <Layout>
//       <div className={styles.details}>
//         <h2>title</h2>
//         <h3>stack</h3>
//         <div className={styles.featured}>{/* <Img fluid={}/> */}</div>
//         {/* <div className={styles.html}dangerouslySetInnerHTML={}/> */}
//       </div>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query ProjectsPage($slug: String) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         stack
//         title
//         featuredImg {
//           childImageSharp {
//             fluid {
//               src
//             }
//           }
//         }
//       }
//     }
//   }
// `

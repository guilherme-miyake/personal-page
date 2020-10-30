/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
 const allTags = [
    "kotlin-language",
    "python-language",
    "typescript-language",
    "javascript-language",
    "flask-framework",
    "django-framework",
    "spring-framework",
    "reactjs-framework",
    "pyqt-framework",
    "terraform-tool",
    "kubernetes-tool",
    "postgresql-tool",
    "redshift-tool",
    "kafka-tool",
    "airflow-tool",
    "camunda-tool",
    "pandas-tool",
    "firebase_apps-other",
    "aws_cloud-other",
    "software+engineer+@+creditas",
    "business+process+analyst+@+creditas",
    "university"
]

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const path = require("path")

    for (let taga in allTags) {
        createPage(
            {
                path: "/projects/" + allTags[taga],
                component: path.resolve("./src/pages/projects.tsx"),
                context: {
                    tag: allTags[taga]
                }
            }
        )
    }

}
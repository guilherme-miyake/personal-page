import {Project} from "../components/ProjectSection";

export const languageTags = [
    "kotlin-language",
    "python-language",
    "typescript-language",
    "javascript-language",
]
export const frameworkTags = [
    "flask-framework",
    "django-framework",
    "spring-framework",
    "react-framework",
    "pyqt-framework",
]

export const toolTags = [
    "terraform-tool",
    "kafka-tool",
    "airflow-tool",
    "camunda-tool",
    "postgresql-tool",
    "redshift-tool",
    "pandas-tool"
]

export const otherTags = [
    "firebase_apps-other",
    "aws_cloud-other",
    "-other",
]

export type allTags =
    typeof languageTags[number]
    & typeof frameworkTags[number]
    & typeof toolTags[number]
    & typeof otherTags[number]

export const projects: Project[] = [
    {
        title: "My Personal Webapp",
        purpose: ["is to have a showcase for both my experience and skills using an webpage interface"],
        solution: ["have created a webpage using Typescript as the source language and React as the framework, " +
        "I could give more details, but this is an axample",
            `Erat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
            nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit
             esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur`],
        contribution: ["was responsible to doing pretty much everything, but I need to test how this goes with" +
        "longer text, so here comes some more latin"],
        results: ["this super awesome webpage where you can read stuff about me and judge me based on things I wrote"],
        skillStack: ['python-language', 'kotlin-language'],
        experienceId: "software+engineer+@+creditas"
    },
    {
        title: "New Data Streaming Platform",
        purpose: ["was to have a fully integrated low latency streaming pipeline, from the running productive apps to our data analysts."],
        solution: [
            "we distributed a module that applications used to produce events/messages to Kafka injecting the necessary metadata and ensuring the usage of the correct avro schema.",
            "Those events were collect and sent to S3 using a in-house stream collector application written in python, which in turn, published data about streams being consumed and objects created in S3.",
            "Then, we had a Airflow DAG consuming this data and creating the external tables and partitions in the AWS Glue Catalog, making it possible for our analytics users to run queries straight from S3 and with little to no user intervention."
        ],
        contribution: ["was one of core developers, and except for our Kafka Cluster, which we contracted as a SAAS; I helped design and implement most of the solution."],
        results: ["data delivered under 5 minutes from our productive applications to our analytics stack with horizontally scalable services."],
        skillStack: ['python-language', "kafka-tool", "airflow-tool", "aws_cloud-other"],
        experienceId: "software+engineer+@+creditas"
    },
    {
        title: "Third Party Data Capture and Integration",
        purpose: [
            "was to capture or retrieve data from contracted third-parties or public data sources and load it into our analytics stack."
        ],
        solution: [
            "we had a diverse set of problems, so we had many solutions, most running on our Apache Airflow server.",
            "In most cases there was an third-party API, that we consumed using custom OOP python scripts," +
            " most of them were REST-like, but there were a few GraphQL APIs as well." +
            " \nFor some other cases, it was necessary to scrape or crawl through public source pages such as government lists and publications" +
            "to collect this data we used BeautifulSoup for scraping and Scrapy and Selenium for crawling.",
            "In order to process large datasets or to structure them we used Pandas as one of our main tools for data manipulation."
        ],
        skillStack: ["pandas-tool"],
        experienceId: "software+engineer+@+creditas"
    },
    {
        title: "Data Modelling and Transformation Pipelines",
        purpose: [
            "was to transform and aggregate our data in order to improve our business users ability to generate new insights and take decision using our data"
        ],
        solution: [
            "our main challenge was to close the gap between the software development and business analysis contexts." +
            "In order to solve it, our solution was at the time  to process the structured data from our applications into big fact tables," +
            " converting different entity models from multiple applications into a single user-friendly source of information.",
            "The main tool for the job at the time was Apache Airflow with most of our processing being done with SQL queries running on our AWS Redshift," +
            " that held both the raw data collected from multiple sources and our processed fact tables. "
        ],
        results: ["a better experience for our users and a shift in skills and time spent from building SQL queries to actually" +
        "looking at our data and using it, with a large expansion on our business analytics team that was made easier by our deliveries."],
        skillStack: ["python-language", "airflow-tool", "redshift-tool"],
        experienceId: "software+engineer+@+creditas"
    },
    {
        title: "Operational Database Capture",
        purpose: [
            ""
        ],
        solution: [
            ""
        ],
        contribution: [
            ""
        ],
        results: [""],
        skillStack: [""],
        experienceId: "software+engineer+@+creditas"
    },
    {
        title: "User Behavior Tracking",
        purpose: [
            ""
        ],
        solution: [
            ""
        ],
        contribution: [
            ""
        ],
        results: [""],
        skillStack: [""],
        experienceId: "software+engineer+@+creditas"
    },
    {
        title: "Data Visualization Tools Support and Maintenance",
        purpose: [
            ""
        ],
        solution: [
            ""
        ],
        contribution: [
            ""
        ],
        results: [""],
        skillStack: [""],
        experienceId: "software+engineer+@+creditas"
    }

]


// Database Capture
// Atividades na SCD
// Data Access Control and Security
// Kafka Tools for monitoring and stuff
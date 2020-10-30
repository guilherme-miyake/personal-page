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
    "reactjs-framework",
    "pyqt-framework",
]

export const toolTags = [
    "terraform-tool",
    "kubernetes-tool",
    "postgresql-tool",
    "redshift-tool",
    "kafka-tool",
    "airflow-tool",
    "camunda-tool",
    "pandas-tool"
]

export const otherTags = [
    "firebase_apps-other",
    "aws_cloud-other",
]

export type allTags =
    typeof languageTags[number]
    & typeof frameworkTags[number]
    & typeof toolTags[number]
    & typeof otherTags[number]

export const allTags = [...languageTags, ...frameworkTags,...toolTags , ...otherTags]

// The first project will be showcased in the Resume page under Personal Projects
export const projects: Project[] = [
    {
        title: "My Personal Page",
        purpose: ["is to have a showcase for both my experience and skills using an webpage interface"],
        solution: [
            "I  managed to make some better choices on my stack and code organization, due to past experiences doing" +
            " front-end for another project and some research on the subject.",
            "As the main framework, ReactJS was chosen because I found it much easier and readable than its runner-ups " +
            "(Angular and Flutter), and was the only framework I had had hands-on experience.",
            "Typescript on the other hand, was chosen despite its challenges and overheads, because for each minute more" +
            " I spent writing the code helped me save me dozens of minutes that I would otherwise have to spend" +
            " debugging the application."
        ],
        results: ["this super awesome webpage where you can read stuff about me and judge me based on things I wrote"],
        skillStack: [
            "typescript-language",
            "javascript-language",
            "reactjs-framework",
        ],
        experienceId: ""
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
        results: [
            "a better experience for our users and a shift in skills and time spent from building SQL queries to actually" +
            "looking at our data and using it, with a large expansion on our business analytics team that was made easier by our deliveries."
        ],
        skillStack: ["python-language", "airflow-tool", "redshift-tool"],
        experienceId: "software+engineer+@+creditas"
    },
    {
        title: "Operational Database Capture",
        purpose: [
            "was to capture data from operational databases and send it to our analytics environment."
        ],
        solution: [
            "we started using the AWS DMS Tool to make full loads from our productive RDS Postgres Databases straight to our AWS Redshift Cluster" +
            "using scheduled jobs on Airflow, in order to ensure continuous data availability during the day we used staging schemas," +
            " and cycled our schemas always keeping the last successful load on backup in case of failure.",
            "Currently, we are still using the AWS DMS Tool, but instead of scheduled full loads targeting redshift," +
            " we are using a continuous process that uses the Changelog Data Capture (CDC) feature to persist our data on S3." +
            "In order to enable this new capture method, we added new default configurations to our databases on our terraform modules," +
            "and enabled programmatic access to its root account user using AWS Secrets Manager to store the latest password and policies" +
            "with resource tag conditions."
        ],
        results: [
            "the Data Engineering team reduced the configuration and permission overhead to capture new databases," +
            " and reduced the latency of the data moving from our operational environment to our analytics environment" +
            " enabling even further deliveries."
        ],
        skillStack: [
            "python-language",
            "airflow-tool",
            "terraform-tool",
            "postgresql-tool",
            "redshift-tool",
            "aws_cloud-other"
        ],
        experienceId: "software+engineer+@+creditas"
    },
    {
        title: "Near Real Time User Behavior Tracking",
        purpose: [
            "was to capture and deliver user behavior data in a sufficient speed for our marketing analysts to be able" +
            " to take quick decisions and allow data science models to use and/or interact with our user accordingly to their browsing behavior."
        ],
        solution: [
            "we had four main components that we had to customize and/or implement on our own infrastructure:",
            "Google Tag Manager (generally known as GTM) and Snowplow Tracker, was a tool that we were already using to inject trackers and some other configurations on our web applications," +
            " for this tool we wrote manuals to help a new user configure his GTM container to use our new system from scratch and also made an \"deployment-ready\"" +
            " configuration that they could use to skip most of the manual steps.",
            "Snowplow Collector and Enrich, both of them are mostly ready to use, for both of them we only had to tune and add some specific configuration to make it" +
            " it run on our stack more smoothly, both of them were deployed using very high level terraform modules on ECS with high availability.",
            "Snowplow Stream Avro, a simple spring based component that ran an subroutine responsible for converting the TSV-like messages that the Snowplow" +
            " Enrich component outputted by default to our proper AVRO data-model and republished it to kafka to be made available to our analytics stack by default operations."
        ],
        skillStack: [
            "javascript-language",
            "spring-framework",
            "kotlin-language",
            "kafka-tool",
            "terraform-tool",
        ],
        experienceId: "software+engineer+@+creditas"
    },
    {
        title: "The Dungeon Backstage",
        purpose: ["is to create a platform to support TTRPG gamers to develop and run their own game with a great user " +
        "experience and little to no coding required."],
        solution: [
            "I am continuously experimenting with a lot of new tools and libraries, and being a very extensive project with many" +
            " technical challenges, I often had to do large refactors and back-tracks in order to properly apply new skills and tools" +
            " that will help to move this project forward.",
            "Among the tools and technologies used in this project are: react redux in order to have a better state management" +
            " for resources used across the app; react saga, which helps to implement saga patterns in order to better manage" +
            " async operations and side effects from redux events, such as handling API calls; run-types in order to validate " +
            " dynamically built objects and to construct validators for user built entities."
        ],
        skillStack: [
            "typescript-language",
            "javascript-language",
            "reactjs-framework",
            "firebase_apps-other"
        ],
        experienceId: ""
    },

    {
        title: "Machine Learning Deployment and Integration",
        purpose: [
            "was to create an easy to replicate API wrapper for data science models, in order to enable " +
            "our data scientists to deploy their models faster in a micro-service-like structure"
        ],
        solution: [
            "we started by going over our old monolithic API wrapper for Data Science models and implementing some" +
            "new features to better understand how it worked and which were its problems. This application had a very" +
            "complex code structure and some other issues hard to refactor, it was build with docker and Django, the " +
            "implemented features were better error handling, persisting more data, and fixing some other small issues.",
            "Next, we started building the wrapper from scratch using AWS ECS and Docker , Flask and SQLAlchemy as our ORM, this " +
            ""
        ],
        contribution: [
            ""
        ],
        results: [""],
        skillStack: [""],
        experienceId: "software+engineer+@+creditas"
    },
    // {
    //     title: "AWS Infrastructure and Permissions for Data Engineering",
    //     purpose: [
    //         "was to enable new projects and tools on AWS using infrastructure-as-code (IaC) and to solve user access issues for the Data Engineering team"
    //     ],
    //     solution: [
    //         "I started by learning how to configure and " +
    //         "we had three targets: start all new projects using IaC, migrate old projects and resources created manually to IaC, break down roles and groups "
    //     ],
    //     contribution: [
    //         ""
    //     ],
    //     results: [""],
    //     skillStack: [""],
    //     experienceId: "software+engineer+@+creditas"
    // },

]


// Kafka observability and control systems
// Spark Stream Processing

// Credit Analyzer
// Loan contract generator
// Basic Debt collection CRM
// Real state evaluation system
// Scheduled query pushing to Google Sheets

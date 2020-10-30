import {Experience} from "../components/ExperienceSection";

export const workExperiences: { [id: string]: Experience } = {
    "software+engineer+@+creditas": {
        id: "software+engineer+@+creditas",
        title: "Software Engineer",
        where: "Creditas Soluções Financeiras",
        when: "August 2018 – Present",
        hasProjects: true,
        description: [
            `In this position, my purposes were to enable decision making based on data; to deliver data science models;
             to support the creation and maintenance of reports; and to improve the quality of our data and the 
             experience of working with it`,
            `For those purposes, I `,
            `Currently, I'm developing company-wide data capture tools and strategies`

        ]
    },
    "business+process+analyst+@+creditas": {
        id: "business+process+analyst+@+creditas",
        title: "Business Process Analyst",
        where: "Creditas Soluções Financeiras",
        when: "May 2017 – August 2018",
        hasProjects: true,
        description: [
            `In this position, my purposes were to optimize our operation pipelines; to enable new business opportunities
             and processes; and to deliver those solutions quickly.`,

            `For those purposes, I helped implement third-party tools and platforms into our processes; created new 
            tools and automations as necessary; extracted or generated data from every tool built or implemented; 
            and worked close to the product, operation and analytics teams in order to ensure value delivery.`,

            `By the end of this experience, I was responsible for teaching new members and helping
             other team members with technical issues or business intelligence.`,
        ]
    },
}

export const educationExperiences: { [id: string]: Experience } = {
    "unesp": {
        id: "university",
        title: "Bachelor of Science, Civil Engineering",
        where: "São Paulo State University",
        when: "March 2011 – August 2017",
        hasProjects: true,
        description: [
            `A 5-years degree with specific coursework that included topics such as: fluid mechanics, soil mechanics, 
            structural engineering, geotechnical engineering, traffic engineering and environmental engineering.`,
            `During this degree, I helped organize large events; joined and lead a student's union department;
             gave lectures at events; and organized optional coursework.`
        ],
    },
    "msu": {
        id: "university",
        title: "Bachelor of Science, Civil Engineering",
        where: "Montana State University",
        when: "August 2013 – August 2014",
        hasProjects: true,
        description: [
            `A 1-year non-degree international exchange program under a fully funded scholarship.`,
            `During this program, I joined a research project on traffic engineering and published one article
             on the subject.`
        ],
    }

}

export const otherExperiences: { [id: string]: Experience } = {}
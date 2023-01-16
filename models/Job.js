const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
    {
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: false,
        },
        company: {
            type: String,
            required: true,
            unique: false,
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        url: {
            type: String,
            required: true,
        },
        duties: {
            type: [String],
            required: true,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model("Job", JobSchema)

/* 
{
    "startDate": "2021-12-01T14:56:59.301Z",
    "company": "Patsnap",
    "title": "Sales Development Representative",
    "url": "https://www.patsnap.com",
    "duties": [" Used cold outreach techniques to generate the highest amount of leads in Q3 (23) and the third highest revenue in Q2 ($54,000) and Q3 ($57,000).","Successfully onboarded three new team members, two of which exceeded target.", "Perfected communication skills through over 25,000 cold calls."]
} 

{
    "startDate": "2019-05-01T14:56:59.301Z",
    "endDate": "2019-09-01T14:56:59.301Z",
    "company": "University Of Guelph",
    "title": "NSERC Funded Research Assistant",
    "url": "https://www.uoguelph.ca/",
    "duties": ["Synthesized and characterized a disaccharide accepted (Lewis Y).","Collaborated closely with a team of 6 postgraduate students to conduct experiments.", "Presented my research at the CEPS undergraduate poster session of approximately 30 undergraduate students."]
}

{
    "startDate": "2019-01-01T14:56:59.301Z",
    "endDate": "2019-09-01T14:56:59.301Z",
    "company": "University Of Guelph",
    "title": "Teaching Assistant",
    "url": "https://www.uoguelph.ca/",
    "duties": ["The first undergraduate student to teach organic chemistry at the University Of Guelph.","Managed the education of 60+ students per semester in person and through zoom", "Received a TA rating of 4.8/5.0"]
}
*/

// --- 🎨 Site Styling ---

const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
    name: "Ashish Ranjan",
    message: "A Computer Science student who loves to tinker with code and studying Cybersecurity as a minor. When I'm not studying, I'm helping fellow International students navigate University life. Sometimes I write as well!",
    basedLocation: "Mannheim, Germany",
    resumeLink: "https://docs.google.com/document/d/1n-HXpKmiFmvkQ4mBvzkudXqQLu4CDpxE/edit?usp=sharing&ouid=114680163147912543250&rtpof=true&sd=true", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/portrait.jpg'
}

const socialMediaLinks = {
    github: "https://github.com/ranjanashish298",
    linkedin: "https://www.linkedin.com/in/ashish-ranjan-796386241/",
    medium: "https://medium.com/",
    stackoverflow: "",
    xtwitter: "https://twitter.com/"
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "I'm a computer science student at the Hochschule Worms. I have a keen interest in Software Development and also passionate about Cybersecurity. With skills in programming languages like C, Java, I also work with web technologies and have hands-on experience with frameworks such as Vue and Express.",
        "Dedicated, proactive, and always curious, I thrive both in solo projects and as part of a team. I've been coding for over two years and have an experience in development for big Enterprises. Besides my technical pursuits, I serve as a mentor for International students at my University, helping them adjust and succeed in a new environment. Currently, I am enhancing my skills as a Cloud Developer at SAP, focusing on building robust and secure applications."
    ], // Separated items are paragraphs
    photo1Link: "images/portrait1.jpg",
    photo2Link: "images/portrait2.jpg",
    photo3Link: "images/portrait3.jpg"
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "Software Developer (Werkstudent)",
        company: {
            name: "SAP",
            link: "https://www.sap.com/germany/index.html"
        },
        duration: "Sept 2022 - Present",
        bulletPoints: [
            "Led the E2E UIVeri5 Tests migration to a new framework WDI5, becoming one of the first teams at SAP to implement full-scale migration.",
            "Extended UI and backend services on SAP BTP using the Kyma environment.",
            "Automated a suite of negative security tests running nightly on Jenkins, enhancing security protocols.",
            "In the buzzing times of AI, got a chance to integrate an AI Unit Test Code Generator Tool (SAP specific) to generate code for Unit Tests."

        ],
        hashtags: [
            "Javascript",
            "Java",
            "Jenkins",
            "SAP BTP",
            "SAP UI5",
            "Shell-Scripting",
            "Groovy", 
            "many more..."
        ]
    },
    {
        position: "HiWi",
        company: {
            name: "Hochschule Worms",
            link: "https://www.hs-worms.de/international/international-center"
        },
        duration: "Aug 2024 - Present",
        bulletPoints: [
            "Supervision of incoming International students.",
            "Administrative Support and Management activities."
        ],
        hashtags: [
            "Management",
            "International-Relations",
            "Administration"
        ]
    }
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "TrackYourSubs IOS App",
        yearCompleted: "2022",
        description: "An IOS app to track you subscriptions and expenses, all the while presenting in a clean and professional look with a load of features. Some of the more evident features are: Budgeting (monthly / yearly option available), Current monthly & yearly total expense at a glance, Custom suggestions to meet budget, Organize (Categorization & Importance) and filter through subscriptions, Reminders via scheduled notifications, Stats page: pie chart visual, bar chart visual, and streak indicator.",
        techStack: "Swift, SwiftUI",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/"
            },
            {
                label: "",
                type: "external",
                url: "https://youtubec.com/"
            }
        ],
        imageLink: "images/tracksubs_pic.png",
        alignLeft: false
    },
    {
        projectName: "Sudoku Game & Solver",
        yearCompleted: "2021",
        description: "Built a Sudoku game UI incorporating the Java Swing library. Randomly generates a Sudoku puzzle and solves itself using the backtracking algorithm written in Java..",
        techStack: "Java",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/"
            },
            {
                label: "",
                type: "external",
                url: "https://youtube.com/"
            }
        ],
        imageLink: "images/sudoku_pic.png",
        alignLeft: false
    },
    {
        projectName: "Trivia Quiz",
        yearCompleted: "2020",
        description: "Interested in taking a fun and interactive pop quiz? Using the HTML, CSS3, JavaScript, and jQuery I created a quiz that can be taken on numerous topics of your choice and gives instant feedback. The entire project is built mostly on JavaScript and all the functionality and events are controlled through functions such as ReadDisplay and Validate. The HTML portion of the online quiz only serves as the skeleton and template for elements that will be created via JS.",
        techStack: "JS, HTML, CSS",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/"
            },
            {
                label: "",
                type: "external",
                url: "" //https://codepen.io/Max_the_coder/pen/yLXZOYL
            }
        ],
        imageLink: "images/trivia_pic.png",
        alignLeft: true
    },
    {
        projectName: "Coronavirus Report",
        yearCompleted: "2020",
        description: "Created a program that displays up-to-date COVID-19 data and shows results in a graphical / visual representation. Coded with the Python programming language and libraries such as Matplotlib, Requests, and CSV.",
        techStack: "Python",
        links: [
            {
                label: "",
                type: "git",
                url: "https://youtube.com"
            },
            {
                label: "",
                type: "external",
                url: "https://github.com/"
            }
        ],
        imageLink: "images/covid_pic.png",
        alignLeft: false
    }
]


// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "If you're interested in discussing tech, sharing ideas for potential projects, or just looking to network within the tech community, feel free to drop me a line. I love meeting new people who are passionate about technology and innovation.",
            "Whether it's to share insights, collaborate on a project, or simply chat about the latest trends in tech, I'm all ears :)"
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "ranjanashish298@gmail.com", // email takes precedance
            other: ""
        },
        responseTimeMessage: "...and I'll resopnd within the next 24hrs"
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    contact
}
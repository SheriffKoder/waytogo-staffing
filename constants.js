
const allText = {
    hero: {
        header: "Staffing Agency - the way to go, join us",
        paragraph: "Staffing Agency - the way to go, join us. Staffing Agency - the way to go, join us",
        image: "https://media.istockphoto.com/id/1198944463/photo/i-hope-youll-like-you-coffee.jpg?s=2048x2048&w=is&k=20&c=mMHzgmMTB9p2ibc68QNRepFevJnN_LHWUyMTf8et3Uc=",
        cardImage1: "https://media.istockphoto.com/id/1268392517/photo/restaurant-manager-and-his-staff-in-terrace-interacting-to-head-chef-in-restaurant.jpg?s=1024x1024&w=is&k=20&c=EZx4lUITmVsdUHshy5cTP8YirbW_F2bY880XGObz_n8=",
        cardImage2: "https://media.istockphoto.com/id/151812102/photo/portrait-of-smiling-restaurant-employees.jpg?s=612x612&w=0&k=20&c=uXheUcdEHqu8dNBHl-51gc-yBRH9cLCvVt2DU-AjA0g="
    },
    section2: {
        header: "Who we are",
        paragraph: "Staffing Agency - the way to go, join us. Staffing Agency - the way to go, join us",
        cardImage1: "https://media.istockphoto.com/id/1498242299/photo/group-of-trainees-wearing-formal-clothes-in-hotel-professional-butler-courses.jpg?s=1024x1024&w=is&k=20&c=FN2YFrOjqatG0PGlYBa3MZy_Dhdexa5DM-VwmyfYCsw="
    },
    section3: {
        header: "What we do",
        paragraph: "We offer highly trained and professional staff, ensuring top-quality service and a seamless event experienc for every occasion."
    },
    section4: {
        header: "Why choose us",
        paragraph1: "Our extensively trained staff consistently elevate every event, going above and beyond to ensure each experience is exceptional.",
        paragraph2: "Ensuring a seamless and stress-free experience from start to finish. Our streamlined process begins with understanding your event needs, followed by tailored staffing solutions curated to match your requirements perfectly."
    }
}

const section2_cards = {
    card1: {
        header: "Our Rating",
        paragraph: "Clients have trusted us with providing excellent service",
    },
    card2: {
        about: "An about us page isn't just where you share the story of your brand. It's also where you tell your customer what you do for them and how you work to meet their needs in that area.",
        mission: "A definition of the company's business, who it serves, what it does, its objectives, and its approach to reaching those objectives",
        vision: "Statement sets an organization's sights on the future. However, once that future is reached, the vision needs to continue moving forward.",
    }
}


const nav_links = [
    { text: "Services", href: "#section2", aria: "know more about the services we offer" },
    // { text: "Measures", href: "#measures", aria: "our achievements"},
    { text: "How it works", href: "#section4", aria: "our action plan" },
    { text: "Testimonials", href: "#section5", aria: "what our clients says about us" },
  ]

const sectionThree_cards = [
    {
        header: "Corporate Dining",
        image: "https://media.istockphoto.com/id/1198944463/photo/i-hope-youll-like-you-coffee.jpg?s=2048x2048&w=is&k=20&c=mMHzgmMTB9p2ibc68QNRepFevJnN_LHWUyMTf8et3Uc=",
        description: "Our expert staff seamlessly blend into any corporate dining event, guaranteeing its success."
    },
    {
        header: "Country Clubs",
        description: "We prioritize making your members feel valued  ensuring flawless execution of weddings, mitzvahs, anniversaries, and other important events.",
        image: "https://media.istockphoto.com/id/1268392517/photo/restaurant-manager-and-his-staff-in-terrace-interacting-to-head-chef-in-restaurant.jpg?s=1024x1024&w=is&k=20&c=EZx4lUITmVsdUHshy5cTP8YirbW_F2bY880XGObz_n8=",
    },
    {
        header: "Off-Premise Catering",
        description: "Our staff are always prepared to follow direction, seamlessly blend in, reliable, and detail-oriented.",
        image: "https://media.istockphoto.com/id/151812102/photo/portrait-of-smiling-restaurant-employees.jpg?s=612x612&w=0&k=20&c=uXheUcdEHqu8dNBHl-51gc-yBRH9cLCvVt2DU-AjA0g="
    },
    {
        header: "Universities & Colleges",
        description: "We provide unmatched expertise in catering for higher education institutions.",
        image: "https://media.istockphoto.com/id/1268392517/photo/restaurant-manager-and-his-staff-in-terrace-interacting-to-head-chef-in-restaurant.jpg?s=1024x1024&w=is&k=20&c=EZx4lUITmVsdUHshy5cTP8YirbW_F2bY880XGObz_n8=",
    },
    {
        header: "Political Events",
        description: "We have vast expertise in staffing for political and inaugural occasions.",
        image: "https://media.istockphoto.com/id/1198944463/photo/i-hope-youll-like-you-coffee.jpg?s=2048x2048&w=is&k=20&c=mMHzgmMTB9p2ibc68QNRepFevJnN_LHWUyMTf8et3Uc=",
    },
    {
        header: "Hotels & Dining",
        description: "Our front-of-house team seamlessly integrates into your hotel setting, guaranteeing guest satisfaction",
        image: "https://media.istockphoto.com/id/151812102/photo/portrait-of-smiling-restaurant-employees.jpg?s=612x612&w=0&k=20&c=uXheUcdEHqu8dNBHl-51gc-yBRH9cLCvVt2DU-AjA0g="
    }
]

const sectionFour_contents = [
    {
        header: "Flexibility",
        paragraph: "Ensuring seamless execution while adapting to changing needs",
    },
    {
        header: "Expertise",
        paragraph: "Experienced staff bring specialized skills, enhancing event quality and satisfaction.",
    },
    {
        header: "Scalability",
        paragraph: "Easily adjust team size for optimal resource use and cost-effectiveness.",
    },
]

module.exports = {
    allText,
    nav_links,
    section2_cards,
    sectionThree_cards,
    sectionFour_contents
  }
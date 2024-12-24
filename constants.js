const allText = {
    hero: {
        header: "Staffing Agency - the way to go, join us",
        paragraph: "Staffing Agency - the way to go, join us. Staffing Agency - the way to go, join us",
        image: "images/hero/hero.jpeg",
        mainImage: "images/hero/hero-bg.png",
        cardImage1: "images/hero/card1.jpeg",
        cardImage2: "images/hero/card2.jpeg",
    },
    section2: {
        header: "The Value We Bring",
        paragraph: "At Way to Go Staffing, we understand that your success starts with exceptional people. Our unwavering commitment to quality and reliability ensures that every placement strengthens your business. With over yearsNum years of staffing expertise, we deliver a 99% client satisfaction rate and proudly serve over 100 hospitality businesses. Trusted for our precision in matching the right talent to the right roles, we work efficiently to help you achieve your goals—every time.",
        cardImage1: "images/hero/hero.jpeg"
    },
    section3: {
        header: "What We do",
        paragraph: "From elegant weddings to corporate events, private dinners, or large celebrations, our waitstaff adapts seamlessly to any setting. Whether you need formal service or a casual touch, we provide tailored staffing to match your event's unique style and needs."
    },
    section4: {
        header: "Why Choose WayToGo",
        paragraph1: "We offer flexible staffing solutions, including temporary-to-permanent placements, allowing businesses and employees to find the perfect long-term match.",
        paragraph2: "Whether you need event support or core team members, Way to Go Staffing ensures quality placements tailored to your needs."
    },
    section5: {
        header: "Our Services",
        paragraph: "Our extensively trained staff consistently elevate every event, going above and beyond to ensure each experience is exceptional.",
    },
    section6: {
        image: "images/partner-with-us-2.png",
        header: "Partner with WayToGo Staffing",
        paragraph: "Your solution to seamless and reliable staffing.",
    },
    FormPage: {
        header: "Join Our Team",
        paragraph: "Let's make a difference together",
    }
}

const nav_links = [
    { text: "About", href: "/#about", aria: "More about WayToGo" },
    { text: "Events", href: "/#events", aria: "Events we are experienced in" },
    { text: "Services", href: "/#services", aria: "Services we offer" },
    { text: "Careers", href: "/join-us", aria: "Work with us" },
]

// the value we bring
const section2_cards = {
    card1: {
        header: "Our Rating",
        paragraph: "Trusted with providing excellent service",
    },
    card2: {
        mission: "To provide exceptional, tailored staffing solutions that elevate every event, ensuring seamless service, guest satisfaction, and unforgettable experiences.",
        vision: "To be the leading choice for event staffing, renowned for excellence, reliability, and transforming moments into cherished memories through outstanding service.",
    }
}

// what we do
const sectionThree_cards = [
    {
        header: "Country Clubs",
        description: "We prioritize making your members feel valued ensuring flawless execution of weddings, mitzvahs, anniversaries, and other important events.",
        image: "/images/sectionThreeImages/country-clubs.jpg",
    },
    {
        header: "Hotels",
        description: "Reliable and professional team members to enhance your guest experiences, from housekeeping to front desk.",
        image: "/images/sectionThreeImages/hotels.png"
    },
    {
        header: "Universities",
        description: "Flexible staffing solutions for campus events, dining halls, and administrative support.",
        image: "/images/sectionThreeImages/universities.jpg",
    },
    {
        header: "Corporate Events",
        description: "Skilled personnel to deliver seamless service for meetings, conferences, and private gatherings.",
        image: "/images/sectionThreeImages/corporate-events.jpg"
    },
    {
        header: "Banquet Halls",
        description: "Dedicated team members to provide flawless service for weddings, parties, and special events.",
        image: "/images/sectionThreeImages/banquet-halls.jpg"
    },
    {
        header: "Stadiums",
        description: "Versatile staff for concession stands, VIP sections, and event operations to keep fans happy and events running smoothly.",
        image: "/images/sectionThreeImages/stadiums.jpg"
    },
    {
        header: "Catering Companies",
        description: "Professional and efficient staff to assist with meal prep, service, and cleanup for events of any scale.",
        image: "/images/sectionThreeImages/catering-companies.jpg"
    },
    {
        header: "Cruise Lines",
        description: "Dedicated hospitality teams ready to deliver premium service on and off the water.",
        image: "/images/sectionThreeImages/cruise-lines.jpg"
    },

]

// why choose us
const sectionFour_contents = [
    {
        header: "Rigorous Candidate Screening",
        paragraph: " Every candidate is meticulously vetted to ensure they meet the highest standards of professionalism and expertise.",
    },
    {
        header: "Customized Solutions",
        paragraph: "We tailor our staffing services to your unique business needs, whether for a single event or long-term support.",
    },
    {
        header: "Industry Expertise",
        paragraph: "With over yearsNum years of experience, we specialize in hospitality and events staffing, offering unmatched knowledge and insights.",
    },
    {
        header: "Flexibility and Reliability",
        paragraph: "From last-minute needs to ongoing staffing, our dependable team is ready to support your operations seamlessly.",
    },
    {
        header: "Dedicated Account Manager",
        paragraph: "A dedicated account manager is assigned to your location to oversee the quality of service and ensure your needs are met efficiently.",
    },
    {
        header: "Intensive Staff Training",
        paragraph: "Our team members undergo rigorous training to maintain consistent excellence in every placement.",
    },
    {
        header: "Complimentary On-Site Training",
        paragraph: "We provide on-site training at no additional cost to align with your unique style of service and deliver a seamless guest experience.",
    },
    {
        header: "Fully Compliant",
        paragraph: "We adhere to all local, state, and federal labor laws, ensuring that all staff are properly compensated and treated with fairness and respect.",
    },

]

// our services
const sectionFive_cards = [
    {
        header: "Banquet Server",
        paragraph: "Friendly and professional servers skilled in delivering exceptional dining experiences for weddings, corporate events, and private gatherings.",
        image: "/images/sectionFiveImages/banquet-server.jpeg"
    },
    {
        header: "Banquet Captain",
        paragraph: "Experienced leaders who oversee banquet operations, ensuring flawless service and coordination of staff during events.",
        image: "/images/sectionFiveImages/banquet-captain.jpg"
    },
    {
        header: "Maitre D'",
        paragraph: "Seasoned front-of-house managers to greet guests, manage seating arrangements, and supervise the overall dining experience.",
        image: "/images/sectionFiveImages/maitre-d.jpg"
    },
    {
        header: "Concession Stand Worker",
        paragraph: "Reliable team members adept at serving food, drinks, and handling transactions at stadiums, fairs, and other event venues.",
        image: "/images/sectionFiveImages/concession-stand.jpg"
    },
    {
        header: "Line Cook",
        paragraph: "Skilled culinary professionals who can execute dishes efficiently, ensuring high-quality food service in kitchens of all sizes.",
        image: "/images/sectionFiveImages/line-cook.jpg"
    },
    {
        header: "Dishwasher",
        paragraph: "Hardworking individuals responsible for maintaining clean kitchen equipment and ensuring smooth kitchen operations.",
        image: "/images/sectionFiveImages/dishwasher.jpg"
    },
    {
        header: "Housekeeper",
        paragraph: "Meticulous staff focused on maintaining cleanliness and tidiness for hotels, resorts, and other establishments.",
        image: "/images/sectionFiveImages/housekeeper.jpg"
    },
    {
        header: "Event Setup Crew",
        paragraph: "Detail-oriented staff skilled in setting up event spaces, including furniture arrangement, decorations, and technical equipment.",
        image: "/images/sectionFiveImages/event-setup-crew.jpg"
    },
    {
        header: "Guest Service Representative",
        paragraph: "Polished customer-facing professionals offering exceptional service at front desks, events, and receptions.",
        image: "/images/sectionFiveImages/guest-service-representative.jpg"
    },
    {
        header: "Event Security Staff",
        paragraph: "Responsible individuals who maintain order, safety, and guest satisfaction during events of any size.",
        image: "/images/sectionFiveImages/event-security-staff.jpg"
    },
    {
        header: "Event Manager",
        paragraph: "Experienced professionals to plan, oversee, and execute events, ensuring everything runs smoothly and meets expectations.",
        image: "/images/sectionFiveImages/event-manager.jpg"
    },
    // {
    //     header: "Kitchen Helper",
    //     paragraph: "Dependable staff to assist with meal preparation, cleaning, and maintaining an organized kitchen during busy periods.",
    //     image: "/images/sectionFiveImages/2.png"

    // },
    // {
    //     header: "General Laborer",
    //     paragraph: "Versatile staff who can assist with a wide range of tasks, including loading/unloading, venue setups, and logistics.",
    //     image: "/images/sectionFiveImages/13.png"
    // },
]

// Form images
const formImages = [
    "/images/sectionFiveImages/banquet-server.jpeg",
    "/images/sectionFiveImages/banquet-captain.jpg",
    "/images/sectionFiveImages/maitre-d.jpg",
    "/images/sectionFiveImages/concession-stand.jpg",
    "/images/sectionFiveImages/line-cook.jpg",
];

module.exports = {
    allText,
    nav_links,
    section2_cards,
    sectionThree_cards,
    sectionFour_contents,
    sectionFive_cards,
    formImages
}
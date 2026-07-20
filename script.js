const lessons = [

    {
        number: 1,
        title: "EMT Foundations",
        folder: "foundations",
        status: "Slides Complete"
    },

    {
        number: 2,
        title: "Airway, Respiration & Ventilation",
        folder: "airway",
        status: "In Development"
    },

    {
        number: 3,
        title: "Respiratory Emergencies",
        folder: "respiratory",
        status: "Coming Soon"
    },

    {
        number: 4,
        title: "Cardiology & Resuscitation",
        folder: "cardiology",
        status: "Coming Soon"
    },

    {
        number: 5,
        title: "Cardiovascular Emergencies",
        folder: "cardiovascular",
        status: "Coming Soon"
    },

    {
        number: 6,
        title: "Pharmacology",
        folder: "pharmacology",
        status: "Coming Soon"
    },

    {
        number: 7,
        title: "Neurological Emergencies",
        folder: "neurology",
        status: "Coming Soon"
    },

    {
        number: 8,
        title: "Endocrine & Hematologic Emergencies",
        folder: "endocrine",
        status: "Coming Soon"
    },

    {
        number: 9,
        title: "Allergic & Anaphylactic Emergencies",
        folder: "allergy",
        status: "Coming Soon"
    },

    {
        number: 10,
        title: "Toxicology",
        folder: "toxicology",
        status: "Coming Soon"
    },

    {
        number: 11,
        title: "Behavioral Emergencies",
        folder: "behavioral",
        status: "Coming Soon"
    },

    {
        number: 12,
        title: "Obstetrics & Gynecology",
        folder: "obgyn",
        status: "Coming Soon"
    },

    {
        number: 13,
        title: "Trauma Assessment",
        folder: "trauma",
        status: "Coming Soon"
    },

    {
        number: 14,
        title: "Bleeding & Shock",
        folder: "shock",
        status: "Coming Soon"
    },

    {
        number: 15,
        title: "Soft Tissue Injuries",
        folder: "soft-tissue",
        status: "Coming Soon"
    },

    {
        number: 16,
        title: "Orthopedic Injuries",
        folder: "orthopedic",
        status: "Coming Soon"
    },

    {
        number: 17,
        title: "Head, Face & Neck Injuries",
        folder: "head-face-neck",
        status: "Coming Soon"
    },

    {
        number: 18,
        title: "EMS Operations",
        folder: "ems-operations",
        status: "Coming Soon"
    },

    {
        number: 19,
        title: "Integrated Patient Scenarios",
        folder: "scenarios",
        status: "Coming Soon"
    },

    {
        number: 20,
        title: "Comprehensive Final Exam",
        folder: "final-exam",
        status: "Coming Soon"
    }

];



const dashboard = document.getElementById("lesson-dashboard");



lessons.forEach(lesson => {


    const card = document.createElement("div");

    card.className = "lesson-card";


    card.innerHTML = `

        <h2>${lesson.number}. ${lesson.title}</h2>

        <p class="section-title">
        Lesson Materials
        </p>


        <ul class="lesson-links">

            <li>
            <a href="lessons/${lesson.folder}/slides.html">
            🎥 Lesson Slides
            </a>
            </li>


            <li>
            <a href="lessons/${lesson.folder}/study-guide.html">
            📖 Study Guide
            </a>
            </li>


            <li>
            <a href="lessons/${lesson.folder}/high-yield.html">
            ⭐ High-Yield Facts
            </a>
            </li>


            <li>
            <a href="lessons/${lesson.folder}/rapid-review.html">
            ⚡ Rapid Review
            </a>
            </li>


            <li>
            <a href="lessons/${lesson.folder}/memory-aids.html">
            🧠 Memory Aids
            </a>
            </li>


            <li>
            <a href="lessons/${lesson.folder}/clinical-cases.html">
            🩺 Clinical Cases
            </a>
            </li>


            <li>
            <a href="lessons/${lesson.folder}/questions.html">
            📝 Practice Questions
            </a>
            </li>


            <li>
            <a href="lessons/${lesson.folder}/quiz.html">
            🏁 Final Review Quiz
            </a>
            </li>

        </ul>

        <p class="status">
        Status: ${lesson.status}
        </p>

    `;


    dashboard.appendChild(card);


});

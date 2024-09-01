function toggleDetails(button) {
    // Get the parent project item and the details div
    var projectItem = button.parentElement;
    var details = projectItem.querySelector('.project-details');
    
    // Toggle the expanded class to trigger the animation
    if (details.classList.contains('expanded')) {
        details.classList.remove('expanded');
        button.textContent = "More";
    } else {
        details.classList.add('expanded');
        button.textContent = "Minimize";
    }
}


const projects = [
    {
        image: "images/meco logo.png",
        title: "MECO - Memory Connect",
        description: "This project developed and evaluated an interactive photo album aimed at enhancing user engagement across different age groups.",
        details: {
            authors: "Rasmus Ploug, Emil Rimer & Anthon Kristian Skov Petersen",
            abstract: "This project explores and evaluates the development of an interactive photo album designed to engage both elderly and younger users, focusing on how visual and technical design can enhance motivation to use the application. The product consists of an application containing the digital photo album and a mobile application for managing and uploading pictures. New features have been added and existing ones redesigned to enhance the overall user experience. Both applications have been tested and evaluated through field studies. Relevant demographics were tested and interviewed. The findings offer insight on how elderly and younger users engage with the application, their opinion on the concept and what could motivate them to use the applications. The elderly saw little use for the application as other media already provided them with similar options. The younger audience showed a positive attitude towards the application and could see themselves using it at least on a weekly basis. While this project explored user engagement with the interactive photo album, there remains opportunities for further development.",
            pdfLink: "pdfs/MeCo - Connecting Memories.pdf",
            videoLink: "https://www.youtube.com/watch?v=gcJMnrBAiHE"
        }
    },
    {
        image: "images/solitude.png",
        title: "Solitude",
        description: "This study explores the challenges of converting the traditional PC game 'Solitude' into virtual reality, focusing on how altered game mechanics impact player immersion.",
        details: {
            authors: "Rasmus Ploug, Emil Rimer, Anthon Kristian Skov Petersen & Caroline Hansen",
            abstract: "This study investigates the complications met during a conversion of a traditional PC game into virtual reality (VR). This conversion is based on a game called Solitude, which was made in an earlier semester during the course, Game Design 2. The objective of the research is to examine the advantages and disadvantages of the suggested alternated game mechanics and explore the difference in immersion. The designed adaptations to the game were play tested to give an overview on what potentially works in practice. The tests were informal with ongoing conversations and the playtesters answered questionnaires at the end. The tests provided feedback, which supported the improvements towards a more significant player experience, as well as showing that the level of immersion in the VR version transcends the traditional gaming platforms. The design process also showed the game mechanics’ level of functionality depends heavily on the type of game being converted.",
            pdfLink: "pdfs/Advantages and Disadvantages of converting an ordinary computer game to VR.pdf",
            videoLink: "https://www.youtube.com/watch?v=vXaTqWQKa98"
        }
    },
    {
        image: "images/WeAreInSpace.png",
        title: "We Are In Space",
        description: "This project explores using virtual reality to enhance physics education for Danish students in grades 7-9. The VR tool aims to supplement traditional reading with interactive learning on astronomy and the solar system, showing positive results in student engagement and learning, particularly benefiting dyslexic students.",
        details: {
            authors: "Rasmus Ploug, Emil Rimer, Anthon Kristian Skov Petersen & Caroline Hansen",
            abstract: "Virtual reality is a relevant tool with the potential of being a template for learning technology and applications. This project aims at exploring how it is possible to complement the physics topic in the Danish elementary school grade 7-9 with a learning technology. It will also explore the potential of substituting some of the academic reading in class with more dynamic ways of learning. In addition, this project focuses on the theme of astronomy and our solar system in coherence with the study plan for physics and chemistry in 7th - 9th grade. Structured usability-tests have been conducted in partnership with a physics teacher from Nymarkskolen in Svendborg. These usability-tests were prepared and conducted in teams of 4 test students over the course of two visits covering the entire participant class twice. In addition, the partnered physics teacher was also interviewed, thus gaining a professional perspective on the curriculum and teaching structure in said specific class. Learning principles and design in this project is based on relevant theory from Læringsteknologi 2. This project uses supported claims on why and how it is possible to optimize the students' learning abilities using this learning technology. Our results show a positive learning experience from the test students. This result is derived from a theory-based design on learning abilities in correlation to the conducted usability tests. The overall usability-tests result shows a positive attitude towards the application with an above medium being able to see themselves using this technology as a supplement to their physics class. The results also indicated a more engaged learning environment for especially dyslexic students. Hence the finished prototype proved that it is possible to positively boost learning experiences within a class using a VR learning technology.",
            pdfLink: "pdfs/We Are In Space - Rapport.pdf",
            videoLink: "https://www.youtube.com/watch?v=hanPJtPJBtg"
        }
    },
    {
        image: "images/motedu.png",
        title: "Motedu",
        description: "This project developed a gamified platform to enhance student motivation by integrating a fictional world where students can track progress, complete assignments, and earn experience points (XP). Teachers create and manage 'islands' for homework, while students use XP to level up and access new features, with a highscore system designed to motivate without causing discomfort.",
        details: {
            authors: "Rasmus Ploug, Emil Rimer, Anthon Kristian Skov Petersen & Caroline Hansen",
            abstract: "To foster and maintain motivation among our target demographic, we explored the use of gamification to create a more engaging environment where students can not only complete their homework and submit assignments but also track their progress relative to their classmates in various subjects. We developed a prototype for a platform featuring a fictional world where students can create and control their own characters. The platform consists of separate interfaces for students and teachers. Teachers can create and name visual 'islands' where they assign homework, determining the number of islands and how they organize them. Assignments include deadlines, descriptions, and the amount of experience points (XP) students can earn. XP, which represents 'Experience Points,' is accumulated through completing tasks, allowing students to level up, gain access to additional assets, and purchase cosmetic items for their characters. A highscore system was integrated to boost motivation, displaying only the top three positions in the class to avoid discomfort among lower-ranking students. However, individual students can view their own rankings in each subject to monitor their performance. The graphics were designed in simple pixel art to appeal broadly to our target group. This prototype incorporates elements we believe will provide the best testing platform and effectively convey the product's purpose.",
            pdfLink: "pdfs/Motedu Projektrapport.pdf",
            videoLink: "https://www.youtube.com/watch?v=xDFcdiKxudI"
        }
    }
]


function generateProjects(projects){
    const projectContainer = document.getElementById('content-container');
    projectContainer.innerHTML = '';

    projects.forEach(project => {
        const projectHTML = `
        <div class="project-item">
            <div class="project-content">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-text">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    
                    <!-- Button to expand the project details -->
                    <button class="buttonTag" onclick="toggleDetails(this)">More</button>
                    
                    <!-- Hidden section for extended details -->
                    <div class="project-details">
                        <p class="project-description"><b>${project.details.authors}</b></p>
                        <p class="project-abstract"><b>Abstract:</b> ${project.details.abstract}</p>
                        <a href="${project.details.pdfLink}" download class="buttonTag">Download PDF</a>
                        <a href="${project.details.videoLink}" target="_blank" class="buttonTag">Watch Video</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    projectContainer.innerHTML += projectHTML;
    })
}


generateProjects(projects);

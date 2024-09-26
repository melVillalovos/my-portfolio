const projects = [
    {
        title: "Project 1",
        description: "Description of project 1.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/yourusername/project1"
    },
    {
        title: "Project 2",
        description: "Description of project 2.",
        technologies: ["React", "Node.js"],
        link: "https://github.com/yourusername/project2"
    },
    // Add more projects as needed
];

const projectList = document.getElementById('project-list');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');

    projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
        <a href="${project.link}" target="_blank">View Project</a>
    `;

    projectList.appendChild(projectCard);
});

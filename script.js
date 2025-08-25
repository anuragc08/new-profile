// Load data.json dynamically
fetch("data.json")
  .then(response => response.json())
  .then(data => {
    // Skills
    const skillsContainer = document.getElementById("skills-container");
    data.skills.forEach(skill => {
      let div = document.createElement("div");
      div.className = "bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition";
      div.innerHTML = `<h4 class="font-bold">${skill}</h4>`;
      skillsContainer.appendChild(div);
    });

    // Projects
    const projectsContainer = document.getElementById("projects-container");
    data.projects.forEach(proj => {
      let div = document.createElement("div");
      div.className = "bg-white p-6 rounded-xl shadow hover:shadow-lg transition";
      div.innerHTML = `
        <h4 class="text-xl font-bold mb-2">${proj.title}</h4>
        <p class="mb-4">${proj.description}</p>
        <div class="flex space-x-3">
          ${proj.tech.map(t => `<span class="bg-blue-100 text-blue-700 px-2 py-1 rounded">${t}</span>`).join("")}
        </div>
      `;
      projectsContainer.appendChild(div);
    });
  });

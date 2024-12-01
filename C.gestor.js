document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar ul li a");

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            // Remove a classe 'active' de todos os links
            navLinks.forEach((link) => link.classList.remove("active"));

            // Adiciona a classe 'active' ao link clicado
            event.target.classList.add("active");

            // Redireciona para a página do link clicado
            const targetPage = event.target.getAttribute("href"); // Obtém o valor do atributo href
            if (targetPage) {
                window.location.href = targetPage; // Redireciona para o link
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os elementos de projetos
    const projects = document.querySelectorAll(".project");
  
    // Função para atualizar a visualização com base no projeto selecionado
    const updateVisualization = (selectedProjectId) => {
      // Esconde todos os detalhes
      const allDetails = document.querySelectorAll(".details");
      allDetails.forEach((detail) => {
        detail.style.display = "none";
      });
  
      // Mostra apenas os detalhes correspondentes ao projeto selecionado
      const selectedDetails = document.querySelector(`#details-${selectedProjectId}`);
      if (selectedDetails) {
        selectedDetails.style.display = "flex";
      }
    };
  
    // Adiciona um evento de clique para cada projeto
    projects.forEach((project) => {
      project.addEventListener("click", () => {
        // Remove a classe "selected" de todos os projetos
        projects.forEach((proj) => proj.classList.remove("selected"));
  
        // Adiciona a classe "selected" ao projeto clicado
        project.classList.add("selected");
  
        // Atualiza a visualização com base no projeto clicado
        const projectId = project.dataset.project; // ID do projeto armazenado no atributo "data-project"
        updateVisualization(projectId);
      });
    });
  
    // Exibe os detalhes do primeiro projeto inicialmente (opcional)
    if (projects.length > 0) {
      projects[0].click();
    }
  });
  
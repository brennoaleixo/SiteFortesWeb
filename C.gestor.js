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

const projectData = {
    aguavix: {
        user: {
            name: "Jessica",
            phone: "(27) 99999-9999",
            email: "jessica@aguavix.com.br",
            image: "imagem/moça.jpeg"
        },
        company: {
            name: "ÁGUAVIX",
            cnpj: "01.003.003/0001-20",
            startDate: "20/01/2020",
            investment: "250 mil",
            contractEnd: "20/12/2024",
            growth: "12%"
        }
    },
    alimento: {
        user: {
            name: "Maria",
            phone: "(27) 98888-8888",
            email: "maria@alimento.com",
            image: "imagem/maria.jpeg"
        },
        company: {
            name: "Alimento para todos",
            cnpj: "02.003.003/0001-21",
            startDate: "15/02/2021",
            investment: "150 mil",
            contractEnd: "15/12/2024",
            growth: "8%"
        }
    },
    agasalho: {
        user: {
            name: "Pedro",
            phone: "(27) 97777-7777",
            email: "pedro@agasalho.com",
            image: "imagem/pedro.jpeg"
        },
        company: {
            name: "Agasalho Social",
            cnpj: "03.003.003/0001-22",
            startDate: "10/03/2019",
            investment: "100 mil",
            contractEnd: "10/12/2023",
            growth: "5%"
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project");
    const userImage = document.querySelector(".user-info img");
    const userInfo = document.querySelector(".user-info div");
    const companyInfo = document.querySelector(".company-info");

    projects.forEach(project => {
        project.addEventListener("click", () => {
            const projectKey = project.getAttribute("data-project");
            const data = projectData[projectKey];

            // Atualizar dados do usuário
            userImage.src = data.user.image;
            userInfo.innerHTML = `
                <p>${data.user.name}</p>
                <p>${data.user.phone}</p>
                <p>${data.user.email}</p>
            `;

            // Atualizar dados da empresa
            companyInfo.innerHTML = `
                <p><strong>Nome da empresa:</strong> ${data.company.name}</p>
                <p><strong>CNPJ da empresa:</strong> ${data.company.cnpj}</p>
                <p><strong>Data de início:</strong> ${data.company.startDate}</p>
                <p><strong>Valor bruto investido:</strong> ${data.company.investment}</p>
                <p><strong>Vigência do contrato:</strong> ${data.company.contractEnd}</p>
                <p><strong>Percentual de crescimento anual:</strong> ${data.company.growth}</p>
            `;
        });
    });
});

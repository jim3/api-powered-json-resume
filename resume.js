const baseURL = "https://gitconnected.com/v1/portfolio/";
const username = "username";
const url = `${baseURL}${username}`;
setTimeout(() => {
    const contactAPI = async () => {
        const box1 = document.querySelector("#box1");
        try {
            const response = await fetch(`${url}`);
            const data = await response.json();
            const list = data;
            Object.entries(list).forEach((e) => {
                const [key, value] = e;
                if (key === "basics") {
                    const projectContainerMain = document.createElement("div");
                    projectContainerMain.setAttribute("class", "projectMain");
                    projectContainerMain.insertAdjacentHTML("beforeend", `<p>${value.name}</p>`);
                    projectContainerMain.insertAdjacentHTML("beforeend", `<p>${value.email}</p>`);
                    projectContainerMain.insertAdjacentHTML("beforeend", `<p>${value.url}</p>`);
                    projectContainerMain.insertAdjacentHTML("beforeend", `<p>${value.headline}</p>`);
                    box1.appendChild(projectContainerMain);
                }
            });
        } catch (error) {
            console.log(error);
        }
    };
    contactAPI();

    const projectsAPI = async () => {
        const box2 = document.querySelector("#box2");
        try {
            const response = await fetch(`${url}`);
            const data = await response.json();
            const list = data;

            Object.entries(list.projects).forEach((e) => {
                const [key, value] = e;
                if (key === "0" || key === "1" || key === "2") {
                    const projectContainer = document.createElement("div");
                    projectContainer.setAttribute("class", "project");
                    projectContainer.insertAdjacentHTML("beforeend", `<p>Project Summary: ${value.displayName}</p>`);
                    projectContainer.insertAdjacentHTML("beforeend", `<p>Project Description: ${value.description}</p>`);
                    projectContainer.insertAdjacentHTML("beforeend", `<p>Project URL: ${value.url}</p>`);
                    projectContainer.insertAdjacentHTML("beforeend", `<p>Project Technologies Used: ${value.libraries}</p>`);
                    projectContainer.insertAdjacentHTML("beforeend", `<p>Projects GitHub Repo: ${value.repositoryUrl}</p>`);
                    box2.appendChild(projectContainer);
                }
            });
        } catch (error) {
            console.log(error);
        }
    };
    projectsAPI();
}, 5000);

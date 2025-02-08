// Select HTML elements
const generateBtn = document.getElementById("generateBtn");
const nameInput = document.getElementById("nameInput");
const bioInput = document.getElementById("bioInput");
const skillsInput = document.getElementById("skillsInput");
const projectsInput = document.getElementById("projectsInput");
const githubUsernameInput = document.getElementById("githubUsernameInput");
const linkedinUsernameInput = document.getElementById("linkedinUsernameInput");
const twitterUsernameInput = document.getElementById("twitterUsernameInput");
const previewArea = document.getElementById("previewArea");

// Check if script is running
console.log("JavaScript is connected!");

// Generate README on button click
generateBtn.addEventListener("click", function () {
    const name = nameInput.value.trim();
    const bio = bioInput.value.trim();
    const skills = skillsInput.value.split(",").map(skill => skill.trim());
    const projects = projectsInput.value.split("\n").map(proj => proj.trim());
    const githubUsername = githubUsernameInput.value.trim();
    const linkedinUsername = linkedinUsernameInput.value.trim();
    const twitterUsername = twitterUsernameInput.value.trim();

    // Start Markdown content
    let markdown = `# ${name}\n\n`;
    markdown += `## 📝 Bio\n${bio}\n\n`;

    // 📊 GitHub Stats
    if (githubUsername) {
        markdown += `## 📊 GitHub Stats\n`;
        markdown += `![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=dark)\n\n`;
        markdown += `![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=dark)\n\n`;
        markdown += `![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=dark)\n\n`;
    }

    // 🚀 Skills Section
    if (skills.length > 0 && skills[0] !== "") {
        markdown += `## 🚀 Skills\n`;
        skills.forEach(skill => {
            markdown += `![${skill}](https://img.shields.io/badge/${skill}-darkblue?style=for-the-badge&logo=${skill}&logoColor=white)\n`;
        });
        markdown += "\n";
    }

    // 🔨 Projects Section
    if (projects.length > 0 && projects[0] !== "") {
        markdown += `## 🔨 Projects\n`;
        projects.forEach(proj => {
            const parts = proj.split(" - ");
            if (parts.length === 3) {
                markdown += `- **[${parts[0]}](${parts[2]})** - ${parts[1]}\n`;
            } else {
                markdown += `- ${proj}\n`;
            }
        });
        markdown += "\n";
    }

    // 🔗 Social Links Section
    let socialLinks = "";
    if (githubUsername) {
        socialLinks += `[![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=github)](https://github.com/${githubUsername})\n`;
    }
    if (linkedinUsername) {
        socialLinks += `[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/${linkedinUsername})\n`;
    }
    if (twitterUsername) {
        socialLinks += `[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter)](https://twitter.com/${twitterUsername})\n`;
    }
    if (socialLinks !== "") {
        markdown += `## 🔗 Connect with Me\n${socialLinks}\n`;
    }

    // Display generated README markdown
    previewArea.innerText = markdown;
});
copyBtn.addEventListener("click", function() {
    const text = previewArea.innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard!");
    });
});
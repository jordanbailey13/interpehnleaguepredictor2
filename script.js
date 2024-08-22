document.addEventListener("DOMContentLoaded", function() {
    const teams = [
        "Manchester City",
        "Arsenal",
        "Liverpool",
        "Newcastle United",
        "Manchester United",
        "Chelsea",
        "Tottenham Hotspur",
        "Aston Villa",
        "West Ham United",
        "Brighton and Hove Albion",
        "Wolves",
        "Everton",
        "Crystal Palace",
        "Brentford",
        "Bournemouth",
        "Fulham",
        "Southampton",
        "Leicester City",
        "Nottingham Forest",
        "Ipswich Town"
    ];

    const numbersContainer = document.querySelector(".numbers");
    const teamsContainer = document.querySelector(".teams");

    function generateNumbers() {
        for (let i = 1; i <= 20; i++) {
            const numberElement = document.createElement("div");
            numberElement.className = "number";
            numberElement.textContent = i;
            numbersContainer.appendChild(numberElement);
        }
    }

    function generateTeams() {
        const shuffledTeams = teams.sort(() => Math.random() - 0.5);
        shuffledTeams.forEach((team, index) => {
            const teamElement = document.createElement("div");
            teamElement.className = "team";
            teamElement.textContent = team;
            teamElement.draggable = true;
            teamElement.dataset.index = index; // Assign index for positioning
            teamElement.addEventListener("dragstart", onDragStart);
            teamElement.addEventListener("dragover", onDragOver);
            teamElement.addEventListener("drop", onDrop);
            teamsContainer.appendChild(teamElement);
        });
    }

    function onDragStart(event) {
        event.dataTransfer.setData("text/plain", event.target.dataset.index);
        event.dataTransfer.effectAllowed = "move";
    }

    function onDragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    }

    function onDrop(event) {
        event.preventDefault();
        const draggedIndex = event.dataTransfer.getData("text/plain");
        const dropTarget = event.target;

        if (dropTarget.classList.contains("team")) {
            const allTeams = Array.from(teamsContainer.children);
            const dropIndex = Array.from(dropTarget.parentNode.children).indexOf(dropTarget);
            const draggedElement = allTeams[draggedIndex];

            teamsContainer.insertBefore(
                draggedElement,
                dropIndex < draggedIndex ? dropTarget : dropTarget.nextSibling
            );
        }
    }

    generateNumbers();
    generateTeams();
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const teamNames = [
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

    const teamList = document.getElementById('teamList');
    const numbersDiv = document.querySelector('.numbers');

    // Generate numbers
    for (let i = 1; i <= 20; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.textContent = i;
        numbersDiv.appendChild(numberDiv);
    }

    // Shuffle team names and generate team items
    const shuffledTeams = teamNames.sort(() => Math.random() - 0.5);
    shuffledTeams.forEach((team, index) => {
        const teamDiv = document.createElement('div');
        teamDiv.classList.add('team');
        teamDiv.textContent = team;
        teamDiv.setAttribute('draggable', 'true');
        teamDiv.dataset.index = index;
        teamList.appendChild(teamDiv);
    });

    // Drag and Drop functionality
    let draggedItem = null;

    document.addEventListener('dragstart', (e) => {
        if (e.target.classList.contains('team')) {
            draggedItem = e.target;
            e.target.style.opacity = '0.5';
        }
    });

    document.addEventListener('dragend', (e) => {
        if (e.target.classList.contains('team')) {
            e.target.style.opacity = '1';
        }
    });

    teamList.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    teamList.addEventListener('drop', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('team')) {
            const target = e.target;
            const targetIndex = target.dataset.index;
            const draggedIndex = draggedItem.dataset.index;
            // Swap positions
            target.textContent = draggedItem.textContent;
            draggedItem.textContent = target.textContent;
            target.dataset.index = draggedIndex;
            draggedItem.dataset.index = targetIndex;
        }
    });
});

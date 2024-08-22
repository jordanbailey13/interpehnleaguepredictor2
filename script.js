document.addEventListener('DOMContentLoaded', () => {
    const teams = [
        'Manchester City',
        'Arsenal',
        'Liverpool',
        'Newcastle United',
        'Manchester United',
        'Chelsea',
        'Tottenham Hotspur',
        'Aston Villa',
        'West Ham United',
        'Brighton and Hove Albion',
        'Wolves',
        'Everton',
        'Crystal Palace',
        'Brentford',
        'Bournemouth',
        'Fulham',
        'Southampton',
        'Leicester City',
        'Nottingham Forest',
        'Ipswich Town'
    ];

    const teamContainer = document.getElementById('teams');
    const numberElements = document.querySelectorAll('.number');

    // Shuffle the teams array
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Add teams to the container
    function renderTeams() {
        const shuffledTeams = shuffle([...teams]);
        shuffledTeams.forEach((team, index) => {
            const div = document.createElement('div');
            div.textContent = team;
            div.className = 'team';
            div.draggable = true;
            div.dataset.index = index;
            teamContainer.appendChild(div);
        });
    }

    // Handle drag events
    teamContainer.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.dataset.index);
    });

    teamContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    teamContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedIndex = e.dataTransfer.getData('text/plain');
        const targetElement = e.target.closest('.team');
        if (targetElement) {
            const targetIndex = targetElement.dataset.index;
            const draggedElement = teamContainer.querySelector(`.team[data-index="${draggedIndex}"]`);
            targetElement.dataset.index = draggedIndex;
            draggedElement.dataset.index = targetIndex;
            teamContainer.insertBefore(draggedElement, targetElement);
        }
    });

    renderTeams();
});

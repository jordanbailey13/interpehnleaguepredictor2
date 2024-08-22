document.addEventListener('DOMContentLoaded', () => {
    const numbersContainer = document.getElementById('numbers');
    const teamsContainer = document.getElementById('teams');

    const teamNames = [
        'Manchester City', 'Arsenal', 'Liverpool', 'Newcastle United', 'Manchester United',
        'Chelsea', 'Tottenham Hotspur', 'Aston Villa', 'West Ham United', 'Brighton and Hove Albion',
        'Wolves', 'Everton', 'Crystal Palace', 'Brentford', 'Bournemouth',
        'Fulham', 'Southampton', 'Leicester City', 'Nottingham Forest', 'Ipswich Town'
    ];

    // Generate numbers
    for (let i = 1; i <= 20; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.textContent = i;
        numbersContainer.appendChild(numberDiv);
    }

    // Shuffle team names
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const shuffledTeamNames = shuffleArray([...teamNames]);

    // Generate team elements
    shuffledTeamNames.forEach((name, index) => {
        const teamDiv = document.createElement('div');
        teamDiv.textContent = name;
        teamDiv.className = 'team';
        teamDiv.draggable = true;
        teamDiv.dataset.index = index;
        teamsContainer.appendChild(teamDiv);
    });

    // Drag and drop logic
    let draggedElement = null;

    teamsContainer.addEventListener('dragstart', (e) => {
        draggedElement = e.target;
        e.target.style.opacity = 0.5;
    });

    teamsContainer.addEventListener('dragend', (e) => {
        e.target.style.opacity = '';
        draggedElement = null;
    });

    teamsContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    teamsContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('team')) {
            teamsContainer.insertBefore(draggedElement, e.target.nextSibling);
        }
    });
});

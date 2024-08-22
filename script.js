document.addEventListener('DOMContentLoaded', () => {
    const teamNames = [
        'Manchester City', 'Arsenal', 'Liverpool', 'Newcastle United', 'Manchester United',
        'Chelsea', 'Tottenham Hotspur', 'Aston Villa', 'West Ham United', 'Brighton and Hove Albion',
        'Wolves', 'Everton', 'Crystal Palace', 'Brentford', 'Bournemouth', 'Fulham', 'Southampton',
        'Leicester City', 'Nottingham Forest', 'Ipswich Town'
    ];

    const numbersContainer = document.querySelector('.numbers');
    const teamsContainer = document.getElementById('teamContainer');

    // Generate numbers
    for (let i = 1; i <= 20; i++) {
        const div = document.createElement('div');
        div.textContent = i;
        numbersContainer.appendChild(div);
    }

    // Generate team names in random order
    const shuffledTeamNames = teamNames.sort(() => Math.random() - 0.5);
    shuffledTeamNames.forEach(teamName => {
        const div = document.createElement('div');
        div.textContent = teamName;
        div.draggable = true;
        div.addEventListener('dragstart', handleDragStart);
        div.addEventListener('dragend', handleDragEnd);
        teamsContainer.appendChild(div);
    });

    function handleDragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.textContent);
        e.target.classList.add('dragging');
    }

    function handleDragEnd(e) {
        e.target.classList.remove('dragging');
    }

    teamsContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    teamsContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedItemText = e.dataTransfer.getData('text/plain');
        const target = e.target;
        if (target && target !== e.target) {
            target.textContent = draggedItemText;
        }
    });
});

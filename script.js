document.addEventListener('DOMContentLoaded', () => {
    const teamNames = [
        'Manchester City', 'Arsenal', 'Liverpool', 'Newcastle United',
        'Manchester United', 'Chelsea', 'Tottenham Hotspur', 'Aston Villa',
        'West Ham United', 'Brighton & Hove Albion', 'Wolves', 'Everton',
        'Crystal Palace', 'Brentford', 'Bournemouth', 'Fulham', 'Southampton',
        'Leicester City', 'Nottingham Forest', 'Ipswich Town'
    ];

    const numberList = document.getElementById('numberList');
    const teamList = document.getElementById('teamList');

    // Generate numbers
    for (let i = 1; i <= 20; i++) {
        const div = document.createElement('div');
        div.textContent = i;
        numberList.appendChild(div);
    }

    // Shuffle team names
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    const shuffledTeams = shuffle([...teamNames]);

    // Populate team list
    shuffledTeams.forEach(team => {
        const div = document.createElement('div');
        div.textContent = team;
        div.draggable = true;
        div.addEventListener('dragstart', handleDragStart);
        div.addEventListener('dragend', handleDragEnd);
        teamList.appendChild(div);
    });

    function handleDragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.textContent);
        e.target.classList.add('dragging');
    }

    function handleDragEnd(e) {
        e.target.classList.remove('dragging');
    }

    teamList.addEventListener('dragover', e => {
        e.preventDefault();
    });

    teamList.addEventListener('drop', e => {
        e.preventDefault();
        const draggedText = e.dataTransfer.getData('text/plain');
        const target = e.target;
        if (target && target !== teamList && target.classList.contains('team-list')) {
            const draggedElement = [...teamList.children].find(child => child.textContent === draggedText);
            teamList.insertBefore(draggedElement, target.nextSibling);
        }
    });
});

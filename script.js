const teams = document.querySelectorAll('.team');
const numbers = document.querySelectorAll('.number');

let draggedTeam = null;

teams.forEach(team => {
    team.addEventListener('dragstart', (e) => {
        draggedTeam = e.target;
        e.target.classList.add('dragging');
    });

    team.addEventListener('dragend', (e) => {
        e.target.classList.remove('dragging');
    });
});

numbers.forEach(number => {
    number.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    number.addEventListener('drop', (e) => {
        e.preventDefault();
        if (draggedTeam) {
            const numberIndex = Array.from(numbers).indexOf(e.target);
            const teamIndex = Array.from(teams).indexOf(draggedTeam);

            if (teamIndex !== -1 && numberIndex !== -1) {
                const teamList = document.querySelector('#teams');
                teamList.removeChild(draggedTeam);
                teamList.insertBefore(draggedTeam, teamList.children[numberIndex] || null);
            }
        }
    });
});

function randomizeTeams() {
    const teamList = Array.from(teams);
    const numberList = Array.from(numbers);

    teamList.forEach(team => {
        const randomIndex = Math.floor(Math.random() * numberList.length);
        const position = numberList[randomIndex];
        const teamList = document.querySelector('#teams');
        teamList.removeChild(team);
        teamList.insertBefore(team, teamList.children[randomIndex] || null);
    });
}

window.onload = randomizeTeams;

document.addEventListener('DOMContentLoaded', () => {
    const teams = document.querySelectorAll('.team');
    const numbers = document.querySelectorAll('.number');

    teams.forEach(team => {
        team.addEventListener('dragstart', handleDragStart);
        team.addEventListener('dragend', handleDragEnd);
    });

    numbers.forEach(number => {
        number.addEventListener('dragover', handleDragOver);
        number.addEventListener('drop', handleDrop);
    });

    function handleDragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.textContent);
        e.target.classList.add('dragging');
    }

    function handleDragEnd(e) {
        e.target.classList.remove('dragging');
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrop(e) {
        e.preventDefault();
        const droppedTeamName = e.dataTransfer.getData('text/plain');
        const dropTarget = e.target;
        
        if (dropTarget.classList.contains('number')) {
            const allTeams = document.querySelectorAll('.team');
            const teamToMove = Array.from(allTeams).find(team => team.textContent === droppedTeamName);

            if (teamToMove) {
                dropTarget.parentNode.insertBefore(teamToMove, dropTarget.nextSibling);
            }
        }
    }

    // Shuffle teams
    const teamsContainer = document.querySelector('.teams');
    for (let i = teamsContainer.children.length; i >= 0; i--) {
        teamsContainer.appendChild(teamsContainer.children[Math.random() * i | 0]);
    }
});

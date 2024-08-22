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
        "Brighton & Hove Albion",  // Updated team name
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
        t

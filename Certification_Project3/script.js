// Initialiser le sondage avec Map
const poll = new Map();

// Fonction pour ajouter une option
function addOption(option) {

    if (!option || option.trim() === "") {
        return "Option cannot be empty.";
    }

    if (poll.has(option)) {
        return `Option "${option}" already exists.`;
    }

    poll.set(option, new Set());

    return `Option "${option}" added to the poll.`;
}

// Fonction pour voter
function vote(option, voterId) {

    if (!poll.has(option)) {
        return `Option "${option}" does not exist.`;
    }

    const voters = poll.get(option);

    if (voters.has(voterId)) {
        return `Voter ${voterId} has already voted for "${option}".`;
    }

    voters.add(voterId);

    return `Voter ${voterId} voted for "${option}".`;
}

// Fonction pour afficher les résultats
function displayResults() {

    let results = "Poll Results:";

    for (const [option, voters] of poll) {
        results += `\n${option}: ${voters.size} votes`;
    }

    return results;
}

// ======================
// Au moins 3 options
// ======================

addOption("Turkey");
addOption("Morocco");
addOption("Spain");
addOption("Malaysia");
addOption("Algeria");

// ======================
// Au moins 3 votes
// ======================

vote("Turkey", "traveler1");
vote("Turkey", "traveler2");
vote("Morocco", "traveler3");

// ======================
// Affichage des résultats
// ======================

console.log(displayResults());
const optionInput = document.getElementById("option-input");
const optionSelect = document.getElementById("option-select");
const voterInput = document.getElementById("voter-input");
const result = document.getElementById("result");

function refreshOptions() {

    optionSelect.innerHTML = "";

    for (const option of poll.keys()) {

        const newOption = document.createElement("option");

        newOption.value = option;
        newOption.textContent = option;

        optionSelect.appendChild(newOption);

    }

}

refreshOptions();

function addNewOption() {

    const option = optionInput.value;

    result.textContent = addOption(option);

    optionInput.value = "";

    refreshOptions();

}

function castVote() {

    const option = optionSelect.value;
    const voter = voterInput.value;

    result.textContent = vote(option, voter);

    voterInput.value = "";

}

function showResults() {

    result.textContent = displayResults();

}

/*
Exemple :

Poll Results:
Turkey: 2 votes
Morocco: 1 votes
Spain: 0 votes
Malaysia: 0 votes
Algeria: 0 votes
*/
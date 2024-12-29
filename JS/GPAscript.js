function addModule() {
    const modulesDiv = document.getElementById('modules');
    const newModule = document.createElement('div');
    newModule.classList.add('module');
    newModule.innerHTML = `
        <input type="text" placeholder="Module Name" class="module-name">
        <input type="number" placeholder="Credits" class="module-credits">
        <input type="text" placeholder="Grade (A, B, C, etc.)" class="module-grade">
    `;
    modulesDiv.appendChild(newModule);
}

function calculateGPA() {
    const modules = document.querySelectorAll('.module');
    let totalCredits = 0;
    let totalPoints = 0;

    modules.forEach(module => {
        const credits = parseFloat(module.querySelector('.module-credits').value);
        const grade = module.querySelector('.module-grade').value.toUpperCase();

        if (isNaN(credits) || !grade) {
            return;
        }

        const gradePoints = getGradePoints(grade);
        if (gradePoints !== null) {
            totalCredits += credits;
            totalPoints += gradePoints * credits;
        }
    });

    const gpa = (totalCredits > 0) ? (totalPoints / totalCredits).toFixed(2) : 0;
    const resultDiv = document.getElementById('gpa-result');
    resultDiv.textContent = `Your GPA is: ${gpa}`;
}

function getGradePoints(grade) {
    const gradeMapping = {
        'A': 4.0,
        'B': 3.0,
        'C': 2.0,
        'D': 1.0,
        'F': 0.0
    };
    return gradeMapping[grade] || null;
}
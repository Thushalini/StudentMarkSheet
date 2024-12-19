let m1 = 0, m2 = 0, m3 = 0, m4 = 0, m5 = 0;

function calculateTotal() {
    m1 = parseInt(document.getElementById("m1").value) || 0;
    m2 = parseInt(document.getElementById("m2").value) || 0;
    m3 = parseInt(document.getElementById("m3").value) || 0;
    m4 = parseInt(document.getElementById("m4").value) || 0;
    m5 = parseInt(document.getElementById("m5").value) || 0;

    let total = m1 + m2 + m3 + m4 + m5;

    document.getElementById("total-marks").textContent = total;
}

function generatePerformance() {
    let totalMarks = m1 + m2 + m3 + m4 + m5;
    let percentage = (totalMarks / 5).toFixed(2);
    let resultElement = document.getElementById("result");

    document.getElementById("stuName").textContent = document.getElementById("std-nme").value;
    document.getElementById("regNo").textContent = document.getElementById("reg-no").value;
    document.getElementById("percent").textContent = percentage + "%";

    if (percentage < 35) {
        resultElement.textContent = "Fail";
        resultElement.style.backgroundColor ="rgb(255, 0, 0)";
    } else if (percentage < 50) {
        resultElement.textContent = "Poor";
        resultElement.style.backgroundColor ="rgb(255, 162, 0)";
    } else if (percentage < 60) {
        resultElement.textContent = "Average";
        resultElement.style.backgroundColor ="rgb(212, 255, 0)";
    } else if (percentage < 80) {
        resultElement.textContent = "Good";
        resultElement.style.backgroundColor ="rgb(179, 255, 0)";
    } else {
        resultElement.textContent = "Very Good";
        resultElement.style.backgroundColor ="rgb(228, 240, 124)";
    }

    resultElement.style.color = "#fff";
}

function resetFields() {
    document.getElementById("total-marks").textContent = "0";
    document.getElementById("result").textContent = "";
    document.getElementById("result").style.backgroundColor = "transparent";
    document.getElementById("percent").textContent = "0%";
    document.getElementById("Marksheet").textContent = "";
    document.getElementById("stuName").textContent = "";
    document.getElementById("regNo").textContent = "";
}
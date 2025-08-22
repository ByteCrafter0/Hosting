document.getElementById('convertBtn').addEventListener('click', function() {
    const kg = document.getElementById('kgInput').value;
    if (kg === '' || isNaN(kg)) {
        document.getElementById('result').innerText = "Please enter a valid number!";
        return;
    }
    const pound = kg * 2.20462;
    document.getElementById('result').innerText = `${kg} kg = ${pound.toFixed(2)} lb`;
});

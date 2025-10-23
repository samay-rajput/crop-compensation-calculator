// Crop data dictionary
const crops = {
    "uss": [355, 1800],
    "maka": [2700, 55],
    "gahu": [3200, 45],
    "kapus": [7710, 18],
    "bhuimug": [5550, 25],
    "karadai": [8600, 18],
    "vangi": [5100, 300],
    "moog_pivla": [12500, 10],
    "moog_hirva": [9000, 12],
    "udid": [7455, 12],
    "tur": [7250, 20],
    "harbhara": [6500, 20],
    "soyabean": [4800, 32],
    "jwari": [3800, 40],
    "kanda": [1550, 120],
    "mirchi": [5000, 150],
    "halad": [13025, 0]
};

// Initialize the page when it loads
window.onload = function() {
    // Populate crop select dropdown
    const cropSelect = document.getElementById('cropSelect');
    Object.keys(crops).forEach((crop, index) => {
        const option = document.createElement('option');
        option.value = crop;
        option.textContent = `${index + 1}. ${crop}`;
        cropSelect.appendChild(option);
    });

    // Set up operation change listener
    document.getElementById('operation').addEventListener('change', updateInputArea);
    updateInputArea(); // Initialize input area
};

function updateInputArea() {
    const operation = document.getElementById('operation').value;
    const inputArea = document.getElementById('inputArea');
    
    if (operation === "1") {
        inputArea.innerHTML = `
            <h2>Enter Area:</h2>
            <input type="number" id="areaInput" placeholder="Area in sq.m" step="any">
        `;
    } else {
        inputArea.innerHTML = `
            <h2>Enter Cost:</h2>
            <input type="number" id="costInput" placeholder="Cost of land undergone loss" step="any">
        `;
    }
}

function calculate() {
    const operation = document.getElementById('operation').value;
    const selectedCrop = document.getElementById('cropSelect').value;
    const resultDiv = document.getElementById('result');
    
    // Get crop data
    const rate = crops[selectedCrop][0];
    const yieldPerHectare = crops[selectedCrop][1];
    
    let result;
    
    if (operation === "1") {
        // Calculate crop loss in Rs
        const area = parseFloat(document.getElementById('areaInput').value);
        if (isNaN(area)) {
            alert("Please enter a valid area");
            return;
        }
        
        // Convert area from sq.m to hectares
        const areaInHectares = area / 10000;
        result = rate * yieldPerHectare * areaInHectares;
        resultDiv.textContent = `The loss amount is: Rs ${result.toFixed(2)}`;
        
    } else {
        // Calculate area undergone in loss
        const cost = parseFloat(document.getElementById('costInput').value);
        if (isNaN(cost)) {
            alert("Please enter a valid cost");
            return;
        }
        
        result = (cost / (yieldPerHectare * rate)) * 10000; // Convert to sq.meters
        resultDiv.textContent = `The area undergone loss is: ${result.toFixed(2)} sq.meter`;
    }
    
    resultDiv.classList.add('show');
}
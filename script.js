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

let currentLanguage = '';

function selectLanguage(language) {
    currentLanguage = language;
    document.getElementById('languageSelector').style.display = 'none';
    const calculator = document.getElementById('calculatorContainer');
    calculator.style.display = 'block';
    setTimeout(() => calculator.classList.add('show'), 100);
    
    document.body.style.fontFamily = language === 'marathi' ? "'Noto Sans Devanagari', sans-serif" : "'Noto Sans', sans-serif";
    document.title = language === 'marathi' ? 'पीक नुकसान भरपाई कॅल्क्युलेटर' : 'Crop Compensation Calculator';
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(language === 'english' ? 'en-btn' : 'mr-btn').classList.add('active');
    
    updateTranslations();
    updateCropSelect();
    updateInputArea();
}

function switchLanguage(language) {
    currentLanguage = language;
    document.body.style.fontFamily = language === 'marathi' ? "'Noto Sans Devanagari', sans-serif" : "'Noto Sans', sans-serif";
    document.title = language === 'marathi' ? 'पीक नुकसान भरपाई कॅल्क्युलेटर' : 'Crop Compensation Calculator';
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(language === 'english' ? 'en-btn' : 'mr-btn').classList.add('active');
    
    updateTranslations();
    updateCropSelect();
    updateInputArea();
}

function updateTranslations() {
    document.querySelectorAll('.translate').forEach(element => {
        const key = element.getAttribute('data-key');
        if (key && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

function updateCropSelect() {
    const cropSelect = document.getElementById('cropSelect');
    cropSelect.innerHTML = '';
    Object.keys(crops).forEach((crop, index) => {
        const option = document.createElement('option');
        option.value = crop;
        option.textContent = `${index + 1}. ${translations[currentLanguage].crops[crop]}`;
        cropSelect.appendChild(option);
    });
}

// Initialize the page when it loads
window.onload = function() {
    // Set up operation change listener
    document.getElementById('operation').addEventListener('change', updateInputArea);
    switchLanguage('english'); // Initialize with English
    updateInputArea(); // Initialize input area
};

function updateInputArea() {
    const operation = document.getElementById('operation').value;
    const inputArea = document.getElementById('inputArea');
    
    if (operation === "1") {
        inputArea.innerHTML = `
            <h2><i class="fas fa-ruler-combined"></i> <span class="translate" data-key="enterArea">${translations[currentLanguage].enterArea}</span></h2>
            <div class="input-group">
                <input type="number" id="areaInput" placeholder="${translations[currentLanguage].areaPlaceholder}" step="any">
                <span class="unit">${currentLanguage === 'english' ? 'sq.m' : 'चौ.मी'}</span>
            </div>
        `;
    } else {
        inputArea.innerHTML = `
            <h2><i class="fas fa-rupee-sign"></i> <span class="translate" data-key="enterCost">${translations[currentLanguage].enterCost}</span></h2>
            <div class="input-group">
                <input type="number" id="costInput" placeholder="${translations[currentLanguage].costPlaceholder}" step="any">
                <span class="unit">₹</span>
            </div>
        `;
    }
    updateTranslations();
}

function calculate() {
    const operation = document.getElementById('operation').value;
    const selectedCrop = document.getElementById('cropSelect').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results
    
    // Get crop data
    const rate = crops[selectedCrop][0];
    const yieldPerHectare = crops[selectedCrop][1];
    
    let result;
    
    if (operation === "1") {
        // Calculate crop loss in Rs
        const area = parseFloat(document.getElementById('areaInput').value);
        if (isNaN(area)) {
            alert(currentLanguage === 'english' ? "Please enter a valid area" : "कृपया योग्य क्षेत्रफळ टाका");
            return;
        }
        
        // Convert area from sq.m to hectares
        const areaInHectares = area / 10000;
        result = rate * yieldPerHectare * areaInHectares;
        const resultText = document.createElement('div');
        resultText.textContent = translations[currentLanguage].lossAmount + result.toFixed(2);
        resultDiv.appendChild(resultText);
        
    } else {
        // Calculate area undergone in loss
        const cost = parseFloat(document.getElementById('costInput').value);
        if (isNaN(cost)) {
            alert(currentLanguage === 'english' ? "Please enter a valid cost" : "कृपया योग्य किंमत टाका");
            return;
        }
        
        result = (cost / (yieldPerHectare * rate)) * 10000; // Convert to sq.meters
        const basicResult = document.createElement('div');
        basicResult.className = 'basic-result';
        basicResult.textContent = translations[currentLanguage].areaLoss;
        resultDiv.appendChild(basicResult);
        
        // Add area conversions
        const areaConversions = formatAreaResult(result);
        resultDiv.appendChild(areaConversions);
    }
    resultDiv.classList.add('show');
    
    resultDiv.classList.add('show');
}
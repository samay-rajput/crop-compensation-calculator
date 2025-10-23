function convertArea(squareMeters) {
    return {
        squareMeters: squareMeters.toFixed(2),
        hectares: (squareMeters / 10000).toFixed(4),
        aar: (squareMeters / 100).toFixed(2),
        squareFeet: (squareMeters * 10.764).toFixed(2)
    };
}

function formatAreaResult(areaInSqMeters) {
    const conversions = convertArea(areaInSqMeters);
    const unitDiv = document.createElement('div');
    unitDiv.className = 'area-conversions';
    
    const title = document.createElement('h3');
    title.className = 'conversion-title translate';
    title.setAttribute('data-key', 'areaConversion');
    title.textContent = translations[currentLanguage].areaConversion;
    
    const unitsGrid = document.createElement('div');
    unitsGrid.className = 'units-grid';
    
    const units = [
        { value: conversions.squareMeters, key: 'sqMeter' },
        { value: conversions.hectares, key: 'hectare' },
        { value: conversions.aar, key: 'aar' },
        { value: conversions.squareFeet, key: 'sqFeet' }
    ];

    units.forEach(unit => {
        const unitBox = document.createElement('div');
        unitBox.className = 'unit-box';
        unitBox.innerHTML = `
            <div class="unit-value">${unit.value}</div>
            <div class="unit-label">${translations[currentLanguage][unit.key]}</div>
        `;
        unitsGrid.appendChild(unitBox);
    });

    unitDiv.appendChild(title);
    unitDiv.appendChild(unitsGrid);
    return unitDiv;
}
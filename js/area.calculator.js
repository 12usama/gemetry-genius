function calculateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);

    // get triangle height value

    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);

    // area

    const area = 0.5 * base * height;

    // show area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}

function calculateRectangleArea(){
    // get width
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);

    // get length
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);

    // area

    const area = width * length;

    // show area 
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;
}

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    const area = base * height;
    setElementInnerText('parallelogram-area', area);

}

function calculateEllipseArea(){
    const firstRadius = getInputValue('ellipse-first-radius');
    const secondRadius = getInputValue('ellipse-second-radius');
    const area2 = 3.1416 * firstRadius * secondRadius;
    setElementInnerText('ellipse-area', area2);
}

function calculateRhombusArea(){
    const firstRudder = getInputValue('first-rudder');
    const secondRudder = getInputValue('second-rudder');
    const area3 = 0.5 * firstRudder * secondRudder;
    setElementInnerText('rhombus-area', area3);
}

function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}
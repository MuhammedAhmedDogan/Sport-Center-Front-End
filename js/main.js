const yogaBtn = document.getElementById ('yoga-btn');
const groupBtn = document.getElementById ('group-btn');
const soloBtn = document.getElementById ('solo-btn');
const stretchingBtn = document.getElementById ('stretching-btn');

window.onload = showYoga;
yogaBtn.addEventListener('click', showYoga);
groupBtn.addEventListener('click', showGroup);
soloBtn.addEventListener('click', showSolo);
stretchingBtn.addEventListener('click', showStretching);

function showYoga() {
    const yogaDiv = document.getElementById('yoga');
    const yogaBtnSelector = document.getElementById('yoga-btn-selector');
    if (yogaDiv && yogaBtn && yogaBtnSelector) {
        hideAllClasses();
        yogaDiv.style.display = 'flex';
        yogaBtnSelector.style.display = 'block';
        yogaBtn.classList.add('selected');
    }
}
function showGroup() {
    const groupDiv = document.getElementById('group');
    const groupBtnSelector = document.getElementById('group-btn-selector');
    if (groupDiv && groupBtn && groupBtnSelector) {
        hideAllClasses();
        groupDiv.style.display = 'flex';
        groupBtnSelector.style.display = 'block';
        groupBtn.classList.add('selected');
    }
}
function showSolo() {
    const soloDiv = document.getElementById('solo');
    const soloBtnSelector = document.getElementById('solo-btn-selector');
    if (soloDiv && soloBtn && soloBtnSelector) {
        hideAllClasses();
        soloDiv.style.display = 'flex';
        soloBtnSelector.style.display = 'block';
        soloBtn.classList.add('selected');
    }
}
function showStretching() {
    const stretchingDiv = document.getElementById('stretching');
    const stretchingBtnSelector = document.getElementById('stretching-btn-selector');
    if (stretchingDiv && stretchingBtn && stretchingBtnSelector) {
        hideAllClasses();
        stretchingDiv.style.display = 'flex';
        stretchingBtnSelector.style.display = 'block';
        stretchingBtn.classList.add('selected');
    }
}

function hideAllClasses() {
    const yogaDiv = document.getElementById('yoga');
    const groupDiv = document.getElementById('group');
    const soloDiv = document.getElementById('solo');
    const stretchingDiv = document.getElementById('stretching');
    const yogaBtnSelector = document.getElementById('yoga-btn-selector');
    const groupBtnSelector = document.getElementById('group-btn-selector');
    const soloBtnSelector = document.getElementById('solo-btn-selector');
    const stretchingBtnSelector = document.getElementById('stretching-btn-selector');
    if (yogaBtn && groupBtn && soloBtn && stretchingBtn && yogaDiv && groupDiv && soloDiv && stretchingDiv && yogaBtnSelector && groupBtnSelector && soloBtnSelector && stretchingBtnSelector) {
        yogaDiv.style.display = 'none';
        groupDiv.style.display = 'none';
        soloDiv.style.display = 'none';
        stretchingDiv.style.display = 'none';
        yogaBtnSelector.style.display = 'none';
        groupBtnSelector.style.display = 'none';
        soloBtnSelector.style.display = 'none';
        stretchingBtnSelector.style.display = 'none';
        yogaBtn.classList.remove('selected')
        groupBtn.classList.remove('selected')
        soloBtn.classList.remove('selected')
        stretchingBtn.classList.remove('selected')
    }
}


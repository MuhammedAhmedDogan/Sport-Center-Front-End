/* Class buttons */
const classNameList = ['yoga', 'group', 'solo', 'stretching'];
window.onload = showClass(classNameList[0], classNameList);
classNameList.forEach(element => {
    document.getElementById(element + '-btn').addEventListener('click', () => showClass(element, classNameList));
});


function showClass(input, classNameList) {
    classNameList.forEach(className => {
        const div = document.getElementById(className);
        const btn = document.getElementById(className + '-btn');
        const selector = document.getElementById(className + '-btn-selector');

        div.style.display = 'none';
        selector.style.display = 'none';
        btn.classList.remove('selected');

        if (input == className) {
            div.style.display = 'flex';
            selector.style.display = 'block';
            btn.classList.add('selected');
        }
    });
}

/* Header background-color */
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    const navbar = this.document.getElementById('navbarNav');

    if (window.scrollY > 0) {
        header.classList.add('header-scrolled');
        navbar.classList.add('collapse-scrolled')
    } else {
        header.classList.remove('header-scrolled');
        navbar.classList.remove('collapse-scrolled');
    }
});

/* BMI Calculator */
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');

heightInput.addEventListener('input', bmiCalc);
weightInput.addEventListener('input', bmiCalc);

function bmiCalc() {
    const cursor = document.getElementById('cursor');
    var heightCm = parseFloat(heightInput.value);
    var weightKg = parseFloat(weightInput.value);
    if (heightCm > 0 && weightKg > 0) {
        var bmi = weightKg / ((heightCm / 100) * (heightCm / 100));

        if (10 <= bmi && bmi < 18.5) {
            var magnificationCoefficient = (bmi - 10) / (18.5 - 10);
            var cursorPositionPercentage = 6 + (22 - 6) * magnificationCoefficient
            cursor.style.left = cursorPositionPercentage + '%';
        } else if (18.5 <= bmi && bmi < 25) {
            var magnificationCoefficient = (bmi - 18.5) / (25 - 18.5);
            var cursorPositionPercentage = 23 + (38.5 - 23) * magnificationCoefficient
            cursor.style.left = cursorPositionPercentage + '%';
        } else if (25 <= bmi && bmi < 30) {
            var magnificationCoefficient = (bmi - 25) / (30 - 25);
            var cursorPositionPercentage = 39.5 + (55 - 39.5) * magnificationCoefficient
            cursor.style.left = cursorPositionPercentage + '%';
        } else if (30 <= bmi && bmi < 35) {
            var magnificationCoefficient = (bmi - 30) / (35 - 30);
            var cursorPositionPercentage = 55.5 + (71 - 55.5) * magnificationCoefficient
            cursor.style.left = cursorPositionPercentage + '%';
        } else if (35 <= bmi && bmi <= 50) {
            var magnificationCoefficient = (bmi - 35) / (50 - 35);
            var cursorPositionPercentage = 72 + (88 - 72) * magnificationCoefficient
            cursor.style.left = cursorPositionPercentage + '%';
        } else if (bmi > 50) {
            cursor.style.left = '88%';
        } else {
            cursor.style.left = '6%';
        }
    }
}

const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
// Select the collapse element
const navbarCollapse = document.querySelector('#navbarNav');

// Add click event listener to each nav link
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Check if navbarCollapse is open
        if (navbarCollapse.classList.contains('show')) {
            // Get the bootstrap collapse instance
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            // Hide the navbarCollapse
            bsCollapse.hide();
        }
    });
});

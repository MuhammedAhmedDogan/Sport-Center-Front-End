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

window.addEventListener('scroll', function() {
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


let isDragging = false;
let map;
let startX, startY, startLeft, startTop;

window.onload = function() {
    map = document.getElementById('map');
    map.addEventListener('mousedown', dragStart);
    window.addEventListener('mouseup', dragEnd);
    window.addEventListener('mousemove', drag);
};

function dragStart(e) {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    startLeft = parseInt(window.getComputedStyle(map).left, 10) || 0;
    startTop = parseInt(window.getComputedStyle(map).top, 10) || 0;
    map.style.cursor = 'grabbing';
}

function drag(e) {
    if (!isDragging) return;
    e.preventDefault(); // Varsayılan olayları engelleyin

    const x = e.clientX;
    const y = e.clientY;
    const dx = x - startX;
    const dy = y - startY;

    const newLeft = startLeft + dx;
    const newTop = startTop + dy;

    map.style.left = `${newLeft}px`;
    map.style.top = `${newTop}px`;
}

function dragEnd() {
    isDragging = false;
    map.style.cursor = 'grab';
}

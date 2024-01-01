function orderCards() {
    for (let i = 1; i <= document.getElementsByClassName('card').length; i++) {
        let gridRowStart = i;
        let gridColumnStart;
        let gridRowEnd = i + 2;
        let gridColumnEnd;
        
        if (i%2 === 0) {
            gridColumnStart = 1;
            gridColumnEnd = 1;
        } else {
            gridColumnStart = 2;
            gridColumnEnd = 2;
        }
        
        document.getElementById(`card-${i}`).style.gridArea = `${gridRowStart} / ${gridColumnStart} / ${gridRowEnd} / ${gridColumnEnd}`;
    }
}

function arrangeCards() {
    for (let i = 2; i <= document.getElementsByClassName('card').length; i++) {
        let prevCardHeight = document.getElementById(`card-${i-1}`).clientHeight;
        document.getElementById(`card-${i}`).style.marginTop = `calc(${prevCardHeight}px*var(--fraction))`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    orderCards();
    arrangeCards();
});

window.addEventListener('resize', arrangeCards);
document.addEventListener('DOMContentLoaded', function () {
    var navItems = document.querySelectorAll('.nav-item');
    var scrollContainer = document.querySelector('.scroll-content');
    var scrollItems = document.querySelectorAll('.scroll-item');
    var scrollIndicatorActive = document.querySelector('.scroll-indicator-active');
    var scrollLeft = document.getElementById('scroll-left');
    var scrollRight = document.getElementById('scroll-right');

    if (!scrollContainer || !scrollItems.length || !scrollIndicatorActive || !scrollLeft || !scrollRight) {
        console.error("One or more elements are missing. Ensure all elements are correctly selected.");
        return;
    }

    const itemWidth = scrollItems[0].offsetWidth + 20; 
    const maxScroll = 2;
    let currentScroll = 0;

    function updateIndicator() {
        const percentage = (currentScroll / maxScroll) * 100;
        scrollIndicatorActive.style.width = `${percentage}%`;
    }

    scrollLeft.addEventListener('click', function () {
        if (currentScroll > 0) {
            currentScroll--;
            scrollContainer.style.transform = `translateX(-${currentScroll * itemWidth}px)`;
            updateIndicator();
        }
    });

    scrollRight.addEventListener('click', function () {
        if (currentScroll < maxScroll) {
            currentScroll++;
            scrollContainer.style.transform = `translateX(-${currentScroll * itemWidth}px)`;
            updateIndicator();
        }
    });

    var scrollContainerPrize = document.querySelector('.scroll-content-prize');
    var scrollItemsPrize = document.querySelectorAll('.scroll-item-prize');
    var scrollIndicatorActivePrize = document.querySelector('.scroll-indicator-active-prize');
    var scrollLeftPrize = document.getElementById('scroll-left-prize');
    var scrollRightPrize = document.getElementById('scroll-right-prize');

     if (!scrollContainerPrize || !scrollItemsPrize.length || !scrollIndicatorActivePrize || !scrollLeftPrize || !scrollRightPrize) {
        console.error("One or more elements are missing. Ensure all elements are correctly selected.");
        return;
    }

    const itemWidthPrize = scrollItemsPrize[0].offsetWidth + 20; 
    const maxScrollPrize = 1;
    let currentScrollPrize = 0;

    function updateIndicatorPrize() {
        const percentage = (currentScrollPrize / maxScrollPrize) * 100;
        scrollIndicatorActivePrize.style.width = `${percentage}%`;
    }

    scrollLeftPrize.addEventListener('click', function () {
        if (currentScrollPrize > 0) {
            currentScrollPrize--;
            scrollContainerPrize.style.transform = `translateX(-${currentScrollPrize * itemWidthPrize}px)`;
            updateIndicatorPrize();
        }
    });

    scrollRightPrize.addEventListener('click', function () {
        if (currentScrollPrize < maxScrollPrize) {
            currentScrollPrize++;
            scrollContainerPrize.style.transform = `translateX(-${currentScrollPrize * itemWidthPrize}px)`;
            updateIndicatorPrize();
        }
    });


    updateIndicator();
    updateIndicatorPrize();
});


jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

document.querySelectorAll('.accordion__header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;

        // アコーディオンの開閉
        accordionItem.classList.toggle('active');

        // 他のアコーディオンを閉じる
        document.querySelectorAll('.accordion__item').forEach(item => {
        if (item !== accordionItem) {
            item.classList.remove('active');
        }
        });
    });
});

});

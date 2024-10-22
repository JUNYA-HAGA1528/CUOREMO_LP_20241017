
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

document.addEventListener("scroll", function () {
    const doctorButton = document.querySelector(".doctor__buttons");
    const ctaButtons = document.querySelector(".cta__buttons");

    if (doctorButton) {
        const doctorButtonBottom = doctorButton.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // doctor__buttons が画面の上に完全に消えたら表示
        if (doctorButtonBottom < 0) {
            ctaButtons.classList.add("show");  // クラス追加でふわっと表示
        } else {
            ctaButtons.classList.remove("show"); // クラス削除で非表示
        }
    }
});




});

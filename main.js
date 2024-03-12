document.addEventListener("DOMContentLoaded", function () {
    const logoSlides = document.querySelector(".logo-slides");

    function nextSlide() {
        const firstSlide = logoSlides.firstElementChild;
        logoSlides.style.transition = "transform 0.5s ease-in-out";
        logoSlides.style.transform = `translateX(-${firstSlide.offsetWidth}px)`;

        setTimeout(() => {
            logoSlides.appendChild(firstSlide);
            logoSlides.style.transition = "none";
            logoSlides.style.transform = "translateX(0)";
            setTimeout(() => {
                logoSlides.style.transition = "transform 0.5s ease-in-out";
            });

            // 画像がスライドするときに非表示だったものを表示する
            logoSlides.firstElementChild.style.display = "none"; // 最初の画像を非表示に
            logoSlides.firstElementChild.nextElementSibling.style.display = "block"; // 次の画像を表示
        }, 500);
    }

    setInterval(nextSlide, 2000); // 2秒ごとにスライドを変更
});


document.addEventListener("DOMContentLoaded", function () {
    const images1 = [
        "./image/f81b14b3-2e4a-4ad0-b4c0-ce900c23da2f.jpg",
        "./image/f5862080-4397-4b1d-a7b6-336e1ad47505.jpg",
        // 追加の画像パス
    ];

    const images2 = [
        "./image/94eb8a86-4c7c-4e64-b350-32130f1c061c.jpg",
        "./image/61c4588b-1b55-4d2f-b5e2-14dfba3c6d2c.jpg",
        "./image/f5862080-4397-4b1d-a7b6-336e1ad47505.jpg",
        // 追加の画像パス
    ];

    const overlay1 = document.querySelector(".overlay");
    const imageContainer1 = document.querySelector(".main-section .image-container img");
    const contactButton1 = document.querySelector(".main-section .contact-button");

    const overlay2 = document.querySelector(".overlay2");
    const imageContainer2 = document.querySelector(".main2-section .image-container img");
    const contactButton2 = document.querySelector(".main2-section .contact-button");

    let currentIndex1 = 0;
    let currentIndex2 = 0;

    function updateImage1() {
        currentIndex1 = (currentIndex1 + 1) % images1.length;
        imageContainer1.src = images1[currentIndex1];
    }

    function updateImage2() {
        currentIndex2 = (currentIndex2 + 1) % images2.length;
        imageContainer2.src = images2[currentIndex2];
    }

    // アニメーションを1秒ごとに切り替える
    setInterval(() => {
        updateImage1();
    }, 1000);

    setInterval(() => {
        updateImage2();
    }, 1000);

    // ボタンがクリックされたときの処理を追加
    contactButton1.addEventListener("click", () => {
        // お問い合わせの処理を追加
        console.log("お問い合わせ1");
    });

    contactButton2.addEventListener("click", () => {
        // お問い合わせの処理を追加
        console.log("お問い合わせ2");
    });
});

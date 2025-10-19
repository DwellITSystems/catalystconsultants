jQuery(document).ready(function () {
    AOS.init();

    const sideMenu = document.getElementById("sideMenu");
    document.getElementById("sideToggleBtn").addEventListener("click", () => {
        sideMenu.classList.remove("translate-x-full");
    });

    document.getElementById("closeSideMenu").addEventListener("click", () => {
        sideMenu.classList.add("translate-x-full");
    });

    document.querySelectorAll('[data-toggle]').forEach(button => {
        button.addEventListener('click', () => {
            const menuId = button.getAttribute('data-toggle');
            const menu = document.getElementById(menuId);

            // Toggle visibility
            menu.classList.toggle('open-slideToggle');
            menu.classList.toggle('pt-4');

            // Toggle rotation class using parent <li> or group
            button.classList.toggle('open');
        });
    });

    const navbar = document.getElementById('mainNavbar');
    const nav = document.getElementById('nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('bg-white', 'shadow-md');
            nav.classList.remove('text-white');
            nav.classList.add('text-gray-900');
        } else {
            navbar.classList.remove('bg-white', 'shadow-md');
            nav.classList.remove('text-gray-900');
            nav.classList.add('text-white');
        }
    });

    const bannerSwiper = new Swiper('.banner-swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.testimonial-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000, // Time in ms (5000 = 3 seconds)
            disableOnInteraction: false, // Autoplay won't stop after user interaction
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    const clientSwiper = new Swiper('.client-logo-slider', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 5,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const productSwiperJob = new Swiper('.product-job-swiper', {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });

    const productSwiper = new Swiper('.product-slider', {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 2,
            },
        }
    });

    const testimonialSwiper = new Swiper('.testimonial-swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
        },
    });


    jQuery("#request-callback-btn, #request-mob-callback-btn").click(function () {
        jQuery("#request-callback-popup").removeClass('hidden').addClass('flex');
    });

    jQuery("#request-closeModal-Btn").click(function () {
        jQuery("#request-callback-popup").removeClass('flex').addClass('hidden');
    });

    setTimeout(() => {
        jQuery("#request-callback-popup").removeClass('hidden').addClass('flex');
    }, 20000);

    jQuery(".job-details-btn").click(function () {
        jQuery("#job-details-popup").removeClass('hidden').addClass('flex');
    });

    jQuery("#job-closeModal-Btn").click(function () {
        jQuery("#job-details-popup").removeClass('flex').addClass('hidden');
    });
});
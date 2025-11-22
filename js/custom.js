$(document).ready(function () {
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
            menu.classList.toggle('pt-4s');

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


    $("#request-callback-btn, #request-mob-callback-btn").click(function () {
        $("#drop-your-resume-popup").removeClass('hidden').addClass('flex');
    });

    $("#drop-your-resume-closeModal-Btn").click(function () {
        $("#drop-your-resume-popup").removeClass('flex').addClass('hidden');
    });

    // $("#request-closeModal-Btn").click(function () {
    //     $("#request-callback-popup").removeClass('flex').addClass('hidden');
    // });

    // setTimeout(() => {
    //     $("#request-callback-popup").removeClass('hidden').addClass('flex');
    // }, 35000);


    const jobJSON = [
        {
            "jobTitle": "Dentist",
            "department": "Dental",
            "location": "Multiple Clinics Across Australia",
            "employmentType": "Full-Time",
            "organisation": {
                "description": "A reputable dental group operating multiple modern clinics across Australia, offering a supportive clinical environment, advanced equipment, and a strong commitment to patient-centred care."
            },
            "jobSummary": "Seeking experienced and compassionate Dentists to join an expanding network of clinics.",
            "sponsorship": {
                "available": true,
                "details": "Sponsorship available for exceptional candidates based on experience, skills, and visa eligibility."
            },
            "keyResponsibilities": [
                "Provide high-quality general dental services including examinations, restorations, extractions, and preventive care.",
                "Diagnose and manage oral-health conditions using evidence-based approaches.",
                "Deliver treatment planning, patient education, and ongoing care.",
                "Maintain accurate clinical records and meet infection control and safety standards.",
                "Collaborate with dental assistants and clinic teams to enhance patient experience."
            ],
            "requiredQualifications": [
                "Bachelor of Dental Surgery / Dental Science or equivalent.",
                "Current AHPRA registration as a Dentist.",
                "Minimum 2–3 years’ clinical experience (preferred).",
                "Professional indemnity insurance.",
                "Knowledge of Australian dental legislation and infection control standards."
            ],
            "keyCompetencies": [
                "Excellent communication and patient-management skills.",
                "Strong clinical judgement and technical proficiency.",
                "Empathy, professionalism, and ethical practice.",
                "Ability to work independently and within a multidisciplinary team."
            ]
        },
        {
            "jobTitle": "Pharmacist",
            "department": "Pharmacy",
            "location": "Multiple Sites Across Australia",
            "employmentType": "Full-Time",
            "organisation": {
                "description": "A well-established community pharmacy group operating multiple locations across Australia, committed to delivering high-quality patient care and professional pharmacy services in modern, supportive environments."
            },
            "jobSummary": "Seeking an experienced and dedicated Pharmacist to contribute to dispensary operations, clinical services, and the delivery of exceptional patient care.",
            "sponsorship": {
                "available": true,
                "details": "Sponsorship opportunities are available for highly suitable candidates based on experience and eligibility."
            },
            "keyResponsibilities": [
                "Dispense medications accurately in accordance with Australian regulations.",
                "Provide clinical counselling on prescriptions, OTC products, and health services.",
                "Perform immunisations, medication reviews, and pharmacist-led programs.",
                "Maintain compliance with pharmacy practice standards, PBS rules, and workplace policies.",
                "Collaborate with pharmacy teams to optimise workflow and patient outcomes.",
                "Manage stock, documentation, and quality processes effectively."
            ],
            "requiredQualifications": [
                "Bachelor/Master of Pharmacy (APC-accredited).",
                "AHPRA General Registration as a Pharmacist.",
                "Minimum 3 years’ community pharmacy experience.",
                "Vaccination certification (highly regarded).",
                "Strong understanding of PBS, QCPP, and relevant Australian legislation.",
                "Experience with major dispensing systems (FRED, Minfos, LOTS, Z Dispense, Aquarius)."
            ],
            "keyCompetencies": [
                "Excellent communication and interpersonal skills.",
                "Strong patient-centred approach and customer service mindset.",
                "High ethical standards and professional integrity.",
                "Accurate, detail-focused work habits and strong problem-solving ability.",
                "Ability to work independently and collaboratively."
            ]
        },
        {
            "jobTitle": "Pharmacy Intern",
            "department": "Pharmacy",
            "location": "Multiple Sites Across Australia",
            "employmentType": "Full-Time",
            "organisation": {
                "description": "A reputable national pharmacy group with multiple branches across Australia offering comprehensive training, modern facilities, and strong professional mentorship for pharmacy interns."
            },
            "jobSummary": "Seeking highly motivated Pharmacy Interns looking to grow in a supportive and fast-paced community pharmacy environment.",
            "sponsorship": {
                "available": true,
                "details": "Sponsorship may be considered for top-performing candidates who meet eligibility criteria."
            },
            "keyResponsibilities": [
                "Support dispensing, payment processing, and customer service activities.",
                "Assist pharmacists with medication counselling and clinical services.",
                "Participate in vaccination clinics and health programs where applicable.",
                "Contribute to stock management, ordering, and dispensary workflow.",
                "Complete all internship training and competency requirements."
            ],
            "requiredQualifications": [
                "Completed recognised pharmacy degree (BPharm/MPharm).",
                "Eligible for Intern Pharmacist Registration with AHPRA.",
                "Enthusiasm for developing clinical and professional skills."
            ],
            "keyCompetencies": [
                "Good communication and interpersonal skills.",
                "Strong ethical behaviour and professional attitude.",
                "Patient-focused mindset and commitment to quality care.",
                "Ability to follow instructions accurately and work effectively in a pharmacy setting."
            ]
        }
    ]

    function openJobModal(index) {
        const job = jobJSON[index];

        document.getElementById("jobTitle").innerText = job.jobTitle;
        document.getElementById("jobHeadline").innerText = `${job.jobTitle} (${job.employmentType})`;
        document.getElementById("jobSummary").innerText = job.jobSummary;
        document.getElementById("organisation").innerText = job.organisation.description;
        document.getElementById("sponsorship").innerText =
            job.sponsorship.available ? job.sponsorship.details : "Not Available";

        // Fill list items
        fillList("responsibilities", job.keyResponsibilities);
        fillList("qualifications", job.requiredQualifications);
        fillList("competencies", job.keyCompetencies);

        document.getElementById("job-details-popup").classList.remove("hidden");
        document.getElementById("job-details-popup").classList.add("flex");
    }

    // Fill UL lists
    function fillList(id, items) {
        const ul = document.getElementById(id);
        ul.innerHTML = "";
        items.forEach(i => {
            ul.innerHTML += `<li>${i}</li>`;
        });
    }


    $(".job-details-btn").click(function (evt) {
        var id = $(this).attr("id");
        openJobModal(id);
        $("#job-details-popup").removeClass('hidden').addClass('flex');
    });

    $("#job-closeModal-Btn").click(function () {
        $("#job-details-popup").removeClass('flex').addClass('hidden');
    });
});
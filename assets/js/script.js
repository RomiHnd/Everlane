document.addEventListener("DOMContentLoaded", function () {
  // ===== اسلایدر =====
  const slideGroup = document.getElementById("slideGroup");
  const slides = slideGroup.children;
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  let currentIndex = 0;

  function showSlide(index) {
    const totalSlides = slides.length;

    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    const slideWidth = slides[0].offsetWidth;
    slideGroup.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  nextBtn.addEventListener("click", () => showSlide(currentIndex + 1));
  prevBtn.addEventListener("click", () => showSlide(currentIndex - 1));

  window.addEventListener("load", () => {
    showSlide(currentIndex);
  });

  window.addEventListener("resize", () => {
    showSlide(currentIndex);
  });


  // ===== گالری با دکمه‌های اسکرول (اگر لازمه و در صفحه هست) =====
  const track = document.querySelector('.gallery-track');
  const leftBtn = document.querySelector('.arrow.left');
  const rightBtn = document.querySelector('.arrow.right');
  if (track && leftBtn && rightBtn) {
    let scrollIndex = 0;
    const step = 310;

    rightBtn.addEventListener('click', () => {
      scrollIndex++;
      const maxScroll = track.scrollWidth - track.parentElement.offsetWidth;
      const scrollAmount = scrollIndex * step;

      if (scrollAmount >= maxScroll) {
        scrollIndex--;
        return;
      }

      track.style.transform = `translateX(-${scrollAmount}px)`;
    });

    leftBtn.addEventListener('click', () => {
      if (scrollIndex > 0) {
        scrollIndex--;
        const scrollAmount = scrollIndex * step;
        track.style.transform = `translateX(-${scrollAmount}px)`;
      }
    });
  }


  // ===== دکمه View More برای دسته بندی ها =====
  const toggleBtn = document.querySelector(".category-toggleBtn");
  const hiddenItems = document.querySelectorAll(".category-list .hidden");
  let isExpanded = false;

  if(toggleBtn && hiddenItems.length) {
    toggleBtn.addEventListener("click", () => {
      isExpanded = !isExpanded;
      hiddenItems.forEach(item => {
        item.classList.toggle("hidden");
      });
      toggleBtn.textContent = isExpanded ? "View Less -" : "View More +";
    });
  }


  // ===== دکمه View More برای رنگ ها =====
  const colorToggleBtn = document.querySelector(".color-toggleBtn");
  const hiddenColors = document.querySelectorAll(".color-circle.extra");
  let isColorExpanded = false;

  if(colorToggleBtn && hiddenColors.length) {
    colorToggleBtn.addEventListener("click", () => {
      isColorExpanded = !isColorExpanded;
      hiddenColors.forEach((item) => item.classList.toggle("hidden"));
      colorToggleBtn.textContent = isColorExpanded ? "View Less -" : "View More +";
    });
  }


  // ===== سایدبار سبد خرید (Cart Sidebar) =====
  const addCartBtn = document.querySelector(".addCartBtn");
  const cartSidebar = document.querySelector(".cart-sidebar");
  const closeBtn = document.querySelector(".close-btn");

  if (addCartBtn && cartSidebar && closeBtn) {
    // باز کردن سایدبار با کلیک روی دکمه افزودن به سبد خرید
    addCartBtn.addEventListener("click", function () {
      cartSidebar.classList.add("open");
      document.addEventListener("click", outsideClickListener);
      document.addEventListener("keydown", escapeKeyListener);
    });

    // بستن سایدبار با کلیک روی دکمه بستن
    closeBtn.addEventListener("click", function () {
      closeSidebar();
    });

    // بستن سایدبار وقتی کلیک بیرون از آن اتفاق بیفتد
    function outsideClickListener(event) {
      if (!cartSidebar.contains(event.target) && !addCartBtn.contains(event.target)) {
        closeSidebar();
      }
    }

    // بستن سایدبار با دکمه Escape
    function escapeKeyListener(event) {
      if (event.key === "Escape") {
        closeSidebar();
      }
    }

    function closeSidebar() {
      cartSidebar.classList.remove("open");
      document.removeEventListener("click", outsideClickListener);
      document.removeEventListener("keydown", escapeKeyListener);
    }
  }
});



 const toggleBtn = document.querySelector('.menu-toggle');
  const closeBtn = document.querySelector('.close-btn');
  const sidebar = document.querySelector('.mobile-sidebar');
  const overlay = document.querySelector('.overlay');

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  });
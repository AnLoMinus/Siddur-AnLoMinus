document.addEventListener("DOMContentLoaded", () => {
  const tocItems = document.querySelectorAll(".toc-item");
  const prayerContainers = document.querySelectorAll(".prayer-container");
  const prayerTocItems = document.querySelectorAll(".prayer-toc-item");
  const prayerCards = document.querySelectorAll(".prayer-card");

  // פונקציה להצגת תפילה מסוימת
  function showPrayer(prayerId) {
    // הסתרת כל התפילות
    prayerContainers.forEach((container) => {
      container.style.display = "none";
    });

    // הסרת סימון פעיל מכל פריטי התוכן
    tocItems.forEach((item) => {
      item.classList.remove("active");
    });

    // הצגת התפילה הנבחרת
    const selectedPrayer = document.getElementById(prayerId);
    const selectedTocItem = document.querySelector(
      `.toc-item[data-prayer="${prayerId}"]`
    );

    if (selectedPrayer) {
      selectedPrayer.style.display = "block";
      selectedTocItem.classList.add("active");
      // גלילה לראש העמוד
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  // פונקציה לגלילה לקטע ספציפי בתפילה
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      // הדגשת הפריט בתוכן העניינים
      prayerTocItems.forEach((item) => {
        item.classList.remove("active");
        if (item.dataset.section === sectionId) {
          item.classList.add("active");
        }
      });
    }
  }

  // הוספת מאזיני אירוע לכל פריט בתוכן העניינים
  tocItems.forEach((item) => {
    item.addEventListener("click", () => {
      const prayerId = item.dataset.prayer;
      showPrayer(prayerId);
    });
  });

  // הוספת מאזינים לפריטי תוכן העניינים של כל תפילה
  prayerTocItems.forEach((item) => {
    item.addEventListener("click", () => {
      const sectionId = item.dataset.section;
      scrollToSection(sectionId);
    });
  });

  // הצגת סדר הבוקר כברירת מחדל
  showPrayer("morning");

  // הוספת תמיכה במקלדת
  document.addEventListener("keydown", (event) => {
    if (event.key >= "1" && event.key <= "5") {
      const prayerIds = ["morning", "shacharit", "mincha", "arvit", "special"];
      const index = parseInt(event.key) - 1;
      showPrayer(prayerIds[index]);
    }
  });
});

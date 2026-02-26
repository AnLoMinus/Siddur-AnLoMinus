# 🕊️ Siddur-AnLoMinus | סידור אנלומינוס

סידור תפילה דיגיטלי מודרני עם דגש על חוויית משתמש נוחה ועיצוב נקי. הסידור כולל את כל התפילות היומיות, תפילות שבת וחג, וקונטרסים מיוחדים בנושא התפילה.

[![סידור אנלומינוס](https://img.shields.io/badge/🕊️_סידור_אנלומינוס-לחץ_כאן_למעבר_לאתר-blue)](https://anlominus.github.io/Siddur-AnLoMinus)

## 🌐 קישורים מהירים

- [מעבר לאתר הסידור](https://anlominus.github.io/Siddur-AnLoMinus)
- [קונטרס אושר התפילה](https://anlominus.github.io/Siddur-AnLoMinus/הקדמה.html)
- [רשימת משימות](https://anlominus.github.io/Siddur-AnLoMinus/checklist.html)

## 📚 מבנה הפרויקט

- `index.html` - העמוד הראשי של הסידור
- `הקדמה.html` - עמוד הקדמה מיוחד הכולל את קונטרס "אושר התפילה"
- `checklist.html` - רשימת משימות לבנייה והתקדמות הפרויקט
- `styles.css` - קובץ העיצוב הראשי
- `script.js` - קובץ הסקריפטים
- `/קונטרסים` - תיקייה המכילה מסמכי מקור וקונטרסים בנושא התפילה

## 🧪 בדיקות ואיכות

הפרויקט כולל מספר כלי בדיקה לשיפור איכות הקוד והתוכן:

- **לינטרים:** יש להריץ `npm install --legacy-peer-deps` ואז `npm run lint` עבור ESLint, Stylelint ו-HTMLHint.
- **תיקונים אוטומטיים:** ניתן להשתמש ב-`npm run lint:js -- --fix` ו־`npm run lint:css -- --fix` כדי לתקן באופן אוטומטי.
- **בדיקת איות:** `npx cspell "**/*.{html,md,js,css}"` יזהה מילים לא מוכרות (בעיקר מונחים בעברית).
- **נגישות:** הדרישה לבדיקות נגישות (Lighthouse/axe) מחייבת התקנת Chrome או Chromium; כרגע אין דפדפן זמין במכולה.
- **CI:** ישנו Workflow ב־GitHub (`.github/workflows/lint.yml`) שמריץ את הלינטרים על כל push/PR.

נוסף על כך, מבנים ריקים / `div.prayer-card` שבפנים מופיעים כעת טקסטים ממלאים — יש להחליפם בתוכן תפילות רלוונטי.


## 🌟 תכונות עיקריות

- עיצוב מודרני ונקי
- תמיכה מלאה בעברית ובכיוון RTL
- תצוגה מותאמת למובייל
- ניווט נוח בין חלקי התפילה
- הסברים והערות מפורטות
- קונטרסים והדרכה בנושא התפילה

## 📱 תאימות

הסידור נתמך בכל הדפדפנים המודרניים:

- Chrome
- Firefox
- Safari
- Edge

## 🛠️ טכנולוגיות

- HTML5
- CSS3 (כולל CSS Grid ו-Flexbox)
- JavaScript
- Google Fonts (Rubik)

## 📖 תוכן

### תפילות יומיות

- סדר השכמת הבוקר
- תפילת שחרית
- תפילת מנחה
- תפילת ערבית
- תיקון חצות

### שבת ומועדים

- תפילות שבת
- תפילות חג
- סדר הדלקת נרות
- קידוש והבדלה

### ברכות ותפילות מיוחדות

- ברכות הנהנין
- ברכת המזון
- תפילות מיוחדות
- ברכות שונות

### קונטרסים והדרכה

- אושר התפילה
- מדריכי לימוד
- הסברים מפורטים

## 🎨 עיצוב

הסידור מעוצב בסגנון מודרני ונקי, תוך שימוש בפלטת צבעים מרגיעה:

- כחול כהה (#2b6cb0) לכותרות וטקסט מודגש
- לבן (#ffffff) לרקע
- אפור בהיר (#f7fafc) לרקע משני
- כחול בהיר (#4299e1) להדגשות

## 🔄 עדכונים עתידיים מתוכננים

1. הוספת תפילות נוספות
2. שיפור חוויית המשתמש במובייל
3. הוספת אפשרות חיפוש
4. הוספת מצב לילה
5. תמיכה בשפות נוספות

## 📝 רישיון

כל הזכויות שמורות © 2024

## 👥 תרומה לפרויקט

מוזמנים לתרום לפרויקט על ידי:

1. פתיחת issues
2. הצעת שיפורים
3. תיקון שגיאות
4. הוספת תוכן

## 📞 יצירת קשר

לשאלות, הצעות או דיווח על באגים, אנא:

- פתחו [issue חדש](https://github.com/anlominus/Siddur-AnLoMinus/issues)
- בקרו [באתר הפרויקט](https://anlominus.github.io/Siddur-AnLoMinus)
- שלחו לנו מייל בכתובת [your@email.com]

---
[![GitHub stars](https://img.shields.io/github/stars/anlominus/Siddur-AnLoMinus?style=social)](https://github.com/anlominus/Siddur-AnLoMinus/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/anlominus/Siddur-AnLoMinus?style=social)](https://github.com/anlominus/Siddur-AnLoMinus/network/members)
[![GitHub issues](https://img.shields.io/github/issues/anlominus/Siddur-AnLoMinus)](https://github.com/anlominus/Siddur-AnLoMinus/issues)

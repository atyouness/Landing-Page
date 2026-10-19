// نصوص اللغات المتعددة
const translations = {
    ar: {
        title: "تعلّم وتدرّب اليوم… لتنجح غداً",
        desc: "أكاديمية رائدة عبر الإنترنت لتطويرك الشخصي والمهني من خلال تكوينات عالية الجودة ونظام تسويق ذكي عبر الشبكات.",
        cta: "سجل الآن عبر رابط الإحالة",
        progTitle: "برامجنا التعليمية"
    },
    en: {
        title: "Learn & Train Today… Succeed Tomorrow",
        desc: "A leading online academy supporting your personal and professional growth through high-quality training and a smart network marketing system.",
        cta: "Register Now via Referral Link",
        progTitle: "Our Educational Programs"
    },
    fr: {
        title: "Apprenez et entraînez-vous aujourd’hui… Réussissez demain",
        desc: "Une académie en ligne de référence pour accompagner votre développement personnel et professionnel grâce à des formations de haute qualité.",
        cta: "S'inscrire via le lien de parrainage",
        progTitle: "Nos Programmes Éducatifs"
    }
};

function changeLang(lang) {
    // تبديد اتجاه الصفحة حسب اللغة
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    // تغيير النصوص
    document.getElementById('hero-title').innerText = translations[lang].title;
    document.getElementById('hero-desc').innerText = translations[lang].desc;
    document.getElementById('hero-cta').innerText = translations[lang].cta;
    document.getElementById('prog-title').innerText = translations[lang].progTitle;

    // تحديث أزرار اللغات
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// معاينة الصورة محلياً (قبل الربط بالسيرفر على Hostinger)
function uploadProfileImage() {
    const input = document.getElementById('profileImageInput');
    const container = document.getElementById('previewContainer');
    
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            container.innerHTML = `<img src="${e.target.result}" alt="Profile Preview">`;
            alert("تم تحميل المعاينة بنجاح! سيتم ربطها بقاعدة البيانات على Hostinger لاحقاً.");
        }
        reader.readAsDataURL(input.files[0]);
    } else {
        alert("الرجاء اختيار صورة أولاً.");
    }
}
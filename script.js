// Translation strings
const i18n = {
  en: {
    tagline: "Digital Courses & Subscriptions",
    "nav.products": "Products",
    "nav.checkout": "Checkout",
    "nav.contact": "Contact",
    "hero.title": "Top e‑learning at the best price",
    "hero.subtitle": "edX, Coursera, Busuu, and Udemy subscriptions. Order via WhatsApp or pay with PayPal.",
    "hero.cta": "Browse Products",
    "hero.whatsapp": "Order on WhatsApp",
    "products.title": "Products",
    "products.edx.desc": "Access edX verified courses and professional certificates.",
    "products.coursera.desc": "Coursera Plus style access for top universities.",
    "products.busuu.desc": "Premium language learning with community feedback.",
    "products.udemy.desc": "Hand‑picked Udemy courses and bundles.",
    "per.month": "/month",
    "per.course": "/course",
    "actions.whatsapp": "Order via WhatsApp",
    "actions.add": "Add to Checkout",
    "products.note": "Notes: Delivery is digital. You'll receive access by email/WhatsApp after payment.",
    "checkout.title": "Checkout",
    "form.fullname": "Full name",
    "form.email": "Email",
    "form.product": "Product",
    "form.notes": "Notes (optional)",
    "checkout.whatsapp": "Order via WhatsApp",
    "checkout.paypal": "Pay with PayPal",
    "checkout.hint": "You can pay securely with PayPal or place an order on WhatsApp and pay later.",
    "contact.title": "Contact",
    "contact.whatsapp": "WhatsApp",
    "contact.email": "Email",
    "contact.address": "Store",
    "footer.rights": "All rights reserved."
  },
  fr: {
    tagline: "Cours et abonnements numériques",
    "nav.products": "Produits",
    "nav.checkout": "Paiement",
    "nav.contact": "Contact",
    "hero.title": "Meilleures plateformes d’apprentissage au meilleur prix",
    "hero.subtitle": "Abonnements à edX, Coursera, Busuu et Udemy. Commandez sur WhatsApp ou payez avec PayPal.",
    "hero.cta": "Voir les produits",
    "hero.whatsapp": "Commander sur WhatsApp",
    "products.title": "Produits",
    "products.edx.desc": "Accès aux cours vérifiés edX et certificats pro.",
    "products.coursera.desc": "Accès type Coursera Plus aux meilleures universités.",
    "products.busuu.desc": "Apprentissage des langues avec retours de la communauté.",
    "products.udemy.desc": "Sélection de cours et bundles Udemy.",
    "per.month": "/mois",
    "per.course": "/cours",
    "actions.whatsapp": "Commander via WhatsApp",
    "actions.add": "Ajouter au panier",
    "products.note": "Notes : livraison numérique. Vous recevrez l’accès par email/WhatsApp après paiement.",
    "checkout.title": "Paiement",
    "form.fullname": "Nom complet",
    "form.email": "Email",
    "form.product": "Produit",
    "form.notes": "Notes (facultatif)",
    "checkout.whatsapp": "Commander via WhatsApp",
    "checkout.paypal": "Payer avec PayPal",
    "checkout.hint": "Payez en toute sécurité avec PayPal ou commandez sur WhatsApp et payez plus tard.",
    "contact.title": "Contact",
    "contact.whatsapp": "WhatsApp",
    "contact.email": "Email",
    "contact.address": "Boutique",
    "footer.rights": "Tous droits réservés."
  },
  ar: {
    tagline: "دورات واشتراكات رقمية",
    "nav.products": "المنتجات",
    "nav.checkout": "الدفع",
    "nav.contact": "التواصل",
    "hero.title": "أفضل منصات التعلّم بأفضل سعر",
    "hero.subtitle": "اشتراكات edX و Coursera و Busuu و Udemy. اطلب عبر واتساب أو ادفع عبر بايبال.",
    "hero.cta": "تصفح المنتجات",
    "hero.whatsapp": "اطلب عبر واتساب",
    "products.title": "المنتجات",
    "products.edx.desc": "وصول إلى دورات edX الموثّقة وشهادات مهنية.",
    "products.coursera.desc": "وصول شبيه Coursera Plus لجامعات رائدة.",
    "products.busuu.desc": "تعلم لغات مع ملاحظات المجتمع.",
    "products.udemy.desc": "دورات وباقات مختارة من Udemy.",
    "per.month": "/شهريًا",
    "per.course": "/للدورة",
    "actions.whatsapp": "اطلب عبر واتساب",
    "actions.add": "أضف إلى الدفع",
    "products.note": "ملاحظات: التسليم رقمي. ستصلك بيانات الوصول عبر البريد/الواتساب بعد الدفع.",
    "checkout.title": "الدفع",
    "form.fullname": "الاسم الكامل",
    "form.email": "البريد الإلكتروني",
    "form.product": "المنتج",
    "form.notes": "ملاحظات (اختياري)",
    "checkout.whatsapp": "اطلب عبر واتساب",
    "checkout.paypal": "ادفع عبر بايبال",
    "checkout.hint": "يمكنك الدفع بأمان عبر بايبال أو الطلب عبر واتساب والدفع لاحقًا.",
    "contact.title": "التواصل",
    "contact.whatsapp": "واتساب",
    "contact.email": "البريد",
    "contact.address": "المتجر",
    "footer.rights": "جميع الحقوق محفوظة."
  }
};

const WHATSAPP_NUMBER_INTL = "212699289568"; // Morocco country code +212
const BUSINESS_PAYPAL = "szemzami@outlook.fr";

// Language switching
const langBtns = document.querySelectorAll(".lang-btn");
const setLang = (lng) => {
  document.documentElement.lang = lng;
  // RTL for Arabic
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  langBtns.forEach(b => b.classList.toggle("active", b.dataset.lang === lng));
  const strings = i18n[lng];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if(strings[key]) el.textContent = strings[key];
  });
  // Update select options suffixes for /month /course
  const select = document.getElementById("product-select");
  const opts = [
    ["edX","19.99","per.month"],
    ["Coursera","24.99","per.month"],
    ["Busuu","14.99","per.month"],
    ["Udemy","12.99","per.course"]
  ];
  select.innerHTML = opts.map(([name,price,suf]) => {
    const suffix = strings[suf] || "";
    return `<option value="${name}|${price}">${name} — $${price} ${suffix}</option>`
  }).join("");
};

langBtns.forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
setLang("en");

// Year
document.getElementById("year").textContent = new Date().getFullYear();

// WhatsApp order from product cards
document.querySelectorAll(".whats-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const name = btn.dataset.name;
    const price = btn.dataset.price;
    const text = encodeURIComponent(`Hello MACOMG! I want to order: ${name} ($${price}). My name: ___, Email: ___`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${text}`, "_blank");
  });
});

// Add to checkout prefill
document.querySelectorAll(".add-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const name = btn.dataset.name;
    const price = btn.dataset.price;
    const select = document.getElementById("product-select");
    select.value = `${name}|${price}`;
    document.getElementById("order-form").scrollIntoView({behavior:"smooth"});
  });
});

// Checkout actions
document.getElementById("whatsapp-order").addEventListener("click", () => {
  const data = readForm();
  const lines = [
    `Hello MACOMG!`,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Product: ${data.product} ($${data.amount})`,
    data.notes ? `Notes: ${data.notes}` : null
  ].filter(Boolean).join("\n");
  const text = encodeURIComponent(lines);
  window.open(`https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${text}`, "_blank");
});

document.getElementById("order-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = readForm();
  // Fill classic PayPal form
  document.getElementById("pp-item").value = `${data.product} - ${data.name}`;
  document.getElementById("pp-amount").value = data.amount;
  // Submit
  document.getElementById("paypal-form").submit();
});

function readForm(){
  const fd = new FormData(document.getElementById("order-form"));
  const [product, amount] = (fd.get("product")||"edX|19.99").split("|");
  return {
    name: (fd.get("name")||"").trim(),
    email: (fd.get("email")||"").trim(),
    product, amount,
    notes: (fd.get("notes")||"").trim()
  };
}

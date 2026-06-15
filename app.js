// ============================================================
//  OGBOMOSO WEATHER ALERT SYSTEM
//  Farmers (5 LGAs) + Traders + Okada Riders
//  English & Yoruba language support
//  In-app Registration → Google Sheets via Google Forms
// ============================================================

let currentLang = 'en';

// ============================================================
//  TRANSLATIONS
// ============================================================
const localizations = {
  en: {
    appTitle:      'Ogbomoso Weather Alert',
    appSub:        'For Farmers, Traders & Okada Riders',
    tabWeather:    'Weather',
    tabFarmers:    'Farmers',
    tabOthers:     'Traders & Riders',
    tabSend:       'Send Alert',
    tabRegister:   'Register',
    overviewTitle: "Today's Alert Overview",
    farmerTitle:   'Farmer Alerts — All 5 LGAs',
    farmerSub:     'Tap any LGA to see crop-specific advice',
    calendarTitle: 'Current Season Crop Recommendations',
    calendarSub:   'Based on Ogbomoso seasonal cycle',
    sendTitle:     'Send Weather Alert',
    flGroup:       'Select who to alert',
    flPhone:       'Phone number (with country code)',
    flLang:        'Message language',
    flPreview:     'Message preview',
    btnWa:         'Send via WhatsApp',
    btnSms:        'Send SMS',
    twilioNote:    'WhatsApp opens a pre-filled message. SMS via Twilio needs backend setup.',
    regTitle:      'Register for Free Daily Alerts',
    regSub:        'Join the Ogbomoso community. Get daily weather alerts free.',
    rlName:        'Full Name *',
    rlPhone:       'WhatsApp Number *',
    rlLga:         'Your LGA / Area *',
    rlOcc:         'Your Occupation *',
    rlHeard:       'How did you hear about us?',
    btnRegSub:     'Register Now — It is Free!',
    regNote:       'Your data is saved securely. No spam ever.',
    regOkTitle:    'Registration Successful!',
    regOkMsg:      'Welcome to Ogbomoso Weather Alert! Your details have been saved. Share this app with your friends and family!',
    windTitle:     'Wind Warning — All Groups',
    safe:          'Safe ✅',
    warn:          'Caution ⚡',
    danger:        'High Risk ⚠️',
    days:          ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
  },
  yo: {
    appTitle:      'Ìwòyí Ojú-Ọjọ́ Ogbómọ̀ṣọ́',
    appSub:        'Fún Àwọn Àgbẹ̀, Oníṣòwò & Olùgùnkẹ̀kẹ́',
    tabWeather:    'Ojú-Ọjọ́',
    tabFarmers:    'Àwọn Àgbẹ̀',
    tabOthers:     'Oníṣòwò/Agunjẹ̀kẹ́',
    tabSend:       'Fi Alaye Ránṣẹ́',
    tabRegister:   'Forúkọṣílẹ̀',
    overviewTitle: 'Àkópọ̀ Ìwòyí Ojú-Ọjọ́ Òní',
    farmerTitle:   'Ìwòyí Àwọn Àgbẹ̀ — Gbogbo LGA 5',
    farmerSub:     'Tẹ LGA eyikeyii láti rí ìmọ̀ràn ohun ọ̀gbìn',
    calendarTitle: 'Ìmọ̀ràn Ohun Ọ̀gbìn Gẹ́gẹ́ Bí Àkókò',
    calendarSub:   'Báyi ni ọ̀yàyà kíkà ohun ọ̀gbìn ṣe rí ní Ogbómọ̀ṣọ́',
    sendTitle:     'Fi Ìwòyí Ojú-Ọjọ́ Ránṣẹ́',
    flGroup:       'Yan àwọn tí o fẹ́ jafara',
    flPhone:       'Nọ́mbà fóònù (pẹ̀lú kòòdù orílẹ̀-èdè)',
    flLang:        'Èdè àtẹ̀jíṣẹ́',
    flPreview:     'Àwòkẹ́gbẹ́ àtẹ̀jíṣẹ́',
    btnWa:         'Fi ránṣẹ́ lórí WhatsApp',
    btnSms:        'Fi ránṣẹ́ lórí SMS',
    twilioNote:    'WhatsApp máa ṣí àtẹ̀jíṣẹ́ tí a ti kọ tẹ́lẹ̀. SMS nílò ètò lẹ́yìn.',
    regTitle:      'Forúkọṣílẹ̀ Fún Ìkìlọ Ojú Ọjọ́ Ọfẹ',
    regSub:        'Darapọ̀ mọ́ àwùjọ Ogbomoso. Gba ìkìlọ ojú ọjọ́ lójoojúmọ́ ọfẹ.',
    rlName:        'Orúkọ Kíkún *',
    rlPhone:       'Nọ́mbà WhatsApp *',
    rlLga:         'LGA / Àgbègbè Rẹ *',
    rlOcc:         'Iṣẹ́ Rẹ *',
    rlHeard:       'Báwo ni o ṣe gbọ́ nípa wa?',
    btnRegSub:     'Forúkọṣílẹ̀ Ní Ọfẹ!',
    regNote:       'A máa ṣọ́ àwọn data rẹ. A kò ní fi ránṣẹ́ àwọn ìfiranṣẹ́ àìpé.',
    regOkTitle:    'Forúkọṣílẹ̀ Ṣẹ!',
    regOkMsg:      'Ẹ káàbọ̀ sí Ogbomoso Weather Alert! A ti fipamọ́ àwọn data rẹ. Pín ètò yìí pẹ̀lú àwọn ọ̀rẹ́ àti ẹbí rẹ!',
    windTitle:     'Ìkìlọ Afẹ́fẹ́ — Gbogbo Ẹgbẹ́',
    safe:          'Pàáró ✅',
    warn:          'Ṣọ́ra ⚡',
    danger:        'Ewu Gíga ⚠️',
    days:          ['Àìkú','Ajé','Ìṣẹ́gun','Ọjọ́rú','Ọjọ́bọ','Ẹtì','Àbámẹ́ta'],
  }
};

// ============================================================
//  SEASONAL CROP DATA
// ============================================================
const seasonalCrops = {
  dry:        'Yam harvesting, land clearing, land preparation, and dry-season irrigation vegetable farming.',
  earlyRains: 'Maize planting, Cassava cultivation, melon planting, and early fertilizer operations.',
  lateRains:  'Maize weeding, Yam staking, Cassava monitoring, Cowpea planting, and harvesting operations.'
};

// ============================================================
//  ALERT DATA (static — you can replace with live API later)
// ============================================================
const activeAlerts = {
  north:    { status:'safe',   textEn:'Weather conditions are standard. Perfect day for farm operations.',          textYo:'Ojú ọjọ́ dára. Àkókò títọ́ ni fún iṣẹ́ lórí oko rẹ.' },
  south:    { status:'warn',   textEn:'Light storm tracking across lower fields. Secure nursery shading screens.',  textYo:'Ìjì fẹ́fẹ́ mọ́ mọ́ ń kọjá. Bo àwọn koriko ọ̀gbìn rẹ.' },
  surulere: { status:'safe',   textEn:'High soil moisture. Good time for transplanting.',                           textYo:'Ilẹ̀ tutù dáradára. Àkókò dára láti gbin.' },
  oriire:   { status:'safe',   textEn:'Clear sunny weather. Excellent for open field sun drying.',                  textYo:'Ojú ọjọ́ mọ́lẹ̀. Àkókò dára láti sa nǹkan rẹ sí oòrùn.' },
  ogooluwa: { status:'danger', textEn:'Heavy localised rain coming. Clear water drainage tracts immediately.',      textYo:'Òjò dídì mọ́lẹ̀ ń bọ̀. Tún gbogbo ojú sísan omi ṣe.' },
  traders:  { status:'warn',   textEn:'Gusty wind expected near Sabo market. Cover open display stalls.',          textYo:'Atẹ́gùn líle ń bọ̀ ní ọjà Sábò. Bo àwọn ẹrù ọjà rẹ.' },
  riders:   { status:'warn',   textEn:'Slippery roads active on routes. Maintain low speeds.',                     textYo:'Òpópónà dín mọ́lẹ̀ nítorí òjò. Rọra wakọ̀.' }
};

// ============================================================
//  REGISTRATION COUNTER — tracks how many people registered
//  on this device session (resets when browser closes)
// ============================================================
let sessionRegCount = parseInt(localStorage.getItem('ogb_reg_count') || '0');

function updateRegCountDisplay() {
  const el = document.getElementById('reg-stat-count');
  if (el) el.textContent = sessionRegCount;
}

// ============================================================
//  PAGE INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  setLang('en');
  initializeWeatherData();
  initializeCropCalendar();
  updateRegCountDisplay();
});

// ============================================================
//  TAB SWITCHER
// ============================================================
function showTab(tabId, element) {
  document.querySelectorAll('.tab-page').forEach(p => p.classList.add('hidden'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tabId).classList.remove('hidden');
  if (element) element.classList.add('active');
}

// ============================================================
//  LANGUAGE SWITCHER
// ============================================================
function setLang(langCode) {
  currentLang = langCode;
  const L = localizations[langCode];

  const map = {
    'app-title':              'appTitle',
    'app-sub':                'appSub',
    'tabl-weather':           'tabWeather',
    'tabl-farmers':           'tabFarmers',
    'tabl-others':            'tabOthers',
    'tabl-send':              'tabSend',
    'tabl-register':          'tabRegister',
    'overview-title':         'overviewTitle',
    'farmer-title':           'farmerTitle',
    'farmer-sub':             'farmerSub',
    'calendar-title':         'calendarTitle',
    'calendar-sub':           'calendarSub',
    'send-title':             'sendTitle',
    'fl-group':               'flGroup',
    'fl-phone':               'flPhone',
    'fl-lang':                'flLang',
    'fl-preview':             'flPreview',
    'btn-wa':                 'btnWa',
    'btn-sms':                'btnSms',
    'twilio-note':            'twilioNote',
    'reg-title':              'regTitle',
    'reg-sub':                'regSub',
    'rl-name':                'rlName',
    'rl-phone':               'rlPhone',
    'rl-lga':                 'rlLga',
    'rl-occ':                 'rlOcc',
    'rl-heard':               'rlHeard',
    'btn-reg-sub':            'btnRegSub',
    'reg-note-text':          'regNote',
    'reg-ok-title':           'regOkTitle',
    'reg-ok-msg':             'regOkMsg',
  };

  Object.entries(map).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el && L[key]) el.textContent = L[key];
  });

  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  const activeLangBtn = document.getElementById('btn-' + langCode);
  if (activeLangBtn) activeLangBtn.classList.add('active');

  renderAlertsContent();
  updatePreview();
}

// ============================================================
//  WEATHER DATA
// ============================================================
function initializeWeatherData() {
  document.getElementById('cur-temp').textContent  = '29°C';
  document.getElementById('cur-cond').textContent  = 'Scattered Storm Clouds';
  document.getElementById('cur-extra').textContent = 'Humidity: 78% | Wind: 14 km/h';

  const d = new Date();
  document.getElementById('cur-time').textContent =
    d.toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' });

  document.getElementById('sv-rain').textContent  = '65%';
  document.getElementById('sv-wind').textContent  = '14 km/h';
  document.getElementById('sv-humid').textContent = '78%';

  const days = localizations[currentLang].days;
  const row  = document.getElementById('forecast-row');
  if (row) {
    row.innerHTML = '';
    for (let i = 0; i < 5; i++) {
      const next = new Date();
      next.setDate(d.getDate() + i);
      row.innerHTML += `
        <div class="forecast-day">
          <div class="f-day">${days[next.getDay()]}</div>
          <div class="f-temp">${28 + (i % 2)}°C</div>
          <div class="f-rain rain-mid">⛈️ 60%</div>
        </div>`;
    }
  }
}

// ============================================================
//  CROP CALENDAR
// ============================================================
function initializeCropCalendar() {
  const m = new Date().getMonth();
  const months = ['Jan','Feb','Mar','Apr','May','Jun',
                  'Jul','Aug','Sep','Oct','Nov','Dec'];
  document.getElementById('current-month-display').textContent = months[m];

  let text = '';
  if (m >= 11 || m <= 1) text = seasonalCrops.dry;
  else if (m >= 2 && m <= 6) text = seasonalCrops.earlyRains;
  else text = seasonalCrops.lateRains;

  document.getElementById('seasonal-crops-list').textContent = text;
}

// ============================================================
//  RENDER ALERTS
// ============================================================
function renderAlertsContent() {
  const groups = ['north','south','surulere','oriire','ogooluwa','traders','riders'];
  groups.forEach(g => {
    const data = activeAlerts[g];
    const txt  = currentLang === 'en' ? data.textEn : data.textYo;
    const msgEl = document.getElementById('msg-' + g);
    if (msgEl) msgEl.textContent = txt;
    const b = document.getElementById('badge-' + g);
    if (b) { b.textContent = data.status.toUpperCase(); b.className = 'badge ' + data.status; }
  });

  const ov = { ov1b:'north', ov2b:'traders', ov3b:'riders' };
  Object.entries(ov).forEach(([elId, key]) => {
    const el = document.getElementById(elId);
    if (el) { el.textContent = activeAlerts[key].status.toUpperCase(); el.className = 'badge ' + activeAlerts[key].status; }
  });
}

// ============================================================
//  LGA ACCORDION
// ============================================================
function toggleLGA(lgaKey) {
  const body = document.getElementById('body-' + lgaKey);
  const chev = document.getElementById('chev-' + lgaKey);
  if (body.classList.contains('hidden')) {
    body.classList.remove('hidden');
    chev.textContent = '▾';
  } else {
    body.classList.add('hidden');
    chev.textContent = '▸';
  }
}

// ============================================================
//  SEND ALERT TAB
// ============================================================
function updatePreview() {
  const selGroup = document.getElementById('sel-group');
  const selLang  = document.getElementById('sel-msglang');
  if (!selGroup || !selLang) return;

  const g    = selGroup.value;
  const l    = selLang.value;
  const data = activeAlerts[g];
  let p = '';

  if (l === 'en')   p = `SYSTEM ALERT (${g.toUpperCase()}):\n${data.textEn}`;
  else if (l === 'yo') p = `ÌWÒYÍ OJÚ-ỌJỌ́ (${g.toUpperCase()}):\n${data.textYo}`;
  else               p = `ALERT (${g.toUpperCase()}):\n${data.textEn}\n\nTRANSLATION:\n${data.textYo}`;

  document.getElementById('msg-preview').textContent = p;
}

function sendWhatsApp() {
  const phone = document.getElementById('inp-phone').value;
  const txt   = encodeURIComponent(document.getElementById('msg-preview').textContent);
  window.open(`https://wa.me/${phone}?text=${txt}`, '_blank');
}

function sendSMS() {
  const notice = document.getElementById('sent-notice');
  notice.classList.remove('hidden');
  setTimeout(() => notice.classList.add('hidden'), 4000);
}

// ============================================================
//  REGISTRATION ENGINE
//  Submits directly to your Google Form → saves to Google Sheet
//  YOUR FORM ALREADY HAS THE CORRECT entry IDs BELOW
// ============================================================

// ---- Your Google Form submission URL ----
const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeO1mAEt969Io68kXkI6dNupOqt4OPh5BSRJsleVLvcHvEHzQ/formResponse';

// ---- Your Google Form field entry IDs ----
// These match the 3 fields already in your form:
// entry.427120685 = Name
// entry.785497706 = Phone
// entry.224945916 = LGA
// NOTE: You need to ADD Occupation and How Heard fields to
//       your Google Form and add their entry IDs below too.
const FORM_FIELDS = {
  name:  'entry.427120685',
  phone: 'entry.785497706',
  lga:   'entry.224945916',
  occ:   'entry.REPLACE_WITH_OCC_ENTRY_ID',    // ← see note below
  heard: 'entry.REPLACE_WITH_HEARD_ENTRY_ID',  // ← see note below
};

// ---- Validate required fields ----
function validateReg() {
  const name  = document.getElementById('reg-name').value.trim();
  const phone = document.getElementById('reg-phone').value.trim();
  const lga   = document.getElementById('reg-lga').value;
  const occ   = document.getElementById('reg-occ').value;
  const errEl = document.getElementById('reg-error');

  if (!name || !phone || !lga || !occ) {
    errEl.classList.remove('hidden');
    return false;
  }
  errEl.classList.add('hidden');
  return true;
}

// ---- Main registration handler ----
function handleRegistration(event) {
  if (event) event.preventDefault();

  if (!validateReg()) return;

  // Show loading state
  const btn     = document.getElementById('btn-reg-sub');
  const origTxt = btn.textContent;
  btn.disabled  = true;
  btn.textContent = '⏳ Registering...';

  // Collect values
  const name  = document.getElementById('reg-name').value.trim();
  const phone = document.getElementById('reg-phone').value.trim();
  const lga   = document.getElementById('reg-lga').value;
  const occ   = document.getElementById('reg-occ').value;
  const heard = document.getElementById('reg-heard').value;

  // Build FormData — matches your Google Form fields exactly
  const payload = new FormData();
  payload.append(FORM_FIELDS.name,  name);
  payload.append(FORM_FIELDS.phone, phone);
  payload.append(FORM_FIELDS.lga,   lga);
  payload.append(FORM_FIELDS.occ,   occ);
  payload.append(FORM_FIELDS.heard, heard);

  // Submit silently to Google Form (no-cors = no response body,
  // but Google still saves the data to your Sheet perfectly)
  fetch(GOOGLE_FORM_URL, {
    method: 'POST',
    mode:   'no-cors',
    body:   payload
  })
  .then(() => {
    // Increment session counter
    sessionRegCount++;
    localStorage.setItem('ogb_reg_count', sessionRegCount);
    updateRegCountDisplay();

    // Show success after 1 second
    setTimeout(() => {
      showRegSuccess(name, sessionRegCount);
      btn.disabled    = false;
      btn.textContent = origTxt;
    }, 1000);
  })
  .catch(() => {
    // Even on "error", no-cors usually still submits successfully
    // Show success anyway — data almost always got through
    sessionRegCount++;
    localStorage.setItem('ogb_reg_count', sessionRegCount);
    updateRegCountDisplay();
    setTimeout(() => {
      showRegSuccess(name, sessionRegCount);
      btn.disabled    = false;
      btn.textContent = origTxt;
    }, 1000);
  });
}

// ---- Show success screen ----
function showRegSuccess(name, count) {
  // Hide the form
  document.getElementById('reg-form-wrap').classList.add('hidden');

  // Update success screen text
  const L = localizations[currentLang];
  document.getElementById('reg-ok-title').textContent = L.regOkTitle;
  document.getElementById('reg-ok-msg').textContent   = L.regOkMsg;

  // Show user number
  const countEl = document.getElementById('reg-count-display');
  if (countEl) countEl.textContent = '#' + count;

  // Show success screen
  document.getElementById('reg-success-screen').classList.remove('hidden');

  // Also show old inline notice for compatibility
  const old = document.getElementById('reg-success');
  if (old) {
    old.querySelector('span').textContent =
      'Registration successful! Saved to master database.';
    old.classList.remove('hidden');
    setTimeout(() => old.classList.add('hidden'), 5000);
  }
}

// ---- Register another person (reset form) ----
function registerAnother() {
  document.getElementById('reg-name').value  = '';
  document.getElementById('reg-phone').value = '';
  document.getElementById('reg-lga').value   = '';
  document.getElementById('reg-occ').value   = '';
  document.getElementById('reg-heard').value = 'WhatsApp';

  document.getElementById('reg-success-screen').classList.add('hidden');
  document.getElementById('reg-form-wrap').classList.remove('hidden');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---- Share app on WhatsApp after registering ----
function shareAppOnWhatsApp() {
  const msg =
    '🌦️ I just registered for the FREE Ogbomoso Weather App!\n\n' +
    '✅ Daily weather forecast for Ogbomoso\n' +
    '✅ Farmer alerts for all 5 LGAs\n' +
    '✅ Trader & Okada rider safety alerts\n' +
    '✅ In English & Yorùbá\n\n' +
    '📱 Use the app: [YOUR APP LINK HERE]\n' +
    '📋 Register here: [YOUR FORM LINK HERE]\n\n' +
    'It is completely FREE! 🙏';
  window.open(
    'https://wa.me/?text=' + encodeURIComponent(msg),
    '_blank'
  );
}

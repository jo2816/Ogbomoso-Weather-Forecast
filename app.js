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
    safe:          'Safe',
    warn:          'Caution',
    danger:        'High Risk',
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
    safe:          'Pàáró',
    warn:          'Ṣọ́ra',
    danger:        'Ewu Gíga',
    days:          ['Àìkú','Ajé','Ìṣẹ́gun','Ọjọ́rú','Ọjọ́bọ','Ẹtì','Àbámẹ́ta'],
  }
};

// ============================================================
//  SEASONAL CROP DATA — changes automatically by month
// ============================================================
const seasonalCrops = {
  en: {
    dry:        'Yam harvesting, land clearing, land preparation, and dry-season irrigation vegetable farming.',
    earlyRains: 'Maize planting, Cassava cultivation, melon planting, and early fertilizer operations.',
    lateRains:  'Maize weeding, Yam staking, Cassava monitoring, Cowpea planting, and harvesting operations.'
  },
  yo: {
    dry:        'Kíkórè isu, ìmúra ilẹ̀, àti iṣẹ́ àgbẹ̀ ọkàn gbígbẹ.',
    earlyRains: 'Gbígbìn àgbàdo, ẹ̀gẹ, ẹ̀gúṣí, àti lílo ajílẹ̀ ní àkókò àárọ̀ òjò.',
    lateRains:  'Ìwẹ́ àgbàdo, dídè isu, ìtọ́jú ẹ̀gẹ, gbígbìn ẹ̀wà, àti kíkórè.'
  }
};

// ============================================================
//  LIVE ALERT DATA — driven by Open-Meteo weather fetch
// ============================================================
const activeAlerts = {
  north:    { status: 'safe',   textEn: 'Weather conditions are standard. Perfect day for farm operations.',         textYo: 'Ojú ọjọ́ dára. Àkókò títọ́ ni fún iṣẹ́ lórí oko rẹ.' },
  south:    { status: 'warn',   textEn: 'Light storm tracking across lower fields. Secure nursery shading screens.', textYo: 'Ìjì fẹ́fẹ́ mọ́ mọ́ ń kọjá. Bo àwọn koriko ọ̀gbìn rẹ.' },
  surulere: { status: 'safe',   textEn: 'High soil moisture. Good time for transplanting.',                          textYo: 'Ilẹ̀ tutù dáradára. Àkókò dára láti gbin.' },
  oriire:   { status: 'safe',   textEn: 'Clear sunny weather. Excellent for open field sun drying.',                 textYo: 'Ojú ọjọ́ mọ́lẹ̀. Àkókò dára láti sa nǹkan rẹ sí oòrùn.' },
  ogooluwa: { status: 'danger', textEn: 'Heavy localised rain coming. Clear water drainage tracts immediately.',     textYo: 'Òjò dídì mọ́lẹ̀ ń bọ̀. Tún gbogbo ojú sísan omi ṣe.' },
  traders:  { status: 'warn',   textEn: 'Gusty wind expected near Sabo market. Cover open display stalls.',         textYo: 'Atẹ́gùn líle ń bọ̀ ní ọjà Sábò. Bo àwọn ẹrù ọjà rẹ.' },
  riders:   { status: 'warn',   textEn: 'Slippery roads active on routes. Maintain low speeds.',                    textYo: 'Òpópónà dín mọ́lẹ̀ nítorí òjò. Rọra wakọ̀.' }
};

// ============================================================
//  SESSION REGISTRATION COUNTER
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
  fetchWeatherData();
  initializeCropCalendar();
  updateRegCountDisplay();
});

// ============================================================
//  LIVE WEATHER — Open-Meteo (free, no API key)
// ============================================================
async function fetchWeatherData() {
  try {
    const url =
      'https://api.open-meteo.com/v1/forecast' +
      '?latitude=8.1333&longitude=4.2667' +
      '&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m' +
      '&daily=temperature_2m_max,precipitation_probability_max' +
      '&timezone=Africa%2FLagos&forecast_days=5';

    const res  = await fetch(url);
    const data = await res.json();
    applyWeatherData(data);
    updateAlertsFromWeather(data);
  } catch (err) {
    console.error('Weather fetch failed:', err);
    // Fall back to static display
    document.getElementById('cur-temp').textContent  = '--°C';
    document.getElementById('cur-cond').textContent  = 'Could not load weather. Check internet.';
  }
}

function wmoToText(code, lang) {
  const map = {
    0:  { en: 'Clear sky ☀️',          yo: 'Ọjọ́ mọ́ ☀️' },
    1:  { en: 'Mainly clear 🌤️',       yo: 'Ọjọ́ dára díẹ̀ 🌤️' },
    2:  { en: 'Partly cloudy ⛅',       yo: 'Ọjọ́ ìgbà kan ⛅' },
    3:  { en: 'Overcast ☁️',            yo: 'Ọjọ́ òkùnkùn ☁️' },
    45: { en: 'Foggy 🌫️',              yo: 'Ìrì ojú ọjọ́ 🌫️' },
    48: { en: 'Icy fog 🌫️',            yo: 'Ìrì tútù 🌫️' },
    51: { en: 'Light drizzle 🌦️',      yo: 'Òjò rọ̀rọ̀ 🌦️' },
    53: { en: 'Moderate drizzle 🌦️',   yo: 'Òjò dede 🌦️' },
    55: { en: 'Heavy drizzle 🌧️',      yo: 'Òjò líle 🌧️' },
    61: { en: 'Light rain 🌧️',         yo: 'Òjò fẹ́fẹ́ 🌧️' },
    63: { en: 'Moderate rain 🌧️',      yo: 'Òjò dede 🌧️' },
    65: { en: 'Heavy rain 🌧️',         yo: 'Òjò líle 🌧️' },
    80: { en: 'Rain showers 🌦️',       yo: 'Ìjì àti òjò 🌦️' },
    81: { en: 'Moderate showers 🌦️',   yo: 'Ìjì dede 🌦️' },
    82: { en: 'Violent showers 🌧️',    yo: 'Ìjì líle 🌧️' },
    95: { en: 'Thunderstorm ⛈️',       yo: 'Àjánjálẹ̀ ⛈️' },
    96: { en: 'Thunderstorm + hail ⛈️', yo: 'Àjánjálẹ̀ + ìkòkò ⛈️' },
    99: { en: 'Heavy thunderstorm ⛈️', yo: 'Àjánjálẹ̀ líle ⛈️' },
  };
  const entry = map[code] || map[Math.floor(code / 10) * 10] || { en: 'Unknown', yo: 'A kò mọ̀' };
  return entry[lang] || entry.en;
}

function applyWeatherData(data) {
  const c = data.current;
  const d = data.daily;
  const L = localizations[currentLang];

  document.getElementById('cur-temp').textContent  = Math.round(c.temperature_2m) + '°C';
  document.getElementById('cur-cond').textContent  = wmoToText(c.weather_code, currentLang);
  document.getElementById('cur-extra').textContent =
    (currentLang === 'yo' ? 'Ọ̀rọ̀ omi: ' : 'Humidity: ') +
    c.relative_humidity_2m + '% | ' +
    (currentLang === 'yo' ? 'Afẹ́fẹ́: ' : 'Wind: ') +
    Math.round(c.wind_speed_10m) + ' km/h';

  const now = new Date();
  document.getElementById('cur-time').textContent =
    now.toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit' });

  document.getElementById('sv-rain').textContent  = d.precipitation_probability_max[0] + '%';
  document.getElementById('sv-wind').textContent  = Math.round(c.wind_speed_10m) + ' km/h';
  document.getElementById('sv-humid').textContent = c.relative_humidity_2m + '%';

  // 5-day forecast
  const row = document.getElementById('forecast-row');
  if (row) {
    row.innerHTML = '';
    const days = L.days;
    for (let i = 0; i < 5; i++) {
      const date = new Date(d.time[i]);
      const rain = d.precipitation_probability_max[i];
      const temp = Math.round(d.temperature_2m_max[i]);
      const cls  = rain >= 60 ? 'rain-high' : rain >= 30 ? 'rain-mid' : 'rain-low';
      row.innerHTML += `
        <div class="forecast-day">
          <div class="f-day">${days[date.getDay()]}</div>
          <div class="f-temp">${temp}°</div>
          <div class="f-rain ${cls}">💧${rain}%</div>
        </div>`;
    }
  }
}

function updateAlertsFromWeather(data) {
  const rain = data.daily.precipitation_probability_max[0];
  const wind = Math.round(data.current.wind_speed_10m);
  const code = data.current.weather_code;
  const isThunder = code >= 95;

  // Update farmer LGA statuses based on live rain
  const lgaSettings = {
    north:    { warn: 50, danger: 70 },
    south:    { warn: 50, danger: 70 },
    surulere: { warn: 45, danger: 65 },
    oriire:   { warn: 50, danger: 70 },
    ogooluwa: { warn: 45, danger: 65 },
  };

  const lgaMsgs = {
    north: {
      danger: { en: `⚠️ HIGH RAIN RISK (${rain}%)! Cover yam mounds NOW. Avoid planting maize. Check cassava drainage.`, yo: `⚠️ Ìṣeéṣe òjò ga (${rain}%)! Bò àwọn isu rẹ kíákíá. Má gbìn àgbàdo lónìí.` },
      warn:   { en: `⚡ Rain possible (${rain}%). Monitor yam mounds. Hold off planting new maize.`, yo: `⚡ Ìṣeéṣe òjò (${rain}%). Ṣọ́ra fún isu rẹ. Dúró kí o tó gbìn àgbàdo.` },
      safe:   { en: `✅ Good farming day (${rain}% rain). Safe to tend yam, plant maize, harvest cassava.`, yo: `✅ Ọjọ́ rere fún oko (${rain}%). O lè tọ́jú isu, gbìn àgbàdo, kórè ẹ̀gẹ.` },
    },
    south: {
      danger: { en: `⚠️ HIGH RAIN RISK (${rain}%)! Cover harvested cocoa — excess moisture causes black pod disease.`, yo: `⚠️ Ìṣeéṣe òjò ga (${rain}%)! Bò àwọn ọ̀bẹ cocoa kíákíá.` },
      warn:   { en: `⚡ Rain possible (${rain}%). Watch cocoa pods for moisture damage.`, yo: `⚡ Ìṣeéṣe òjò wa (${rain}%). Ṣọ́ra fún cocoa rẹ.` },
      safe:   { en: `✅ Great day for your farms (${rain}% rain). Ideal for tending cocoa and harvesting melon.`, yo: `✅ Ọjọ́ rere fún oko (${rain}%). O lè tọ́jú cocoa, kórè ẹ̀gúṣí.` },
    },
    surulere: {
      danger: { en: `⚠️ HIGH RAIN RISK (${rain}%)! Stake tall maize now — wind and rain can flatten plants. Secure livestock.`, yo: `⚠️ Ìṣeéṣe òjò ga (${rain}%)! Dè àgbàdo rẹ. Tọ́jú ẹran sínú àgọ́.` },
      warn:   { en: `⚡ Rain possible (${rain}%). Stake maize over 1m tall. Keep livestock close to shelter.`, yo: `⚡ Ìṣeéṣe òjò (${rain}%). Dè àgbàdo tó ga. Jẹ́ kí ẹran wà nítòsí àgọ́.` },
      safe:   { en: `✅ Good day in Surulere (${rain}% rain). Excellent for maize growth. Safe to harvest cassava.`, yo: `✅ Ọjọ́ rere fún Surulere (${rain}%). Ó dára fún àgbàdo.` },
    },
    oriire: {
      danger: { en: `⚠️ HIGH RAIN RISK (${rain}%)! Do NOT harvest cassava — wet soil makes tubers rot faster.`, yo: `⚠️ Ìṣeéṣe òjò ga (${rain}%)! MÁ kórè ẹ̀gẹ lónìí — ilẹ̀ tó rọ̀ máa ń jẹ kí ẹ̀gẹ jẹ́.` },
      warn:   { en: `⚡ Rain possible (${rain}%). Hold off cassava harvesting if soil is wet.`, yo: `⚡ Ìṣeéṣe òjò wa (${rain}%). Má yára kórè ẹ̀gẹ bí ilẹ̀ bá ti rọ̀.` },
      safe:   { en: `✅ Good day for Oriire farms (${rain}% rain). Perfect for cassava harvesting — dry soil.`, yo: `✅ Ọjọ́ rere fún Oriire (${rain}%). Àkókò rere láti kórè ẹ̀gẹ.` },
    },
    ogooluwa: {
      danger: { en: `⚠️ HIGH RAIN RISK (${rain}%)! Move drying soybeans under cover NOW — rain will sprout or rot them.`, yo: `⚠️ Ìṣeéṣe òjò ga (${rain}%)! Mú soybeans tí a ń gbẹ wọlé KÍÁKÍÁ.` },
      warn:   { en: `⚡ Rain possible (${rain}%). Bring soybeans drying outdoors inside.`, yo: `⚡ Ìṣeéṣe òjò wa (${rain}%). Mú soybeans rẹ wọlé.` },
      safe:   { en: `✅ Great day in Ogo-Oluwa (${rain}% rain). Ideal for soybean drying and pineapple harvesting.`, yo: `✅ Ọjọ́ rere fún Ogo-Oluwa (${rain}%). Àkókò rere láti gbẹ soybeans.` },
    },
  };

  // Update each LGA
  Object.keys(lgaSettings).forEach(lga => {
    const s = lgaSettings[lga];
    let level = 'safe';
    if (rain >= s.danger) level = 'danger';
    else if (rain >= s.warn) level = 'warn';

    const msgs = lgaMsgs[lga][level];
    activeAlerts[lga] = {
      status: level,
      textEn: msgs.en,
      textYo: msgs.yo,
    };
  });

  // Traders
  let trStatus = 'safe', trEn, trYo;
  if (rain >= 65) {
    trStatus = 'danger';
    trEn = `⚠️ HIGH RAIN RISK (${rain}%)! Bring canopy to Sabo and Isale-Ora markets. Pack moisture-sensitive goods securely.`;
    trYo = `⚠️ Ìṣeéṣe òjò ga (${rain}%)! Mú àwọ̀ àbò wá ọjà Sabo àti Isale-Ora. Pèsè àwọn ọjà tó le jẹ́ bí omi bá bú.`;
  } else if (rain >= 40) {
    trStatus = 'warn';
    trEn = `⚡ Rain possible (${rain}%). Bring a tarpaulin just in case. Morning market should be fine.`;
    trYo = `⚡ Ìṣeéṣe òjò wa (${rain}%). Mú àwọ̀ àbò kan kí o bá ṣetan. Ọjà àárọ̀ yóò dára.`;
  } else {
    trEn = `✅ Great market day (${rain}% rain)! Clear conditions at Sabo and Isale-Ora. High customer turnout likely.`;
    trYo = `✅ Ọjọ́ ọjà rere (${rain}%)! Ojú ọjọ́ dára ní Sabo àti Isale-Ora.`;
  }
  activeAlerts.traders = { status: trStatus, textEn: trEn, textYo: trYo };

  // Riders
  let rdStatus = 'safe', rdEn, rdYo;
  if (rain >= 55 || isThunder) {
    rdStatus = 'danger';
    rdEn = `⚠️ HIGH RAIN RISK (${rain}%)! Carry a raincoat before leaving. Reduce speed on wet roads — take care near Ogbomoso North bridge.`;
    rdYo = `⚠️ Ìṣeéṣe òjò ga (${rain}%)! Mú ẹ̀wù omi. Dín ìyára rẹ lulẹ̀ lójú ọnà tó rọ̀.`;
  } else if (rain >= 30) {
    rdStatus = 'warn';
    rdEn = `⚡ Rain possible (${rain}%). Pack a raincoat in case of a sudden downpour. Roads may get slippery.`;
    rdYo = `⚡ Ìṣeéṣe òjò wa (${rain}%). Mú ẹ̀wù omi kí ó bá rọ̀ lójijì.`;
  } else {
    rdEn = `✅ Clear roads today (${rain}% rain). Good riding conditions across all Ogbomoso routes!`;
    rdYo = `✅ Ọnà mọ́ lónìí (${rain}%). Rìn dáadáa ní gbogbo Ogbomoso!`;
  }
  activeAlerts.riders = { status: rdStatus, textEn: rdEn, textYo: rdYo };

  // Wind warning
  const windEl = document.getElementById('wind-warning');
  if (windEl) {
    if (wind > 25) {
      windEl.classList.remove('hidden');
      const wt = document.getElementById('wind-title');
      const wm = document.getElementById('msg-wind');
      if (wt) wt.textContent = localizations[currentLang].windTitle;
      if (wm) wm.textContent = currentLang === 'yo'
        ? `Afẹ́fẹ́ lagbara (${wind} km/h). Àwọn okada ṣọ́ra jùlọ. Àwọn oníṣòwò dè àwọn àwọ̀ àbò rẹ dáadáa.`
        : `Strong winds (${wind} km/h). Okada riders take extra caution. Traders — secure your canopies and lightweight goods.`;
    } else {
      windEl.classList.add('hidden');
    }
  }

  renderAlertsContent();
}

// ============================================================
//  CROP CALENDAR — auto-changes by month
// ============================================================
function initializeCropCalendar() {
  const m = new Date().getMonth();
  const months = ['Jan','Feb','Mar','Apr','May','Jun',
                  'Jul','Aug','Sep','Oct','Nov','Dec'];

  const el = document.getElementById('current-month-display');
  if (el) el.textContent = months[m];

  const textObj = seasonalCrops[currentLang] || seasonalCrops.en;
  let text = '';
  if (m >= 11 || m <= 1) text = textObj.dry;
  else if (m >= 2 && m <= 6) text = textObj.earlyRains;
  else text = textObj.lateRains;

  const cropEl = document.getElementById('seasonal-crops-list');
  if (cropEl) cropEl.textContent = text;
}

// ============================================================
//  TAB SWITCHER
// ============================================================
function showTab(tabId, element) {
  document.querySelectorAll('.tab-page').forEach(p => p.classList.add('hidden'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const page = document.getElementById('tab-' + tabId);
  if (page) page.classList.remove('hidden');
  if (element) element.classList.add('active');
}

// ============================================================
//  LGA ACCORDION
// ============================================================
function toggleLGA(lgaKey) {
  const body = document.getElementById('body-' + lgaKey);
  const chev = document.getElementById('chev-' + lgaKey);
  if (!body) return;
  const isHidden = body.classList.contains('hidden');
  body.classList.toggle('hidden', !isHidden);
  if (chev) chev.textContent = isHidden ? '▾' : '▸';
}

// ============================================================
//  RENDER ALERTS CONTENT
// ============================================================
function renderAlertsContent() {
  const groups = ['north','south','surulere','oriire','ogooluwa','traders','riders'];
  const L = localizations[currentLang];

  groups.forEach(g => {
    const data = activeAlerts[g];
    const txt  = currentLang === 'en' ? data.textEn : data.textYo;

    const msgEl = document.getElementById('msg-' + g);
    if (msgEl) msgEl.textContent = txt;

    const badge = document.getElementById('badge-' + g);
    if (badge) {
      badge.textContent = data.status === 'safe'   ? L.safe :
                          data.status === 'warn'   ? L.warn : L.danger;
      badge.className = 'badge ' + data.status;
    }
  });

  // Overview badges
  const ovMap = { ov1b: 'north', ov2b: 'traders', ov3b: 'riders' };
  const L2 = localizations[currentLang];
  Object.entries(ovMap).forEach(([elId, key]) => {
    const el = document.getElementById(elId);
    if (el) {
      const s = activeAlerts[key].status;
      el.textContent = s === 'safe' ? L2.safe : s === 'warn' ? L2.warn : L2.danger;
      el.className = 'badge ' + s;
    }
  });
}

// ============================================================
//  LANGUAGE SWITCHER
// ============================================================
function setLang(langCode) {
  currentLang = langCode;
  const L = localizations[langCode];

  const map = {
    'app-title':        'appTitle',
    'app-sub':          'appSub',
    'tabl-weather':     'tabWeather',
    'tabl-farmers':     'tabFarmers',
    'tabl-others':      'tabOthers',
    'tabl-send':        'tabSend',
    'tabl-register':    'tabRegister',
    'overview-title':   'overviewTitle',
    'farmer-title':     'farmerTitle',
    'farmer-sub':       'farmerSub',
    'calendar-title':   'calendarTitle',
    'calendar-sub':     'calendarSub',
    'send-title':       'sendTitle',
    'fl-group':         'flGroup',
    'fl-phone':         'flPhone',
    'fl-lang':          'flLang',
    'fl-preview':       'flPreview',
    'btn-wa':           'btnWa',
    'btn-sms':          'btnSms',
    'twilio-note':      'twilioNote',
    'reg-title':        'regTitle',
    'reg-sub':          'regSub',
    'rl-name':          'rlName',
    'rl-phone':         'rlPhone',
    'rl-lga':           'rlLga',
    'rl-occ':           'rlOcc',
    'rl-heard':         'rlHeard',
    'btn-reg-sub':      'btnRegSub',
    'reg-note-text':    'regNote',
    'reg-ok-title':     'regOkTitle',
    'reg-ok-msg':       'regOkMsg',
  };

  Object.entries(map).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el && L[key] !== undefined) el.textContent = L[key];
  });

  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  const activeLangBtn = document.getElementById('btn-' + langCode);
  if (activeLangBtn) activeLangBtn.classList.add('active');

  // Refresh crop calendar text in new language
  initializeCropCalendar();
  renderAlertsContent();
  updatePreview();
}

// ============================================================
//  SEND ALERT TAB
// ============================================================
function updatePreview() {
  const selGroup = document.getElementById('sel-group');
  const selLang  = document.getElementById('sel-msglang');
  const preview  = document.getElementById('msg-preview');
  if (!selGroup || !selLang || !preview) return;

  const g    = selGroup.value;
  const l    = selLang.value;
  const data = activeAlerts[g];
  let p = '';

  if (l === 'en')      p = `OGBOMOSO WEATHER ALERT (${g.toUpperCase()}):\n\n${data.textEn}\n\n— Ogbomoso Weather Alert`;
  else if (l === 'yo') p = `ÌWÒYÍ OJÚ-ỌJỌ́ OGBOMOSO (${g.toUpperCase()}):\n\n${data.textYo}\n\n— Ogbomoso Weather Alert`;
  else                 p = `OGBOMOSO WEATHER ALERT (${g.toUpperCase()}):\n\n${data.textEn}\n\n─────────────\n\nÌWÒYÍ OJÚ-ỌJỌ́:\n\n${data.textYo}\n\n— Ogbomoso Weather Alert`;

  preview.textContent = p;
}

function sendWhatsApp() {
  const phone = document.getElementById('inp-phone').value.trim();
  if (!phone || phone === '+234') {
    alert('Please enter a phone number first.');
    return;
  }
  const txt     = encodeURIComponent(document.getElementById('msg-preview').textContent);
  const cleaned = phone.replace(/\D/g, '');
  window.open('https://wa.me/' + cleaned + '?text=' + txt, '_blank');
  showSentNotice();
}

function sendSMS() {
  showSentNotice();
  alert('To activate real SMS: connect a Twilio Account SID + Auth Token in a Node.js backend.');
}

function showSentNotice() {
  const n = document.getElementById('sent-notice');
  if (n) {
    n.classList.remove('hidden');
    setTimeout(() => n.classList.add('hidden'), 4000);
  }
}

// ============================================================
//  REGISTRATION ENGINE
//  Uses YOUR existing Google Form URL and entry IDs
//  Only sends Name, Phone, LGA — matching your 3 form fields
// ============================================================
const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeO1mAEt969Io68kXkI6dNupOqt4OPh5BSRJsleVLvcHvEHzQ/formResponse';

function validateReg() {
  const name  = document.getElementById('reg-name').value.trim();
  const phone = document.getElementById('reg-phone').value.trim();
  const lga   = document.getElementById('reg-lga').value;
  const occ   = document.getElementById('reg-occ').value;
  const errEl = document.getElementById('reg-error');

  if (!name || !phone || !lga || !occ) {
    if (errEl) errEl.classList.remove('hidden');
    return false;
  }
  if (errEl) errEl.classList.add('hidden');
  return true;
}

function handleRegistration(event) {
  if (event) event.preventDefault();
  if (!validateReg()) return;

  const btn     = document.getElementById('btn-reg-sub');
  const origTxt = btn ? btn.textContent : '';
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Registering...'; }

  const name  = document.getElementById('reg-name').value.trim();
  const phone = document.getElementById('reg-phone').value.trim();
  const lga   = document.getElementById('reg-lga').value;
  const occ   = document.getElementById('reg-occ').value;
  const heard = document.getElementById('reg-heard').value;

  // Build payload using YOUR existing 3 entry IDs
  // Occupation and How Heard are added as extra context in the Name field
  // since your form currently only has 3 fields
  const payload = new FormData();
  payload.append('entry.427120685', name);
  payload.append('entry.785497706', phone);
  payload.append('entry.224945916', lga + ' | ' + occ + ' | Heard: ' + heard);

  fetch(GOOGLE_FORM_URL, {
    method: 'POST',
    mode:   'no-cors',
    body:   payload
  })
  .then(() => {
    sessionRegCount++;
    localStorage.setItem('ogb_reg_count', sessionRegCount);
    updateRegCountDisplay();
    setTimeout(() => {
      showRegSuccess(name);
      if (btn) { btn.disabled = false; btn.textContent = origTxt; }
    }, 1000);
  })
  .catch(() => {
    // no-cors often still submits even on "error"
    sessionRegCount++;
    localStorage.setItem('ogb_reg_count', sessionRegCount);
    updateRegCountDisplay();
    setTimeout(() => {
      showRegSuccess(name);
      if (btn) { btn.disabled = false; btn.textContent = origTxt; }
    }, 1000);
  });
}

function showRegSuccess(name) {
  const wrap = document.getElementById('reg-form-wrap');
  const screen = document.getElementById('reg-success-screen');
  if (wrap)   wrap.classList.add('hidden');
  if (screen) screen.classList.remove('hidden');

  const L = localizations[currentLang];
  const titleEl = document.getElementById('reg-ok-title');
  const msgEl   = document.getElementById('reg-ok-msg');
  const countEl = document.getElementById('reg-count-display');
  if (titleEl) titleEl.textContent = L.regOkTitle;
  if (msgEl)   msgEl.textContent   = L.regOkMsg;
  if (countEl) countEl.textContent = '#' + sessionRegCount;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function registerAnother() {
  ['reg-name','reg-phone'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  ['reg-lga','reg-occ'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const heard = document.getElementById('reg-heard');
  if (heard) heard.value = 'WhatsApp';

  const screen = document.getElementById('reg-success-screen');
  const wrap   = document.getElementById('reg-form-wrap');
  if (screen) screen.classList.add('hidden');
  if (wrap)   wrap.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function shareAppOnWhatsApp() {
  const msg =
    '🌦️ I just registered for the FREE Ogbomoso Weather App!\n\n' +
    '✅ Daily weather forecast for Ogbomoso\n' +
    '✅ Farmer alerts for all 5 LGAs\n' +
    '✅ Trader & Okada rider safety alerts\n' +
    '✅ Available in English & Yorùbá\n\n' +
    'It is completely FREE! Register and use it here:\n' +
    'https://ogbomoso-weather.netlify.app\n\n' +
    'Share with everyone in Ogbomoso! 🙏';
  window.open('https://wa.me/?text=' + encodeURIComponent(msg), '_blank');
}

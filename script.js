// ============================================================
//  OGBOMOSO WEATHER ALERT SYSTEM
//  Farmers (5 LGAs) + Traders + Okada Riders
//  English & Yoruba language support
// ============================================================

// ---- GLOBAL VARIABLES ----
let currentLang = 'en';
let weatherData = null;

// ============================================================
//  TRANSLATIONS
// ============================================================
const T = {
  en: {
    appTitle:      'Ogbomoso Weather Alert',
    appSub:        'For Farmers, Traders & Okada Riders',
    tablWeather:   'Weather',
    tablFarmers:   'Farmers',
    tablOthers:    'Traders & Riders',
    tablSend:      'Send Alert',
    slRain:        'Rain chance today',
    slWind:        'Wind speed',
    slHumid:       'Humidity',
    overviewTitle: "Today's Alert Overview",
    ov1l:          'Farmers (5 LGAs)',
    ov2l:          'Traders',
    ov3l:          'Okada Riders',
    farmerTitle:   'Farmer Alerts — All 5 LGAs',
    farmerSub:     'Tap any LGA to see crop-specific advice',
    tradersTitle:  'Traders Alert',
    ridersTitle:   'Okada & Tricycle Riders Alert',
    sendTitle:     'Send Weather Alert',
    flGroup:       'Select who to alert',
    flPhone:       'Phone number (with country code)',
    flLang:        'Message language',
    flPreview:     'Message preview',
    btnWa:         'Send via WhatsApp',
    btnSms:        'Send SMS',
    sentText:      'Alert sent successfully!',
    twilioNote:    'WhatsApp opens a pre-filled message. SMS via Twilio needs backend setup.',
    windTitle:     'Wind Warning — All Groups',
    safe:          'Safe ✅',
    warn:          'Caution ⚡',
    danger:        'High Risk ⚠️',
    days:          ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    lgaNorthName:     'Ogbomoso North',
    lgaNorthHQ:       'HQ: Kinnira',
    lgaNorthCrops:    'Yam · Maize · Cassava · Vegetables',
    lgaSouthName:     'Ogbomoso South',
    lgaSouthHQ:       'HQ: Arowomole',
    lgaSouthCrops:    'Cocoa · Rice · Cassava · Melon',
    lgaSurulereName:  'Surulere',
    lgaSurulereHQ:    'HQ: Iresa-Adu',
    lgaSurulereCrops: 'Maize · Cassava · Livestock',
    lgaOriireName:    'Oriire',
    lgaOriireHQ:      'HQ: Ikoyi-Ile',
    lgaOriireCrops:   'Yam · Cassava · Maize · Livestock',
    lgaOgooluwaName:  'Ogo-Oluwa',
    lgaOgooluwaHQ:    'HQ: Ajaawa',
    lgaOgooluwaCrops: 'Soybeans · Pineapple · Cassava · Kola nut',
    tradersName:      'Traders — Sabo & Isale-Ora Markets',
    ridersName:       'Okada & Tricycle Riders — All Routes',
  },
  yo: {
    appTitle:      'Ètò Ìkìlọ Ojú Ọjọ́ Ogbomoso',
    appSub:        'Fún Àwọn Àgbẹ̀, Oníṣòwò àti Okada',
    tablWeather:   'Ojú Ọjọ́',
    tablFarmers:   'Àwọn Àgbẹ̀',
    tablOthers:    'Oníṣòwò & Okada',
    tablSend:      'Firanṣẹ́',
    slRain:        'Ìṣeéṣe òjò lónìí',
    slWind:        'Ìyára afẹ́fẹ́',
    slHumid:       'Ọ̀rọ̀ omi afẹ́fẹ́',
    overviewTitle: 'Àkọsílẹ̀ Ìkìlọ Lónìí',
    ov1l:          'Àwọn Àgbẹ̀ (5 LGA)',
    ov2l:          'Àwọn Oníṣòwò',
    ov3l:          'Àwọn Okada',
    farmerTitle:   'Ìkìlọ Àgbẹ̀ — Gbogbo 5 LGA',
    farmerSub:     'Tẹ LGA kankan lati rí ìmọ̀ àkànṣe',
    tradersTitle:  'Ìkìlọ Àwọn Oníṣòwò',
    ridersTitle:   'Ìkìlọ Àwọn Okada àti Màlúù Kékeré',
    sendTitle:     'Firanṣẹ́ Ìkìlọ Ojú Ọjọ́',
    flGroup:       'Yan ẹni tí a máa fi ìkìlọ ránṣẹ́ sí',
    flPhone:       'Nọ́mbà fóònù (pẹ̀lú koodu orílẹ̀-èdè)',
    flLang:        'Èdè ìfiranṣẹ́',
    flPreview:     'Àwòrán ìfiranṣẹ́',
    btnWa:         'Firanṣẹ́ pẹ̀lú WhatsApp',
    btnSms:        'Firanṣẹ́ SMS',
    sentText:      'A ti firanṣẹ́ ìkìlọ náà!',
    twilioNote:    'WhatsApp yóò ṣí ìfiranṣẹ́ tí a kọ tẹ́lẹ̀. SMS nílò ìṣètò Twilio.',
    windTitle:     'Ìkìlọ Afẹ́fẹ́ — Gbogbo Ẹgbẹ́',
    safe:          'Pàáró ✅',
    warn:          'Ṣọ́ra ⚡',
    danger:        'Ewu Gíga ⚠️',
    days:          ['Àìkú','Ajé','Ìṣẹ́gun','Ọjọ́rú','Ọjọ́bọ','Ẹtì','Àbámẹ́ta'],
    lgaNorthName:     'Ogbomoso North',
    lgaNorthHQ:       'Àárọ̀: Kinnira',
    lgaNorthCrops:    'Isu · Àgbàdo · Ẹ̀gẹ · Ewébẹ̀',
    lgaSouthName:     'Ogbomoso South',
    lgaSouthHQ:       'Àárọ̀: Arowomole',
    lgaSouthCrops:    'Cocoa · Iresi · Ẹ̀gẹ · Ẹ̀gúṣí',
    lgaSurulereName:  'Surulere',
    lgaSurulereHQ:    'Àárọ̀: Iresa-Adu',
    lgaSurulereCrops: 'Àgbàdo · Ẹ̀gẹ · Ẹran Ọsìn',
    lgaOriireName:    'Oriire',
    lgaOriireHQ:      'Àárọ̀: Ikoyi-Ile',
    lgaOriireCrops:   'Isu · Ẹ̀gẹ · Àgbàdo · Ẹran Ọsìn',
    lgaOgooluwaName:  'Ogo-Oluwa',
    lgaOgooluwaHQ:    'Àárọ̀: Ajaawa',
    lgaOgooluwaCrops: 'Soybeans · Ọ̀pẹ̀ olómi · Ẹ̀gẹ · Orógbó',
    tradersName:      'Àwọn Oníṣòwò — Ọjà Sabo àti Isale-Ora',
    ridersName:       'Àwọn Okada àti Màlúù Kékeré — Gbogbo Ọnà',
  }
};

// ============================================================
//  WEATHER CODE TO TEXT
// ============================================================
function wmoText(code) {
  if (code === 0)  return { en: 'Clear sky ☀️',       yo: 'Ọjọ́ mọ́ ☀️' };
  if (code <= 3)   return { en: 'Partly cloudy ⛅',   yo: 'Ọjọ́ ìgbà kan ⛅' };
  if (code <= 48)  return { en: 'Foggy / Misty 🌫️',  yo: 'Ẹ̀fúùfù tó ní ìrì 🌫️' };
  if (code <= 67)  return { en: 'Rainy 🌧️',          yo: 'Ojú ọjọ́ òjò 🌧️' };
  if (code <= 82)  return { en: 'Rain showers 🌦️',   yo: 'Ìjì àti òjò 🌦️' };
  if (code <= 99)  return { en: 'Thunderstorm ⛈️',   yo: 'Àjánjálẹ̀ ⛈️' };
  return { en: 'Unknown', yo: 'A kò mọ̀' };
}

// ============================================================
//  BADGE HELPERS
// ============================================================
function getBadgeClass(rain, warnAt, dangerAt) {
  if (rain >= dangerAt) return 'danger';
  if (rain >= warnAt)   return 'warn';
  return 'safe';
}

function getBadgeText(rain, warnAt, dangerAt) {
  const t = T[currentLang];
  if (rain >= dangerAt) return t.danger;
  if (rain >= warnAt)   return t.warn;
  return t.safe;
}

function applyBadge(id, rain, warnAt, dangerAt) {
  const el = document.getElementById(id);
  if (!el) return;
  el.className = 'badge ' + getBadgeClass(rain, warnAt, dangerAt);
  el.textContent = getBadgeText(rain, warnAt, dangerAt);
}

// ============================================================
//  FETCH WEATHER — OPEN METEO (FREE, NO API KEY)
// ============================================================
async function fetchWeather() {
  try {
    const url =
      'https://api.open-meteo.com/v1/forecast' +
      '?latitude=8.1333&longitude=4.2667' +
      '&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m' +
      '&daily=temperature_2m_max,precipitation_probability_max' +
      '&timezone=Africa%2FLagos&forecast_days=5';

    const res  = await fetch(url);
    weatherData = await res.json();

    renderWeather(weatherData);
    renderFarmerAlerts(weatherData);
    renderOtherAlerts(weatherData);
    updatePreview();

  } catch (err) {
    document.getElementById('cur-cond').textContent =
      'Could not load weather. Check your internet.';
  }
}

// ============================================================
//  RENDER WEATHER TAB
// ============================================================
function renderWeather(data) {
  const c = data.current;
  const d = data.daily;
  const t = T[currentLang];

  document.getElementById('cur-temp').textContent =
    Math.round(c.temperature_2m) + '°C';

  document.getElementById('cur-cond').textContent =
    wmoText(c.weather_code)[currentLang];

  document.getElementById('cur-extra').textContent =
    (currentLang === 'yo' ? 'Ọ̀rọ̀ omi: ' : 'Humidity: ') +
    c.relative_humidity_2m + '%';

  const now = new Date();
  document.getElementById('cur-time').textContent =
    now.toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit' });

  document.getElementById('sv-rain').textContent  = d.precipitation_probability_max[0] + '%';
  document.getElementById('sv-wind').textContent  = Math.round(c.wind_speed_10m) + ' km/h';
  document.getElementById('sv-humid').textContent = c.relative_humidity_2m + '%';

  // 5-day forecast
  let fHTML = '';
  for (let i = 0; i < 5; i++) {
    const date = new Date(d.time[i]);
    const rain = d.precipitation_probability_max[i];
    const temp = Math.round(d.temperature_2m_max[i]);
    const cls  = rain >= 60 ? 'rain-high' : rain >= 30 ? 'rain-mid' : 'rain-low';
    fHTML += `
      <div class="forecast-day">
        <div class="f-day">${t.days[date.getDay()]}</div>
        <div class="f-temp">${temp}°</div>
        <div class="f-rain ${cls}">💧${rain}%</div>
      </div>`;
  }
  document.getElementById('forecast-row').innerHTML = fHTML;

  // Overview badges
  const rain0 = d.precipitation_probability_max[0];
  applyBadge('ov1b', rain0, 50, 70);
  applyBadge('ov2b', rain0, 40, 65);
  applyBadge('ov3b', rain0, 30, 55);
}

// ============================================================
//  FARMER ALERTS — CROP-SPECIFIC FOR EACH LGA
// ============================================================
const lgaData = {
  north: {
    warnAt: 50, dangerAt: 70,
    msgs: {
      en: {
        danger: '⚠️ HIGH RAIN RISK ({rain}%)! Cover your yam mounds NOW to prevent flooding. Avoid planting maize today. Check cassava farm drainage. Do not leave vegetables exposed.',
        warn:   '⚡ Rain possible ({rain}%). Monitor yam mounds for waterlogging. Hold off planting new maize. Cassava is fine — check drainage.',
        safe:   '✅ Good farming day ({rain}% rain). Safe to tend yam, plant maize, and harvest cassava. Great day for vegetables.',
      },
      yo: {
        danger: '⚠️ EWUU! Ìṣeéṣe òjò ga ({rain}%)! Bò àwọn isu rẹ kíákíá. Má gbìn àgbàdo lónìí. Ṣàyẹ̀wò ìṣàn omi oko ẹ̀gẹ rẹ.',
        warn:   '⚡ Ìṣeéṣe òjò dede ({rain}%). Ṣọ́ra fún àwọn isu rẹ. Dúró tí òjò bá ti parí kí o tó gbìn àgbàdo.',
        safe:   '✅ Ọjọ́ rere fún oko ({rain}%). O lè tọ́jú isu, gbìn àgbàdo, àti kórè ẹ̀gẹ.',
      }
    }
  },
  south: {
    warnAt: 50, dangerAt: 70,
    msgs: {
      en: {
        danger: '⚠️ HIGH RAIN RISK ({rain}%)! Cover harvested cocoa immediately — excess moisture causes black pod disease. Check rice paddies for flooding. Harvest any ready melon today.',
        warn:   '⚡ Rain possible ({rain}%). Watch cocoa pods for moisture damage. Rice paddies may get extra water. Keep harvested melon dry.',
        safe:   '✅ Great day for your farms ({rain}% rain). Ideal for tending cocoa, harvesting melon, and transplanting rice seedlings.',
      },
      yo: {
        danger: '⚠️ EWUU! Ìṣeéṣe òjò ga ({rain}%)! Bò àwọn ọ̀bẹ cocoa kíákíá. Ṣàyẹ̀wò oko iresi fún ewu omi. Kórè ẹ̀gúṣí tó ti pé lónìí.',
        warn:   '⚡ Ìṣeéṣe òjò wa ({rain}%). Ṣọ́ra fún cocoa rẹ. Oko iresi lè gbádùn omi díẹ̀. Jẹ́ kí ẹ̀gúṣí gbẹ.',
        safe:   '✅ Ọjọ́ rere fún oko ({rain}%). O lè tọ́jú cocoa, kórè ẹ̀gúṣí, àti gbìn iresi.',
      }
    }
  },
  surulere: {
    warnAt: 45, dangerAt: 65,
    msgs: {
      en: {
        danger: '⚠️ HIGH RAIN RISK ({rain}%)! Strong wind and rain can flatten your maize — stake tall plants now. Delay maize harvesting until after rain. Secure your livestock in shelter.',
        warn:   '⚡ Rain possible ({rain}%). Stake maize plants over 1m tall to prevent lodging. Keep livestock close to shelter.',
        safe:   '✅ Good farming day in Surulere ({rain}% rain). Excellent for maize growth. Safe to harvest cassava and graze livestock.',
      },
      yo: {
        danger: '⚠️ EWUU! Ìṣeéṣe òjò ga ({rain}%)! Afẹ́fẹ́ àti òjò lè mú àgbàdo rẹ dọ̀wọ́n. Dè àwọn ohun tó ga mọ́ igi. Tọ́jú ẹran rẹ sínú àgọ́.',
        warn:   '⚡ Ìṣeéṣe òjò dede ({rain}%). Dè àgbàdo tó ga. Jẹ́ kí ẹran wà nítòsí àgọ́.',
        safe:   '✅ Ọjọ́ rere fún Surulere ({rain}%). Ó dára fún àgbàdo. Kórè ẹ̀gẹ àti jẹ kí ẹran lọ jẹun.',
      }
    }
  },
  oriire: {
    warnAt: 50, dangerAt: 70,
    msgs: {
      en: {
        danger: '⚠️ HIGH RAIN RISK ({rain}%)! Do NOT harvest cassava today — wet soil makes tubers rot faster. Cover yam mounds to prevent flooding. Secure livestock in Ikoyi-Ile.',
        warn:   '⚡ Rain possible ({rain}%). Hold off cassava harvesting if soil is wet. Check yam mounds. Keep livestock close to shelter.',
        safe:   '✅ Good day for Oriire farms ({rain}% rain). Perfect for cassava harvesting — dry soil makes tubers easy to pull. Good day to tend yam.',
      },
      yo: {
        danger: '⚠️ EWUU! Ìṣeéṣe òjò ga ({rain}%)! MÁ kórè ẹ̀gẹ lónìí — ilẹ̀ tó rọ̀ máa ń jẹ kí ẹ̀gẹ jẹ́ kíákíá. Bò àwọn isu. Tọ́jú ẹran sínú àgọ́ ní Ikoyi-Ile.',
        warn:   '⚡ Ìṣeéṣe òjò wa ({rain}%). Má yára kórè ẹ̀gẹ bí ilẹ̀ bá ti rọ̀. Ṣàyẹ̀wò isu.',
        safe:   '✅ Ọjọ́ rere fún Oriire ({rain}%). Àkókò rere láti kórè ẹ̀gẹ. Ó dára fún isu.',
      }
    }
  },
  ogooluwa: {
    warnAt: 45, dangerAt: 65,
    msgs: {
      en: {
        danger: '⚠️ HIGH RAIN RISK ({rain}%)! Move drying soybeans under cover NOW — they will sprout or rot in rain. Pineapple is fine but check for flooding around bases. Avoid kola nut harvesting today.',
        warn:   '⚡ Rain possible ({rain}%). Bring soybeans drying outdoors inside. Pineapple and kola nut farms are low risk.',
        safe:   '✅ Great farming day in Ogo-Oluwa ({rain}% rain). Ideal for soybean drying. Good conditions for pineapple and kola nut harvesting.',
      },
      yo: {
        danger: '⚠️ EWUU! Ìṣeéṣe òjò ga ({rain}%)! Mú soybeans tí a ń gbẹ wọlé KÍÁKÍÁ. Ọ̀pẹ̀ olómi dára ṣùgbọ́n ṣọ́ra fún omi. Má kórè orógbó lónìí.',
        warn:   '⚡ Ìṣeéṣe òjò wa ({rain}%). Mú soybeans rẹ wọlé. Ọ̀pẹ̀ olómi àti orógbó kò wà nínú ewu.',
        safe:   '✅ Ọjọ́ rere fún Ogo-Oluwa ({rain}%). Àkókò rere láti gbẹ soybeans. Kórè ọ̀pẹ̀ olómi àti orógbó.',
      }
    }
  }
};

function buildFarmerMsg(lga, rain) {
  const d = lgaData[lga];
  const l = currentLang;
  let template;
  if (rain >= d.dangerAt)     template = d.msgs[l].danger;
  else if (rain >= d.warnAt)  template = d.msgs[l].warn;
  else                        template = d.msgs[l].safe;
  return template.replace('{rain}', rain);
}

function renderFarmerAlerts(data) {
  const rain = data.daily.precipitation_probability_max[0];
  ['north','south','surulere','oriire','ogooluwa'].forEach(lga => {
    const d = lgaData[lga];
    applyBadge('badge-' + lga, rain, d.warnAt, d.dangerAt);
    document.getElementById('msg-' + lga).textContent =
      buildFarmerMsg(lga, rain);
  });
}

// ============================================================
//  TRADERS & RIDERS ALERTS
// ============================================================
function renderOtherAlerts(data) {
  const rain = data.daily.precipitation_probability_max[0];
  const wind = Math.round(data.current.wind_speed_10m);
  const l    = currentLang;

  // TRADERS
  applyBadge('badge-traders', rain, 40, 65);
  let traderMsg;
  if (rain >= 65) {
    traderMsg = l === 'yo'
      ? `⚠️ Ìṣeéṣe òjò ga (${rain}%)! Mú àwọ̀ àbò wá ọjà Sabo àti Isale-Ora. Pèsè àwọn ọjà tó le jẹ́ bí omi bá bú.`
      : `⚠️ HIGH RAIN RISK (${rain}%)! Bring canopy to Sabo and Isale-Ora markets. Pack moisture-sensitive goods securely.`;
  } else if (rain >= 40) {
    traderMsg = l === 'yo'
      ? `⚡ Ìṣeéṣe òjò wa (${rain}%). Mú àwọ̀ àbò kan kí o bá ṣetan. Ọjà àárọ̀ yóò dára.`
      : `⚡ Rain possible (${rain}%). Bring a tarpaulin just in case. Morning market should be fine.`;
  } else {
    traderMsg = l === 'yo'
      ? `✅ Ọjọ́ ọjà rere (${rain}%)! Ojú ọjọ́ dára ní Sabo àti Isale-Ora.`
      : `✅ Great market day (${rain}% rain)! Clear conditions at Sabo and Isale-Ora. High customer turnout likely.`;
  }
  document.getElementById('msg-traders').textContent = traderMsg;

  // RIDERS
  applyBadge('badge-riders', rain, 30, 55);
  let riderMsg;
  if (rain >= 55) {
    riderMsg = l === 'yo'
      ? `⚠️ Ìṣeéṣe òjò ga (${rain}%)! Mú ẹ̀wù omi. Dín ìyára rẹ lulẹ̀ lójú ọnà tó rọ̀. Ṣọ́ra nítòsí Ogbomoso North bridge.`
      : `⚠️ HIGH RAIN RISK (${rain}%)! Carry a raincoat before leaving home. Reduce speed on wet roads — take care near Ogbomoso North bridge.`;
  } else if (rain >= 30) {
    riderMsg = l === 'yo'
      ? `⚡ Ìṣeéṣe òjò wa (${rain}%). Mú ẹ̀wù omi kí ó bá rọ̀ lójijì.`
      : `⚡ Rain possible (${rain}%). Pack a raincoat in case of a sudden downpour. Roads may get slippery.`;
  } else {
    riderMsg = l === 'yo'
      ? `✅ Ọnà mọ́ lónìí (${rain}%). Rìn dáadáa ní gbogbo Ogbomoso!`
      : `✅ Clear roads today (${rain}% rain). Good riding conditions across all Ogbomoso routes!`;
  }
  document.getElementById('msg-riders').textContent = riderMsg;

  // WIND WARNING
  const windEl = document.getElementById('wind-warning');
  if (wind > 25) {
    windEl.classList.remove('hidden');
    document.getElementById('wind-title').textContent = T[l].windTitle;
    document.getElementById('msg-wind').textContent = l === 'yo'
      ? `Afẹ́fẹ́ lagbara (${wind} km/h). Àwọn okada ṣọ́ra jùlọ. Àwọn oníṣòwò dè àwọn àwọ̀ àbò rẹ dáadáa.`
      : `Strong winds (${wind} km/h). Okada riders take extra caution. Traders — secure your canopies and lightweight goods.`;
  } else {
    windEl.classList.add('hidden');
  }
}

// ============================================================
//  SEND ALERT TAB
// ============================================================
function buildSendMessage(group, msgLang) {
  if (!weatherData) return 'Loading weather data...';

  const rain = weatherData.daily.precipitation_probability_max[0];
  const temp = Math.round(weatherData.current.temperature_2m);
  const wind = Math.round(weatherData.current.wind_speed_10m);
  const date = new Date().toLocaleDateString('en-NG', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  const lgaNames = {
    north:    { en: 'Ogbomoso North (Yam, Maize, Cassava)', yo: 'Ogbomoso North (Isu, Àgbàdo, Ẹ̀gẹ)' },
    south:    { en: 'Ogbomoso South (Cocoa, Rice, Melon)',  yo: 'Ogbomoso South (Cocoa, Iresi, Ẹ̀gúṣí)' },
    surulere: { en: 'Surulere (Maize, Cassava)',            yo: 'Surulere (Àgbàdo, Ẹ̀gẹ)' },
    oriire:   { en: 'Oriire (Yam, Cassava)',                yo: 'Oriire (Isu, Ẹ̀gẹ)' },
    ogooluwa: { en: 'Ogo-Oluwa (Soybeans, Pineapple)',      yo: 'Ogo-Oluwa (Soybeans, Ọ̀pẹ̀ Olómi)' },
  };

  function buildBlock(lang) {
    const header =
      `🌦️ OGBOMOSO WEATHER ALERT\n` +
      `📅 ${date}\n` +
      `🌡️ ${temp}°C | 💧 Rain: ${rain}% | 💨 Wind: ${wind}km/h\n\n`;

    if (lgaNames[group]) {
      const title = lgaNames[group][lang] || lgaNames[group].en;
      const body  = buildFarmerMsg(group, rain);
      return header +
        (lang === 'yo' ? `🌾 Àwọn Àgbẹ̀ — ${title}\n\n` : `🌾 Farmers — ${title}\n\n`) +
        body + '\n\n— Ogbomoso Weather Alert';
    }

    if (group === 'traders') {
      const body = lang === 'yo'
        ? (rain >= 65 ? `⚠️ Mú àwọ̀ àbò wá ọjà. Pèsè àwọn ọjà rẹ (${rain}% ìṣeéṣe òjò).`
          : rain >= 40 ? `⚡ Ìṣeéṣe òjò wa (${rain}%). Mú àwọ̀ àbò.`
          : `✅ Ọjọ́ ọjà rere! (${rain}% ìṣeéṣe òjò)`)
        : (rain >= 65 ? `⚠️ HIGH RAIN RISK! Bring canopy to market. Protect your goods (${rain}% chance).`
          : rain >= 40 ? `⚡ Rain possible (${rain}%). Bring a tarpaulin just in case.`
          : `✅ Great market day! Clear skies expected (${rain}% rain chance).`);
      return header +
        (lang === 'yo' ? '🛒 Ìkìlọ Àwọn Oníṣòwò\n\n' : '🛒 Traders Alert\n\n') +
        body + '\n\n— Ogbomoso Weather Alert';
    }

    if (group === 'riders') {
      const body = lang === 'yo'
        ? (rain >= 55 ? `⚠️ Mú ẹ̀wù omi. Dín ìyára lulẹ̀ lójú ọnà tó rọ̀ (${rain}% ìṣeéṣe òjò).`
          : rain >= 30 ? `⚡ Ìṣeéṣe òjò wa (${rain}%). Mú ẹ̀wù omi kí ó bá rọ̀ lójijì.`
          : `✅ Ọnà mọ́ lónìí. Rìn dáadáa! (${rain}% ìṣeéṣe òjò)`)
        : (rain >= 55 ? `⚠️ HIGH RAIN RISK! Carry raincoat. Slow down on wet roads (${rain}% chance).`
          : rain >= 30 ? `⚡ Rain possible (${rain}%). Pack a raincoat in case of sudden downpour.`
          : `✅ Clear roads today! Good riding conditions (${rain}% rain chance).`);
      return header +
        (lang === 'yo' ? '🏍️ Ìkìlọ Àwọn Okada\n\n' : '🏍️ Okada & Riders Alert\n\n') +
        body + '\n\n— Ogbomoso Weather Alert';
    }

    return 'Select a group above.';
  }

  if (msgLang === 'both') {
    return buildBlock('en') + '\n\n─────────────\n\n' + buildBlock('yo');
  }
  return buildBlock(msgLang);
}

function updatePreview() {
  const group   = document.getElementById('sel-group').value;
  const msgLang = document.getElementById('sel-msglang').value;
  document.getElementById('msg-preview').textContent =
    buildSendMessage(group, msgLang);
}

function sendWhatsApp() {
  const phone = document.getElementById('inp-phone').value.trim();
  if (!phone) { alert('Please enter a phone number first.'); return; }
  const msg     = document.getElementById('msg-preview').textContent;
  const cleaned = phone.replace(/\D/g, '');
  window.open('https://wa.me/' + cleaned + '?text=' + encodeURIComponent(msg), '_blank');
  showSentNotice();
}

function sendSMS() {
  const phone = document.getElementById('inp-phone').value.trim();
  if (!phone) { alert('Please enter a phone number first.'); return; }
  showSentNotice();
  alert('To activate real SMS: connect Twilio Account SID + Auth Token in a Node.js backend.');
}

function showSentNotice() {
  const n = document.getElementById('sent-notice');
  n.classList.remove('hidden');
  setTimeout(() => n.classList.add('hidden'), 4000);
}

// ============================================================
//  TAB SWITCHING
// ============================================================
function showTab(name, btn) {
  document.querySelectorAll('.tab-page').forEach(p => p.classList.add('hidden'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.remove('hidden');
  if (btn) btn.classList.add('active');
}

// ============================================================
//  LGA ACCORDION TOGGLE
// ============================================================
function toggleLGA(lga) {
  const body  = document.getElementById('body-' + lga);
  const chev  = document.getElementById('chev-' + lga);
  const isOpen = !body.classList.contains('hidden');
  body.classList.toggle('hidden', isOpen);
  chev.textContent = isOpen ? '▸' : '▾';
}

// ============================================================
//  LANGUAGE TOGGLE
// ============================================================
function setLang(lang) {
  currentLang = lang;

  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-yo').classList.toggle('active', lang === 'yo');

  const t = T[lang];

  const map = {
    'app-title':          'appTitle',
    'app-sub':            'appSub',
    'tabl-weather':       'tablWeather',
    'tabl-farmers':       'tablFarmers',
    'tabl-others':        'tablOthers',
    'tabl-send':          'tablSend',
    'sl-rain':            'slRain',
    'sl-wind':            'slWind',
    'sl-humid':           'slHumid',
    'overview-title':     'overviewTitle',
    'ov1l':               'ov1l',
    'ov2l':               'ov2l',
    'ov3l':               'ov3l',
    'farmer-title':       'farmerTitle',
    'farmer-sub':         'farmerSub',
    'traders-title':      'tradersTitle',
    'riders-title':       'ridersTitle',
    'send-title':         'sendTitle',
    'fl-group':           'flGroup',
    'fl-phone':           'flPhone',
    'fl-lang':            'flLang',
    'fl-preview':         'flPreview',
    'btn-wa':             'btnWa',
    'btn-sms':            'btnSms',
    'sent-text':          'sentText',
    'twilio-note':        'twilioNote',
    'lga-north-name':     'lgaNorthName',
    'lga-north-hq':       'lgaNorthHQ',
    'lga-north-crops':    'lgaNorthCrops',
    'lga-south-name':     'lgaSouthName',
    'lga-south-hq':       'lgaSouthHQ',
    'lga-south-crops':    'lgaSouthCrops',
    'lga-surulere-name':  'lgaSurulereName',
    'lga-surulere-hq':    'lgaSurulereHQ',
    'lga-surulere-crops': 'lgaSurulereCrops',
    'lga-oriire-name':    'lgaOriireName',
    'lga-oriire-hq':      'lgaOriireHQ',
    'lga-oriire-crops':   'lgaOriireCrops',
    'lga-ogooluwa-name':  'lgaOgooluwaName',
    'lga-ogooluwa-hq':    'lgaOgooluwaHQ',
    'lga-ogooluwa-crops': 'lgaOgooluwaCrops',
    'traders-name':       'tradersName',
    'riders-name':        'ridersName',
  };

  Object.entries(map).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el && t[key]) el.textContent = t[key];
  });

  if (weatherData) {
    renderWeather(weatherData);
    renderFarmerAlerts(weatherData);
    renderOtherAlerts(weatherData);
    updatePreview();
  }
}

// ============================================================
//  START THE APP
// ============================================================
fetchWeather();

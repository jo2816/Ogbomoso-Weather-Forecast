// Global App Language State Configuration
let currentLang = 'en';

// Master Localized Dictionary Matrix Data
const localizations = {
  en: {
    appTitle: "Ogbomoso Weather Alert",
    appSub: "For Farmers, Traders & Okada Riders",
    tabWeather: "Weather",
    tabFarmers: "Farmers",
    tabOthers: "Traders & Riders",
    tabSend: "Send Alert",
    overviewTitle: "Today's Alert Overview",
    farmerTitle: "Farmer Alerts — All 5 LGAs",
    farmerSub: "Tap any LGA to see crop-specific advice",
    calendarTitle: "Current Season Crop Recommendations",
    calendarSub: "Based on Ogbomoso seasonal cycle",
    sendTitle: "Send Weather Alert",
    flGroup: "Select who to alert",
    flPhone: "Phone number (with country code)",
    flLang: "Message language",
    flPreview: "Message preview",
    btnWa: "Send via WhatsApp",
    btnSms: "Send SMS",
    twilioNote: "WhatsApp opens a pre-filled message. SMS via Twilio needs backend setup.",
    regTitle: "Device Profile Settings",
    regSub: "Save your configuration profiles locally to this mobile phone",
    rlName: "Full Name",
    rlPhone: "Mobile Phone",
    rlLga: "Primary Location (LGA)",
    btnRegSub: "Save Profile Settings",
    regSuccess: "Settings saved locally to device storage memory!"
  },
  yo: {
    appTitle: "Ìwòyí Ojú-Ọjọ́ Ogbómọ̀ṣọ́",
    appSub: "Fún Àwọn Àgbẹ̀, Oníṣòwò & Olùgùnkẹ̀kẹ́",
    tabWeather: "Ojú-Ọjọ́",
    tabFarmers: "Àwọn Àgbẹ̀",
    tabOthers: "Oníṣòwò/Agunjẹ̀kẹ́",
    tabSend: "Fi Alaye Ránṣẹ́",
    overviewTitle: "Àkópọ̀ Ìwòyí Ojú-Ọjọ́ Òní",
    farmerTitle: "Ìwòyí Àwọn Àgbẹ̀ — Gbogbo LGA 5",
    farmerSub: "Tẹ LGA eyikeyii láti rí ìmọ̀ràn ohun ọ̀gbìn",
    calendarTitle: "Ìmọ̀ràn Ohun Ọ̀gbìn Gẹ́gẹ́ Bí Àkókò",
    calendarSub: "Báyi ni ọ̀yàyà kíkà ohun ọ̀gbìn ṣe rí ní Ogbómọ̀ṣọ́",
    sendTitle: "Fi Ìwòyí Ojú-Ọjọ́ Ránṣẹ́",
    flGroup: "Yan àwọn tí o fẹ́ jafara",
    flPhone: "Nọ́mbà fóònù (pẹ̀lú kòòdù orílẹ̀-èdè)",
    flLang: "Èdè àtẹ̀jíṣẹ́",
    flPreview: "Àwòkẹ́́gbẹ́ àtẹ̀jíṣẹ́",
    btnWa: "Fi ránṣẹ́ lórí WhatsApp",
    btnSms: "Fi ránṣẹ́ lórí SMS",
    twilioNote: "WhatsApp máa ṣí àtẹ̀jíṣẹ́ tí a ti kọ tẹ́lẹ̀. SMS nílò ètò lẹ́yìn láti ṣiṣẹ́.",
    regTitle: "Ètò Profaili Fóònù Rẹ",
    regSub: "Fipamọ́ ètò profaili rẹ sí orí fóònù yìí",
    rlName: "Orúkọ Kíkún",
    rlPhone: "Nọ́mbà Fóònù",
    rlLga: "Ibi Tí O Wà Gangan (LGA)",
    btnRegSub: "Fipamọ́ Ètò Rẹ",
    regSuccess: "A ti fipamọ́ ètò profaili rẹ sí orí ibi ìfipamọ́ fóònù rẹ!"
  }
};

// Crop calendar arrays based on seasonal cycles
const seasonalCrops = {
  dry: "Yam harvesting, land clearing, land preparation, and dry-season irrigation vegetable farming.",
  earlyRains: "Maize planting, Cassava cultivation, melon planting, and early fertilizer operations.",
  lateRains: "Maize weeding, Yam staking, Cassava monitoring, Cowpea planting, and harvesting operations."
};

// Dynamic local system alerts object storage container
const activeAlerts = {
  north: { status: "safe", textEn: "Weather conditions are standard. Perfect day for application operations.", textYo: "Ojú ọjọ́ dára. Àkókò títọ́ ni fún iṣẹ́ lórí oko rẹ." },
  south: { status: "warn", textEn: "Light storm tracking across lower fields. Secure nursery shading screens.", textYo: "Ìjì fẹ́fẹ́ mọ́ mọ́ ń kọjá lọ. Bo àwọn koriko ọ̀gbìn rẹ mọ́lẹ̀." },
  surulere: { status: "safe", textEn: "High soil moisture. Good time for transplanting development works.", textYo: "Ilẹ̀ tutù dáradára. Àkókò dára láti gbin ohun ọ̀gbìn tuntun." },
  oriire: { status: "safe", textEn: "Clear sunny weather ahead. Excellent index score for open field sun drying.", textYo: "Ojú ọjọ́ mọ́lẹ̀ kedere. Àkókò dára láti sa nǹkan rẹ sí oòrùn." },
  ogooluwa: { status: "danger", textEn: "Heavy localized rain downpours coming. Clean water drainage tracts instantly.", textYo: "Òjò dídì mọ́lẹ̀ ń bọ̀. Tún gbogbo ojú sísan omi ṣe lẹ́sẹ̀kẹsẹ̀." },
  traders: { status: "warn", textEn: "Gusty wind tracks expected near Sabo market squares. Cover open display stalls.", textYo: "Atẹ́gùn líle ń bọ̀ ní ọjà Sábò. Bo àwọn ẹrù ọjà rẹ mọ́lẹ̀ dáradára." },
  riders: { status: "warn", textEn: "Slippery asphalt warnings active on routes. Maintain low speeds.", textYo: "Òpópónà dín mọ́lẹ̀ nítorí òjò. Rọra wakọ̀ pẹ̀lú fura." }
};

// Page initialization lifecycle anchor trigger
document.addEventListener("DOMContentLoaded", () => {
  setLang('en');
  initializeWeatherData();
  initializeCropCalendar();
  loadSavedProfile();
});

// Navigation tab page switcher controller layout handler logic
function showTab(tabId, element) {
  document.querySelectorAll('.tab-page').forEach(page => page.classList.add('hidden'));
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  
  document.getElementById(`tab-${tabId}`).classList.remove('hidden');
  element.classList.add('active');
}

// Global localization translation structural switch driver
function setLang(langCode) {
  currentLang = langCode;
  const lang = localizations[langCode];
  
  // Update header text components
  document.getElementById('app-title').textContent = lang.appTitle;
  document.getElementById('app-sub').textContent = lang.appSub;
  
  // Navigation layout controls translations buttons
  document.getElementById('tabl-weather').textContent = lang.tabWeather;
  document.getElementById('tabl-farmers').textContent = lang.tabFarmers;
  document.getElementById('tabl-others').textContent = lang.tabOthers;
  document.getElementById('tabl-send').textContent = lang.tabSend;

  // Global section title strings adjustments
  document.getElementById('overview-title').textContent = lang.overviewTitle;
  document.getElementById('farmer-title').textContent = lang.farmerTitle;
  document.getElementById('farmer-sub').textContent = lang.farmerSub;
  document.getElementById('calendar-title').textContent = lang.calendarTitle;
  document.getElementById('calendar-sub').textContent = lang.calendarSub;
  document.getElementById('send-title').textContent = lang.sendTitle;

  // Dispatch dispatch form strings labels controls translations
  document.getElementById('fl-group').textContent = lang.flGroup;
  document.getElementById('fl-phone').textContent = lang.flPhone;
  document.getElementById('fl-lang').textContent = lang.flLang;
  document.getElementById('fl-preview').textContent = lang.flPreview;
  document.getElementById('btn-wa').textContent = lang.btnWa;
  document.getElementById('btn-sms').textContent = lang.btnSms;
  document.getElementById('twilio-note').textContent = lang.twilioNote;

  // Device registration strings panel updates
  document.getElementById('reg-title').textContent = lang.regTitle;
  document.getElementById('reg-sub').textContent = lang.regSub;
  document.getElementById('rl-name').textContent = lang.rlName;
  document.getElementById('rl-phone').textContent = lang.rlPhone;
  document.getElementById('rl-lga').textContent = lang.rlLga;
  document.getElementById('btn-reg-sub').textContent = lang.btnRegSub;
  document.getElementById('reg-success').querySelector('span').textContent = lang.regSuccess;

  // Toggle active styling buttons states layout controls
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`btn-${langCode}`).classList.add('active');

  renderAlertsContent();
  updatePreview();
}

// Local weather dashboard rendering layout generation parameters configuration logic
function initializeWeatherData() {
  document.getElementById('cur-temp').textContent = "29°C";
  document.getElementById('cur-cond').textContent = "Scattered Storm Clouds";
  document.getElementById('cur-extra').textContent = "Humidity: 78% | Wind: 14 km/h";
  
  const d = new Date();
  document.getElementById('cur-time').textContent = d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

  document.getElementById('sv-rain').textContent = "65%";
  document.getElementById('sv-wind').textContent = "14 km/h";
  document.getElementById('sv-humid').textContent = "78%";

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const row = document.getElementById('forecast-row');
  row.innerHTML = '';
  
  for(let i=0; i<5; i++) {
    const nextDate = new Date();
    nextDate.setDate(d.getDate() + i);
    const dayName = days[nextDate.getDay()];
    
    row.innerHTML += `
      <div class="forecast-day">
        <div class="f-day">${dayName}</div>
        <div class="f-temp">${28 + (i % 2)}°C</div>
        <div class="f-rain rain-mid">⛈️ 60%</div>
      </div>
    `;
  }
}

// Seasonal dashboard logic scheduler
function initializeCropCalendar() {
  const m = new Date().getMonth();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  document.getElementById('current-month-display').textContent = months[m];
  
  let text = "";
  if (m >= 11 || m <= 1) { text = seasonalCrops.dry; }
  else if (m >= 2 && m <= 6) { text = seasonalCrops.earlyRains; }
  else { text = seasonalCrops.lateRains; }
  
  document.getElementById('seasonal-crops-list').textContent = text;
}

// Component data dynamic synchronization rendering logic
function renderAlertsContent() {
  const groups = ['north', 'south', 'surulere', 'oriire', 'ogooluwa', 'traders', 'riders'];
  
  groups.forEach(g => {
    const data = activeAlerts[g];
    const txt = (currentLang === 'en') ? data.textEn : data.textYo;
    
    const badgeEl = document.getElementById(`badge-${g}`) || document.getElementById(`ov1b`);
    const msgEl = document.getElementById(`msg-${g}`);

    if(msgEl) msgEl.textContent = txt;
    
    const b = document.getElementById(`badge-${g}`);
    if(b) {
      b.textContent = data.status.toUpperCase();
      b.className = `badge ${data.status}`;
    }
  });

  document.getElementById('ov1b').textContent = activeAlerts.north.status.toUpperCase();
  document.getElementById('ov1b').className = `badge ${activeAlerts.north.status}`;
  document.getElementById('ov2b').textContent = activeAlerts.traders.status.toUpperCase();
  document.getElementById('ov2b').className = `badge ${activeAlerts.traders.status}`;
  document.getElementById('ov3b').textContent = activeAlerts.riders.status.toUpperCase();
  document.getElementById('ov3b').className = `badge ${activeAlerts.riders.status}`;
}

// Accordion toggle dynamic interactions triggers interface handler layout
function toggleLGA(lgaKey) {
  const body = document.getElementById(`body-${lgaKey}`);
  const chev = document.getElementById(`chev-${lgaKey}`);
  
  if(body.classList.contains('hidden')) {
    body.classList.remove('hidden');
    chev.textContent = "▾";
  } else {
    body.classList.add('hidden');
    chev.textContent = "▸";
  }
}

// Dispatch dispatch text panel string calculations rules handler updates engine
function updatePreview() {
  const g = document.getElementById('sel-group').value;
  const l = document.getElementById('sel-msglang').value;
  const data = activeAlerts[g];
  
  let p = "";
  if(l === 'en') p = `SYSTEM ALERT (${g.toUpperCase()}):\n${data.textEn}`;
  else if(l === 'yo') p = `ÌWÒYÍ OJÚ-ỌJỌ́ (${g.toUpperCase()}):\n${data.textYo}`;
  else p = `ALERT (${g.toUpperCase()}):\n${data.textEn}\n\nTRANSLATION:\n${data.textYo}`;
  
  document.getElementById('msg-preview').textContent = p;
}

// Social messaging systems redirection integrations triggers execution handlers
function sendWhatsApp() {
  const phone = document.getElementById('inp-phone').value;
  const txt = encodeURIComponent(document.getElementById('msg-preview').textContent);
  window.open(`https://wa.me/${phone}?text=${txt}`, '_blank');
}

function sendSMS() {
  const notice = document.getElementById('sent-notice');
  notice.classList.remove('hidden');
  setTimeout(() => notice.classList.add('hidden'), 4000);
}

// LOCALSTORAGE BROWSER MEMORY REGISTRATION PROFILE HANDLERS
function handleRegistration(event) {
  event.preventDefault();

  // Extract variables values from input controls field arrays
  const name = document.getElementById('reg-name').value;
  const phone = document.getElementById('reg-phone').value;
  const lga = document.getElementById('reg-lga').value;

  // Package target configuration payload data bundle objects structure
  const profileData = { name, phone, lga };

  // Write directly into browser's native client environment storage memory stringified
  localStorage.setItem('ogbomoso_weather_profile', JSON.stringify(profileData));
  console.log("Profile Configuration Data Committed locally to Device Storage:", profileData);

  // Trigger dynamic message alerts visual status response notifications banner box
  const notice = document.getElementById('reg-success');
  if (notice) {
    notice.classList.remove('hidden');
    setTimeout(() => {
      notice.classList.add('hidden');
    }, 4000);
  }
}

// Auto load device profile setup configurations upon reload parameters check checks
function loadSavedProfile() {
  const activeProfile = localStorage.getItem('ogbomoso_weather_profile');
  
  if (activeProfile) {
    const profile = JSON.parse(activeProfile);
    
    // Auto-populate input form areas if properties found checked successfully
    document.getElementById('reg-name').value = profile.name || '';
    document.getElementById('reg-phone').value = profile.phone || '';
    document.getElementById('reg-lga').value = profile.lga || '';
    
    console.log("Device storage configurations retrieved. Profile applied: ", profile);
  }
}

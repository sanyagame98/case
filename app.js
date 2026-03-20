const STORAGE_KEY = "caseverse_mono_stable_v1";
const ADMIN_EMAIL = "case@mail.com";
const ADMIN_PASSWORD = "123456";
const START_BALANCE = 75;
const CLICK_REWARD = 0.5;
const HISTORY_LIMIT = 160;

const RARITY_LABELS = {
  common: "Common",
  uncommon: "Uncommon",
  rare: "Rare",
  epic: "Epic",
  legendary: "Legendary",
  mythic: "Mythic",
};

const RARITY_WEIGHTS = {
  common: 36,
  uncommon: 24,
  rare: 16,
  epic: 11,
  legendary: 8,
  mythic: 5,
};

const CASES = [
  {
    id: "starter-mono",
    name: "Starter Mono",
    cost: 50,
    preview: "bg-common",
    items: [
      ["Soft Ash", "common", 10],["Mono Grid", "common", 12],["Pale Dust", "common", 14],["Gray Pulse", "common", 16],["Stone Line", "common", 18],
      ["Quiet Tape", "common", 20],["Urban Chalk", "uncommon", 24],["Code Mist", "uncommon", 28],["Steel Touch", "uncommon", 32],["Paper Smoke", "uncommon", 36],
      ["Delta Fog", "uncommon", 40],["Ghost Slate", "rare", 46],["White Echo", "rare", 54],["Dark Stitch", "rare", 62],["Black Bloom", "rare", 72],
      ["Silver Drift", "epic", 95],["Night Mark", "epic", 120],["Ivory Prism", "epic", 145],["Shadow Crown", "legendary", 210],["Blank God", "mythic", 410],
    ],
  },
  {
    id: "white-noise",
    name: "White Noise",
    cost: 70,
    preview: "bg-uncommon",
    items: [
      ["Dry Signal", "common", 14],["Cold Grain", "common", 16],["Static Tape", "common", 18],["Silent Bloom", "common", 20],["Frost Thread", "common", 22],
      ["White Brick", "common", 24],["Signal Dust", "uncommon", 29],["Mono Drift", "uncommon", 34],["Cloud Mesh", "uncommon", 40],["Paper Fade", "uncommon", 46],
      ["North Shape", "uncommon", 52],["Echo Blade", "rare", 64],["Snow Vein", "rare", 76],["Hard Light", "rare", 90],["Zero Cell", "rare", 104],
      ["Ivory Rift", "epic", 132],["White Matter", "epic", 164],["Bright Hollow", "epic", 198],["Northern King", "legendary", 265],["Arctic Void", "mythic", 520],
    ],
  },
  {
    id: "dark-sector",
    name: "Dark Sector",
    cost: 90,
    preview: "bg-rare",
    items: [
      ["Night Pixel", "common", 18],["Carbon Dot", "common", 20],["Black Screen", "common", 22],["Null Strip", "common", 24],["Shadow Note", "common", 26],
      ["Dark Thread", "common", 28],["Black Marble", "uncommon", 36],["Ash Driver", "uncommon", 42],["Void Tape", "uncommon", 48],["Raven Dust", "uncommon", 54],
      ["Silent Core", "uncommon", 62],["Midnight Beam", "rare", 78],["Coal Rift", "rare", 92],["Night Bloom", "rare", 110],["Noir Orbit", "rare", 128],
      ["Eclipse Wire", "epic", 168],["Black Mirror", "epic", 214],["Dust Throne", "epic", 258],["Onyx Saint", "legendary", 340],["Zero Heaven", "mythic", 640],
    ],
  },
  {
    id: "silver-pulse",
    name: "Silver Pulse",
    cost: 110,
    preview: "bg-epic",
    items: [
      ["Silver Soft", "common", 22],["Chrome Mist", "common", 25],["Pale Needle", "common", 28],["Cold Accent", "common", 31],["Thin Mercury", "common", 34],
      ["Glass Wire", "common", 38],["Mercury Tap", "uncommon", 46],["Bright Plate", "uncommon", 54],["Steel Bloom", "uncommon", 62],["Clear Alloy", "uncommon", 70],
      ["Prism Signal", "uncommon", 80],["Silver Fang", "rare", 98],["Chrome Noise", "rare", 116],["Mirror Cut", "rare", 138],["White Steel", "rare", 164],
      ["Polar Drift", "epic", 210],["Ghost Chrome", "epic", 270],["Silver Pulse X", "epic", 330],["Royal Mercury", "legendary", 430],["White Emperor", "mythic", 760],
    ],
  },
  {
    id: "obsidian-chamber",
    name: "Obsidian Chamber",
    cost: 130,
    preview: "bg-legendary",
    items: [
      ["Night Plate", "common", 24],["Black Vein", "common", 27],["Shale Drift", "common", 30],["Dark Alloy", "common", 34],["Velvet Core", "common", 38],
      ["Ash Static", "common", 42],["Shadow Crest", "uncommon", 52],["Onyx Haze", "uncommon", 60],["Void Marble", "uncommon", 68],["Ink Razor", "uncommon", 78],
      ["Crow Cell", "uncommon", 88],["Noir Cathedral", "rare", 108],["Night King", "rare", 126],["Black Prism", "rare", 148],["Midnight Fracture", "rare", 172],
      ["Royal Ash", "epic", 236],["Onyx Reign", "epic", 302],["Darkmatter", "epic", 376],["Obsidian Throne", "legendary", 540],["King of Void", "mythic", 820],
    ],
  },
  {
    id: "royal-static",
    name: "Royal Static",
    cost: 150,
    preview: "bg-legendary",
    items: [
      ["Noble Dust", "common", 28],["Velvet Snap", "common", 32],["Static Crown", "common", 36],["White Marble", "common", 40],["Royal Shade", "common", 44],
      ["Ivory Noise", "common", 48],["Throne Grid", "uncommon", 58],["King Tape", "uncommon", 68],["Empire Wire", "uncommon", 78],["Halo Print", "uncommon", 90],
      ["Monarch Core", "uncommon", 102],["Regal Fang", "rare", 124],["Crown Dust", "rare", 144],["Noble Fracture", "rare", 168],["Kingslayer", "rare", 194],
      ["Velvet Rift", "epic", 270],["Royal Bloom", "epic", 348],["White Dynasty", "epic", 428],["Emperor Static", "legendary", 610],["Absolute Crown", "mythic", 900],
    ],
  },
  {
    id: "void-cathedral",
    name: "Void Cathedral",
    cost: 175,
    preview: "bg-mythic",
    items: [
      ["Chapel Dust", "common", 32],["Cold Psalm", "common", 36],["Ivory Ash", "common", 40],["Stone Prayer", "common", 44],["Dark Choir", "common", 48],
      ["Gray Halo", "common", 52],["Void Prayer", "uncommon", 64],["Silent Glass", "uncommon", 76],["Frozen Dome", "uncommon", 88],["Cathedral Ink", "uncommon", 102],
      ["Saint Static", "uncommon", 118],["Angel Blade", "rare", 142],["Choir Bloom", "rare", 166],["Black Chapel", "rare", 194],["Null Cathedral", "rare", 226],
      ["Heaven Cut", "epic", 320],["Sacred Noise", "epic", 416],["Apostle Rift", "epic", 520],["Void Saint", "legendary", 720],["Dark Gospel", "mythic", 960],
    ],
  },
  {
    id: "infinity-protocol",
    name: "Infinity Protocol",
    cost: 200,
    preview: "bg-mythic",
    items: [
      ["Mono Thread", "common", 36],["Pulse Seed", "common", 40],["Alpha Sector", "common", 44],["Quantum Draft", "common", 48],["Echo Driver", "common", 52],
      ["Phase One", "common", 56],["Binary Bloom", "uncommon", 68],["Hex Spark", "uncommon", 78],["Orbit Alpha", "uncommon", 92],["Future Mesh", "uncommon", 106],
      ["Nano Crown", "uncommon", 122],["Prism Core", "rare", 148],["Omega Slip", "rare", 172],["Neural Rift", "rare", 198],["Gatekeeper", "rare", 228],
      ["Oracle Wave", "epic", 330],["Singularity", "epic", 450],["Infinity Bloom", "epic", 590],["Timebreaker", "legendary", 800],["Protocol X", "mythic", 1000],
    ],
  },
].map((c) => ({ ...c, items: c.items.map(([name, rarity, price], i) => ({ id: `${c.id}-${i}`, name, rarity, price })) }));

const dom = {
  authScreen: document.getElementById("authScreen"),
  app: document.getElementById("app"),
  authTabs: [...document.querySelectorAll(".auth-tab")],
  authForms: [...document.querySelectorAll(".auth-form")],
  registerForm: document.getElementById("registerForm"),
  loginForm: document.getElementById("loginForm"),
  balanceValue: document.getElementById("balanceValue"),
  userIdValue: document.getElementById("userIdValue"),
  userNameValue: document.getElementById("userNameValue"),
  logoutBtn: document.getElementById("logoutBtn"),
  clickFarmBtn: document.getElementById("clickFarmBtn"),
  sellAllBtn: document.getElementById("sellAllBtn"),
  transferForm: document.getElementById("transferForm"),
  transferTarget: document.getElementById("transferTarget"),
  transferAmount: document.getElementById("transferAmount"),
  adminGrantForm: document.getElementById("adminGrantForm"),
  adminTargetId: document.getElementById("adminTargetId"),
  adminGrantAmount: document.getElementById("adminGrantAmount"),
  adminGrantComment: document.getElementById("adminGrantComment"),
  casesGrid: document.getElementById("casesGrid"),
  inventoryCount: document.getElementById("inventoryCount"),
  inventoryValue: document.getElementById("inventoryValue"),
  inventoryList: document.getElementById("inventoryList"),
  historyCount: document.getElementById("historyCount"),
  historyIncome: document.getElementById("historyIncome"),
  historyExpense: document.getElementById("historyExpense"),
  historyList: document.getElementById("historyList"),
  historyFilters: document.getElementById("historyFilters"),
  directoryList: document.getElementById("directoryList"),
  adminUsersList: document.getElementById("adminUsersList"),
  adminTab: document.getElementById("adminTab"),
  viewTabs: [...document.querySelectorAll(".view-tab")],
  views: [...document.querySelectorAll(".view")],
  toast: document.getElementById("toast"),
  itemModal: document.getElementById("itemModal"),
  itemModalContent: document.getElementById("itemModalContent"),
  spinModal: document.getElementById("spinModal"),
  spinCaseTitle: document.getElementById("spinCaseTitle"),
  reelTrack: document.getElementById("reelTrack"),
  spinStatus: document.getElementById("spinStatus"),
  spinResult: document.getElementById("spinResult"),
  spinActions: document.getElementById("spinActions"),
  keepItemBtn: document.getElementById("keepItemBtn"),
  sellDropBtn: document.getElementById("sellDropBtn"),
};

const state = {
  db: loadDb(),
  activeView: "cases",
  historyFilter: "all",
  spinning: false,
  spinFrame: null,
  spinLastDrop: null,
  toastTimer: null,
};

bootstrap();

function bootstrap() {
  seedAdmin();
  normalizeDb();
  bindAuth();
  bindViews();
  bindActions();
  bindModals();
  renderApp();
}

function loadDb() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return parsed && Array.isArray(parsed.users) ? parsed : { users: [], currentUserId: null };
  } catch {
    return { users: [], currentUserId: null };
  }
}

function saveDb() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.db));
}

function normalizeDb() {
  state.db.users = (state.db.users || []).map((user) => ({
    id: user.id,
    email: String(user.email || "").toLowerCase(),
    password: String(user.password || ""),
    nickname: String(user.nickname || user.email || user.id || "User"),
    balance: roundMoney(user.balance || 0),
    isAdmin: Boolean(user.isAdmin),
    inventory: Array.isArray(user.inventory) ? user.inventory.map(normalizeInventoryItem) : [],
    history: Array.isArray(user.history) ? user.history.map(normalizeHistoryEntry) : [],
    createdAt: user.createdAt || new Date().toISOString(),
  }));
  saveDb();
}

function normalizeInventoryItem(item) {
  return {
    instanceId: item.instanceId || createId(),
    caseName: item.caseName || "—",
    name: item.name || "Предмет",
    rarity: item.rarity || "common",
    price: roundMoney(item.price || 0),
    openedAt: item.openedAt || item.date || new Date().toISOString(),
  };
}

function normalizeHistoryEntry(entry) {
  return {
    type: entry.type || "event",
    title: entry.title || entry.comment || "Событие",
    delta: roundMoney(entry.delta ?? entry.amount ?? 0),
    meta: entry.meta || entry.comment || "",
    date: entry.date || entry.at || new Date().toISOString(),
  };
}

function seedAdmin() {
  if (state.db.users.some((u) => u.email === ADMIN_EMAIL)) return;
  state.db.users.push({
    id: "ADM-100001",
    email: ADMIN_EMAIL,
    password: ADMIN_PASSWORD,
    nickname: "CaseVerse Admin",
    balance: 5000,
    isAdmin: true,
    inventory: [],
    history: [historyEntry("system", "Админ-аккаунт создан", { delta: 0, meta: "Локальный тестовый профиль" })],
    createdAt: new Date().toISOString(),
  });
  saveDb();
}

function bindAuth() {
  dom.authTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.dataset.authTab;
      dom.authTabs.forEach((t) => t.classList.toggle("active", t === tab));
      dom.authForms.forEach((form) => form.classList.toggle("active", form.id === `${key}Form`));
    });
  });

  dom.registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(dom.registerForm);
    const email = String(fd.get("email") || "").trim().toLowerCase();
    const password = String(fd.get("password") || "").trim();
    const nickname = String(fd.get("nickname") || "").trim();

    if (!/^\S+@\S+\.\S+$/.test(email)) return showToast("Введите корректную почту.");
    if (password.length < 6) return showToast("Пароль должен быть не короче 6 символов.");
    if (nickname.length < 2) return showToast("Никнейм слишком короткий.");
    if (state.db.users.some((u) => u.email === email)) return showToast("Почта уже занята.");

    const user = {
      id: createUserId(),
      email,
      password,
      nickname,
      balance: START_BALANCE,
      isAdmin: false,
      inventory: [],
      history: [historyEntry("register", "Аккаунт создан", { delta: START_BALANCE, meta: "Стартовый баланс" })],
      createdAt: new Date().toISOString(),
    };
    state.db.users.push(user);
    state.db.currentUserId = user.id;
    saveDb();
    dom.registerForm.reset();
    renderApp();
    showToast(`Добро пожаловать, ${nickname}. ID: ${user.id}`);
  });

  dom.loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(dom.loginForm);
    const email = String(fd.get("email") || "").trim().toLowerCase();
    const password = String(fd.get("password") || "").trim();
    const user = state.db.users.find((u) => u.email === email && u.password === password);
    if (!user) return showToast("Неверная почта или пароль.");
    state.db.currentUserId = user.id;
    saveDb();
    dom.loginForm.reset();
    renderApp();
    showToast(`С возвращением, ${user.nickname}.`);
  });
}

function bindViews() {
  dom.viewTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      state.activeView = tab.dataset.view;
      renderViewTabs();
    });
  });

  dom.historyFilters.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;
    state.historyFilter = btn.dataset.filter;
    renderHistory(getCurrentUser());
  });
}

function bindActions() {
  dom.logoutBtn.addEventListener("click", () => {
    state.db.currentUserId = null;
    saveDb();
    renderApp();
    showToast("Вы вышли из аккаунта.");
  });

  dom.clickFarmBtn.addEventListener("click", () => {
    const user = getCurrentUser();
    if (!user) return;
    user.balance = roundMoney(user.balance + CLICK_REWARD);
    pushHistory(user, historyEntry("click", "Клик по фарм-кнопке", { delta: CLICK_REWARD, meta: "+0.5 $" }));
    saveDb();
    renderUserPanels();
  });

  dom.sellAllBtn.addEventListener("click", () => {
    const user = getCurrentUser();
    if (!user) return;
    if (!user.inventory.length) return showToast("Инвентарь уже пуст.");
    const total = roundMoney(user.inventory.reduce((sum, item) => sum + item.price, 0));
    user.inventory = [];
    user.balance = roundMoney(user.balance + total);
    pushHistory(user, historyEntry("sell_all", "Продан весь инвентарь", { delta: total, meta: "Массовая продажа" }));
    saveDb();
    renderUserPanels();
    showToast(`Продано всё на ${money(total)}.`);
  });

  dom.transferForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = getCurrentUser();
    if (!user) return;
    const targetId = dom.transferTarget.value.trim().toUpperCase();
    const amount = roundMoney(Number(dom.transferAmount.value));
    const targetUser = state.db.users.find((u) => u.id === targetId);
    if (!targetId || !Number.isFinite(amount) || amount <= 0) return showToast("Заполни корректные данные.");
    if (targetId === user.id) return showToast("Нельзя отправлять перевод самому себе.");
    if (!targetUser) return showToast("Пользователь с таким ID не найден.");
    if (user.balance < amount) return showToast("Недостаточно $.");

    user.balance = roundMoney(user.balance - amount);
    targetUser.balance = roundMoney(targetUser.balance + amount);
    pushHistory(user, historyEntry("transfer_out", `Перевод пользователю ${targetUser.nickname}`, { delta: -amount, meta: targetUser.id }));
    pushHistory(targetUser, historyEntry("transfer_in", `Получен перевод от ${user.nickname}`, { delta: amount, meta: user.id }));
    saveDb();
    dom.transferForm.reset();
    renderUserPanels();
    renderDirectory();
    renderAdminPanel();
    showToast(`Перевод ${money(amount)} выполнен.`);
  });

  dom.adminGrantForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const admin = getCurrentUser();
    if (!admin?.isAdmin) return;
    const targetId = dom.adminTargetId.value.trim().toUpperCase();
    const amount = roundMoney(Number(dom.adminGrantAmount.value));
    const comment = dom.adminGrantComment.value.trim();
    const targetUser = state.db.users.find((u) => u.id === targetId);
    if (!targetUser) return showToast("Пользователь не найден.");
    if (!Number.isFinite(amount) || amount <= 0) return showToast("Некорректная сумма.");
    if (!comment) return showToast("Добавь комментарий.");

    targetUser.balance = roundMoney(targetUser.balance + amount);
    pushHistory(targetUser, historyEntry("admin_credit", "Админ выдал $", { delta: amount, meta: comment }));
    pushHistory(admin, historyEntry("admin_action", `Начисление пользователю ${targetUser.nickname}`, { delta: 0, meta: `${money(amount)} • ${comment}` }));
    saveDb();
    dom.adminGrantForm.reset();
    renderUserPanels();
    renderDirectory();
    renderAdminPanel();
    showToast(`Выдано ${money(amount)} пользователю ${targetUser.nickname}.`);
  });

  dom.keepItemBtn.addEventListener("click", closeSpinModal);
  dom.sellDropBtn.addEventListener("click", sellLastDrop);
}

function bindModals() {
  document.querySelectorAll("[data-close-item-modal]").forEach((node) => node.addEventListener("click", closeItemModal));
  dom.itemModal.addEventListener("click", (e) => {
    if (e.target === dom.itemModal) closeItemModal();
  });
  dom.spinModal.addEventListener("click", (e) => {
    const backdrop = e.target.closest(".modal-backdrop");
    if (backdrop && !state.spinning) closeSpinModal();
  });
}

function renderApp() {
  const user = getCurrentUser();
  const loggedIn = Boolean(user);
  dom.authScreen.classList.toggle("hidden", loggedIn);
  dom.app.classList.toggle("hidden", !loggedIn);
  if (!loggedIn) return;

  dom.adminTab.classList.toggle("hidden", !user.isAdmin);
  if (!user.isAdmin && state.activeView === "admin") state.activeView = "cases";

  renderViewTabs();
  renderUserPanels();
  renderCases();
  renderDirectory();
  renderAdminPanel();
}

function renderViewTabs() {
  dom.viewTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.view === state.activeView));
  dom.views.forEach((view) => view.classList.toggle("active", view.id === `view-${state.activeView}`));
}

function renderUserPanels() {
  const user = getCurrentUser();
  if (!user) return;
  dom.balanceValue.textContent = money(user.balance);
  dom.userIdValue.textContent = user.id;
  dom.userNameValue.textContent = user.nickname;
  dom.inventoryCount.textContent = String(user.inventory.length);
  dom.inventoryValue.textContent = money(user.inventory.reduce((sum, item) => sum + item.price, 0));
  renderInventory(user);
  renderHistory(user);
  renderCases();
}

function renderCases() {
  const user = getCurrentUser();
  if (!user) return;
  dom.casesGrid.innerHTML = CASES.map((gameCase) => {
    const summary = raritySummary(calculateChances(gameCase));
    const best = [...gameCase.items].sort((a, b) => b.price - a.price)[0];
    const mythic = summary.find((s) => s.rarity === "mythic")?.percent || "0.00";
    return `
      <article class="case-card border-${best.rarity}">
        <div class="case-preview ${gameCase.preview}">
          <div class="case-preview-label">20 предметов</div>
          <div class="case-preview-label">${money(gameCase.cost)}</div>
        </div>
        <div class="case-body">
          <div>
            <h4>${escapeHtml(gameCase.name)}</h4>
            <div class="case-footline">
              <span>Топ-дроп: <strong>${escapeHtml(best.name)}</strong></span>
              <span>${money(best.price)}</span>
            </div>
          </div>
          <div class="chance-row">
            ${summary.map((row) => `<div class="chance-chip">${RARITY_LABELS[row.rarity]} · ${row.percent}%</div>`).join("")}
          </div>
          <div class="case-meta">
            <span>Mythic шанс: ${mythic}%</span>
            <span>${user.balance >= gameCase.cost ? "Можно открыть" : "Недостаточно $"}</span>
          </div>
        </div>
        <div class="case-actions">
          <button class="case-action primary" data-case-open="${gameCase.id}" ${user.balance < gameCase.cost || state.spinning ? "disabled" : ""}>Открыть кейс</button>
          <button class="case-action" data-case-info="${gameCase.id}">Шансы</button>
        </div>
      </article>
    `;
  }).join("");

  dom.casesGrid.querySelectorAll("[data-case-open]").forEach((btn) => btn.addEventListener("click", () => openCase(btn.dataset.caseOpen)));
  dom.casesGrid.querySelectorAll("[data-case-info]").forEach((btn) => btn.addEventListener("click", () => openCaseInfo(btn.dataset.caseInfo)));
}

function renderInventory(user) {
  if (!user.inventory.length) {
    dom.inventoryList.className = "item-list empty-state";
    dom.inventoryList.textContent = "Инвентарь пока пуст.";
    return;
  }

  const items = [...user.inventory].sort((a, b) => b.price - a.price);
  dom.inventoryList.className = "item-list";
  dom.inventoryList.innerHTML = items.map((item) => `
    <article class="item-card border-${item.rarity}">
      <div class="skin-swatch bg-${item.rarity}"></div>
      <div class="item-card-body">
        <div class="item-title-row">
          <div>
            <div class="rarity-chip">${RARITY_LABELS[item.rarity]}</div>
            <div class="item-title">${escapeHtml(item.name)}</div>
          </div>
          <div class="item-price">${money(item.price)}</div>
        </div>
        <div class="item-note">Кейс: ${escapeHtml(item.caseName)}</div>
        <div class="item-note">Получен: ${formatDate(item.openedAt)}</div>
      </div>
      <div class="item-card-side">
        <div class="item-note">Полностью залитая карточка вместо иконки</div>
        <button class="sell-btn" data-sell-item="${item.instanceId}">Продать</button>
      </div>
    </article>
  `).join("");

  dom.inventoryList.querySelectorAll("[data-sell-item]").forEach((btn) => btn.addEventListener("click", () => sellInventoryItem(btn.dataset.sellItem)));
}

function renderHistory(user) {
  const history = [...user.history].map(normalizeHistoryEntry);
  const income = history.filter((e) => e.delta > 0).reduce((sum, e) => sum + e.delta, 0);
  const expense = history.filter((e) => e.delta < 0).reduce((sum, e) => sum + Math.abs(e.delta), 0);
  dom.historyCount.textContent = String(history.length);
  dom.historyIncome.textContent = money(income);
  dom.historyExpense.textContent = money(expense);

  dom.historyFilters.querySelectorAll("[data-filter]").forEach((btn) => btn.classList.toggle("active", btn.dataset.filter === state.historyFilter));

  const filtered = history.filter((entry) => matchesHistoryFilter(entry, state.historyFilter));
  if (!filtered.length) {
    dom.historyList.className = "item-list empty-state";
    dom.historyList.textContent = "Под выбранный фильтр пока ничего не попадает.";
    return;
  }

  dom.historyList.className = "item-list";
  dom.historyList.innerHTML = filtered.slice(0, 80).map((entry) => {
    const deltaClass = entry.delta > 0 ? "delta-positive" : entry.delta < 0 ? "delta-negative" : "";
    const deltaText = entry.delta === 0 ? "—" : `${entry.delta > 0 ? "+" : ""}${money(entry.delta)}`;
    return `
      <article class="history-card">
        <div class="history-top-row">
          <div class="history-card-body">
            <div class="rarity-chip">${historyLabel(entry.type)}</div>
            <strong>${escapeHtml(entry.title)}</strong>
            <div class="stack-meta">${escapeHtml(entry.meta || "Без дополнительного комментария")}</div>
          </div>
          <div class="history-card-body" style="justify-items:end;text-align:right;">
            <div class="history-delta ${deltaClass}">${deltaText}</div>
            <div class="stack-meta">${formatDate(entry.date)}</div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderDirectory() {
  const users = [...state.db.users].sort((a, b) => b.balance - a.balance);
  if (!users.length) {
    dom.directoryList.className = "item-list empty-state";
    dom.directoryList.textContent = "Нет сохранённых пользователей.";
    return;
  }
  dom.directoryList.className = "item-list";
  dom.directoryList.innerHTML = users.map((user) => `
    <article class="user-card border-${user.isAdmin ? "mythic" : "common"}">
      <div class="user-card-body">
        <div class="user-card-row">
          <div>
            <div class="rarity-chip">${user.isAdmin ? "admin" : "user"}</div>
            <strong>${escapeHtml(user.nickname)}</strong>
          </div>
          <div class="user-balance">${money(user.balance)}</div>
        </div>
        <div class="user-card-meta">
          <span>${escapeHtml(user.id)}</span>
          <span>${escapeHtml(user.email)}</span>
        </div>
      </div>
    </article>
  `).join("");
}

function renderAdminPanel() {
  const admin = getCurrentUser();
  if (!admin?.isAdmin) {
    dom.adminUsersList.className = "item-list empty-state";
    dom.adminUsersList.textContent = "Админ-панель скрыта.";
    return;
  }
  const users = [...state.db.users].sort((a, b) => b.balance - a.balance);
  dom.adminUsersList.className = "item-list";
  dom.adminUsersList.innerHTML = users.map((user) => `
    <article class="user-card border-${user.isAdmin ? "mythic" : "common"}">
      <div class="user-card-body">
        <div class="user-card-row">
          <div>
            <div class="rarity-chip">${user.isAdmin ? "admin" : "user"}</div>
            <strong>${escapeHtml(user.nickname)}</strong>
          </div>
          <div class="user-balance">${money(user.balance)}</div>
        </div>
        <div class="user-card-meta">
          <span>${escapeHtml(user.id)}</span>
          <span>${escapeHtml(user.email)}</span>
        </div>
      </div>
    </article>
  `).join("");
}

function openCaseInfo(caseId) {
  const gameCase = CASES.find((c) => c.id === caseId);
  if (!gameCase) return;
  const chances = calculateChances(gameCase);
  dom.itemModalContent.innerHTML = `
    <div>
      <div class="eyebrow">таблица выпадений</div>
      <h2>${escapeHtml(gameCase.name)}</h2>
      <p class="auth-note">Цена открытия: <strong>${money(gameCase.cost)}</strong>. Ниже 20 предметов с шансами и ценами.</p>
    </div>
    <div class="items-table">
      <div class="item-row header">
        <div>Цвет</div>
        <div>Предмет</div>
        <div>Редкость</div>
        <div>Цена</div>
        <div>Шанс</div>
      </div>
      ${chances.map((item) => `
        <div class="item-row border-${item.rarity}">
          <div class="item-row-swatch bg-${item.rarity}"></div>
          <div><strong>${escapeHtml(item.name)}</strong></div>
          <div><span class="rarity-chip">${RARITY_LABELS[item.rarity]}</span></div>
          <div>${money(item.price)}</div>
          <div>${item.chance.toFixed(2)}%</div>
        </div>
      `).join("")}
    </div>
  `;
  dom.itemModal.classList.remove("hidden");
}

function closeItemModal() {
  dom.itemModal.classList.add("hidden");
}

function openCase(caseId) {
  const user = getCurrentUser();
  if (!user || state.spinning) return;
  const gameCase = CASES.find((c) => c.id === caseId);
  if (!gameCase) return;
  if (user.balance < gameCase.cost) return showToast(`Недостаточно $ для ${gameCase.name}.`);

  user.balance = roundMoney(user.balance - gameCase.cost);
  pushHistory(user, historyEntry("open_case", `Открыт кейс ${gameCase.name}`, { delta: -gameCase.cost, meta: "Списание за открытие" }));
  saveDb();
  renderUserPanels();

  const winner = rollItem(gameCase);
  const reelItems = buildReelItems(gameCase, winner);
  showSpinModal(gameCase, reelItems, winner);
}

function showSpinModal(gameCase, reelItems, winner) {
  state.spinning = true;
  state.spinLastDrop = null;
  cancelSpin();

  dom.spinCaseTitle.textContent = gameCase.name;
  dom.spinStatus.textContent = "Прокрутка...";
  dom.spinResult.classList.add("hidden");
  dom.spinActions.classList.add("hidden");
  dom.spinResult.innerHTML = "";
  dom.reelTrack.innerHTML = `
    <div class="reel-spacer"></div>
    ${reelItems.map((item) => `
      <article class="reel-card border-${item.rarity}" ${item._winner ? 'data-winner="1"' : ""}>
        <div class="reel-swatch bg-${item.rarity}"></div>
        <div class="reel-card-body">
          <div class="rarity-chip">${RARITY_LABELS[item.rarity]}</div>
          <strong>${escapeHtml(item.name)}</strong>
          <div class="stack-meta">${money(item.price)}</div>
        </div>
      </article>
    `).join("")}
    <div class="reel-spacer"></div>
  `;
  dom.reelTrack.style.transform = "translate3d(0px,0,0)";
  dom.spinModal.classList.remove("hidden");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const shell = dom.reelTrack.parentElement;
      const winnerCard = dom.reelTrack.querySelector('[data-winner="1"]');
      const spacers = dom.reelTrack.querySelectorAll('.reel-spacer');
      if (!shell || !winnerCard || spacers.length < 2) return finalizeSpin(gameCase, winner);

      const cardWidth = winnerCard.offsetWidth || 190;
      const spacerWidth = Math.max(16, shell.clientWidth / 2 - cardWidth / 2);
      spacers.forEach((s) => { s.style.width = `${spacerWidth}px`; });

      const target = Math.max(0, winnerCard.offsetLeft - (shell.clientWidth / 2 - winnerCard.offsetWidth / 2));
      animateReel(target, 5600, () => finalizeSpin(gameCase, winner));
    });
  });
}

function animateReel(target, duration, onDone) {
  cancelSpin();
  const startOffset = getTrackOffset();
  const startTime = performance.now();

  function frame(now) {
    const t = Math.min(1, (now - startTime) / duration);
    const eased = 1 - Math.pow(1 - t, 4);
    const value = startOffset + (target - startOffset) * eased;
    dom.reelTrack.style.transform = `translate3d(${-value}px,0,0)`;
    if (t < 1) {
      state.spinFrame = requestAnimationFrame(frame);
      return;
    }
    state.spinFrame = null;
    dom.reelTrack.style.transform = `translate3d(${-target}px,0,0)`;
    if (typeof onDone === "function") onDone();
  }

  state.spinFrame = requestAnimationFrame(frame);
}

function cancelSpin() {
  if (state.spinFrame) {
    cancelAnimationFrame(state.spinFrame);
    state.spinFrame = null;
  }
}

function getTrackOffset() {
  const m = (dom.reelTrack.style.transform || "translate3d(0px,0,0)").match(/translate3d\((-?[\d.]+)px/);
  return m ? Math.abs(Number(m[1])) : 0;
}

function finalizeSpin(gameCase, winner) {
  const user = getCurrentUser();
  if (!user) return;
  const inventoryItem = {
    instanceId: createId(),
    caseName: gameCase.name,
    name: winner.name,
    rarity: winner.rarity,
    price: winner.price,
    openedAt: new Date().toISOString(),
  };

  user.inventory.unshift(inventoryItem);
  pushHistory(user, historyEntry("drop", `Выпал предмет ${winner.name}`, { delta: 0, meta: `${RARITY_LABELS[winner.rarity]} • ${money(winner.price)}` }));
  saveDb();
  renderUserPanels();

  state.spinLastDrop = inventoryItem;
  state.spinning = false;
  dom.spinStatus.textContent = "Готово. Предмет добавлен в инвентарь.";
  dom.spinResult.classList.remove("hidden");
  dom.spinActions.classList.remove("hidden");
  dom.spinResult.innerHTML = `
    <article class="drop-card border-${winner.rarity}">
      <div class="drop-swatch bg-${winner.rarity}"></div>
      <div class="drop-card-body">
        <div class="rarity-chip">${RARITY_LABELS[winner.rarity]}</div>
        <strong>${escapeHtml(winner.name)}</strong>
        <div class="stack-meta">${escapeHtml(gameCase.name)}</div>
        <div class="stack-meta">${money(winner.price)}</div>
      </div>
      <div class="drop-card-side">
        <div class="item-note">Можно оставить или сразу продать.</div>
      </div>
    </article>
  `;
  renderCases();
}

function closeSpinModal() {
  if (state.spinning) return;
  cancelSpin();
  dom.spinModal.classList.add("hidden");
  dom.reelTrack.innerHTML = "";
  dom.reelTrack.style.transform = "translate3d(0px,0,0)";
  dom.spinResult.innerHTML = "";
  dom.spinResult.classList.add("hidden");
  dom.spinActions.classList.add("hidden");
  state.spinLastDrop = null;
}

function sellLastDrop() {
  const user = getCurrentUser();
  if (!user || !state.spinLastDrop) return closeSpinModal();
  const idx = user.inventory.findIndex((item) => item.instanceId === state.spinLastDrop.instanceId);
  if (idx === -1) return closeSpinModal();
  const [item] = user.inventory.splice(idx, 1);
  user.balance = roundMoney(user.balance + item.price);
  pushHistory(user, historyEntry("sell_drop", `Продан предмет ${item.name}`, { delta: item.price, meta: item.caseName }));
  saveDb();
  renderUserPanels();
  closeSpinModal();
  showToast(`Продано: ${item.name} за ${money(item.price)}.`);
}

function sellInventoryItem(instanceId) {
  const user = getCurrentUser();
  if (!user) return;
  const idx = user.inventory.findIndex((item) => item.instanceId === instanceId);
  if (idx === -1) return;
  const [item] = user.inventory.splice(idx, 1);
  user.balance = roundMoney(user.balance + item.price);
  pushHistory(user, historyEntry("sell_item", `Продан предмет ${item.name}`, { delta: item.price, meta: item.caseName }));
  saveDb();
  renderUserPanels();
  showToast(`Продано: ${item.name} за ${money(item.price)}.`);
}

function calculateChances(gameCase) {
  const counts = gameCase.items.reduce((acc, item) => {
    acc[item.rarity] = (acc[item.rarity] || 0) + 1;
    return acc;
  }, {});
  return gameCase.items.map((item) => ({
    ...item,
    chance: RARITY_WEIGHTS[item.rarity] / counts[item.rarity],
  }));
}

function raritySummary(items) {
  const result = {};
  items.forEach((item) => {
    result[item.rarity] = (result[item.rarity] || 0) + item.chance;
  });
  return Object.entries(result)
    .map(([rarity, chance]) => ({ rarity, percent: Number(chance).toFixed(2) }))
    .sort((a, b) => RARITY_WEIGHTS[b.rarity] - RARITY_WEIGHTS[a.rarity]);
}

function rollItem(gameCase) {
  const items = calculateChances(gameCase);
  let roll = Math.random() * 100;
  for (const item of items) {
    roll -= item.chance;
    if (roll <= 0) return item;
  }
  return items[items.length - 1];
}

function buildReelItems(gameCase, winner) {
  const source = calculateChances(gameCase);
  const result = [];
  const winnerIndex = 60 + Math.floor(Math.random() * 10);
  for (let i = 0; i < 100; i += 1) {
    result.push(i === winnerIndex ? { ...winner, _winner: true } : { ...source[Math.floor(Math.random() * source.length)] });
  }
  return result;
}

function matchesHistoryFilter(entry, filter) {
  if (filter === "all") return true;
  if (filter === "income") return entry.delta > 0;
  if (filter === "expense") return entry.delta < 0;
  if (filter === "transfers") return entry.type === "transfer_in" || entry.type === "transfer_out";
  if (filter === "drops") return ["drop", "sell_drop", "sell_item"].includes(entry.type);
  return true;
}

function historyLabel(type) {
  const map = {
    register: "регистрация",
    click: "фарм",
    open_case: "открытие",
    drop: "дроп",
    sell_item: "продажа",
    sell_drop: "продажа",
    sell_all: "продажа",
    transfer_in: "входящий перевод",
    transfer_out: "исходящий перевод",
    admin_credit: "начисление",
    admin_action: "админ",
    system: "system",
  };
  return map[type] || type;
}

function historyEntry(type, title, { delta = 0, meta = "" } = {}) {
  return { type, title, delta: roundMoney(delta), meta, date: new Date().toISOString() };
}

function pushHistory(user, entry) {
  user.history.unshift(entry);
  user.history = user.history.slice(0, HISTORY_LIMIT);
}

function getCurrentUser() {
  return state.db.users.find((u) => u.id === state.db.currentUserId) || null;
}

function createUserId() {
  let id = "";
  do {
    id = `U-${Math.floor(100000 + Math.random() * 900000)}`;
  } while (state.db.users.some((u) => u.id === id));
  return id;
}

function createId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function roundMoney(value) {
  return Math.round(Number(value || 0) * 100) / 100;
}

function money(value) {
  return `${roundMoney(value).toFixed(2)} $`;
}

function formatDate(value) {
  try {
    return new Date(value).toLocaleString("ru-RU");
  } catch {
    return String(value || "");
  }
}

function showToast(text) {
  dom.toast.textContent = text;
  dom.toast.classList.add("show");
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => dom.toast.classList.remove("show"), 2600);
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

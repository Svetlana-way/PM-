// Application Data
const appData = {
  "courses": {
    "beginner": [
      {
        "name": "Профессия Product Manager от Skillbox",
        "duration": "12 месяцев",
        "price": "от 5903₽/мес",
        "rating": 4.7,
        "level": "Начинающий",
        "format": "Онлайн",
        "features": ["Практика", "Портфолио", "Трудоустройство"],
        "link": "https://skillbox.ru"
      },
      {
        "name": "Product Manager от Нетологии",
        "duration": "9 месяцев",
        "price": "от 4393₽/мес",
        "rating": 4.8,
        "level": "Начинающий",
        "format": "Онлайн/Очно",
        "features": ["Диплом", "Наставник", "Проекты"],
        "link": "https://netology.ru"
      },
      {
        "name": "Продакт-менеджер от Яндекс Практикум",
        "duration": "9 месяцев",
        "price": "от 20500₽/мес",
        "rating": 4.5,
        "level": "Начинающий",
        "format": "Онлайн",
        "features": ["Реальные кейсы", "Наставники", "14 проектов"],
        "link": "https://practicum.yandex.ru"
      }
    ],
    "advanced": [
      {
        "name": "Middle & Senior Product Manager от ProductStar",
        "duration": "10 месяцев",
        "price": "от 5367₽/мес",
        "rating": 4.7,
        "level": "Продвинутый",
        "format": "Онлайн",
        "features": ["Для опытных", "Стратегия", "Лидерство"],
        "link": "https://productstar.ru"
      },
      {
        "name": "Product Manager IT-проектов от OTUS",
        "duration": "10 месяцев",
        "price": "от 6825₽/мес",
        "rating": 4.6,
        "level": "Продвинутый",
        "format": "Онлайн",
        "features": ["IT фокус", "Middle/Senior", "Сертификат"],
        "link": "https://otus.ru"
      }
    ],
    "international": [
      {
        "name": "Digital Product Management - University of Virginia (Coursera)",
        "duration": "4 месяца",
        "price": "$49/месяц",
        "rating": 4.8,
        "level": "Все уровни",
        "format": "Онлайн",
        "features": ["Университетский курс", "Английский", "Сертификат"],
        "link": "https://coursera.org"
      },
      {
        "name": "Product Management Program (edX)",
        "duration": "6 месяцев",
        "price": "$99/месяц",
        "rating": 4.7,
        "level": "Продвинутый",
        "format": "Онлайн",
        "features": ["MIT/Harvard", "Английский", "Продвинутый"],
        "link": "https://edx.org"
      },
      {
        "name": "Google Associate Product Manager Program",
        "duration": "24 месяца",
        "price": "Оплачиваемая стажировка",
        "rating": 5.0,
        "level": "Эксперт",
        "format": "Офис/Удаленно",
        "features": ["Google", "Оплата", "Реальный опыт"],
        "link": "https://careers.google.com"
      }
    ]
  },
  "books": [
    {
      "title": "Inspired (Вдохновленные)",
      "author": "Марти Каган",
      "category": "Основы PM",
      "rating": 4.9,
      "link": "https://litres.ru/book/marty-cagan/vdohnovlennye-51383835/",
      "description": "Библия продакт-менеджера. Основы создания продуктов."
    },
    {
      "title": "Lean Startup",
      "author": "Эрик Рис",
      "category": "Стартапы",
      "rating": 4.8,
      "link": "https://litres.ru",
      "description": "Методология бережливого стартапа и MVP."
    },
    {
      "title": "Hooked (На крючке)",
      "author": "Нир Эяль",
      "category": "UX/Retention",
      "rating": 4.7,
      "link": "https://litres.ru",
      "description": "Как создавать продукты, формирующие привычки."
    }
  ],
  "tools": [
    {
      "name": "Figma",
      "category": "Дизайн/Прототипирование",
      "description": "Collaborative design tool",
      "link": "https://figma.com",
      "free": true
    },
    {
      "name": "Miro",
      "category": "Коллаборация",
      "description": "Visual collaboration platform",
      "link": "https://miro.com",
      "free": true
    },
    {
      "name": "Google Analytics",
      "category": "Аналитика",
      "description": "Web analytics service",
      "link": "https://analytics.google.com",
      "free": true
    },
    {
      "name": "Amplitude",
      "category": "Product Analytics",
      "description": "Product intelligence platform",
      "link": "https://amplitude.com",
      "free": false
    }
  ],
  "podcasts": [
    {
      "name": "Потом доделаю",
      "description": "Истории и советы для управляющих проектами",
      "link": "https://soundstream.media/playlist/potom-dodelayu",
      "language": "Русский"
    },
    {
      "name": "Mind the Product",
      "description": "Leading product management community",
      "link": "https://mindtheproduct.com",
      "language": "English"
    }
  ],
  "achievements": [
    {
      "id": 1,
      "title": "Первые шаги",
      "description": "Начал обучение",
      "icon": "🚀",
      "points": 100
    },
    {
      "id": 2,
      "title": "Книжный червь",
      "description": "Прочитал 5 книг",
      "icon": "📚",
      "points": 500
    },
    {
      "id": 3,
      "title": "Практик",
      "description": "Выполнил 10 практических заданий",
      "icon": "⚡",
      "points": 750
    }
  ]
};

// Application State
let currentSection = 'dashboard';
let selectedTrack = 'beginner';
let timerState = {
  minutes: 25,
  seconds: 0,
  isRunning: false,
  isPaused: false,
  sessions: 0
};
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// DOM Elements
const navLinks = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('.section');
const trackCards = document.querySelectorAll('.track-card');
const courseList = document.getElementById('course-list');
const achievementsGrid = document.getElementById('achievements-grid');
const resourceTabs = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeCourses();
  initializeResources();
  initializeAchievements();
  initializeTimer();
  initializeCalendar();
  
  // Show initial courses
  displayCourses(appData.courses[selectedTrack]);
});

// Navigation
function initializeNavigation() {
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetSection = this.dataset.section;
      showSection(targetSection);
      
      // Update active nav link
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

function showSection(sectionId) {
  sections.forEach(section => {
    section.classList.remove('active');
  });
  
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
    currentSection = sectionId;
  }
}

// Courses
function initializeCourses() {
  // Track selection
  trackCards.forEach(card => {
    card.addEventListener('click', function() {
      const track = this.dataset.track;
      selectTrack(track);
    });
  });
  
  // Filters
  const durationFilter = document.getElementById('duration-filter');
  const priceFilter = document.getElementById('price-filter');
  const levelFilter = document.getElementById('level-filter');
  
  [durationFilter, priceFilter, levelFilter].forEach(filter => {
    if (filter) {
      filter.addEventListener('change', filterCourses);
    }
  });
}

function selectTrack(track) {
  trackCards.forEach(card => {
    card.classList.remove('selected');
  });
  
  const selectedCard = document.querySelector(`[data-track="${track}"]`);
  if (selectedCard) {
    selectedCard.classList.add('selected');
  }
  
  selectedTrack = track;
  const courses = appData.courses[track] || [];
  displayCourses(courses);
}

function displayCourses(courses) {
  if (!courseList) return;
  
  courseList.innerHTML = '';
  
  courses.forEach(course => {
    const courseCard = createCourseCard(course);
    courseList.appendChild(courseCard);
  });
}

function createCourseCard(course) {
  const card = document.createElement('div');
  card.className = 'card course-card';
  
  card.innerHTML = `
    <div class="card__body">
      <div class="course-header">
        <h4 class="course-title">${course.name}</h4>
        <div class="course-rating">
          <span>⭐</span>
          <span>${course.rating}</span>
        </div>
      </div>
      <div class="course-details">
        <div>Длительность: ${course.duration}</div>
        <div>Формат: ${course.format}</div>
        <div>Уровень: ${course.level}</div>
        <div class="course-price">${course.price}</div>
      </div>
      <div class="course-features">
        ${course.features.map(feature => `<span class="course-feature">${feature}</span>`).join('')}
      </div>
      <div class="course-footer">
        <a href="${course.link}" target="_blank" class="btn btn--primary">Перейти к курсу</a>
      </div>
    </div>
  `;
  
  return card;
}

function filterCourses() {
  const durationFilter = document.getElementById('duration-filter')?.value;
  const priceFilter = document.getElementById('price-filter')?.value;
  const levelFilter = document.getElementById('level-filter')?.value;
  
  let filteredCourses = [...(appData.courses[selectedTrack] || [])];
  
  if (levelFilter) {
    filteredCourses = filteredCourses.filter(course => course.level === levelFilter);
  }
  
  if (durationFilter) {
    filteredCourses = filteredCourses.filter(course => {
      const duration = course.duration;
      switch(durationFilter) {
        case 'short':
          return duration.includes('4 месяца') || duration.includes('6 месяцев');
        case 'medium':
          return duration.includes('9 месяцев') || duration.includes('10 месяцев') || duration.includes('12 месяцев');
        case 'long':
          return duration.includes('24 месяца') || duration.includes('18');
        default:
          return true;
      }
    });
  }
  
  displayCourses(filteredCourses);
}

// Resources
function initializeResources() {
  // Tab switching
  resourceTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const targetTab = this.dataset.tab;
      switchResourceTab(targetTab);
      
      resourceTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Initialize content
  displayBooks();
  displayPodcasts();
  displayTools();
}

function switchResourceTab(tabId) {
  tabContents.forEach(content => {
    content.classList.remove('active');
  });
  
  const targetContent = document.getElementById(`${tabId}-tab`);
  if (targetContent) {
    targetContent.classList.add('active');
  }
}

function displayBooks() {
  const booksGrid = document.getElementById('books-grid');
  if (!booksGrid) return;
  
  booksGrid.innerHTML = '';
  
  appData.books.forEach(book => {
    const bookCard = createResourceCard({
      title: book.title,
      subtitle: book.author,
      description: book.description,
      category: book.category,
      rating: book.rating,
      link: book.link
    });
    booksGrid.appendChild(bookCard);
  });
}

function displayPodcasts() {
  const podcastsGrid = document.getElementById('podcasts-grid');
  if (!podcastsGrid) return;
  
  podcastsGrid.innerHTML = '';
  
  appData.podcasts.forEach(podcast => {
    const podcastCard = createResourceCard({
      title: podcast.name,
      description: podcast.description,
      category: podcast.language,
      link: podcast.link
    });
    podcastsGrid.appendChild(podcastCard);
  });
}

function displayTools() {
  const toolsGrid = document.getElementById('tools-grid');
  if (!toolsGrid) return;
  
  toolsGrid.innerHTML = '';
  
  appData.tools.forEach(tool => {
    const toolCard = createResourceCard({
      title: tool.name,
      description: tool.description,
      category: tool.category,
      link: tool.link,
      free: tool.free
    });
    toolsGrid.appendChild(toolCard);
  });
}

function createResourceCard(resource) {
  const card = document.createElement('div');
  card.className = 'card resource-item';
  
  const ratingHtml = resource.rating ? 
    `<div class="resource-rating">
      <span>⭐</span>
      <span>${resource.rating}</span>
    </div>` : '';
    
  const freeLabel = resource.free !== undefined ? 
    `<span class="status ${resource.free ? 'status--success' : 'status--warning'}">
      ${resource.free ? 'Бесплатно' : 'Платно'}
    </span>` : '';
  
  card.innerHTML = `
    <div class="card__body">
      <div class="resource-header">
        <div>
          <h4 class="resource-title">${resource.title}</h4>
          ${resource.subtitle ? `<div class="resource-author">${resource.subtitle}</div>` : ''}
        </div>
        ${ratingHtml}
      </div>
      <p class="resource-description">${resource.description}</p>
      <div class="resource-footer">
        <span class="resource-category">${resource.category}</span>
        <div>
          ${freeLabel}
          <a href="${resource.link}" target="_blank" class="btn btn--outline btn--sm">Открыть</a>
        </div>
      </div>
    </div>
  `;
  
  return card;
}

// Achievements
function initializeAchievements() {
  if (!achievementsGrid) return;
  
  achievementsGrid.innerHTML = '';
  
  appData.achievements.forEach(achievement => {
    const achievementItem = document.createElement('div');
    achievementItem.className = 'achievement-item';
    achievementItem.innerHTML = `
      <div class="achievement-icon">${achievement.icon}</div>
      <div class="achievement-title">${achievement.title}</div>
    `;
    achievementItem.title = `${achievement.description} (+${achievement.points} очков)`;
    achievementsGrid.appendChild(achievementItem);
  });
}

// Pomodoro Timer
function initializeTimer() {
  const timerDisplay = document.getElementById('timer-display');
  const startBtn = document.getElementById('timer-start');
  const pauseBtn = document.getElementById('timer-pause');
  const resetBtn = document.getElementById('timer-reset');
  const sessionsCount = document.getElementById('sessions-count');
  
  if (!timerDisplay || !startBtn || !pauseBtn || !resetBtn) return;
  
  let timerInterval;
  
  function updateDisplay() {
    const minutes = String(timerState.minutes).padStart(2, '0');
    const seconds = String(timerState.seconds).padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;
    
    if (sessionsCount) {
      sessionsCount.textContent = timerState.sessions;
    }
  }
  
  function startTimer() {
    if (timerState.isRunning) return;
    
    timerState.isRunning = true;
    timerState.isPaused = false;
    
    timerInterval = setInterval(() => {
      if (timerState.seconds > 0) {
        timerState.seconds--;
      } else if (timerState.minutes > 0) {
        timerState.minutes--;
        timerState.seconds = 59;
      } else {
        // Timer finished
        clearInterval(timerInterval);
        timerState.isRunning = false;
        timerState.sessions++;
        resetTimer();
        alert('Время вышло! Сделайте перерыв.');
      }
      updateDisplay();
    }, 1000);
    
    startBtn.textContent = 'Идет...';
    startBtn.disabled = true;
  }
  
  function pauseTimer() {
    if (!timerState.isRunning) return;
    
    clearInterval(timerInterval);
    timerState.isRunning = false;
    timerState.isPaused = true;
    
    startBtn.textContent = 'Продолжить';
    startBtn.disabled = false;
  }
  
  function resetTimer() {
    clearInterval(timerInterval);
    timerState.minutes = 25;
    timerState.seconds = 0;
    timerState.isRunning = false;
    timerState.isPaused = false;
    
    startBtn.textContent = 'Старт';
    startBtn.disabled = false;
    updateDisplay();
  }
  
  startBtn.addEventListener('click', startTimer);
  pauseBtn.addEventListener('click', pauseTimer);
  resetBtn.addEventListener('click', resetTimer);
  
  // Initial display
  updateDisplay();
}

// Calendar
function initializeCalendar() {
  const calendarGrid = document.getElementById('calendar-grid');
  const currentMonthEl = document.getElementById('current-month');
  const prevBtn = document.getElementById('prev-month');
  const nextBtn = document.getElementById('next-month');
  
  if (!calendarGrid || !currentMonthEl) return;
  
  const months = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];
  
  const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  
  function renderCalendar() {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const startDate = new Date(firstDay);
    const today = new Date();
    
    // Adjust to start from Monday
    const dayOfWeek = (firstDay.getDay() + 6) % 7;
    startDate.setDate(firstDay.getDate() - dayOfWeek);
    
    currentMonthEl.textContent = `${months[currentMonth]} ${currentYear}`;
    calendarGrid.innerHTML = '';
    
    // Add day headers
    daysOfWeek.forEach(day => {
      const dayHeader = document.createElement('div');
      dayHeader.textContent = day;
      dayHeader.style.fontWeight = 'bold';
      dayHeader.style.textAlign = 'center';
      dayHeader.style.color = 'var(--color-text-secondary)';
      calendarGrid.appendChild(dayHeader);
    });
    
    // Add calendar days
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const dayEl = document.createElement('div');
      dayEl.className = 'calendar-day';
      dayEl.textContent = date.getDate();
      
      // Check if it's today
      if (date.toDateString() === today.toDateString()) {
        dayEl.classList.add('today');
      }
      
      // Check if it's in current month
      if (date.getMonth() !== currentMonth) {
        dayEl.style.opacity = '0.3';
      }
      
      // Add some sample events
      if (date.getDate() === 20 || date.getDate() === 21 || date.getDate() === 22) {
        dayEl.classList.add('has-event');
      }
      
      calendarGrid.appendChild(dayEl);
    }
  }
  
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      renderCalendar();
    });
    
    nextBtn.addEventListener('click', () => {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      renderCalendar();
    });
  }
  
  renderCalendar();
}

// Goals Management
document.addEventListener('change', function(e) {
  if (e.target.classList.contains('goal-checkbox')) {
    // Handle goal completion
    const goalItem = e.target.closest('.goal-item');
    if (goalItem) {
      goalItem.style.transition = 'all 0.3s ease';
      if (e.target.checked) {
        goalItem.style.transform = 'scale(0.95)';
        setTimeout(() => {
          goalItem.style.transform = 'scale(1)';
        }, 150);
      }
    }
  }
});

// Utility Functions
function showNotification(message, type = 'info') {
  // Simple notification system
  const notification = document.createElement('div');
  notification.className = `status status--${type}`;
  notification.textContent = message;
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.right = '20px';
  notification.style.zIndex = '1000';
  notification.style.padding = '12px 20px';
  notification.style.borderRadius = '8px';
  notification.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
  // Ctrl/Cmd + number keys for quick navigation
  if ((e.ctrlKey || e.metaKey) && e.key >= '1' && e.key <= '6') {
    e.preventDefault();
    const sectionMap = {
      '1': 'dashboard',
      '2': 'courses', 
      '3': 'resources',
      '4': 'practice',
      '5': 'community',
      '6': 'planner'
    };
    
    const targetSection = sectionMap[e.key];
    if (targetSection) {
      showSection(targetSection);
      
      // Update navigation
      navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === targetSection);
      });
    }
  }
  
  // Space bar for timer control when in planner section
  if (e.code === 'Space' && currentSection === 'planner') {
    e.preventDefault();
    const startBtn = document.getElementById('timer-start');
    if (startBtn && !startBtn.disabled) {
      startBtn.click();
    } else {
      const pauseBtn = document.getElementById('timer-pause');
      if (pauseBtn) pauseBtn.click();
    }
  }
});

// Performance optimization - lazy loading
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, observerOptions);

// Observe all cards for animation
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      observer.observe(card);
    });
  }, 100);
});

// Add CSS animation class
const style = document.createElement('style');
style.textContent = `
  .fade-in {
    animation: fadeInUp 0.6s ease forwards;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);
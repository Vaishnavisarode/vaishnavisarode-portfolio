const menuToggle=document.getElementById('menuToggle');
const navLinks=document.getElementById('navLinks');
menuToggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
navLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navLinks.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();
const progress=document.getElementById('progress');
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(max>0?(window.scrollY/max)*100:0)+'%';},{passive:true});
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));


// Rotating role headline with a typewriter effect.
(() => {
  const roleElement = document.getElementById('changingRole');
  if (!roleElement) return;

  const roles = [
    'Data Analyst',
    'SQL Problem Solver',
    'Power BI Enthusiast',
    'Python & Data Explorer',
    'Business Insights Seeker'
  ];

  // Respect reduced-motion preferences: keep a useful static headline.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    roleElement.textContent = roles[0];
    return;
  }

  let roleIndex = 0;
  let characterIndex = roles[0].length;
  let deleting = true;

  function typeRole() {
    const currentRole = roles[roleIndex];

    if (deleting) {
      characterIndex--;
      roleElement.textContent = currentRole.slice(0, Math.max(0, characterIndex));
      if (characterIndex <= 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        window.setTimeout(typeRole, 350);
        return;
      }
      window.setTimeout(typeRole, 42);
    } else {
      const nextRole = roles[roleIndex];
      characterIndex++;
      roleElement.textContent = nextRole.slice(0, characterIndex);
      if (characterIndex >= nextRole.length) {
        deleting = true;
        window.setTimeout(typeRole, 1450);
        return;
      }
      window.setTimeout(typeRole, 78);
    }
  }

  window.setTimeout(typeRole, 1500);
})();


// Dark / light theme toggle (forest green + warm gold palette).
(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  const labelFor = theme => theme === 'dark' ? 'Light mode' : 'Dark mode';

  function applyTheme(theme, save = true) {
    const selected = theme === 'light' ? 'light' : 'dark';
    root.dataset.theme = selected;
    toggle.textContent = labelFor(selected);
    toggle.setAttribute('aria-label', selected === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute('content', selected === 'dark' ? '#101712' : '#f5f2e9');
    if (save) {
      try { localStorage.setItem('portfolio-theme', selected); } catch (error) { /* storage may be unavailable */ }
    }
  }

  let initialTheme = root.dataset.theme || 'dark';
  try { initialTheme = localStorage.getItem('portfolio-theme') || initialTheme; } catch (error) { /* use default */ }
  applyTheme(initialTheme, false);
  toggle.addEventListener('click', () => {
    applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
  });
})();

(function () {
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var IMG = './images/projects/';
  var DEV = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/';

  /* ---------- DATA ---------- */
  // Image lists accept several candidate file names; the first one that loads is used.
  function range(n, fns) {
    var out = [];
    for (var i = 1; i <= n; i++) out.push(fns.map(function (f) { return IMG + f(i); }));
    return out;
  }
  var yt = function (id) { return 'https://www.youtube.com/embed/' + id; };

  var SKILLS = [
    { n: 'C++', d: 'cplusplus/cplusplus-original.svg', m: 'C+' },
    { n: 'C#', d: 'csharp/csharp-original.svg', m: 'C#' },
    { n: 'Unity', d: 'unity/unity-original.svg', m: 'Un' },
    { n: 'Unreal Engine', d: 'unrealengine/unrealengine-original.svg', m: 'UE' },
    { n: 'Visual Studio', d: 'visualstudio/visualstudio-plain.svg', m: 'VS' },
    { n: 'Git', d: 'git/git-original.svg', m: 'Gi' },
    { n: 'GitHub', d: 'github/github-original.svg', m: 'GH' },
    { n: 'OpenGL', d: 'opengl/opengl-original.svg', m: 'GL' },
    { n: 'SDL', m: 'SDL' },
    { n: 'Tiled', m: 'Til' },
    { n: 'Level Design', fa: 'fa-map' }
  ];

  var ME = 'Toni Llovera Roca';
  var PROJECTS = [
    {
      slug: 'estik', title: 'Estik',
      cover: [[IMG + 'estik.png']],
      card: 'Action and skill video game inspired by field hockey: guide the ball to the goal while overcoming obstacles.',
      tags: ['Action', 'Skill', 'Premis Ludi 2026'],
      video: yt('aGGM1yTLy6A'),
      facts: [['fa-calendar', '2026'], ['fa-users', '4 people'], ['fa-flag', 'Premis Ludi 2026']],
      about: "Estik is an action and skill video game inspired by field hockey in which the player must complete a series of dynamic levels. The goal of each stage is to guide the ball to the goal, overcoming a wide variety of environmental obstacles and challenges that test the player's precision, trajectory calculation and mental agility. It was created for the Premis Ludi 2026 by 3Cat.",
      features: ['Dynamic levels with environmental obstacles', 'Guide the ball to the goal', 'Tests precision and trajectory calculation'],
      workTitle: 'My work',
      work: 'Four-person team project. My role was programmer, UI programmer and technical artist.',
      team: [
        ['Marc Blanquez Padilla', 'Programmer, 3D artist and level designer', 'https://github.com/MarcBlanquezPadilla'],
        ['Martí Mira Vázquez', 'Level designer, UI artist and 3D artist', 'https://github.com/algars15'],
        ['Oscar Alonso Camenforte', 'Programmer, sound programmer and level designer', 'https://github.com/oscaralonsoo'],
        [ME, 'Programmer, UI programmer and technical artist', 'https://github.com/ToniLlovera', true]
      ],
      gallery: range(6, [function (i) { return 'estik-' + i + '.png'; }, function (i) { return 'Estik' + i + '.png'; }]),
      link: 'https://oalonsoo.itch.io/estik'
    },
    {
      slug: 'odossea', title: 'Odossea',
      cover: [[IMG + 'odossea.png']],
      award: ['Socialpoint Best Technology Award', '9th Gran CITM Game Jam'],
      card: 'Co-op game for 2 players: throw and share mass to solve puzzles and clear platforms together.',
      tags: ['Platformer', 'Puzzle', 'Co-op', 'Game Jam'],
      facts: [['fa-calendar', 'Feb 2026'], ['fa-bolt', 'Game jam'], ['fa-gamepad', '2 players']],
      about: 'Odossea is a cooperative platformer and puzzle game for two players. You throw and share mass to solve puzzles and clear platforms together: the characters can split up to work together on their odyssey. It is played with keyboard and mouse plus one gamepad, or with two gamepads.',
      features: ['Local co-op multiplayer for 2 players', 'Throw-and-share-mass mechanic', 'Interactive tutorial', 'Gamepad support'],
      workTitle: 'Development',
      work: "Developed as a team by TorratsGames for the 9th Gran CITM GameJam (January–February 2026), organized by Delegació CITM UPC. It ranked #1 in Gameplay in the jam's voting.",
      gallery: range(6, [function (i) { return 'odossea-' + i + '.png'; }, function (i) { return 'O2ea' + (i - 1) + '.png'; }]),
      link: 'https://torratsgames.itch.io/odossea'
    },
    {
      slug: 'son-of-ithaca', title: 'Son Of Ithaca',
      cover: [[IMG + 'son-of-ithaca.png']],
      award: ['Nominee: Best Academic Game', 'IndieDevDay · SAGA Game Fest 2026'],
      card: '3D action-adventure based on The Odyssey: you play as Telemachus searching for his father, Odysseus.',
      tags: ['Action-Adventure', '3D', 'Teamwork'],
      video: yt('PYzuc0fsHpM'),
      facts: [['fa-calendar', 'Jul 2026'], ['fa-users', '20+ people'], ['fa-desktop', 'Windows']],
      about: 'Son of Ithaca is an action-adventure game based on The Odyssey, where you play as Telemachus searching for his father, Odysseus. With the help of Athena, goddess of wisdom, travel to a mysterious island and explore it to gain new powers from the gods in the form of equippable masks; then open the portal to the Underworld and face the final challenges.',
      features: ['3D action-adventure based on The Odyssey', 'Equippable masks with the powers of the gods', 'Exploration of a mysterious island and a portal to the Underworld'],
      workTitle: 'Development',
      work: 'Project developed as a team by Nobody Games Studio, with over 20 people. Free for Windows; roughly one hour long.',
      gallery: range(8, [function (i) { return 'son-of-ithaca-' + i + '.png'; }, function (i) { return 'SOI' + i + '.png'; }]),
      link: 'https://nobody-games-studio.itch.io/son-of-ithaca'
    },
    {
      slug: 'dune-engine', title: 'Dune Engine', type: 'ENGINE',
      cover: [[IMG + 'dune-engine.jpg']],
      card: 'Game engine built from scratch using SDL3 and OpenGL.',
      tags: ['C++', 'OpenGL', 'SDL3'],
      facts: [['fa-calendar', 'Nov 2025'], ['fa-wrench', 'C++ · SDL3 · OpenGL']],
      about: 'Dune Engine is a game engine developed in C++ with SDL3 and OpenGL, focused on learning engine architecture and efficient rendering.',
      features: ['Modern OpenGL rendering system', 'Dynamic resource loading', 'Basic level editor'],
      workTitle: 'My work',
      work: 'In this project I worked mainly on resource management and the entity system.',
      gallery: range(3, [function (i) { return 'dune-engine-' + i + '.jpg'; }])
    },
    {
      slug: 'granotago', title: 'GranotaGo',
      cover: [[IMG + 'granotago.png']],
      card: "Game made for 3Cat's Premis Ludi. Guide an adventurous frog in a 2D experience.",
      tags: ['Unity', 'C#', 'GameJam'],
      facts: [['fa-calendar', 'Oct 2025'], ['fa-wrench', 'Unity'], ['fa-child', 'Ages 6–8']],
      about: "GranotaGo is a casual, colorful game aimed at children aged 6 to 8 and developed in Unity, in which the player controls a frog that must move through dynamic scenes, avoiding obstacles and collecting points. It was created for 3Cat's Premis Ludi together with other CITM students.",
      features: ['Drag & drop mechanics', 'Colorful scenes', 'Scoring system'],
      workTitle: 'My work',
      work: "During development, I worked on programming the panel and block system. I was also in charge of testing, fixing and polishing the levels. The project was presented at 3Cat's Premis Ludi and stood out for its look and smooth gameplay.",
      gallery: range(5, [function (i) { return 'granotago-' + i + '.png'; }]),
      link: 'https://oalonsoo.itch.io/granotago'
    },
    {
      slug: 'the-apprentice', title: 'The Apprentice',
      cover: [[IMG + 'the-apprentice-title.png']],
      card: '2D platformer made with SDL2 alongside digital art students.',
      tags: ['SDL2', 'C++', 'Tiled'],
      facts: [['fa-calendar', 'Jun 2025'], ['fa-wrench', 'C++ · SDL2 · Tiled']],
      about: 'The Apprentice is a 2D platformer and adventure game in which the player plays a young apprentice who seeks to master ancient magic. It was developed with SDL2 and Tiled, combining a handcrafted art direction with precise level design.',
      features: ['Physics and collision system in C++', 'Tiled map integration', 'Basic AI for enemies and bosses'],
      workTitle: 'My work',
      work: "My main role was programming the logic for menus, transitions, levels, saving and loading, and UI. I also helped integrate art assets, programmed enemy AI and optimized the base engine's performance.",
      gallery: range(4, [function (i) { return 'the-apprentice-' + i + '.jpg'; }]),
      link: 'https://oalonsoo.itch.io/the-apprentice'
    },
    {
      slug: 'need-for-beer', title: 'Need For Beer',
      cover: [[IMG + 'need-for-beer.png']],
      card: 'Physics-based racing game, developed as a team learning project.',
      tags: ['C++', 'Physics', 'Racing game'],
      facts: [['fa-calendar', 'Nov 2024'], ['fa-wrench', 'C++'], ['fa-gamepad', '1–2 players']],
      about: 'Need For Beer is a 1 or 2 player racing game with an emphasis on the physical simulation of vehicle movement. It was developed collaboratively in a GitHub repository with classmates, as part of a study of physics mechanics applied to video games.',
      features: ['Vehicle physics simulation (forces, friction, collisions)', 'Dynamic circuits and crash-and-bounce mechanics', 'Custom keyboard controls, turbo system and advanced braking'],
      workTitle: 'My work',
      work: 'In this project, my main role was designing and implementing the lap systems, as well as integrating the turbo system, all the UI and the main art. I also helped structure the GitHub repository and optimize for stable performance.',
      gallery: range(4, [function (i) { return 'needForBeer' + i + '.png'; }]),
      link: 'https://tonillovera.itch.io/needforbeer'
    }
  ];

  /* ---------- HELPERS ---------- */
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function initials(n) { return n.split(' ').filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join('').toUpperCase(); }

  // image that walks through its candidate file names; calls onFail if none loads
  function tryImg(cands, alt, onFail) {
    var img = new Image(), i = 0;
    img.alt = alt; img.loading = 'lazy'; img.decoding = 'async';
    img.onerror = function () {
      i++;
      if (i < cands.length) img.src = cands[i]; else { img.onerror = null; if (onFail) onFail(img); }
    };
    img.src = cands[0];
    return img;
  }

  /* ---------- SKILLS ---------- */
  var CATS = [
    ['Programming', ['C++', 'C#']],
    ['Engines', ['Unity', 'Unreal Engine']],
    ['Libraries & Frameworks', ['OpenGL', 'SDL', 'Tiled']],
    ['Tools', ['Visual Studio', 'Git', 'GitHub']],
    ['Design', ['Level Design']]
  ];
  function skillTile(s) {
    var d = el('div', 'skill'), box = el('span', 'ico'), ico;
    if (s.d) {
      ico = new Image(); ico.alt = ''; ico.loading = 'lazy'; ico.src = DEV + s.d;
      ico.onerror = function () { ico.replaceWith(el('i', 'mono', s.m)); };
    } else if (s.fa) { ico = el('i', 'fas ' + s.fa); }
    else { ico = el('i', 'mono', s.m); }
    box.appendChild(ico); d.appendChild(box); d.appendChild(el('span', '', esc(s.n)));
    return d;
  }
  var skillGrid = $('#skillGrid');
  CATS.forEach(function (cat, k) {
    var card = el('div', 'scat reveal'); card.style.setProperty('--d', k % 3);
    card.appendChild(el('h3', '', esc(cat[0])));
    var chips = el('div', 'chips');
    cat[1].forEach(function (name) {
      var s = SKILLS.filter(function (x) { return x.n === name; })[0];
      if (s) chips.appendChild(skillTile(s));
    });
    card.appendChild(chips); skillGrid.appendChild(card);
  });

  /* ---------- PROJECT CARDS + WINDOWS ---------- */
  var grid = $('#projGrid');
  PROJECTS.forEach(function (p, idx) {
    // card
    var c = el('article', 'proj reveal'); c.id = p.slug; c.style.setProperty('--d', idx % 3);
    var cover = el('div', 'cover');
    cover.appendChild(tryImg(p.cover[0], p.title, function (im) { im.remove(); }));
    cover.appendChild(el('span', 'badge', p.type || 'GAME'));
    var body = el('div', 'pbody');
    body.appendChild(el('h3', '', esc(p.title)));
    if (p.award) body.appendChild(el('div', 'award', '<i class="fas fa-trophy"></i><div><strong>' + esc(p.award[0]) + '</strong><span>' + esc(p.award[1]) + '</span></div>'));
    body.appendChild(el('p', 'pcard', esc(p.card)));
    body.appendChild(el('div', 'tags', p.tags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('')));
    var btn = el('button', 'open', 'View project <i class="fas fa-arrow-right"></i>');
    btn.type = 'button'; btn.setAttribute('data-open', p.slug);
    body.appendChild(btn);
    c.appendChild(cover); c.appendChild(body); grid.appendChild(c);

    // window
    var d = el('dialog', 'modal'); d.id = 'm-' + p.slug; d.setAttribute('aria-label', p.title);
    var x = el('button', 'x', '&times;'); x.type = 'button'; x.setAttribute('aria-label', 'Close'); x.setAttribute('data-close', '');
    var sc = el('div', 'mscroll');
    var n = 0;
    function blk(node) { node.classList.add('blk'); node.style.setProperty('--i', n++); sc.appendChild(node); return node; }

    var head = el('div', '', '<h2>' + esc(p.title) + '</h2>');
    if (p.award) head.appendChild(el('div', 'pill', '<i class="fas fa-trophy"></i> ' + esc(p.award[0]) + ' – ' + esc(p.award[1])));
    blk(head);

    var media = el('div', 'media');
    if (p.video) {
      var f = document.createElement('iframe');
      f.setAttribute('data-src', p.video); f.title = p.title; f.allowFullscreen = true;
      f.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
      f.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      media.appendChild(f);
      blk(media);
    } else {
      var mi = tryImg(p.cover[0], p.title, function () { media.remove(); });
      media.appendChild(mi); blk(media);
    }

    blk(el('div', 'facts', p.facts.map(function (f) { return '<span><i class="fas ' + f[0] + '"></i>' + esc(f[1]) + '</span>'; }).join('')));

    // two columns: text | team
    var cols = el('div', 'cols');
    var left = el('div');
    left.appendChild(el('h3', '', 'About the project'));
    left.appendChild(el('p', '', esc(p.about)));
    left.appendChild(el('h3', '', 'Main features'));
    left.appendChild(el('ul', '', p.features.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('')));
    left.appendChild(el('h3', '', esc(p.workTitle)));
    left.appendChild(el('p', '', esc(p.work)));
    cols.appendChild(left);
    if (p.team) {
      var right = el('div');
      right.appendChild(el('h3', '', 'Team'));
      var tm = el('div', 'team');
      p.team.forEach(function (m) {
        var row = el('div', 'member' + (m[3] ? ' me' : ''));
        row.innerHTML = '<span class="avatar">' + esc(initials(m[0])) + '</span><div><strong>' + esc(m[0]) + '</strong><small>' + esc(m[1]) + '</small></div>' +
          '<a href="' + esc(m[2]) + '" target="_blank" rel="noopener" aria-label="' + esc(m[0]) + ' on GitHub"><i class="fab fa-github"></i></a>';
        tm.appendChild(row);
      });
      right.appendChild(tm); cols.appendChild(right);
    } else { cols.style.gridTemplateColumns = '1fr'; }
    blk(cols);

    // screenshots
    var tail = el('div');
    if (p.gallery && p.gallery.length) {
      tail.appendChild(el('h3', '', 'Screenshots'));
      var shots = el('div', 'shots');
      p.gallery.forEach(function (cands, k) {
        var b = el('button', 'shot'); b.type = 'button'; b.setAttribute('aria-label', 'Open screenshot ' + (k + 1));
        var im = tryImg(cands, p.title + ' screenshot ' + (k + 1), function () { b.remove(); });
        b.appendChild(im); shots.appendChild(b);
      });
      tail.appendChild(shots);
    }
    var btns = el('div', 'btns');
    if (p.link) btns.appendChild(el('a', 'visit', '<i class="fas fa-arrow-up-right-from-square"></i> View on itch.io')).href = p.link;
    if (p.link) { var a = btns.lastChild; a.target = '_blank'; a.rel = 'noopener'; }
    if (btns.children.length) tail.appendChild(btns);
    blk(tail);

    d.appendChild(x); d.appendChild(sc); document.body.appendChild(d);
  });

  /* ---------- PROGRESS BAR ---------- */
  var bar = $('.progress');
  function prog() { var h = document.documentElement; var m = h.scrollHeight - h.clientHeight; bar.style.transform = 'scaleX(' + (m > 0 ? h.scrollTop / m : 0) + ')'; }
  addEventListener('scroll', prog, { passive: true }); prog();

  /* ---------- REVEAL ON SCROLL ---------- */
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); } });
  }, { threshold: 0.12 }) : null;
  $$('.reveal, .sec-title').forEach(function (e) { io ? io.observe(e) : e.classList.add('in-view'); });

  /* ---------- TYPEWRITER ---------- */
  var roles = $('#roles');
  if (roles) {
    var words = JSON.parse(roles.dataset.words), w = 0, c2 = 0, del = false;
    if (reduce) { roles.textContent = words[0]; } else (function tick() {
      var cur = words[w];
      roles.textContent = cur.slice(0, c2);
      if (!del && c2 === cur.length) { del = true; return setTimeout(tick, 1600); }
      if (del && c2 === 0) { del = false; w = (w + 1) % words.length; return setTimeout(tick, 350); }
      c2 += del ? -1 : 1; setTimeout(tick, del ? 35 : 75);
    })();
  }

  /* ---------- PROJECT WINDOWS ---------- */
  function openM(slug) {
    var d = document.getElementById('m-' + slug); if (!d || d.open) return;
    d.showModal(); document.body.classList.add('lock');
    $$('iframe[data-src]', d).forEach(function (f) { f.src = f.dataset.src; });
    history.replaceState(null, '', '#' + slug);
  }
  function closeM(d) {
    $$('iframe', d).forEach(function (f) { f.src = ''; });
    document.body.classList.remove('lock');
    if (location.hash) history.replaceState(null, '', location.pathname + location.search);
  }
  $$('[data-open]').forEach(function (b) { b.addEventListener('click', function () { openM(b.dataset.open); }); });
  $$('dialog.modal').forEach(function (d) {
    d.addEventListener('click', function (e) { if (e.target === d || e.target.hasAttribute('data-close')) d.close(); });
    d.addEventListener('close', function () { closeM(d); });
    // screenshots -> lightbox
    d.addEventListener('click', function (e) {
      var b = e.target.closest('.shot'); if (!b) return;
      var imgs = $$('.shot img', d);
      openLB(imgs, imgs.indexOf($('img', b)));
    });
  });

  /* ---------- LIGHTBOX ---------- */
  var lb = $('#lb'), lbImg = $('#lbImg'), lbCount = $('#lbCount'), cur = 0, list = [];
  function showLB() {
    var im = list[cur]; lbImg.src = im.currentSrc || im.src; lbImg.alt = im.alt;
    lbCount.textContent = (cur + 1) + ' / ' + list.length;
  }
  function openLB(imgs, i) { list = imgs; cur = Math.max(0, i); showLB(); lb.showModal(); }
  function step(n) { cur = (cur + n + list.length) % list.length; showLB(); }
  $('.prev', lb).addEventListener('click', function () { step(-1); });
  $('.next', lb).addEventListener('click', function () { step(1); });
  lb.addEventListener('click', function (e) { if (e.target === lb || e.target.hasAttribute('data-lbclose')) lb.close(); });
  lb.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') step(-1);
    else if (e.key === 'ArrowRight') step(1);
  });

  /* ---------- THEME TOGGLE ---------- */
  var root = document.documentElement, tbtn = $('#themeBtn');
  function paintTheme() {
    var dark = root.getAttribute('data-theme') !== 'light';
    tbtn.innerHTML = '<i class="fas ' + (dark ? 'fa-sun' : 'fa-moon') + '"></i>';
    var m = $('meta[name="theme-color"]'); if (m) m.setAttribute('content', dark ? '#0b0e14' : '#f7f8fa');
  }
  tbtn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    paintTheme();
  });
  paintTheme();

  /* ---------- ACTIVE NAV LINK ---------- */
  var links = $$('.top nav a'), secs = links.map(function (a) { return $(a.getAttribute('href')); });
  function spy() {
    var y = scrollY + innerHeight * 0.35, active = -1;
    secs.forEach(function (s, i) { if (s && s.offsetTop <= y) active = i; });
    links.forEach(function (a, i) { a.classList.toggle('active', i === active); });
  }
  addEventListener('scroll', spy, { passive: true }); spy();

  var sp = $('#statProjects'); if (sp) sp.textContent = PROJECTS.length;

  var h = location.hash.slice(1); if (h) openM(h);
})();

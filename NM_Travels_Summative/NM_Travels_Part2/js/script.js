/* NM Travels – site script
   Every feature checks that its elements exist first, so one file serves all pages. */

// Scheduled routes (mirrors the table on routes.html). Prices are per seat, in rand.
const ROUTES = [
  { from: 'Polokwane', to: 'Polokwane International Airport', depart: '05:30', arrive: '06:15', price: 120 },
  { from: 'Polokwane', to: 'OR Tambo International Airport', depart: '06:00', arrive: '09:00', price: 450 },
  { from: 'Polokwane', to: 'Johannesburg', depart: '07:00', arrive: '10:00', price: 420 },
  { from: 'Johannesburg', to: 'Polokwane', depart: '16:30', arrive: '19:30', price: 420 }
];

const findRoute = (from, to) => ROUTES.find(r => r.from === from && r.to === to);
const rand = amount => 'R' + amount.toLocaleString('en-ZA');

// Small helper that builds an element with text, so user input is never inserted as HTML.
function el(tag, text, attrs = {}) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
  return node;
}

function showNotice(box, ...children) {
  box.replaceChildren(...children.map(c => (typeof c === 'string' ? el('p', c) : c)));
  box.hidden = false;
}

document.addEventListener('DOMContentLoaded', () => {
  /* ---------- Every page ---------- */

  // Mobile navigation: toggles a class (not inline styles) so the desktop menu
  // can never get stuck hidden after resizing, and keeps aria-expanded in sync.
  const menu = document.querySelector('.menu');
  const nav = document.getElementById('site-nav');
  if (menu && nav) {
    const setOpen = open => {
      nav.classList.toggle('open', open);
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      menu.textContent = open ? '✕' : '☰';
    };
    menu.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        setOpen(false);
        menu.focus();
      }
    });
    window.matchMedia('(min-width: 901px)').addEventListener('change', e => {
      if (e.matches) setOpen(false);
    });
  }

  // Footer year stays current.
  document.querySelectorAll('[data-year]').forEach(span => {
    span.textContent = new Date().getFullYear();
  });

  // Date pickers cannot select a day in the past.
  const today = new Date();
  const todayISO = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  document.querySelectorAll('input[type="date"]').forEach(input => {
    input.min = todayISO;
  });

  // Live character counters for textareas that declare data-counter.
  document.querySelectorAll('textarea[data-counter]').forEach(area => {
    const counter = document.getElementById(area.dataset.counter);
    const update = () => {
      counter.textContent = `${area.value.length} / ${area.maxLength} characters`;
    };
    area.addEventListener('input', update);
    area.form?.addEventListener('reset', () => setTimeout(update));
  });

  // Back-to-top button appears after scrolling down a long page.
  const topBtn = el('button', '↑', { type: 'button', class: 'to-top', 'aria-label': 'Back to top' });
  topBtn.hidden = true;
  document.body.append(topBtn);
  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0 });
    document.getElementById('main')?.focus({ preventScroll: true });
  });
  window.addEventListener('scroll', () => {
    topBtn.hidden = window.scrollY < 600;
  }, { passive: true });

  /* ---------- Home: departure search ---------- */
  const routeSearchForm = document.getElementById('routeSearch');
  const searchResult = document.getElementById('searchResult');
  if (routeSearchForm) {
    routeSearchForm.addEventListener('submit', e => {
      e.preventDefault();
      const from = routeSearchForm.from.value;
      const to = routeSearchForm.to.value;
      const date = routeSearchForm.date.value;

      if (from === to) {
        showNotice(searchResult, 'Pickup and destination must be different.');
        return;
      }

      const route = findRoute(from, to);
      if (!route) {
        const link = el('a', 'Request a private charter quote for this trip', { href: 'charter.html', class: 'text-link' });
        showNotice(searchResult, `There is no scheduled shuttle from ${from} to ${to} yet.`, link);
        return;
      }

      const params = new URLSearchParams({ from, to, date });
      const result = el('div', '', { class: 'result' });
      result.append(
        el('strong', `${route.from} → ${route.to}`),
        el('span', `Departs ${route.depart} · Arrives ${route.arrive} · ${rand(route.price)} per seat`),
        el('a', 'Book this departure', { href: `booking.html?${params}`, class: 'btn primary' })
      );
      showNotice(searchResult, `1 departure found for ${new Date(date + 'T00:00').toLocaleDateString('en-ZA', { weekday: 'long', day: 'numeric', month: 'long' })}:`, result);
    });
  }

  /* ---------- Routes: filter with live count ---------- */
  const filter = document.getElementById('filter');
  const routeRows = document.querySelectorAll('#routeTable tbody tr');
  const filterCount = document.getElementById('filterCount');
  if (filter) {
    filter.addEventListener('change', () => {
      let shown = 0;
      routeRows.forEach(row => {
        const match = filter.value === 'all' || row.dataset.type === filter.value;
        row.hidden = !match;
        if (match) shown++;
      });
      filterCount.textContent = filter.value === 'all'
        ? `Showing all ${routeRows.length} routes`
        : `Showing ${shown} of ${routeRows.length} routes`;
    });
  }

  /* ---------- Booking: prefill from links + live fare estimate ---------- */
  const bookingForm = document.getElementById('bookingForm');
  const bookingResult = document.getElementById('bookingResult');
  if (bookingForm) {
    const { pickup, dropoff, seats, travelDate } = bookingForm.elements;
    const fareBox = document.getElementById('fareEstimate');

    // Links from the home search and routes table pass ?from=&to=&date=
    const params = new URLSearchParams(location.search);
    const setIfValid = (select, value) => {
      if (value && [...select.options].some(o => o.value === value)) select.value = value;
    };
    setIfValid(pickup, params.get('from'));
    setIfValid(dropoff, params.get('to'));
    if (params.get('date') && params.get('date') >= todayISO) travelDate.value = params.get('date');

    const updateFare = () => {
      const count = Math.max(1, parseInt(seats.value, 10) || 1);
      fareBox.className = 'fare full';
      if (!pickup.value || !dropoff.value) {
        fareBox.textContent = 'Choose a pickup and drop-off to see an estimated fare.';
        return;
      }
      if (pickup.value === dropoff.value) {
        fareBox.textContent = 'Pickup and drop-off must be different.';
        fareBox.classList.add('warn');
        return;
      }
      const route = findRoute(pickup.value, dropoff.value);
      if (!route) {
        fareBox.replaceChildren(
          `No scheduled shuttle runs from ${pickup.value} to ${dropoff.value}. `,
          el('a', 'Request a private charter quote instead', { href: 'charter.html', class: 'text-link' })
        );
        fareBox.classList.add('warn');
        return;
      }
      fareBox.replaceChildren(
        el('strong', `Estimated fare: ${rand(route.price * count)}`),
        ` — ${count} × ${rand(route.price)}, departs ${route.depart}, arrives ${route.arrive}.`
      );
      if (count > 7) {
        fareBox.append(' Groups of 8 or more may save with a ',
          el('a', 'private charter', { href: 'charter.html', class: 'text-link' }), '.');
      }
    };
    [pickup, dropoff, seats].forEach(field => field.addEventListener('input', updateFare));
    updateFare();

    bookingForm.addEventListener('submit', e => {
      e.preventDefault();
      if (pickup.value === dropoff.value) {
        showNotice(bookingResult, 'Pickup and drop-off must be different.');
        return;
      }
      const route = findRoute(pickup.value, dropoff.value);
      const name = document.getElementById('name').value.trim();
      showNotice(bookingResult,
        `Thank you, ${name}. Your booking request for ${seats.value} seat(s) from ${pickup.value} to ${dropoff.value} has been recorded for this academic demonstration.`,
        route ? `Estimated fare: ${rand(route.price * seats.value)}.` : 'This trip is not on the timetable, so the office would contact you with a quote.'
      );
      bookingForm.reset();
      updateFare();
      bookingResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  /* ---------- Charter: vehicle suggestion + enquiry ---------- */
  const charterForm = document.getElementById('charterForm');
  const charterResult = document.getElementById('charterResult');
  if (charterForm) {
    const group = document.getElementById('group');
    const suggestion = document.getElementById('vehicleSuggestion');
    const suggest = () => {
      const size = parseInt(group.value, 10);
      if (!size || size < 1) {
        suggestion.textContent = "Enter your group size and we'll suggest a vehicle combination.";
      } else if (size <= 7) {
        suggestion.textContent = 'Suggested vehicle: one 7-seater shuttle.';
      } else if (size <= 14) {
        suggestion.textContent = 'Suggested vehicle: our 14-seater minibus.';
      } else if (size <= 21) {
        suggestion.textContent = 'Suggested vehicles: the 14-seater minibus plus one 7-seater.';
      } else if (size <= 28) {
        suggestion.textContent = 'Suggested vehicles: the full fleet (14-seater plus two 7-seaters).';
      } else {
        suggestion.textContent = 'Your group is larger than our fleet (28 seats). Send the enquiry and we will help arrange extra transport.';
      }
    };
    group.addEventListener('input', suggest);

    charterForm.addEventListener('submit', e => {
      e.preventDefault();
      showNotice(charterResult, 'Your private charter enquiry has been recorded for this demonstration. A real system would route it to the sales inbox.');
      charterForm.reset();
      suggest();
    });
  }

  /* ---------- About: contact form + office open/closed status ---------- */
  const contactForm = document.getElementById('contactForm');
  const contactResult = document.getElementById('contactResult');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      showNotice(contactResult, 'Your message has been recorded for this demonstration. A real implementation would send it to the company inbox.');
      contactForm.reset();
    });
  }

  const officeStatus = document.getElementById('officeStatus');
  if (officeStatus) {
    // Uses South African time, whatever the visitor's own time zone is.
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Africa/Johannesburg', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
    }).formatToParts(new Date());
    const get = type => parts.find(p => p.type === type).value;
    const weekday = !['Sat', 'Sun'].includes(get('weekday'));
    const minutes = parseInt(get('hour'), 10) * 60 + parseInt(get('minute'), 10);
    const open = weekday && minutes >= 7 * 60 && minutes < 17 * 60;
    officeStatus.textContent = open
      ? 'The Polokwane office is open now (closes at 17:00).'
      : 'The Polokwane office is closed now. It opens Monday to Friday at 07:00 — you can still send a message below.';
    officeStatus.classList.add(open ? 'is-open' : 'is-closed');
    officeStatus.hidden = false;
  }
});

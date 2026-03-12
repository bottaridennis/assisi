AOS.init({ duration: 1000, once: true });

const animatori = [
    { n: "Edoardo", r: "Guida", i: "bx-crown" },
    { n: "Pietro", r: "Logistica", i: "bx-map-alt" },
    { n: "Dennis", r: "Organizzazione", i: "bx-bolt-circle" },
    { n: "Davide", r: "Presenza", i: "bx-sun" },
    { n: "Alice", r: "Relazioni", i: "bx-heart-circle" },
    { n: "Luca", r: "Musica", i: "bx-music" },
    { n: "Vittorio", r: "Energia", i: "bx-medal" }
];

const staffGrid = document.getElementById('staffGrid');
staffGrid.innerHTML = animatori.map((a, i) => `
    <div class="col" data-aos="fade-up" data-aos-delay="${i * 100}">
        <div class="staff-card text-center">
            <div class="staff-icon"><i class='bx ${a.i}'></i></div>
            <h4 class="fw-bold mb-2">${a.n}</h4>
            <span class="staff-role">${a.r}</span>
        </div>
    </div>
`).join('');

const end = new Date("June 26, 2026 08:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const diff = end - now;

    if (diff <= 0) {
        document.getElementById('d').innerText = '00';
        document.getElementById('h').innerText = '00';
        document.getElementById('m').innerText = '00';
        return;
    }

    document.getElementById('d').innerText = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
    document.getElementById('h').innerText = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    document.getElementById('m').innerText = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

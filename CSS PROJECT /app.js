const tracks = [
    {
        id: 0,
        title: "Top 50 - Global",
        artist: "Spotify Editorial",
        category: "music",
        image: "card1img.jpeg",
        duration: 213,
        bpm: 90,
        scale: "E Minor",
        lyrics: [
            { time: 0, text: "♪ (Intro - Ambient Synth Groove) ♪" },
            { time: 6, text: "Wake up in the morning, rhythm in my mind" },
            { time: 14, text: "Looking for the sound that we left behind" },
            { time: 22, text: "Feel the vibration flowing through the light" },
            { time: 30, text: "Turning up the volume till we reach the night" },
            { time: 38, text: "Yeah we got that global energy right now" },
            { time: 48, text: "Every city singing, showing everyone how" },
            { time: 58, text: "Top of the charts, never gonna stop" },
            { time: 70, text: "Feel the bass drop, let the rhythm pop!" }
        ]
    },
    {
        id: 1,
        title: "Lofi Beats",
        artist: "Chillhop Music",
        category: "chill",
        image: "card2img.jpeg",
        duration: 175,
        bpm: 80,
        scale: "A Minor",
        lyrics: [
            { time: 0, text: "♪ (Warm Vinyl Crackle & Soft Keys) ♪" },
            { time: 8, text: "Coffee steaming softly by the window pane" },
            { time: 18, text: "Watching gentle drops of the morning rain" },
            { time: 30, text: "Pages flipping slow, taking in the peace" },
            { time: 42, text: "Melodies that make all the worries cease" },
            { time: 56, text: "Just breathe in... let the mind unwind" }
        ]
    },
    {
        id: 2,
        title: "Chill Vibes",
        artist: "Dreamy Lofi",
        category: "chill",
        image: "card3img.jpeg",
        duration: 198,
        bpm: 85,
        scale: "C Major",
        lyrics: [
            { time: 0, text: "♪ (Gentle Rhodes & Sub Bass) ♪" },
            { time: 10, text: "Cruising down the avenue without a care" },
            { time: 20, text: "Golden afternoon sunshine in the air" },
            { time: 32, text: "Every little melody feels so light and free" },
            { time: 45, text: "Floating on this soundscape, just you and me" }
        ]
    },
    {
        id: 3,
        title: "Midnight Study",
        artist: "Late Night Chill",
        category: "study",
        image: "card4img.jpeg",
        duration: 184,
        bpm: 75,
        scale: "G Major",
        lyrics: [
            { time: 0, text: "♪ (Low-fi Kick & Mellow Chords) ♪" },
            { time: 12, text: "Focus in the dark, neon glowing bright" },
            { time: 24, text: "Lines of clean code written in the night" },
            { time: 36, text: "Deep concentration, steady pacing flow" },
            { time: 48, text: "Midnight hours when the ideas grow" }
        ]
    },
    {
        id: 4,
        title: "Acoustic Pop",
        artist: "Singer Songwriter",
        category: "music",
        image: "card3img.jpeg",
        duration: 210,
        bpm: 95,
        scale: "F Major",
        lyrics: [
            { time: 0, text: "♪ (Acoustic Strumming & Tambourine) ♪" },
            { time: 8, text: "Simple wooden strings playing from the heart" },
            { time: 18, text: "Knew that we were special right here from the start" },
            { time: 28, text: "Sing along with me to this gentle song" },
            { time: 40, text: "Nothing in this harmony could ever feel wrong" }
        ]
    },
    {
        id: 5,
        title: "Night Drive",
        artist: "Retrowave Project",
        category: "electro",
        image: "card4img.jpeg",
        duration: 245,
        bpm: 100,
        scale: "D Minor",
        lyrics: [
            { time: 0, text: "♪ (80s Arpeggiator & Pulse) ♪" },
            { time: 14, text: "Taillights flashing red on the interstate" },
            { time: 26, text: "Speeding through the highway, running pretty late" },
            { time: 40, text: "Analog synthesizers driving through the haze" },
            { time: 54, text: "Lost inside this retro neon cyber maze" }
        ]
    },
    {
        id: 6,
        title: "Electro Party",
        artist: "Synth Club",
        category: "electro",
        image: "card5img.jpeg",
        duration: 232,
        bpm: 120,
        scale: "G Minor",
        lyrics: [
            { time: 0, text: "♪ (Pumping 4/4 Kick & Build) ♪" },
            { time: 10, text: "Are you ready for the beat to ignite the room?" },
            { time: 22, text: "Feel the sub bass booming like sonic boom" },
            { time: 34, text: "Hands up in the sky, let the lasers flash!" },
            { time: 46, text: "Turn it up together with an epic clash!" }
        ]
    },
    {
        id: 7,
        title: "Top Songs - India",
        artist: "Bollywood & Indie",
        category: "india",
        image: "card6img.jpeg",
        duration: 204,
        bpm: 95,
        scale: "C# Minor",
        lyrics: [
            { time: 0, text: "♪ (Sitar & Tabla Fusion Intro) ♪" },
            { time: 10, text: "Dil ki baatein sun le, hawaon ka asar" },
            { time: 22, text: "Rhythm of the city in every single corner" },
            { time: 35, text: "Indie beats and melodies that keep us smiling" },
            { time: 48, text: "Desi groove that keeps the spirits flying" }
        ]
    },
    {
        id: 8,
        title: "Acoustic Hits",
        artist: "Unplugged Sessions",
        category: "music",
        image: "card1img.jpeg",
        duration: 189,
        bpm: 88,
        scale: "D Major",
        lyrics: [
            { time: 0, text: "♪ (Fingerpicked Guitar Chords) ♪" },
            { time: 10, text: "Quiet in the room, resonance so sweet" },
            { time: 22, text: "Tapping to the tempo of our heartbeat" },
            { time: 36, text: "Unplugged and honest, nothing in disguise" },
            { time: 50, text: "True musical magic right before your eyes" }
        ]
    }
];

const quickItems = [
    { title: "Top 50 - Global", image: "card1img.jpeg", trackId: 0 },
    { title: "Lofi Beats", image: "card2img.jpeg", trackId: 1 },
    { title: "Chill Vibes", image: "card3img.jpeg", trackId: 2 },
    { title: "Midnight Study", image: "card4img.jpeg", trackId: 3 },
    { title: "Electro Party", image: "card5img.jpeg", trackId: 6 },
    { title: "Top Songs - India", image: "card6img.jpeg", trackId: 7 }
];

const chordFrequencies = {
    "E Minor": [
        [164.81, 196.00, 246.94, 329.63],
        [130.81, 164.81, 196.00, 261.63],
        [196.00, 246.94, 293.66, 392.00],
        [146.83, 185.00, 220.00, 293.66]
    ],
    "A Minor": [
        [220.00, 261.63, 329.63, 440.00],
        [146.83, 174.61, 220.00, 293.66],
        [196.00, 246.94, 293.66, 392.00],
        [261.63, 329.63, 392.00, 523.25]
    ],
    "C Major": [
        [130.81, 164.81, 196.00, 261.63],
        [174.61, 220.00, 261.63, 349.23],
        [196.00, 246.94, 293.66, 392.00],
        [220.00, 261.63, 329.63, 440.00]
    ],
    "G Major": [
        [196.00, 246.94, 293.66, 392.00],
        [146.83, 185.00, 220.00, 293.66],
        [220.00, 261.63, 329.63, 440.00],
        [130.81, 164.81, 196.00, 261.63]
    ],
    "F Major": [
        [174.61, 220.00, 261.63, 349.23],
        [130.81, 164.81, 196.00, 261.63],
        [146.83, 174.61, 220.00, 293.66],
        [233.08, 293.66, 349.23, 466.16]
    ],
    "D Minor": [
        [146.83, 174.61, 220.00, 293.66],
        [220.00, 261.63, 329.63, 440.00],
        [130.81, 164.81, 196.00, 261.63],
        [233.08, 293.66, 349.23, 466.16]
    ],
    "G Minor": [
        [196.00, 233.08, 293.66, 392.00],
        [130.81, 155.56, 196.00, 261.63],
        [146.83, 174.61, 220.00, 293.66],
        [164.81, 196.00, 246.94, 329.63]
    ],
    "C# Minor": [
        [138.59, 164.81, 207.65, 277.18],
        [164.81, 207.65, 246.94, 329.63],
        [220.00, 277.18, 329.63, 440.00],
        [146.83, 174.61, 220.00, 293.66]
    ],
    "D Major": [
        [146.83, 185.00, 220.00, 293.66],
        [220.00, 277.18, 329.63, 440.00],
        [164.81, 196.00, 246.94, 329.63],
        [174.61, 220.00, 261.63, 349.23]
    ]
};

let currentTrackIndex = 0;
let isPlaying = false;
let isMuted = false;
let volume = 70;
let prevVolume = 70;
let playbackSeconds = 0;
let isShuffled = false;
let isRepeating = false;
let currentFilter = "all";
let searchQuery = "";

let audioCtx = null;
let mainVolumeNode = null;
let analyser = null;
let synthInterval = null;
let timerIncrement = null;
let beatCount = 0;

const playBtn = document.getElementById("play-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const repeatBtn = document.getElementById("repeat-btn");
const likeBtn = document.getElementById("like-btn");
const pipBtn = document.getElementById("pip-btn");
const volumeBtn = document.getElementById("volume-btn");
const fullscreenBtn = document.getElementById("fullscreen-btn");

const currentAlbumArt = document.getElementById("current-album-art");
const currentTrackTitle = document.getElementById("current-track-title");
const currentTrackArtist = document.getElementById("current-track-artist");

const currTimeSpan = document.getElementById("curr-time");
const totTimeSpan = document.getElementById("tot-time");
const progressBar = document.getElementById("progress-bar");
const progressFill = document.getElementById("progress-fill");
const volumeBar = document.getElementById("volume-bar");
const volumeFill = document.getElementById("volume-fill");

const lyricsToggleBtn = document.getElementById("lyrics-toggle-btn");
const lyricsModal = document.getElementById("lyrics-modal");
const closeLyricsModal = document.getElementById("close-lyrics-modal");
const lyricsContainer = document.getElementById("lyrics-container");
const lyricsSongTitle = document.getElementById("lyrics-song-title");

const queueToggleBtn = document.getElementById("queue-toggle-btn");
const queueDrawer = document.getElementById("queue-drawer");
const closeQueueDrawer = document.getElementById("close-queue-drawer");
const queueNowPlaying = document.getElementById("queue-now-playing");
const queueUpNextList = document.getElementById("queue-up-next-list");

const devicesToggleBtn = document.getElementById("devices-toggle-btn");
const devicesModal = document.getElementById("devices-modal");
const closeDevicesModal = document.getElementById("close-devices-modal");

const friendActivityToggleBtn = document.getElementById("friend-activity-toggle-btn");
const friendActivityPanel = document.getElementById("friend-activity-panel");
const btnCloseFriendPanel = document.getElementById("btn-close-friend-panel");

const btnOpenCreatePlaylist = document.getElementById("btn-open-create-playlist");
const btnCreatePlaylistShortcut = document.getElementById("btn-create-playlist-shortcut");
const createPlaylistModal = document.getElementById("create-playlist-modal");
const closeCreatePlaylistModal = document.getElementById("close-create-playlist-modal");
const btnCancelCreatePlaylist = document.getElementById("btn-cancel-create-playlist");
const createPlaylistForm = document.getElementById("create-playlist-form");
const customPlaylistsContainer = document.getElementById("custom-playlists-container");

const searchInput = document.getElementById("main-search-input");
const clearSearchBtn = document.getElementById("clear-search-btn");
const toastContainer = document.getElementById("toast-container");

function showToast(message, iconClass = "fa-solid fa-check") {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="${iconClass}"></i> <span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(20px) scale(0.9)";
        toast.style.transition = "all 0.3s ease";
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function initAudio() {
    if (audioCtx) return;
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    mainVolumeNode = audioCtx.createGain();
    mainVolumeNode.gain.setValueAtTime(isMuted ? 0 : volume / 100, audioCtx.currentTime);
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;
    mainVolumeNode.connect(analyser);
    analyser.connect(audioCtx.destination);
}

function createNoiseBuffer() {
    if (!audioCtx) return null;
    const bufferSize = audioCtx.sampleRate * 0.15;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
    }
    return buffer;
}

function playSynthChord(frequencies, duration = 3.2) {
    if (!audioCtx || audioCtx.state === 'suspended') return;
    const now = audioCtx.currentTime;
    
    frequencies.forEach((freq, index) => {
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);
        osc.detune.setValueAtTime(index * 3 - 5, now);
        
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(700, now);
        
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.05, now + 0.4);
        gainNode.gain.setValueAtTime(0.05, now + duration - 0.5);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);
        
        osc.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(mainVolumeNode);
        osc.start(now);
        osc.stop(now + duration);
    });
}

function playSynthMelodyNote(noteFreq) {
    if (!audioCtx || audioCtx.state === 'suspended') return;
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(noteFreq, now);
    
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.035, now + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);
    
    const delay = audioCtx.createDelay();
    delay.delayTime.value = 0.35;
    const delayFeedback = audioCtx.createGain();
    delayFeedback.gain.value = 0.3;
    
    osc.connect(gainNode);
    gainNode.connect(mainVolumeNode);
    gainNode.connect(delay);
    delay.connect(delayFeedback);
    delayFeedback.connect(delay);
    delayFeedback.connect(mainVolumeNode);
    
    osc.start(now);
    osc.stop(now + 1.1);
}

function playSequenceStep() {
    if (!audioCtx || audioCtx.state === 'suspended') return;
    const now = audioCtx.currentTime;
    const track = tracks[currentTrackIndex];
    
    if (beatCount % 8 === 0) {
        const scaleChords = chordFrequencies[track.scale] || chordFrequencies["E Minor"];
        const chordIndex = Math.floor(beatCount / 8) % scaleChords.length;
        playSynthChord(scaleChords[chordIndex], 3.2);
    }
    
    if (beatCount % 4 === 0) {
        const kickOsc = audioCtx.createOscillator();
        const kickGain = audioCtx.createGain();
        kickOsc.frequency.setValueAtTime(110, now);
        kickOsc.frequency.exponentialRampToValueAtTime(0.01, now + 0.22);
        kickGain.gain.setValueAtTime(0.3, now);
        kickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        kickOsc.connect(kickGain);
        kickGain.connect(mainVolumeNode);
        kickOsc.start(now);
        kickOsc.stop(now + 0.22);
    }
    
    if (beatCount % 4 === 2) {
        const snareNoise = createNoiseBuffer();
        if (snareNoise) {
            const snareSource = audioCtx.createBufferSource();
            snareSource.buffer = snareNoise;
            const snareFilter = audioCtx.createBiquadFilter();
            snareFilter.type = 'bandpass';
            snareFilter.frequency.value = 1100;
            const snareGain = audioCtx.createGain();
            snareGain.gain.setValueAtTime(0.05, now);
            snareGain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
            snareSource.connect(snareFilter);
            snareFilter.connect(snareGain);
            snareGain.connect(mainVolumeNode);
            snareSource.start(now);
            snareSource.stop(now + 0.14);
        }
    }
    
    if (beatCount % 2 === 1 && Math.random() > 0.35) {
        const hatNoise = createNoiseBuffer();
        if (hatNoise) {
            const hatSource = audioCtx.createBufferSource();
            hatSource.buffer = hatNoise;
            const hatFilter = audioCtx.createBiquadFilter();
            hatFilter.type = 'highpass';
            hatFilter.frequency.value = 6500;
            const hatGain = audioCtx.createGain();
            hatGain.gain.setValueAtTime(0.012, now);
            hatGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
            hatSource.connect(hatFilter);
            hatFilter.connect(hatGain);
            hatGain.connect(mainVolumeNode);
            hatSource.start(now);
            hatSource.stop(now + 0.05);
        }
    }
    
    if (beatCount % 2 === 0 && Math.random() > 0.35) {
        const scaleChords = chordFrequencies[track.scale] || chordFrequencies["E Minor"];
        const currentChord = scaleChords[Math.floor(beatCount / 8) % scaleChords.length];
        const freqIndex = Math.floor(Math.random() * currentChord.length);
        const melodyFreq = currentChord[freqIndex] * 2.0; 
        playSynthMelodyNote(melodyFreq);
    }
    
    beatCount = (beatCount + 1) % 32;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function renderQuickAccess() {
    const container = document.getElementById("quick-grid-container");
    container.innerHTML = "";
    
    quickItems.forEach(item => {
        const div = document.createElement("div");
        div.className = "quick-item";
        div.setAttribute("data-track-id", item.trackId);
        div.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="quick-img">
            <span class="quick-title">${item.title}</span>
            <button class="quick-play-btn" title="Play ${item.title}"><i class="fa-solid fa-play"></i></button>
        `;
        div.addEventListener("click", () => {
            currentTrackIndex = item.trackId;
            playbackSeconds = 0;
            beatCount = 0;
            startPlayback();
            showToast(`Now Playing: ${item.title}`);
        });
        container.appendChild(div);
    });
}

function createCardElement(track) {
    const card = document.createElement("div");
    card.className = `card ${currentTrackIndex === track.id && isPlaying ? 'playing-now' : ''}`;
    card.setAttribute("data-track-id", track.id);
    card.innerHTML = `
        <div class="card-img-container">
            <img src="${track.image}" class="card-img" alt="${track.title}">
            <button class="card-play-btn" title="Play ${track.title}"><i class="fa-solid fa-play"></i></button>
        </div>
        <p class="card-title">${track.title}</p>
        <p class="card-info">${track.artist} • ${track.scale} harmony • ${track.bpm} BPM</p>
    `;

    card.addEventListener("click", () => {
        currentTrackIndex = track.id;
        playbackSeconds = 0;
        beatCount = 0;
        startPlayback();
        showToast(`Playing: ${track.title}`);
    });

    return card;
}

function renderSections() {
    const recentlyPlayedContainer = document.getElementById("cards-recently-played");
    const trendingContainer = document.getElementById("cards-trending");
    const chartsContainer = document.getElementById("cards-charts");

    recentlyPlayedContainer.innerHTML = "";
    trendingContainer.innerHTML = "";
    chartsContainer.innerHTML = "";

    const filteredTracks = tracks.filter(track => {
        const matchCategory = currentFilter === "all" || 
                              track.category === currentFilter || 
                              (currentFilter === "music" && track.category !== "podcasts");
        const matchSearch = track.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            track.artist.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchSearch;
    });

    if (filteredTracks.length === 0) {
        recentlyPlayedContainer.innerHTML = `<p style="color: var(--text-muted); grid-column: 1/-1; padding: 1rem 0;">No tracks match "${searchQuery}".</p>`;
        return;
    }

    filteredTracks.forEach((track, index) => {
        const card = createCardElement(track);
        if (index < 3) {
            recentlyPlayedContainer.appendChild(card.cloneNode(true));
        }
        if (index >= 1 && index < 6) {
            trendingContainer.appendChild(card.cloneNode(true));
        }
        if (index >= 4 || filteredTracks.length <= 4) {
            chartsContainer.appendChild(card.cloneNode(true));
        }
    });

    document.querySelectorAll(".card").forEach(c => {
        c.addEventListener("click", () => {
            const trackId = parseInt(c.getAttribute("data-track-id"));
            currentTrackIndex = trackId;
            playbackSeconds = 0;
            beatCount = 0;
            startPlayback();
            showToast(`Playing: ${tracks[trackId].title}`);
        });
    });
}

function updateSliders() {
    const track = tracks[currentTrackIndex];
    progressBar.max = track.duration;
    progressBar.value = playbackSeconds;
    const progressPercent = (playbackSeconds / track.duration) * 100;
    progressFill.style.width = `${progressPercent}%`;
    currTimeSpan.textContent = formatTime(playbackSeconds);

    volumeBar.value = isMuted ? 0 : volume;
    volumeFill.style.width = `${isMuted ? 0 : volume}%`;
}

function updatePlayerUI() {
    const track = tracks[currentTrackIndex];
    currentAlbumArt.src = track.image;
    currentTrackTitle.textContent = track.title;
    currentTrackArtist.textContent = track.artist;
    totTimeSpan.textContent = formatTime(track.duration);
    
    updateSliders();
    
    if (isPlaying) {
        playBtn.innerHTML = '<i class="fa-solid fa-circle-pause"></i>';
        currentAlbumArt.classList.add("playing");
    } else {
        playBtn.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
        currentAlbumArt.classList.remove("playing");
    }

    document.querySelectorAll(".card").forEach(c => {
        const id = parseInt(c.getAttribute("data-track-id"));
        if (id === currentTrackIndex && isPlaying) {
            c.classList.add("playing-now");
        } else {
            c.classList.remove("playing-now");
        }
    });

    renderLyrics();
    renderQueue();
}

function startPlayback() {
    initAudio();
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    isPlaying = true;
    updatePlayerUI();
    const track = tracks[currentTrackIndex];
    const beatIntervalMs = (60 / track.bpm) * 1000 * 0.5;
    
    clearInterval(synthInterval);
    synthInterval = setInterval(playSequenceStep, beatIntervalMs);
    
    clearInterval(timerIncrement);
    timerIncrement = setInterval(() => {
        if (playbackSeconds < track.duration) {
            playbackSeconds++;
            updateSliders();
            updateLyricsHighlight();
        } else {
            if (isRepeating) {
                playbackSeconds = 0;
            } else {
                nextTrack();
            }
        }
    }, 1000);
}

function pausePlayback() {
    isPlaying = false;
    clearInterval(synthInterval);
    clearInterval(timerIncrement);
    updatePlayerUI();
}

function togglePlay() {
    if (isPlaying) {
        pausePlayback();
    } else {
        startPlayback();
    }
}

function nextTrack() {
    if (isShuffled) {
        currentTrackIndex = Math.floor(Math.random() * tracks.length);
    } else {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    }
    playbackSeconds = 0;
    beatCount = 0;
    if (isPlaying) {
        startPlayback();
    } else {
        updatePlayerUI();
    }
}

function prevTrack() {
    if (playbackSeconds > 3) {
        playbackSeconds = 0;
    } else {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        playbackSeconds = 0;
        beatCount = 0;
    }
    if (isPlaying) {
        startPlayback();
    } else {
        updatePlayerUI();
    }
}

function renderLyrics() {
    const track = tracks[currentTrackIndex];
    lyricsSongTitle.textContent = `${track.title} - ${track.artist}`;
    lyricsContainer.innerHTML = "";

    track.lyrics.forEach((line) => {
        const p = document.createElement("p");
        p.className = "lyric-line";
        p.setAttribute("data-time", line.time);
        p.textContent = line.text;
        p.addEventListener("click", () => {
            playbackSeconds = line.time;
            updateSliders();
            updateLyricsHighlight();
            if (!isPlaying) startPlayback();
        });
        lyricsContainer.appendChild(p);
    });

    updateLyricsHighlight();
}

function updateLyricsHighlight() {
    const lines = lyricsContainer.querySelectorAll(".lyric-line");
    let activeLine = null;

    lines.forEach(line => {
        const time = parseInt(line.getAttribute("data-time"));
        if (playbackSeconds >= time) {
            activeLine = line;
        }
        line.classList.remove("active");
    });

    if (activeLine) {
        activeLine.classList.add("active");
        activeLine.scrollIntoView({ behavior: "smooth", block: "center" });
    }
}

function renderQueue() {
    const currentTrack = tracks[currentTrackIndex];
    queueNowPlaying.innerHTML = `
        <img src="${currentTrack.image}" class="queue-thumb" alt="${currentTrack.title}">
        <div class="queue-info">
            <div class="queue-title">${currentTrack.title}</div>
            <div class="queue-artist">${currentTrack.artist}</div>
        </div>
        <span class="queue-duration">${formatTime(currentTrack.duration)}</span>
    `;

    queueUpNextList.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
        const nextIdx = (currentTrackIndex + i) % tracks.length;
        const t = tracks[nextIdx];
        const div = document.createElement("div");
        div.className = "queue-item";
        div.innerHTML = `
            <img src="${t.image}" class="queue-thumb" alt="${t.title}">
            <div class="queue-info">
                <div class="queue-title">${t.title}</div>
                <div class="queue-artist">${t.artist}</div>
            </div>
            <span class="queue-duration">${formatTime(t.duration)}</span>
        `;
        div.addEventListener("click", () => {
            currentTrackIndex = nextIdx;
            playbackSeconds = 0;
            beatCount = 0;
            startPlayback();
            showToast(`Now Playing: ${t.title}`);
        });
        queueUpNextList.appendChild(div);
    }
}

playBtn.addEventListener("click", togglePlay);
nextBtn.addEventListener("click", nextTrack);
prevBtn.addEventListener("click", prevTrack);

shuffleBtn.addEventListener("click", () => {
    isShuffled = !isShuffled;
    shuffleBtn.classList.toggle("active", isShuffled);
    showToast(isShuffled ? "Shuffle turned on" : "Shuffle turned off", "fa-solid fa-shuffle");
});

repeatBtn.addEventListener("click", () => {
    isRepeating = !isRepeating;
    repeatBtn.classList.toggle("active", isRepeating);
    showToast(isRepeating ? "Repeat one song" : "Repeat turned off", "fa-solid fa-repeat");
});

likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("active");
    const icon = likeBtn.querySelector("i");
    if (likeBtn.classList.contains("active")) {
        icon.className = "fa-solid fa-heart";
        showToast(`Saved "${tracks[currentTrackIndex].title}" to Liked Songs`, "fa-solid fa-heart");
    } else {
        icon.className = "fa-regular fa-heart";
        showToast(`Removed from Liked Songs`);
    }
});

pipBtn.addEventListener("click", () => {
    showToast("Opened Mini Player in Picture-in-Picture mode", "fa-solid fa-up-right-from-square");
});

document.querySelectorAll(".pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".pill-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.getAttribute("data-category");
        renderSections();
    });
});

searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim();
    if (searchQuery.length > 0) {
        clearSearchBtn.classList.add("show");
    } else {
        clearSearchBtn.classList.remove("show");
    }
    renderSections();
});

clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearSearchBtn.classList.remove("show");
    renderSections();
});

lyricsToggleBtn.addEventListener("click", () => {
    lyricsModal.classList.toggle("open");
    lyricsToggleBtn.classList.toggle("active", lyricsModal.classList.contains("open"));
});

closeLyricsModal.addEventListener("click", () => {
    lyricsModal.classList.remove("open");
    lyricsToggleBtn.classList.remove("active");
});

lyricsModal.addEventListener("click", (e) => {
    if (e.target === lyricsModal) {
        lyricsModal.classList.remove("open");
        lyricsToggleBtn.classList.remove("active");
    }
});

queueToggleBtn.addEventListener("click", () => {
    queueDrawer.classList.toggle("open");
    queueToggleBtn.classList.toggle("active", queueDrawer.classList.contains("open"));
});

closeQueueDrawer.addEventListener("click", () => {
    queueDrawer.classList.remove("open");
    queueToggleBtn.classList.remove("active");
});

queueDrawer.addEventListener("click", (e) => {
    if (e.target === queueDrawer) {
        queueDrawer.classList.remove("open");
        queueToggleBtn.classList.remove("active");
    }
});

devicesToggleBtn.addEventListener("click", () => {
    devicesModal.classList.toggle("open");
    devicesToggleBtn.classList.toggle("active", devicesModal.classList.contains("open"));
});

closeDevicesModal.addEventListener("click", () => {
    devicesModal.classList.remove("open");
    devicesToggleBtn.classList.remove("active");
});

devicesModal.addEventListener("click", (e) => {
    if (e.target === devicesModal) {
        devicesModal.classList.remove("open");
        devicesToggleBtn.classList.remove("active");
    }
});

document.querySelectorAll(".device-item").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelectorAll(".device-item").forEach(d => {
            d.classList.remove("active");
            const check = d.querySelector(".active-check");
            if (check) check.remove();
        });
        item.classList.add("active");
        const checkIcon = document.createElement("i");
        checkIcon.className = "fa-solid fa-check active-check";
        item.appendChild(checkIcon);
        
        const deviceName = item.getAttribute("data-device");
        showToast(`Connected to ${deviceName}`, "fa-solid fa-laptop-code");
        setTimeout(() => devicesModal.classList.remove("open"), 600);
    });
});

friendActivityToggleBtn.addEventListener("click", () => {
    friendActivityPanel.classList.toggle("open");
    friendActivityToggleBtn.classList.toggle("active", friendActivityPanel.classList.contains("open"));
});

btnCloseFriendPanel.addEventListener("click", () => {
    friendActivityPanel.classList.remove("open");
    friendActivityToggleBtn.classList.remove("active");
});

function openPlaylistModal() {
    createPlaylistModal.classList.add("open");
}

function closePlaylistModal() {
    createPlaylistModal.classList.remove("open");
}

btnOpenCreatePlaylist.addEventListener("click", openPlaylistModal);
btnCreatePlaylistShortcut.addEventListener("click", openPlaylistModal);
closeCreatePlaylistModal.addEventListener("click", closePlaylistModal);
btnCancelCreatePlaylist.addEventListener("click", closePlaylistModal);

createPlaylistModal.addEventListener("click", (e) => {
    if (e.target === createPlaylistModal) closePlaylistModal();
});

document.querySelectorAll(".icon-choice").forEach(choice => {
    choice.addEventListener("click", () => {
        document.querySelectorAll(".icon-choice").forEach(c => c.classList.remove("active"));
        choice.classList.add("active");
    });
});

createPlaylistForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("playlist-name-input");
    const descInput = document.getElementById("playlist-desc-input");
    const selectedIcon = document.querySelector('input[name="playlist-icon"]:checked').value;

    const playlistName = nameInput.value.trim();
    if (!playlistName) return;

    const newPlaylistItem = document.createElement("div");
    newPlaylistItem.className = "playlist-list-item";
    newPlaylistItem.innerHTML = `
        <div class="playlist-icon-wrap"><i class="fa-solid ${selectedIcon}"></i></div>
        <div class="playlist-meta">
            <span class="title">${playlistName}</span>
            <span class="sub">Playlist • You • 0 songs</span>
        </div>
    `;

    newPlaylistItem.addEventListener("click", () => {
        document.querySelectorAll(".playlist-list-item").forEach(p => p.classList.remove("active-playlist"));
        newPlaylistItem.classList.add("active-playlist");
        showToast(`Switched to "${playlistName}" playlist`);
    });

    customPlaylistsContainer.appendChild(newPlaylistItem);
    showToast(`Created playlist "${playlistName}"!`, "fa-solid fa-circle-check");

    nameInput.value = "";
    descInput.value = "";
    closePlaylistModal();
});

volumeBar.addEventListener("input", (e) => {
    volume = parseInt(e.target.value);
    if (volume === 0) {
        isMuted = true;
        volumeBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    } else {
        isMuted = false;
        volumeBtn.innerHTML = volume > 50 ? '<i class="fa-solid fa-volume-high"></i>' : '<i class="fa-solid fa-volume-low"></i>';
    }
    volumeFill.style.width = `${volume}%`;
    if (mainVolumeNode && audioCtx) {
        mainVolumeNode.gain.setValueAtTime(isMuted ? 0 : volume / 100, audioCtx.currentTime);
    }
});

volumeBtn.addEventListener("click", () => {
    isMuted = !isMuted;
    if (isMuted) {
        prevVolume = volume;
        volume = 0;
        volumeBar.value = 0;
        volumeFill.style.width = "0%";
        volumeBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    } else {
        volume = prevVolume === 0 ? 50 : prevVolume;
        volumeBar.value = volume;
        volumeFill.style.width = `${volume}%`;
        volumeBtn.innerHTML = volume > 50 ? '<i class="fa-solid fa-volume-high"></i>' : '<i class="fa-solid fa-volume-low"></i>';
    }
    if (mainVolumeNode && audioCtx) {
        mainVolumeNode.gain.setValueAtTime(isMuted ? 0 : volume / 100, audioCtx.currentTime);
    }
});

progressBar.addEventListener("input", (e) => {
    playbackSeconds = parseInt(e.target.value);
    updateSliders();
    updateLyricsHighlight();
});

fullscreenBtn.addEventListener("click", () => {
    const mainContainer = document.querySelector(".main");
    if (!document.fullscreenElement) {
        mainContainer.requestFullscreen().catch((err) => {
            showToast(`Fullscreen error: ${err.message}`, "fa-solid fa-triangle-exclamation");
        });
    } else {
        document.exitFullscreen();
    }
});

renderQuickAccess();
renderSections();
updatePlayerUI();

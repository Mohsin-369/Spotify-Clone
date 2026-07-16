const tracks = [
    { id: 0, title: "Top 50 - Global", artist: "Spotify Editorial", image: "card1img.jpeg", duration: 213, bpm: 90, scale: "E Minor" },
    { id: 1, title: "Lofi Beats", artist: "Chillhop Music", image: "card2img.jpeg", duration: 175, bpm: 80, scale: "A Minor" },
    { id: 2, title: "Chill Vibes", artist: "Dreamy Lofi", image: "card3img.jpeg", duration: 198, bpm: 85, scale: "C Major" },
    { id: 3, title: "Midnight Study", artist: "Late Night Chill", image: "card4img.jpeg", duration: 184, bpm: 75, scale: "G Major" },
    { id: 4, title: "Acoustic Pop", artist: "Singer Songwriter", image: "card3img.jpeg", duration: 210, bpm: 95, scale: "F Major" },
    { id: 5, title: "Night Drive", artist: "Retrowave Project", image: "card4img.jpeg", duration: 245, bpm: 100, scale: "D Minor" },
    { id: 6, title: "Electro Party", artist: "Synth Club", image: "card5img.jpeg", duration: 232, bpm: 120, scale: "G Minor" },
    { id: 7, title: "Top Songs - India", artist: "Bollywood Hits", image: "card6img.jpeg", duration: 204, bpm: 95, scale: "C# Minor" },
    { id: 8, title: "Acoustic Hits", artist: "Unplugged Sessions", image: "card1img.jpeg", duration: 189, bpm: 88, scale: "D Major" }
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

let audioCtx = null;
let mainVolumeNode = null;
let analyser = null;
let synthTimer = null;
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
const volumeBar = document.getElementById("volume-bar");

const visualizerCanvas = document.getElementById("visualizer");
const canvasCtx = visualizerCanvas.getContext("2d");

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

function playSynthChord(frequencies, duration = 3.0) {
    if (!audioCtx || audioCtx.state === 'suspended') return;
    const now = audioCtx.currentTime;
    
    frequencies.forEach((freq, index) => {
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);
        osc.detune.setValueAtTime(index * 4 - 6, now);
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(650, now);
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.06, now + 0.5);
        gainNode.gain.setValueAtTime(0.06, now + duration - 0.5);
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
    gainNode.gain.linearRampToValueAtTime(0.04, now + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);
    const delay = audioCtx.createDelay();
    delay.delayTime.value = 0.35;
    const delayFeedback = audioCtx.createGain();
    delayFeedback.gain.value = 0.35;
    osc.connect(gainNode);
    gainNode.connect(mainVolumeNode);
    gainNode.connect(delay);
    delay.connect(delayFeedback);
    delayFeedback.connect(delay);
    delayFeedback.connect(mainVolumeNode);
    osc.start(now);
    osc.stop(now + 1.2);
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
        kickOsc.frequency.setValueAtTime(120, now);
        kickOsc.frequency.exponentialRampToValueAtTime(0.01, now + 0.25);
        kickGain.gain.setValueAtTime(0.35, now);
        kickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        kickOsc.connect(kickGain);
        kickGain.connect(mainVolumeNode);
        kickOsc.start(now);
        kickOsc.stop(now + 0.25);
    }
    
    if (beatCount % 4 === 2) {
        const snareNoise = createNoiseBuffer();
        if (snareNoise) {
            const snareSource = audioCtx.createBufferSource();
            snareSource.buffer = snareNoise;
            const snareFilter = audioCtx.createBiquadFilter();
            snareFilter.type = 'bandpass';
            snareFilter.frequency.value = 950;
            const snareGain = audioCtx.createGain();
            snareGain.gain.setValueAtTime(0.06, now);
            snareGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
            snareSource.connect(snareFilter);
            snareFilter.connect(snareGain);
            snareGain.connect(mainVolumeNode);
            snareSource.start(now);
            snareSource.stop(now + 0.15);
        }
    }
    
    if (beatCount % 2 === 1 && Math.random() > 0.4) {
        const hatNoise = createNoiseBuffer();
        if (hatNoise) {
            const hatSource = audioCtx.createBufferSource();
            hatSource.buffer = hatNoise;
            const hatFilter = audioCtx.createBiquadFilter();
            hatFilter.type = 'highpass';
            hatFilter.frequency.value = 6000;
            const hatGain = audioCtx.createGain();
            hatGain.gain.setValueAtTime(0.015, now);
            hatGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
            hatSource.connect(hatFilter);
            hatFilter.connect(hatGain);
            hatGain.connect(mainVolumeNode);
            hatSource.start(now);
            hatSource.stop(now + 0.05);
        }
    }
    
    if (beatCount % 2 === 0 && Math.random() > 0.3) {
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

function updatePlayerUI() {
    const track = tracks[currentTrackIndex];
    currentAlbumArt.src = track.image;
    currentTrackTitle.textContent = track.title;
    currentTrackArtist.textContent = track.artist;
    totTimeSpan.textContent = formatTime(track.duration);
    progressBar.max = track.duration;
    progressBar.value = playbackSeconds;
    currTimeSpan.textContent = formatTime(playbackSeconds);
    
    if (isPlaying) {
        playBtn.innerHTML = '<i class="fa-solid fa-circle-pause"></i>';
        currentAlbumArt.classList.add("playing");
    } else {
        playBtn.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
        currentAlbumArt.classList.remove("playing");
    }
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
            progressBar.value = playbackSeconds;
            currTimeSpan.textContent = formatTime(playbackSeconds);
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

playBtn.addEventListener("click", togglePlay);
nextBtn.addEventListener("click", nextTrack);
prevBtn.addEventListener("click", prevTrack);

shuffleBtn.addEventListener("click", () => {
    isShuffled = !isShuffled;
    shuffleBtn.classList.toggle("active", isShuffled);
});

repeatBtn.addEventListener("click", () => {
    isRepeating = !isRepeating;
    repeatBtn.classList.toggle("active", isRepeating);
});

likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("active");
    const icon = likeBtn.querySelector("i");
    if (likeBtn.classList.contains("active")) {
        icon.className = "fa-solid fa-heart";
    } else {
        icon.className = "fa-regular fa-heart";
    }
});

pipBtn.addEventListener("click", () => {
    alert(`Playing "${tracks[currentTrackIndex].title}" in minimized screen mode (simulated)`);
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
    if (mainVolumeNode) {
        mainVolumeNode.gain.setValueAtTime(isMuted ? 0 : volume / 100, audioCtx.currentTime);
    }
});

volumeBtn.addEventListener("click", () => {
    isMuted = !isMuted;
    if (isMuted) {
        prevVolume = volume;
        volume = 0;
        volumeBar.value = 0;
        volumeBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    } else {
        volume = prevVolume === 0 ? 50 : prevVolume;
        volumeBar.value = volume;
        volumeBtn.innerHTML = volume > 50 ? '<i class="fa-solid fa-volume-high"></i>' : '<i class="fa-solid fa-volume-low"></i>';
    }
    if (mainVolumeNode) {
        mainVolumeNode.gain.setValueAtTime(isMuted ? 0 : volume / 100, audioCtx.currentTime);
    }
});

progressBar.addEventListener("input", (e) => {
    playbackSeconds = parseInt(e.target.value);
    currTimeSpan.textContent = formatTime(playbackSeconds);
});

fullscreenBtn.addEventListener("click", () => {
    const mainContainer = document.querySelector(".main");
    if (!document.fullscreenElement) {
        mainContainer.requestFullscreen().catch((err) => {
            alert(`Error trying to enable full-screen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
});

document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", (e) => {
        const id = parseInt(card.getAttribute("data-track-id"));
        if (e.target.closest('.card-play-btn')) {
            e.stopPropagation();
        }
        currentTrackIndex = id;
        playbackSeconds = 0;
        beatCount = 0;
        startPlayback();
    });
});

function resizeCanvas() {
    visualizerCanvas.width = visualizerCanvas.parentElement.clientWidth;
    visualizerCanvas.height = visualizerCanvas.parentElement.clientHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

let phase = 0;
function drawVisualizer() {
    requestAnimationFrame(drawVisualizer);
    const width = visualizerCanvas.width;
    const height = visualizerCanvas.height;
    canvasCtx.clearRect(0, 0, width, height);
    
    let bufferLength = 128;
    let dataArray = new Uint8Array(bufferLength);
    
    if (analyser && isPlaying) {
        analyser.getByteTimeDomainData(dataArray);
    } else {
        for (let i = 0; i < bufferLength; i++) {
            dataArray[i] = 128 + Math.sin(i * 0.05 + phase * 2.0) * 5;
        }
    }
    
    const colors = [
        "rgba(29, 185, 84, 0.25)",
        "rgba(30, 215, 96, 0.14)",
        "rgba(16, 185, 129, 0.06)"
    ];
    
    for (let w = 0; w < 3; w++) {
        canvasCtx.beginPath();
        canvasCtx.lineWidth = w === 0 ? 3.0 : 1.5;
        canvasCtx.strokeStyle = colors[w];
        const speed = (w + 1) * 0.02;
        const amplitudeMod = 1.0 - (w * 0.3);
        
        for (let i = 0; i < bufferLength; i++) {
            const x = (i / (bufferLength - 1)) * width;
            const amp = (dataArray[i] - 128) / 128.0;
            const y = (height / 2) + amp * (height * 0.35) * amplitudeMod * Math.sin(i * 0.03 + phase * speed * 8.0);
            if (i === 0) {
                canvasCtx.moveTo(x, y);
            } else {
                canvasCtx.lineTo(x, y);
            }
        }
        canvasCtx.stroke();
    }
    phase += 0.06;
}

drawVisualizer();
updatePlayerUI();

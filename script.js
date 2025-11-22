// --- script.js (UPDATED with handleBookClick function) ---

// --- 1. LANGUAGE STRINGS DATABASE ---
const LANGUAGE_STRINGS = {
    'en': {
        // App Header & Sidebar
        appTitle: "MINDpal",
        appSubtitle: "You're not alone. Talk, learn, heal.",
        appointmentsBtn: "Appointments",
        menuChatbot: "Chatbot",
        menuMusic: "Music",
        menuTasks: "Mind Tasks",
        menuTrusted: "Trusted People",
        counselingTitle: "Counselling Services",
        searchBarPlaceholder: "Search by name or specialty",
        bookBtn: "Book",
        
        // Chatbot Content
        chatHeaderTitle: "Mental Wellness Bot",
        chatHeaderSubtitle: "Here to listen — powered by Gemini.",
        chatPlaceholder: "Type your message...",
        chatRestartBtnTitle: "Restart Conversation",
        chatWelcome: "Hello! I am your MindPal. I'm here to listen without judgment. How are you feeling right now?",
        
        // Music Content
        musicHeaderTitle: "Calming Sounds",
        musicHeaderSubtitle: "Listen to soothing audio to relax your mind.",
        musicNowPlaying: "Now Playing: Gentle Rain & Piano",
        musicPlayBtn: "▶ Play Music",
        musicPauseBtn: "⏸ Pause Music",
        
        // Tasks Content
        tasksHeaderTitle: "Mind Tasks",
        tasksHeaderSubtitle: "Simple activities to refresh your perspective.",
        taskDefault: "Click below to get a new task!",
        taskGenerateBtn: "Generate New Task",
        
        // Trusted People Content
        trustedHeaderTitle: "Talk with Trusted People",
        trustedHeaderSubtitle: "Reach out to your personal support network.",
        trustedAddBtn: "Add",
        trustedContactNamePh: "Name",
        trustedContactPhonePh: "Phone Number",

        // Chat Status & Errors
        chatThinking: "MINDpal is thinking...",
        errorServer: "Error: Could not connect to the server or API.",
        errorAPI: "Sorry, I am having trouble connecting right now. Please try again.",
    },
    'kn': { // Kannada Translations
        // App Header & Sidebar
        appTitle: "ಮೈಂಡ್‌ಪಾಲ್",
        appSubtitle: "ನೀವು ಒಂಟಿಯಲ್ಲ. ಮಾತನಾಡಿ, ಕಲಿಯಿರಿ, ಗುಣಮುಖರಾಗಿ.",
        appointmentsBtn: "ನೇಮಕಾತಿಗಳು",
        menuChatbot: "ಚಾಟ್‌ಬಾಟ್",
        menuMusic: "ಸಂಗೀತ",
        menuTasks: "ಮನಸ್ಸಿನ ಕಾರ್ಯಗಳು",
        menuTrusted: "ವಿಶ್ವಾಸಾರ್ಹ ವ್ಯಕ್ತಿಗಳು",
        counselingTitle: "ಸಲಹಾ ಸೇವೆಗಳು",
        searchBarPlaceholder: "ಹೆಸರು ಅಥವಾ ವಿಶೇಷತೆಯಿಂದ ಹುಡುಕಿ",
        bookBtn: "ಬುಕ್ ಮಾಡಿ",

        // Chatbot Content
        chatHeaderTitle: "ಮಾನಸಿಕ ಸ್ವಾಸ್ಥ್ಯ ಬಾಟ್",
        chatHeaderSubtitle: "ಕೇಳಲು ಇಲ್ಲಿದ್ದೇನೆ - ಜೆಮಿನಿ ಶಕ್ತಿಯೊಂದಿಗೆ.",
        chatPlaceholder: "ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಟೈಪ್ ಮಾಡಿ...",
        chatRestartBtnTitle: "ಸಂಭಾಷಣೆ ಮರುಪ್ರಾರಂಭಿಸಿ",
        chatWelcome: "ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ ಮೈಂಡ್‌ಪಾಲ್. ತೀರ್ಪಿಲ್ಲದೆ ಕೇಳಲು ನಾನು ಇಲ್ಲಿದ್ದೇನೆ. ಈಗ ನಿಮಗೆ ಹೇಗನಿಸುತ್ತಿದೆ?",
        
        // Music Content
        musicHeaderTitle: "ಶಾಂತಗೊಳಿಸುವ ಶಬ್ದಗಳು",
        musicHeaderSubtitle: "ನಿಮ್ಮ ಮನಸ್ಸನ್ನು ವಿಶ್ರಾಂತಿಗೊಳಿಸಲು ಹಿತವಾದ ಆಡಿಯೊವನ್ನು ಆಲಿಸಿ.",
        musicNowPlaying: "ಈಗ ಆಡಲಾಗುತ್ತಿದೆ: ಸೌಮ್ಯ ಮಳೆ ಮತ್ತು ಪಿಯಾನೋ",
        musicPlayBtn: "▶ ಸಂಗೀತ ಆನ್ ಮಾಡಿ",
        musicPauseBtn: "⏸ ಸಂಗೀತ ನಿಲ್ಲಿಸಿ",
        
        // Tasks Content
        tasksHeaderTitle: "ಮನಸ್ಸಿನ ಕಾರ್ಯಗಳು",
        tasksHeaderSubtitle: "ನಿಮ್ಮ ದೃಷ್ಟಿಕೋನವನ್ನು ರಿಫ್ರೆಶ್ ಮಾಡಲು ಸರಳ ಚಟುವಟಿಕೆಗಳು.",
        taskDefault: "ಹೊಸ ಕಾರ್ಯವನ್ನು ಪಡೆಯಲು ಕೆಳಗೆ ಕ್ಲಿಕ್ ಮಾಡಿ!",
        taskGenerateBtn: "ಹೊಸ ಕಾರ್ಯವನ್ನು ರಚಿಸಿ",
        
        // Trusted People Content
        trustedHeaderTitle: "ವಿಶ್ವಾಸಾರ್ಹ ವ್ಯಕ್ತಿಗಳೊಂದಿಗೆ ಮಾತನಾಡಿ",
        trustedHeaderSubtitle: "ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಬೆಂಬಲ ಜಾಲವನ್ನು ಸಂಪರ್ಕಿಸಿ.",
        trustedAddBtn: "ಸೇರಿಸು",
        trustedContactNamePh: "ಹೆಸರು",
        trustedContactPhonePh: "ಫೋನ್ ಸಂಖ್ಯೆ",
        
        // Chat Status & Errors
        chatThinking: "ಮೈಂಡ್‌ಪಾಲ್ ಯೋಚಿಸುತ್ತಿದೆ...",
        errorServer: "ದೋಷ: ಸರ್ವರ್ ಅಥವಾ API ಗೆ ಸಂಪರ್ಕಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.",
        errorAPI: "ಕ್ಷಮಿಸಿ, ಸಂಪರ್ಕಿಸಲು ನನಗೆ ಈಗ ತೊಂದರೆಯಾಗುತ್ತಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
    },
    'hi': { // Hindi Translations
        // App Header & Sidebar
        appTitle: "माइंडपाल",
        appSubtitle: "आप अकेले नहीं हैं। बात करें, सीखें, ठीक हों।",
        appointmentsBtn: "अपॉइंटमेंट्स",
        menuChatbot: "चैटबॉट",
        menuMusic: "संगीत",
        menuTasks: "मन के कार्य",
        menuTrusted: "भरोसेमंद लोग",
        counselingTitle: "काउंसलिंग सेवाएँ",
        searchBarPlaceholder: "नाम या विशेषज्ञता से खोजें",
        bookBtn: "बुक करें",

        // Chatbot Content
        chatHeaderTitle: "मानसिक स्वास्थ्य बॉट",
        chatHeaderSubtitle: "सुनने के लिए यहाँ हूँ - जेमिनी द्वारा संचालित।",
        chatPlaceholder: "अपना संदेश टाइप करें...",
        chatRestartBtnTitle: "बातचीत पुनः आरंभ करें",
        chatWelcome: "नमस्ते! मैं आपका माइंडपाल हूँ। मैं बिना किसी निर्णय के सुनने के लिए यहाँ हूँ। आप अभी कैसा महसूस कर रहे हैं?",
        
        // Music Content
        musicHeaderTitle: "शांत करने वाली ध्वनियाँ",
        musicHeaderSubtitle: "अपने मन को शांत करने के लिए सुखदायक ऑडियो सुनें।",
        musicNowPlaying: "अभी चल रहा है: हल्की बारिश और पियानो",
        musicPlayBtn: "▶ संगीत चलाएँ",
        musicPauseBtn: "⏸ संगीत रोकें",
        
        // Tasks Content
        tasksHeaderTitle: "मन के कार्य",
        tasksHeaderSubtitle: "अपने दृष्टिकोण को ताज़ा करने के लिए सरल गतिविधियाँ।",
        taskDefault: "नया कार्य प्राप्त करने के लिए नीचे क्लिक करें!",
        taskGenerateBtn: "नया कार्य उत्पन्न करें",
        
        // Trusted People Content
        trustedHeaderTitle: "भरोसेमंद लोगों से बात करें",
        trustedHeaderSubtitle: "अपने व्यक्तिगत समर्थन नेटवर्क तक पहुँचें।",
        trustedAddBtn: "जोड़ें",
        trustedContactNamePh: "नाम",
        trustedContactPhonePh: "फ़ोन नंबर",

        // Chat Status & Errors
        chatThinking: "माइंडपाल सोच रहा है...",
        errorServer: "त्रुटि: सर्वर या API से कनेक्ट नहीं हो सका।",
        errorAPI: "क्षमा करें, मुझे अभी कनेक्ट करने में समस्या हो रही है। कृपया पुनः प्रयास करें।",
    },
};

// --- Global State & History ---
let currentLang = 'en'; // Default language is English
let chatHistory = []; 
let isPlaying = false; // State for Music Player


// --- Content Templates (UPDATED to use IDs/data-keys for translation) ---
const contentTemplates = {
    chatbot: (langData) => `
        <div class="content-header">
            <div class="content-icon">🤖</div>
            <div>
                <h2 id="chatHeaderTitle">${langData.chatHeaderTitle}</h2>
                <p id="chatHeaderSubtitle">${langData.chatHeaderSubtitle}</p>
            </div>
        </div>
        <div class="chat-box" id="chat-box"> 
        </div>
        <div style="margin-top: 20px; display: flex; gap: 10px;">
            <input type="text" id="user-input" placeholder="${langData.chatPlaceholder}" style="flex: 1; padding: 12px; border: 1px solid #ddd; border-radius: 10px;">
            <button id="send-btn" style="background: #4a90e2; color: white; border: none; padding: 0 20px; border-radius: 10px; cursor: pointer;"><i class="fa-solid fa-paper-plane"></i></button>
            <button id="restart-btn" title="${langData.chatRestartBtnTitle}" style="background: #e68a8a; color: white; border: none; padding: 0 15px; border-radius: 10px; cursor: pointer;"><i class="fa-solid fa-rotate-right"></i></button>
        </div>
    `,
    music: (langData) => `
        <div class="content-header">
            <div class="content-icon">🎵</div>
            <div>
                <h2 id="musicHeaderTitle">${langData.musicHeaderTitle}</h2>
                <p id="musicHeaderSubtitle">${langData.musicHeaderSubtitle}</p>
            </div>
        </div>
        <div class="music-player-container">
            <p id="musicNowPlaying">${langData.musicNowPlaying}</p>
            <div class="audio-controls">
                <audio id="bg-music" loop>
                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
                </audio>
                <button class="play-btn" onclick="toggleMusic()">${isPlaying ? langData.musicPauseBtn : langData.musicPlayBtn}</button>
            </div>
        </div>
    `,
    tasks: (langData) => `
        <div class="content-header">
            <div class="content-icon">🌱</div>
            <div>
                <h2 id="tasksHeaderTitle">${langData.tasksHeaderTitle}</h2>
                <p id="tasksHeaderSubtitle">${langData.tasksHeaderSubtitle}</p>
            </div>
        </div>
        <div class="task-container">
            <p class="task-display" id="task-text">${langData.taskDefault}</p>
            <button class="play-btn" onclick="getNewTask()">${langData.taskGenerateBtn}</button>
        </div>
    `,
    trusted: (langData) => `
        <div class="content-header">
            <div class="content-icon">📞</div>
            <div>
                <h2 id="trustedHeaderTitle">${langData.trustedHeaderTitle}</h2>
                <p id="trustedHeaderSubtitle">${langData.trustedHeaderSubtitle}</p>
            </div>
        </div>
        <ul class="contact-list" id="contact-list">
            <li class="contact-item"><span>Mom</span> <a href="tel:1234567890" class="call-btn"><i class="fa-solid fa-phone"></i> Call</a></li>
            <li class="contact-item"><span>Best Friend (Rahul)</span> <a href="tel:0987654321" class="call-btn"><i class="fa-solid fa-phone"></i> Call</a></li>
        </ul>
        <div class="add-contact-form">
            <input type="text" id="newContactName" placeholder="${langData.trustedContactNamePh}">
            <input type="tel" id="newContactPhone" placeholder="${langData.trustedContactPhonePh}">
            <button class="play-btn" onclick="addContact()" style="padding: 10px 20px;">${langData.trustedAddBtn}</button>
        </div>
    `
};

// --- Helper Functions ---

function addMessageToDOM(message, sender, timestamp) {
    const chatBox = document.getElementById('chat-box');
    if (!chatBox) return; 

    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}`;
    msgDiv.innerHTML = message.replace(/\n/g, '<br>'); 
    
    // Add timestamp
    const timeSpan = document.createElement('span');
    timeSpan.className = 'timestamp';
    timeSpan.textContent = timestamp || new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    msgDiv.appendChild(timeSpan);

    chatBox.appendChild(msgDiv);
    
    // Auto-scroll the chatbox to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

function renderChatHistory() {
    const chatBox = document.getElementById('chat-box');
    if (!chatBox) return;

    const welcomeMessage = LANGUAGE_STRINGS[currentLang].chatWelcome;

    if (chatHistory.length === 0) {
        chatHistory.push({ role: 'model', parts: [{ text: welcomeMessage }] });
    } else {
        if (chatHistory[0].role === 'model') {
            chatHistory[0].parts[0].text = welcomeMessage;
        }
    }

    chatBox.innerHTML = ''; 
    chatHistory.forEach(msg => {
        const sender = msg.role === 'user' ? 'user' : 'bot';
        const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}`;
        msgDiv.innerHTML = msg.parts[0].text.replace(/\n/g, '<br>'); 
        const timeSpan = document.createElement('span');
        timeSpan.className = 'timestamp';
        timeSpan.textContent = time;
        msgDiv.appendChild(timeSpan);
        chatBox.appendChild(msgDiv);
    });
    
    // Scroll to bottom after history is loaded
    chatBox.scrollTop = chatBox.scrollHeight;
}


// --- API Interaction Logic (Chatbot) ---

async function sendMessage() {
    const langData = LANGUAGE_STRINGS[currentLang];
    const input = document.getElementById('user-input');
    const userMessage = input.value.trim();

    if (!userMessage) return;

    addMessageToDOM(userMessage, 'user');
    chatHistory.push({ role: 'user', parts: [{ text: userMessage }] });
    
    input.value = ""; 
    input.disabled = true; 

    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'message bot typing-indicator';
    typingIndicator.innerHTML = langData.chatThinking;
    document.getElementById('chat-box').appendChild(typingIndicator);
    
    // Scroll to show the typing indicator
    document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;


    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                history: chatHistory, 
                language: currentLang 
            }) 
        });

        const data = await response.json();
        let botReply;

        if (data.error) {
             botReply = data.error.includes("connect to the server") 
                        ? langData.errorServer 
                        : langData.errorAPI;
        } else {
             botReply = data.text;
        }

        typingIndicator.remove();
        addMessageToDOM(botReply, 'bot');
        
        if (!data.error) {
             chatHistory.push({ role: 'model', parts: [{ text: botReply }] });
        }


    } catch (error) {
        typingIndicator.remove();
        addMessageToDOM(langData.errorServer, 'bot');
        console.error('Fetch Error:', error);
    } finally {
        input.disabled = false;
        input.focus();
    }
}

function restartChat() {
    chatHistory = []; 
    renderChatHistory(); 
}


function attachChatListeners() {
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const restartBtn = document.getElementById('restart-btn');

    if (sendBtn) sendBtn.addEventListener('click', sendMessage);
    if (restartBtn) restartBtn.addEventListener('click', restartChat);
    
    if (userInput) {
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }
}


// ------------------------------------------------------------------
// --- LANGUAGE SWITCHING LOGIC ---
// ------------------------------------------------------------------

function updateStaticDOMText(langData) {
    // Update Header
    document.getElementById('appTitle').textContent = langData.appTitle;
    document.getElementById('appSubtitle').textContent = langData.appSubtitle;
    document.getElementById('appointments-btn').textContent = langData.appointmentsBtn;

    // Update Sidebar
    document.getElementById('menu-chatbot').lastChild.textContent = ' ' + langData.menuChatbot;
    document.getElementById('menu-music').lastChild.textContent = ' ' + langData.menuMusic;
    document.getElementById('menu-tasks').lastChild.textContent = ' ' + langData.menuTasks;
    document.getElementById('menu-trusted').lastChild.textContent = ' ' + langData.menuTrusted;
    
    // Counselling sidebar section
    document.getElementById('counselingTitle').textContent = langData.counselingTitle;
    document.getElementById('search-bar').placeholder = langData.searchBarPlaceholder;
    document.querySelectorAll('.book-btn').forEach(btn => btn.textContent = langData.bookBtn);
}


function handleLanguageChange(event) {
    currentLang = event.target.value; 
    
    chatHistory = []; 
    
    const activeLink = document.querySelector('.menu-link.active');
    const target = activeLink ? activeLink.getAttribute('data-target') : 'chatbot';

    updateStaticDOMText(LANGUAGE_STRINGS[currentLang]);

    const langData = LANGUAGE_STRINGS[currentLang];
    dynamicContent.innerHTML = contentTemplates[target](langData);

    if (target === 'chatbot') {
        renderChatHistory(); 
        attachChatListeners();
    }
}


// --- Navigation and Listener Setup ---
const menuLinks = document.querySelectorAll('.menu-link');
const dynamicContent = document.getElementById('dynamic-content');


menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        menuLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        const target = link.getAttribute('data-target');
        const langData = LANGUAGE_STRINGS[currentLang];
        
        dynamicContent.innerHTML = contentTemplates[target](langData);

        if (target === 'chatbot') {
            renderChatHistory();
            attachChatListeners();
        } 
    });
});

// --- Feature Functions (Music, Tasks, Contacts, Booking) ---

function toggleMusic() {
    const audio = document.getElementById("bg-music");
    const btn = document.querySelector(".music-player-container .play-btn");
    const langData = LANGUAGE_STRINGS[currentLang];

    if (isPlaying) {
        audio.pause();
        btn.innerHTML = langData.musicPlayBtn;
    } else {
        audio.play();
        btn.innerHTML = langData.musicPauseBtn;
    }
    isPlaying = !isPlaying;
}

// Mind Tasks Logic 
const tasks_en = [
    "Take 3 deep breaths in and out slowly.", "Name 5 things you can see around you right now.", "Drink a cool glass of water mindfully.", "Stretch your arms up to the sky for 10 seconds.", "Write down one thing that made you smile today."
];
const tasks_kn = [
    "3 ಆಳವಾದ ಉಸಿರುಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ.", "20 ಸೆಕೆಂಡುಗಳ ಕಾಲ ಕಿಟಕಿಯ ಹೊರಗೆ ನೋಡಿ.", "ಒಂದು ಲೋಟ ನೀರು ಕುಡಿಯಿರಿ.",
    "ನಿಮ್ಮ ತೋಳುಗಳನ್ನು ಹಿಗ್ಗಿಸಿ.", "ನೀವು ಕೃತಜ್ಞರಾಗಿರುವ ಒಂದು ವಿಷಯವನ್ನು ಬರೆಯಿರಿ.", "ನಿಮ್ಮ ಕಣ್ಣುಗಳನ್ನು ಮುಚ್ಚಿ ಮತ್ತು ನಿಧಾನವಾಗಿ 10 ರವರೆಗೆ ಎಣಿಸಿ."
];
const tasks_hi = [
    "3 गहरी साँसें लें।", "20 सेकंड के लिए खिड़की से बाहर देखें।", "एक गिलास पानी पिएँ।",
    "अपनी बाहों को फैलाएँ।", "एक चीज़ लिखें जिसके लिए आप आभारी हैं।", "अपनी आँखें बंद करें और धीरे-धीरे 10 तक गिनें।"
];

function getNewTask() {
    const display = document.getElementById('task-text');
    let taskList;

    switch (currentLang) {
        case 'kn':
            taskList = tasks_kn;
            break;
        case 'hi':
            taskList = tasks_hi;
            break;
        case 'en':
        default:
            taskList = tasks_en;
            break;
    }
    
    display.innerText = taskList[Math.floor(Math.random() * taskList.length)];
}

// Trusted Contacts Logic
function addContact() {
    const nameInput = document.getElementById("newContactName");
    const phoneInput = document.getElementById("newContactPhone");
    const name = nameInput.value;
    const phone = phoneInput.value;

    if(name && phone) {
        const list = document.getElementById("contact-list");
        const li = document.createElement("li");
        li.classList.add("contact-item");
        li.innerHTML = `<span>${name}</span> <a href="tel:${phone}" class="call-btn"><i class="fa-solid fa-phone"></i> Call</a>`;
        list.appendChild(li);
        // Clear inputs
        nameInput.value = "";
        phoneInput.value = "";
    }
}

// Booking Click Handler (NEW CODE ADDED HERE)
function handleBookClick(counselorName) {
    const langData = LANGUAGE_STRINGS[currentLang];
    
    let message;
    if (currentLang === 'kn') {
        message = `ಸಲಹೆಗಾರ ${counselorName} ಅವರೊಂದಿಗೆ ನೇಮಕಾತಿಯನ್ನು ಕಾಯ್ದಿರಿಸುವ ಪುಟಕ್ಕೆ ನಿಮ್ಮನ್ನು ಮರುನಿರ್ದೇಶಿಸಲಾಗುತ್ತಿದೆ. ಧನ್ಯವಾದಗಳು!`; // Kannada
    } else if (currentLang === 'hi') {
        message = `परामर्शदाता ${counselorName} के साथ अपॉइंटमेंट बुक करने वाले पेज पर आपको रीडायरेक्ट किया जा रहा है। धन्यवाद!`; // Hindi
    } else {
        message = `Redirecting you to the booking page for an appointment with ${counselorName}. Thank you!`; // English (Default)
    }

    // Displays a temporary confirmation message
    alert(message);
}


// --- Initial Load ---
document.addEventListener('DOMContentLoaded', () => {
    const langSelector = document.getElementById('lang-select');
    if (langSelector) {
        langSelector.addEventListener('change', handleLanguageChange);
    }
    
    const langData = LANGUAGE_STRINGS[currentLang];
    dynamicContent.innerHTML = contentTemplates['chatbot'](langData);
    updateStaticDOMText(langData);
    
    renderChatHistory(); 
    attachChatListeners();
});
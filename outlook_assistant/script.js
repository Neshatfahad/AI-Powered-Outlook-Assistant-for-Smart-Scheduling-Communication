function addMessage(message, isUser = false) {
    const chatWindow = document.getElementById('chatWindow');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'assistant-message'}`;
    messageDiv.textContent = message;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    
    if (message) {
        addMessage(message, true);
        const response = generateResponse(message);
        setTimeout(() => {
            addMessage(response);
        }, 500);
        input.value = '';
    }
}

function generateResponse(message) {
    const lower = message.toLowerCase();

    if (lower.includes("schedule") && lower.includes("may 10")) {
        return `🗓️ Your schedule from May 10–18 includes:\n• AI Mac standup: 10:30 AM to 11:30 AM (Mon–Fri)\n• AI Meeting: 2:00 PM daily\n• Meeting with Ruhullah: May 12, 4:00 PM`;
    
    } else if (lower.includes("reschedule") && lower.includes("meeting")) {
        alert("📅 Outlook meeting has been rescheduled.");
        return "Meeting has been successfully rescheduled.";

    } else if (lower.includes("calendar") && lower.includes("busy") && lower.includes("tomorrow")) {
        return "You have a meeting at 2:00 PM with Aruna. Do you want me to reschedule it?";

    } else if (lower === "yes" || lower.includes("yes") && lower.includes("busy")) {
        return "✅ I've informed them you're busy. Meeting moved to the day after tomorrow at 11:30 AM.";

    } else if (lower === "no" || lower.includes("no")) {
        return "Got it! Your meeting remains unchanged.";

    } else {
        return "Hi! I can show your schedule, reschedule meetings, and check if you're busy. Try saying 'Tell me my schedule between May 10 to May 18' or 'Reschedule a meeting'.";
    }
}

document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

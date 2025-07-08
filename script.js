const topics = [
    "Is technology making us smarter or lazier?",
    "The future of education: online or in-person?",
    "Should students be graded on behaviour?",
    "Do we rely too much on social media?",
    "Should AI replace human jobs?",
    "Importance of failure in success",
    "Is it better to be kind or honest?",
    "Do exams test real knowledge?",
    "The impact of fast food on society",
    "Role of public speaking in leadership"
];

let timer;
let timeLeft =120;

function generateTopic(){
    const topic = topics[Math.floor(Math.random() * topics.length)];
    document.getElementById("topic").innerText=topic;
}

function startTimer(){
    clearInterval(timer);//resetting previous timer
    timeLeft = 120;
    updateTimerDisplay();

    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft<=0){
            clearInterval(timer);
            alert("⏰ Time's up! Great job.");
        }
    }, 1000);
}

function updateTimerDisplay(){
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("timer").innerText =
        `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2, '0')}`
}
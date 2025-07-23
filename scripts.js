// Slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slide-dot');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    currentSlide = (n + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Auto-advance slideshow
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Test functionality
function startTest(testName) {
    document.getElementById('testTitle').textContent = testName;
    document.getElementById('testModal').style.display = 'block';
    startTimer(45 * 60); // 45 minutes timer
    document.body.style.overflow = 'hidden';

    // Set up tab switching detection
    window.addEventListener('blur', handleTabSwitch);
}

function closeTest() {
    document.getElementById('testModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    clearInterval(timerInterval);
    window.removeEventListener('blur', handleTabSwitch);
}

function handleTabSwitch() {
    if (document.getElementById('testModal').style.display === 'block') {
        if (confirm('Malpractice detected! Switching tabs during test is prohibited. The test will be terminated.')) {
            closeTest();
        }
    }
}

function selectOption(option) {
    // Remove selected class from all options
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));

    // Add selected class to clicked option
    option.classList.add('selected');
}

function showResults() {
    closeTest();
    document.getElementById('resultsModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeResults() {
    document.getElementById('resultsModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Timer functionality
let timerInterval;

function startTimer(duration) {
    let timer = duration, minutes, seconds;
    const timerDisplay = document.getElementById('timer');

    timerInterval = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(timerInterval);
            showResults();
        }
    }, 1000);
}

// Simulate AI generation
function generateQuestions(topic, difficulty, count) {
    // In a real implementation, this would call the AI API
    console.log(`Generating ${count} ${difficulty} questions about ${topic}...`);
    return [
        {
            question: "Which data structure uses the LIFO (Last In First Out) principle?",
            options: ["Queue", "Stack", "Linked List", "Tree"],
            answer: 1
        },
        {
            question: "What does the 'this' keyword refer to in JavaScript?",
            options: ["The function itself", "The global object", "The object that the function belongs to", "The parent object"],
            answer: 2
        }
    ];
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Initialize with the first slide
    showSlide(0);

    // Simulate generating questions for Computer Science
    const csQuestions = generateQuestions("Data Structures", "Medium", 10);
    console.log("Generated questions:", csQuestions);


    // Grab all selects and button
    const selects = [
        document.getElementById('testMode'),
        document.getElementById('department'),
        document.getElementById('subject'),
        document.getElementById('topic'),
    ];
    const startBtn = document.getElementById('startBtn');

    // Enable Start only if all dropdowns have a value selected (not empty)
    function checkDropdowns() {
        const allSelected = selects.every(sel => sel.value.trim() !== "");
        startBtn.disabled = !allSelected;
    }

    // Listen for any change on dropdowns
    selects.forEach(select => select.addEventListener('change', checkDropdowns));

    // Initialize on page load
    window.addEventListener('DOMContentLoaded', checkDropdowns);

    // Handle form submission
    document.getElementById('testForm').addEventListener('submit', function (e) {
        e.preventDefault();
        alert(`Starting test in mode: ${selects[0].value}, Dept: ${selects[1].value}, Subject: ${selects[2].value}, Topic: ${selects[3].value}`);
        // Add your test start logic here
    });

    // Start random test button logic
    function startRandomTest() {
        alert("Starting random AI-generated test!");
        // Add functionality to start random test here
    }
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const proceedBtn = document.getElementById('proceedBtn');

    function validateInputs() {
        // Trim to avoid spaces-only input
        const usernameFilled = usernameInput.value.trim().length > 0;
        const passwordFilled = passwordInput.value.trim().length > 0;

        if (usernameFilled && passwordFilled) {
            proceedBtn.disabled = false;
            proceedBtn.classList.add('enabled');
        } else {
            proceedBtn.disabled = true;
            proceedBtn.classList.remove('enabled');
        }
    }

    // Validate inputs on user typing
    usernameInput.addEventListener('input', validateInputs);
    passwordInput.addEventListener('input', validateInputs);

    // Optional: handle form submit
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent actual submission (for demo)

        // You can replace this alert with your login logic:
        alert('Login successful with username: ' + usernameInput.value);
    });

    

});

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const proceedBtn = document.getElementById('proceedBtn');


function validateInputs() {
  const usernameFilled = usernameInput.value.trim().length > 0;
  const passwordFilled = passwordInput.value.trim().length > 0;

  if (usernameFilled && passwordFilled) {
    proceedBtn.disabled = false;
    proceedBtn.classList.add('enabled');
  } else {
    proceedBtn.disabled = true;
    proceedBtn.classList.remove('enabled');
  }
}

usernameInput.addEventListener('input', validateInputs);
passwordInput.addEventListener('input', validateInputs);


// Optional: Handle form submit
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert(`Logging in with username: ${usernameInput.value}`);
});









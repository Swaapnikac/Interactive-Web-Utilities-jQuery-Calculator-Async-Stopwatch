# Interactive Web Utilities – jQuery Calculator & Async Stopwatch

A dual-function web project showcasing front-end development with **modern JavaScript**.  
Includes:
- A **Login-Validated Calculator App** built using **jQuery** and a **single arrow function** for all arithmetic operations.  
- A **Stopwatch App** utilizing **Async/Await, Promises, setInterval, and clearInterval** for accurate real-time time tracking.  

Both applications demonstrate clean code structure, inline error handling (without pop-ups), and responsive design using basic CSS.

---

## Part A: jQuery-Based Calculator with Validation

### 📋 Overview
A simple **two-page web application** built using **HTML, CSS, and jQuery**, implementing comprehensive form validation and arithmetic operations handled by **one arrow function** only.

---

###  Page 1: Login Page

####  Features
- Contains **four input fields**:
  - Email  
  - Username  
  - Password  
  - Confirm Password  
- Includes a **Login button** (disabled when page loads).  
- **Validation Rules:**
  - **Null check:** No field can be empty.  
  - **Special character check:** Restricts symbols or invalid characters.  
  - **Length validation:** Enforces both minimum and maximum length.  
  - **Email validation:** Only accepts Northeastern email IDs (e.g., `@northeastern.edu`).  
  - **Error display:**  
    - Messages shown **below the field** in **red**.  
    - **No pop-ups** used.  
    - Each message is **specific** to the failed rule.  
- Once all validations pass, the user is redirected to the **Calculator Page**.

---

###  Page 2: Calculator Page

####  Features
- Displays **logged-in username** from the login page.  
- Two **input fields** for `Number 1` and `Number 2`.  
- Four buttons: **Add**, **Subtract**, **Multiply**, **Divide**.  
- A **read-only result field** to display the output.  
- **Validations for both fields:**
  - Only numbers allowed.  
  - No special characters or null entries.  
  - Prevent infinite or invalid values.  
  - Error messages shown below fields in red (no alerts).  
- **All four operations** handled using **one single arrow function**.
- Styled with basic **CSS** for layout and clarity.

##  Part B: Stopwatch using Async/Await, Promises, and setInterval

###  Overview
A **single-page stopwatch web application** that demonstrates asynchronous programming concepts using **Async/Await**, **Promises**, and JavaScript timing functions such as `setInterval()` and `clearInterval()`.  
This stopwatch showcases precise time tracking, modular JavaScript structure, and responsive layout with basic CSS.

---

###  Features
- Displays time in `HH:MM:SS` format and initializes at `00:00:00`.
- Includes a **date picker** that:
  - Shows the **current date** automatically on page load.  
  - Allows **selection of past and future dates**.  
  - Is **non-editable directly** (can only change via picker).  
- Provides **three interactive buttons**:
  -  **Start:** Begins the timer count.  
  -  **Stop:** Pauses the timer.  
  -  **Reset:** Resets the stopwatch back to `00:00:00`.  
- Uses **Async/Await** and **Promises** to manage state transitions smoothly.
- Employs **setInterval()** for real-time counting and **clearInterval()** for pausing or resetting.
- Basic **CSS styling** for layout, color, and button alignment.

---

### 💻 Example Logic Snippet
```javascript
let timer;
let seconds = 0;

const formatTime = (sec) => {
  const hrs = String(Math.floor(sec / 3600)).padStart(2, '0');
  const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
  const secs = String(sec % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
};

const startStopwatch = async () => {
  return new Promise((resolve) => {
    timer = setInterval(() => {
      seconds++;
      document.getElementById('timeLabel').innerText = formatTime(seconds);
    }, 1000);
    resolve('Stopwatch Started');
  });
};

const stopStopwatch = () => clearInterval(timer);

const resetStopwatch = () => {
  clearInterval(timer);
  seconds = 0;
  document.getElementById('timeLabel').innerText = '00:00:00';
};

####  Example Arrow Function
```javascript
const calculate = (operation, num1, num2) => {
  switch (operation) {
    case 'add': return num1 + num2;
    case 'subtract': return num1 - num2;
    case 'multiply': return num1 * num2;
    case 'divide': return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
    default: return 'Invalid operation';
  }
};

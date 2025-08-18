// import { useState } from "react";

// function TypingSpeedTester() {
//     const [ ] = useState()
//   return (
//     <>
//       <input type="text" placeholder="type somthing" />
//       <button> </button>
//     </>
//   );
// }

// export default TypingSpeedTester;


// import { useState, useRef } from "react";

// function TypingSpeedTester() {
//   const [text, setText] = useState("");
//   const [isRunning, setIsRunning] = useState(false);
//   const [count, setCount] = useState(null);
//   const inputRef = useRef(null);
//   const timerRef = useRef(null);

//   const startTest = () => {
//     // Focus input, reset states, start timer
//   };

//   const endTest = () => {
//     // Count words, disable input
//   };

//   return (
//     <div>
//       <h1>Typing Speed Tester</h1>
//       <textarea
//         ref={inputRef}
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         disabled={!isRunning}
//       />
//       <button onClick={startTest}>Start</button>
//       {count !== null && <p>You typed {count} words!</p>}
//     </div>
//   );
// }

// export default TypingSpeedTester;

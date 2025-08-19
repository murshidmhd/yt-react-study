// import { useState } from "react";
// import ClickCounter from "./components/classCounter";
// import Counter from "./components/Counter";
// import DataFetching from "./components/DataFEtching";
// import FunctionCounter from "./components/FunctionCounter";
// import Greeting from "./components/Greeting";
// import HookCounter from "./components/HookCounter";
// import HookCounterThree from "./components/HookCounterThree";
// import HookMouse from "./components/HookMouse";
// import MouseContainer from "./components/MouseCountainer";
// import CounterTwo from "./components/for hooks/CounterTwo";
// import CounterThree from "./components/for hooks/CountetThree";
// import CounterThree from "./components/for hooks/CounterThree";
// import ComponentC from "./components/for practice use context /ComponentC ";
// import { UserProvider } from "./components/for practice use context /userContext";
// import Manager from "./components/Manager";
// import User from "./components/User";
// import UserManager from "./components/User second";

// import React from "react";
// import ComponentC from "./components/for-practice-use-context/ComponentC ";
// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();
// function App() {
//   return (
//     <div>
//       <UserContext.Provider value={"murshid"}>
//         <ChannelContext.Provider value={"ms-yt"}>
//           <ComponentC />
//         </ChannelContext.Provider>
//       </UserContext.Provider>
//     </div>
//   );
// }

// export default App;

import React from "react";
import UserForm from "./components/for hooks/customHooks/UserForm";
// import DocTitleOne from "./components/for hooks/customHooks/DocTitleOne";
// import DocTitleTwo from "./components/for hooks/customHooks/DocTitleTwo";
// import CounterOne from "./components/for hooks/customHooks/CounterOne";
// import CounterTwo from "./components/for hooks/customHooks/CounterTwo";

function App() {
  return (
    <div>
      <UserForm />
    </div>
  );
}

export default App;

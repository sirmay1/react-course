

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



export function MyApp() {
  return(
    <div className="wrapper-header">
      <h1 className="header">Custom React App!</h1>
    </div>
  );
}

export const AppDisplay = (
      <a href="https://www.google.com">Google Search Engine!</a>
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


/*
Learning how to create your own tools similar to how React works on the DOM.
YouTube: Complete react course with 10 projects

author: Hitesh Choudhary
video: 1:23:48 / 7:32:51

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Customize-able React Application</title>
</head>
<body>
    <div id="root"></div>
    <script src="./customreact.js"></script>
</body>
</html>


function renderRoot(reactElement, reactRoot) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
     if (prop === 'children') continue;
     domElement.setAttribute(prop, reactElement.props[prop])
    }
    reactRoot.appendChild(domElement);
 }



 const reactElement = {
     type: 'a',
     props: {
         href: "https://www.google.com",
         target: '_blank'
     },
     children: 'Click me to visit the Google Site'
 }

 const reactRoot = document.getElementById('root');

 renderRoot(reactElement, reactRoot);


*/



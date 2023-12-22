// here we are creating html element using react
//01)react element using react js
// const Reactelement=React.createElement('h1',{className:"heading"},"element created by react");
// ReactDOM.createRoot(document.getElementById('root')).render(Reactelement);

//02)react js using jsx

const jsxheading=(<>
<p>this is jsx paragraph</p>
<h1>jsx heading</h1>
</>);
ReactDOM.createRoot(document.getElementById('root')).render(jsxheading);
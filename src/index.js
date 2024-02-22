import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

let element = React.createElement('h1', 'This is React!');
ReactDOM.render(element, document.getElementById('app'));
//CRUD: Create, Read, Update, Delete

$.get(URL_ENDPOINT).then(data => {
    data.map(item => {
        $('t.body').append
    })
})

//Create item on grocery list

class Item {
    constructor(item) {
        this.item = Item;
        this.addItem = [];
    }
}


//Read or GET item




//Update, ie-button to add item

const newButton = document.createElement('button');
newButton.textContent = 'Update Item' ;
document.body.appendChild(newButton);



//Delete, ie-button to delete item
const deleteButton = document.deleteButton('button');
deleteButton.textContent = 'Delete Item' ;
document.body.appendChild(deleteButton);

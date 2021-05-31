'use strict';

let formEl= document.getElementById('inputForm');
let tableEl= document.getElementById('results');
let tHead = document.createElement('thead');
tableEl.appendChild(tHead);
tHead.setAttribute('id', 'head');
let tBody = document.createElement('tbody');
tableEl.appendChild(tBody);
tBody.setAttribute('id', 'body');



let orders =[];
let totalOrders = 0;

function Car(customerName,carBrand,maxCarNum,minCarNum,carNum){
  this.customerName = customerName;
  this.carBrand = carBrand;
  this.maxCarNum = maxCarNum;
  this.minCarNum =minCarNum;
  this.carNum = carNum;
  //   this.totalOrder =totalOrder;
  orders.push(this);

}

function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Car.carNum = Math.floor(Math.random() * (max - min) + min);

}


formEl.addEventListener('submit', myData);

function myData(event){
  event.preventDefault();
  let userName = event.target.customerName.value;
  let carBrand = event.target.carBrand.value;
  let max = event.target.maxCarNum.value;
  let min = event.target.minCarNum.value;
  let carNum = randomNum(min,max);

  new Car (userName,carBrand,max,min,carNum);
  console.log(orders);
  settingLocalStorage();
  createTableHead();
  render();
}


function settingLocalStorage(){
  let data = JSON.stringify(orders);
  localStorage.setItem('Cars',data);
}

function gettingLocalStorage(){
  let data = localStorage.getItem('Cars');
  let object = JSON.parse(data);
  if (object !==null){
    orders=object;
  }
  createTableHead();
  render();
}


function createTableHead(){
  document.getElementById('head').innerHTML='';
  let trEl = document.createElement('tr');
  tHead.appendChild(trEl);
  let thEl =document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent = 'Customer Name';

  let thE2 =document.createElement('th');
  trEl.appendChild(thE2);
  thE2.textContent = 'Car Brand';

  let thE3 =document.createElement('th');
  trEl.appendChild(thE3);
  thE3.textContent = 'Number of Cars';


}

function render(){
  totalOrders =0;
  document.getElementById('body').innerHTML='';
  for(let i=0; i<orders.length;i++){

    let trEl = document.createElement('tr');
    tBody.appendChild(trEl);
    let tdEl =document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = orders[i].customerName;

    let tdE2 =document.createElement('td');
    trEl.appendChild(tdE2);
    tdE2.textContent = orders[i].carBrand;

    let tdE3 =document.createElement('td');
    trEl.appendChild(tdE3);
    tdE3.textContent = orders[i].carNum;
    totalOrders =totalOrders+orders[i].carNum;


  }
  let trEl = document.createElement('tr');
  tBody.appendChild(trEl);
  let tdEl =document.createElement('td');
  trEl.appendChild(tdEl);
  tdEl.textContent ='Total';

  let tdE2 =document.createElement('td');
  trEl.appendChild(tdE2);
  tdE2.textContent ='';
  let tdE3 =document.createElement('td');
  trEl.appendChild(tdE3);
  tdE3.textContent = totalOrders;


}
gettingLocalStorage();

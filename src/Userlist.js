
export const userList = function(callback) {
  window.fetch('https://koreanjson.com/users', {
    method: 'GET',
    Headers: new Headers()
  })
  .then(response => response.json())
  .then(json => {
    callback(json);
  })
};

// let ulEle = document.querySelector('ul');

// var displayData = function(array) {
//   ulEle.innerHTML = ''
//   array.forEach(ele => {
//     ulEle.innerHTML += `<li> title: ${ele[0]}, body: ${ele[1]} </li>`;
//   })
// };

export const userTodo = function(callback) {
  window.fetch('https://koreanjson.com/todos', {
    method: 'GET',
    Headers: new Headers()
  })
  .then(response => response.json())
  .then(json => {
    callback(json);
  })
};

//image같은 것 주소로 불러오는 것과 api로 데이터 불러와서 쓰는 것과 무슨 차이가 있나?? 

//데이터를 전체를 불러와서 필터하는게 아니라 데이터를 id별로 불러오는 법. 그러려면 id를 무슨 parameter로든 넘겨줘야. 
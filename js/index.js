let data = [
    {
        content: "123"
    },
    {
        content: "123"
    }
]

// 抓到網頁元素
const button = document.querySelector(".add_todo")
const new_todo = document.querySelector(".new_todo_value")
const total_datas = document.querySelector(".total_datas")

// 加入click事件
button.addEventListener('click', function (event) {
  console.log(new_todo.value)
  console.log(event.target)
})


// testestestest
// checkcheckcheck
// utill function
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/** 모든 todo들의 부모인 .todoList 요소 노드*/
const $todoList = $(".todoList");
/** 새로 추가할 todo의 text를 담고있는 input 태그의 요소 노드*/
const $todoText = $(".todoText");
/** todoForm */
const $todoForm = $(".todoForm");

// global function
/**
 * 인자로 text값을 입력받아 $todoList에 새로운 todo를 생성합니다.
 * @param {String} text - 새로운 todo에 들어갈 text
 * @returns {void}
 */
const addTodo = (text) => {
    // HTMLElement 생성
    const $newTodo = document.createElement("li");
    const $newTask = document.createElement("span");
    const $newTrash = document.createElement("span");

    // class 추가
    $newTodo.classList.add("todo");
    $newTask.classList.add("task");
    $newTrash.classList.add("trash");

    // text 추가
    $newTask.innerText = text;
    $newTrash.innerHTML = "&times;";

    // EventListener 등록
    $newTask.addEventListener("click", (e) => e.currentTarget.closest(".todo").classList.toggle("active"));
    $newTrash.addEventListener("click", (e) => {
        const removeCheck = confirm("정말 삭제하시겠습니까?");
        if (!removeCheck) return;
        const currentTodo = e.currentTarget.closest(".todo");
        $todoList.removeChild(currentTodo);
    });

    // 렌더링
    $newTodo.append($newTask);
    $newTodo.append($newTrash);
    $todoList.append($newTodo);
}

/**
 * 초기 Task 와 Trash 요소에 event를 등록합니다.
 * @returns {void}
 */
const setEvent = () => {
    const $$Task = $$(".todo .task");
    const $$Trash = $$(".todo .trash");
    $$Task.forEach(el => { 
        el.addEventListener("click", (e) => e.currentTarget.closest(".todo").classList.toggle("active"));
    });
    $$Trash.forEach(el=>{
        el.addEventListener("click", (e) => {
            const removeCheck = confirm("정말 삭제하시겠습니까?");
            if (!removeCheck) return;
            const currentTodo = e.currentTarget.closest(".todo");
            $todoList.removeChild(currentTodo);
        })
    })
}
$todoForm.addEventListener("submit", (e) => { // 추가 버튼이 클릭되면
    e.preventDefault(); // submit 이벤트 중지
    if ($todoText.value.replaceAll(" ", "") === "") // input이 공백으로만 이루어졋으면
        return alert("빈 문자열은 입력할 수 없음") // 에러메세지를 반환하며 함수 종료
    addTodo($todoText.value); // todo 추가
    $todoText.value = ""; // input 비우기
    $todoText.blur(); // focus 해제
})
setEvent();
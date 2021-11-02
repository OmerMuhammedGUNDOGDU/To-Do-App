const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const ara = document.querySelector(".search input"); // Sınıfı "search" olan etiketin altındaki input'a eriştik

const generateTemplate = (todo) => {
  const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>    
    `;
  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  // const todo = addForm.add.value.trimend; // girilen metnin sonunda varsa boşluğu görmezden gelir
  // const todo = addForm.add.value.trimStart; // girilen metnin başında varsa boşluğu siler
  //   console.log(todo);

  if (todo.length) {
    // Boş bir metin kaydedilmesin diye yapıldı
    generateTemplate(todo);
    addForm.reset();
  }
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    // Çöp kutusuna basıldığında silinsin onun haricinde başka bir yere dokunulunca silinmesin diye yazıldı
    e.target.parentElement.remove();
  }
});

const filterTodos = (term) => {
  // console.log(term);
  // console.log(list.children);
  // console.log(Array.from(list.children));

  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.toLowerCase().textContent.includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

ara.addEventListener("keyup", () => {
  const term = ara.value.trim().toLowerCase();
  //   console.log(term);
  filterTodos(term);
});

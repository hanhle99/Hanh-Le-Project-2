/******************************************
Treehouse Techdegree:
Hanh - Le - FSJS project 2 - List Filter and Pagination
******************************************/

const studentList = document.querySelectorAll('.student-item');
const itemsPerPage = 10; // 10 students per one page

/*
   showPage function, for the first 1-10 students would be on "page 1"
   Students 11-20 appear on "page 2," and so on. 
 */

const showPage = (list, page) => {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage - 1;
   for (let i = 0; i < list.length; i++){
      if (i >= startIndex && i <= endIndex) {
         list[i].style.display = "";
      } else {
         list[i].style.display = 'none';
      }
   }
};

/*
   Pagination funtions: button 1 show ten students on the first "page"
   When links is clicked on page 2, it will dispay students 11 through 20 and highlight button 2. 
 */
const appendPageLinks = (list) => {
const page = document.querySelector("div");
const paginationDiv = document.createElement("div");
paginationDiv.className = "pagination";
page.appendChild(paginationDiv);

const numPerPage = Math.ceil(list.length / itemsPerPage);
const paginationLink = document.createElement("ul");
paginationDiv.appendChild(paginationLink);

   
   for (let i = 1; i <= numPerPage; i++) {
   const li = document.createElement("li");
   const a = document.createElement("a");
   paginationLink.appendChild(li);
   li.appendChild(a);
   a.href = "#";
   a.textContent = i;
   a.addEventListener("click", (event) => {
      showPage(list, i);
      document.querySelector(`.active`).
      classList.remove("active");
      const eventTarget = event.target;
      eventTarget.classList.add("active");
      });
   }
};
showPage(studentList, 1);
appendPageLinks(studentList);
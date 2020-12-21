var bookList = [{
  title: "Fundamentals of Web Development",
  author : [{
    firstname: "Arthur",
    lastname: "Keown"},
    {firstname: "John",
    lastname: "Martin"}
  ]
},{
  title: "Data Structures",
  author : [{
    firstname: "Mark",
    lastname: "Weiss"},
    {firstname: "Alice",
    lastname: "Martin"}
   ]}];

function write() {
  document.write("<h2>" + bookList[0].title + "</h2>");
  document.write(bookList[0].author[0].firstname + " " + bookList[0].author[0].lastname + "<br>");
  document.write(bookList[0].author[1].firstname + " " + bookList[0].author[1].lastname + "<br>");
  document.write("<h2>" + bookList[1].title + "</h2>");
  document.write(bookList[1].author[0].firstname + " " + bookList[1].author[0].lastname + "<br>");
  document.write(bookList[1].author[1].firstname + " " + bookList[1].author[1].lastname + "<br>");
}

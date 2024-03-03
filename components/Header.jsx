"use client";
export default function Header() {
  fetch("https://jsonplaceholder.typicode.com/todos/2").then((response) =>
    response.json()
  );
  return (
    <header>
      <div>헤더헤더</div>
    </header>
  );
}

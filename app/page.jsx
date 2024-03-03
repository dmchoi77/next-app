"use client";

import Header from "~/components/Header";

export default function Home() {
  fetch("https://jsonplaceholder.typicode.com/todos/2").then((response) =>
    response.json()
  );

  return (
    <div>
      <Header />
    </div>
  );
}

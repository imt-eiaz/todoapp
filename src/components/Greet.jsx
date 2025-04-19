import { Children } from "react";

export default function Greet({ name, heroName, para }) {
  return (
    <div>
      <h1>
        Hello {name} {heroName}
      </h1>
      {para}
    </div>
  );
}

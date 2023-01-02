export function Home() {
  let number = 0;
  function add() {
    number++;
  }

  return (
    <div>
      <h1>{number}</h1>
      <button className="button" onClick={add}>
        add number
      </button>
    </div>
  );
}

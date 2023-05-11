export default function Header({ children, size }) {
  let fontSize = "text-xl";

  if (size === "large") {
    fontSize = "text-2xl";
  }

  return (
    <header>
      <div className="bg-black mx-auto p-4">
        <h1 className={`text-center font-semibold text-gray-100 ${fontSize}`}>
          {children}
        </h1>
      </div>
    </header>
  );
}

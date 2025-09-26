import Button from "../common/Button";

export default function Header() {
  return (
    <header className="bg-white px-10 py-4 shadow-lg flex gap-30 align-middle">
      <div className="logo">
        <h1 className="text-black font-extrabold text-3xl">Church Media</h1>
      </div>
      <div className=" flex align-middle max-h-min outline-1 outline-amber-300">
        <ul className="flex gap-4 align-middle max-h-min">
          <li className="text-gray-800 max-h-min">Home</li>
          <li className="text-gray-800 max-h-min">Media</li>
          <li className="text-gray-800 max-h-min">Overview</li>
          <li className="text-gray-800 max-h-min">Settings</li>
        </ul>
      </div>
      <div className="ml-auto">
        <Button title="Upload Media" />
      </div>
    </header>
  );
}

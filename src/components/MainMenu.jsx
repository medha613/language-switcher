import Link from "next/link";
export default function MainMenu() {
  return (
    <>
      <nav className=" flex flex-row gap-4">
        <Link className="font-bold" href="/">
          Home
        </Link>
        <Link className="font-bold" href="/about">
          About
        </Link>
        <Link className="font-bold" href="/posts">
          Posts
        </Link>
        <Link className="font-bold" href="/chatbot">
          Chatbot
        </Link>
        <Link className="font-bold" href="/users">
        Users</Link>
      </nav>
    </>
  );
}

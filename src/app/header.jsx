
import LangSwitcher from "@/components/LangSwitcher";
import Logo from "@/components/Logo";
import MainMenu from "@/components/MainMenu";

export default function Header() {
  return (
    <div className=" bg-blue-400 p-3">
      <div className=" flex flex-row justify-between ">
        <Logo />
        <MainMenu />
        <LangSwitcher />
      </div>
    </div>
  );
}

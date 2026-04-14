import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

export default function Home() {
  return (
    <>
    <header>
      <h1 className="scroll-m-20 text-left text-4xl font-extrabold tracking-tight text-balance">
        Yash Khanwilkar
      </h1>

      <Menubar className="text-right">
        <MenubarMenu>
          <MenubarTrigger>Home</MenubarTrigger>
          <MenubarTrigger>About-me</MenubarTrigger>
          <MenubarTrigger>Projects</MenubarTrigger>
          <MenubarTrigger>Contact</MenubarTrigger>
        </MenubarMenu>
      </Menubar>̥
    </header>
      <footer>
        
      </footer>
    </>
  );
}

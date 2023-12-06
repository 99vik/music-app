import NavigationButtons from './NavigationButtons';
import { MdMenu } from 'react-icons/md';
import { useRef, useState } from 'react';
function Sidebar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <button
        onClick={() => setMobileMenu(!mobileMenu)}
        className="absolute top-0 right-0 z-30 min-[700px]:hidden"
      >
        <MdMenu className="text-white group-hover:text-white/60 h-10 w-10" />
      </button>
      <div
        ref={menuRef}
        hidden={!mobileMenu}
        className="w-52 bg-[#0e071d] max-[700px]:absolute max-[700px]:w-full max-[700px]:h-screen z-20 min-[700px]:block p-4 border-r border-white/10"
      >
        <p className="text-violet-200 text-3xl my-4 text-center font-bold ">
          MusicApp
        </p>
        <div className="flex flex-col font-semibold gap-4 mt-10 text-lg text-white/80 items-start">
          <NavigationButtons />
        </div>
      </div>
    </>
  );
}

export default Sidebar;

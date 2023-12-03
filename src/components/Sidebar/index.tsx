import NavigationButtons from './NavigationButtons';

function Sidebar() {
  return (
    <div className="w-52 bg-[#0e071d] p-4 border-r border-white/10">
      <p className="text-violet-200 text-3xl my-4 text-center font-bold ">
        MusicApp
      </p>
      <div className="flex flex-col font-semibold gap-4 mt-10 text-lg text-white/80 items-start">
        <NavigationButtons />
      </div>
    </div>
  );
}

export default Sidebar;

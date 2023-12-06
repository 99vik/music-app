function DummyBar() {
  return (
    <div className="flex w-[420px] justify-center items-center mt-1 text-white text-sm font-semibold">
      <p>0:00</p>
      <input
        onChange={() => {}}
        value={0}
        type="range"
        className="accent-indigo-500 h-[5px] max-[850px]:w-[270px] max-[950px]:w-[200px] w-[350px] mx-4 transiton"
      />
      <p>0:00</p>
    </div>
  );
}

export default DummyBar;

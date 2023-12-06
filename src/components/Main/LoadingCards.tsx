function LoadingCards() {
  const cards = Array.from(Array(10).keys()).map((i) => {
    return (
      <div
        key={i}
        className="bg-violet-700/20 animate-pulse w-[200px] h-[290px] rounded-lg max-[470px]:p-1 max-[470px]:h-[260px] max-[470px]:w-[180px]"
      ></div>
    );
  });

  return (
    <div className="pb-64 mt-10 justify-items-center h-screen overflow-y-scroll no-scrollbar grid max-[950px]:grid-cols-2 max-[1200px]:grid-cols-3 max-[1450px]:grid-cols-4 grid-cols-5 gap-y-10">
      {cards}
    </div>
  );
}

export default LoadingCards;

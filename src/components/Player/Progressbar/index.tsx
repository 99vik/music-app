import DummyBar from './DummyBar';

function Progressbar({ audio }: { audio: HTMLAudioElement | null }) {
  if (!audio) return <DummyBar />;

  const duration = Number.isNaN(audio.duration) ? 0 : audio.duration;

  function displayTime(time: number) {
    return `${Math.floor(time / 60)}:${`0${Math.round(time % 60)}`.slice(-2)}`;
  }

  function handleTimeChange(e: React.BaseSyntheticEvent<Event>) {
    audio!.currentTime = e.target.value;
  }

  return (
    <>
      <div className="flex w-[420px] justify-center items-center mt-1 text-white text-sm font-semibold">
        <p>{displayTime(audio.currentTime)}</p>
        <input
          onInput={(e) => {
            handleTimeChange(e);
          }}
          type="range"
          value={audio.currentTime}
          step={0.1}
          min={0}
          max={Math.round(duration)}
          className="accent-indigo-500 h-[5px] max-[850px]:w-[270px] max-[950px]:w-[200px] w-[350px] mx-4 transiton"
        />
        <p>{displayTime(duration)}</p>
      </div>
    </>
  );
}

export default Progressbar;

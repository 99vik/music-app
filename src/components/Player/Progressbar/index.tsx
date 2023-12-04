function Progressbar({ audio }: { audio: HTMLAudioElement | null }) {
  if (!audio) return;
  const duration = Number.isNaN(audio.duration) ? 0 : audio.duration;

  function displayTime(time: number) {
    return `${Math.floor(time / 60)}:${`0${Math.round(time % 60)}`.slice(-2)}`;
  }

  function handleTimeChange(e: React.BaseSyntheticEvent<Event>) {
    audio!.currentTime = e.target.value;
  }

  return (
    <>
      <div className="flex">
        <p>{displayTime(audio.currentTime)}</p>
        <input
          onInput={(e) => {
            handleTimeChange(e);
          }}
          type="range"
          value={audio.currentTime}
          min={0}
          max={Math.round(duration)}
          className="transition"
        />
        <p>{displayTime(duration)}</p>
      </div>
    </>
  );
}

export default Progressbar;

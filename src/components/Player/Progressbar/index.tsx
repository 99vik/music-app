function Progressbar({ audio }: { audio: HTMLAudioElement | null }) {
  if (!audio) return;

  function displayTime(time) {
    return `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;
  }

  function handleTimeChange(e) {
    console.log(e.target);
  }

  return (
    <>
      <div className="flex">
        <p>{displayTime(audio.currentTime)}</p>
        <input
          onChange={(e) => {
            handleTimeChange(e);
          }}
          type="range"
          value={audio.currentTime}
          min={0}
          max={Number.isNaN(audio.duration) ? 0 : audio.duration}
          className="transition"
        />
        <p>{displayTime(Number.isNaN(audio.duration) ? 0 : audio.duration)}</p>
      </div>
    </>
  );
}

export default Progressbar;

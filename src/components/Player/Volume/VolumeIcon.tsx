import {
  IoVolumeOff,
  IoVolumeLow,
  IoVolumeMedium,
  IoVolumeHigh,
} from 'react-icons/io5';

function VolumeIcon({ volume }: { volume: number }) {
  const icon = () => {
    if (volume == 0) {
      return <IoVolumeOff className="h-6 w-7 -translate-x-3  text-white" />;
    } else if (volume <= 0.25) {
      return <IoVolumeLow className="h-6 w-8 -translate-x-2 text-white" />;
    } else if (volume <= 0.75) {
      return <IoVolumeMedium className="h-6 w-9 -translate-x-1 text-white" />;
    } else {
      return <IoVolumeHigh className="h-6 w-10 text-white" />;
    }
  };

  return icon();
}

export default VolumeIcon;

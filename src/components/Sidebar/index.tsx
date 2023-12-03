import { useDispatch } from 'react-redux';
import {
  changeToDiscover,
  changeToHipHop,
  changeToPop,
  changeToRock,
} from '../../redux/currentMainView/currentMainViewSlice';

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="w-1/4 bg-neutral-400 p-4">
      <p>MusicApp</p>
      <div className="flex flex-col items-start">
        <button
          onClick={() => {
            dispatch(changeToDiscover());
          }}
        >
          Discover
        </button>
        <button
          onClick={() => {
            dispatch(changeToPop());
          }}
        >
          Pop
        </button>
        <button
          onClick={() => {
            dispatch(changeToHipHop());
          }}
        >
          Hip-Hop
        </button>
        <button
          onClick={() => {
            dispatch(changeToRock());
          }}
        >
          Rock
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

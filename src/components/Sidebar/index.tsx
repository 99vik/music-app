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
    <div className="w-1/4 bg-neutral-400">
      <p>sidebar</p>
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
  );
}

export default Sidebar;

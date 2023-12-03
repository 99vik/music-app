import { links } from '../links';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function NavigationButtons() {
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState('Discover');

  const displayedButtons = links.map((link) => {
    return (
      <button
        className={`${
          activeButton === link.name
            ? 'bg-white/10 text-violet-500'
            : 'hover:bg-white/5 hover:text-white'
        }   transition py-1 px-2 w-full text-left rounded-lg`}
        onClick={() => {
          dispatch(link.dispatchAction());
          setActiveButton(link.name);
        }}
      >
        {link.name}
      </button>
    );
  });

  return displayedButtons;
}

export default NavigationButtons;

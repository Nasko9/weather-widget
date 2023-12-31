import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { useContext, useRef } from 'react';

// Context
import SettingsContext from 'context/SettingsContext';

export default function useInput() {
  const { location, setLocation } = useContext(SettingsContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const { ref, focused } = useFocusable({
    onFocus: () => {
      if (inputRef.current) {
        return inputRef.current.focus();
      }
    },
    onBlur: () => {
      if (inputRef.current) {
        return inputRef.current.blur();
      }
    },
  });

  const inputHandler = (value: string) => {
    setLocation(value);
  };
  return { location, inputRef, inputHandler, ref, focused };
}

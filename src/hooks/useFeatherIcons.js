import { useEffect } from 'react';
import feather from 'feather-icons';

export default function useFeather() {
  useEffect(() => {
    feather.replace();
  }, []); 
}
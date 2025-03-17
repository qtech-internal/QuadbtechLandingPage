'use client';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<string>('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = savedTheme;
    }
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div style={{ padding: '10px', display: 'flex', gap: '10px', justifyContent: 'center', marginTop:'40px' }}>
      <button className="theme-button" onClick={() => handleThemeChange('')}>Orange</button>
      <button className="theme-button" onClick={() => handleThemeChange('olive')}>Olive Green</button>
      <button className="theme-button" onClick={() => handleThemeChange('purple')}>Purple</button>
    </div>
  );
}

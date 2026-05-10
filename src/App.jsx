import { useEffect, useState } from 'react';
import { portfolioData } from './data/portfolioData';
import WaterBackground from './components/WaterBackground';
import BrowserNav from './components/BrowserNav';
import Shelf from './components/Shelf';
import Folder from './components/Folder';
import ProfileWidget from './components/ProfileWidget';
import PortfolioGrid from './components/PortfolioGrid';

const THEME_STORAGE_KEY = 'portfolio-theme';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return window.localStorage.getItem(THEME_STORAGE_KEY) === 'light' ? 'light' : 'dark';
  });
  const [activeFolder, setActiveFolder] = useState(portfolioData[0].id);

  const isLight = theme === 'light';
  const activeContent = portfolioData.find(folder => folder.id === activeFolder);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div
      className={`min-h-screen relative antialiased transition-colors duration-300 ${
        isLight
          ? 'theme-light bg-emerald-50 text-zinc-950 selection:bg-emerald-300/40'
          : 'theme-dark bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30'
      }`}
    >
      <WaterBackground theme={theme} />
      <BrowserNav theme={theme} onToggleTheme={toggleTheme} />

      <main className="relative z-10 pt-6 md:pt-10 pb-24 md:pb-28 px-4 md:px-6">
        <div className="w-full max-w-6xl mx-auto space-y-10 md:space-y-14">
          <ProfileWidget theme={theme} />

          <Shelf theme={theme}>
            {portfolioData.map((folder) => (
              <Folder
                key={folder.id}
                folder={folder}
                isActive={activeFolder === folder.id}
                onClick={() => setActiveFolder(folder.id)}
                theme={theme}
              />
            ))}
          </Shelf>

          <PortfolioGrid content={activeContent} theme={theme} />
        </div>
      </main>
    </div>
  );
}

export default App;

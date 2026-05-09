import { useState } from 'react';
import { portfolioData } from './data/portfolioData';
import WaterBackground from './components/WaterBackground';
import BrowserNav from './components/BrowserNav';
import Shelf from './components/Shelf';
import Folder from './components/Folder';
import ProfileWidget from './components/ProfileWidget';
import PortfolioGrid from './components/PortfolioGrid';

function App() {
  const [activeFolder, setActiveFolder] = useState(portfolioData[0].id);

  const activeContent = portfolioData.find(folder => folder.id === activeFolder);

  return (
    <div className="min-h-screen relative bg-zinc-950 text-zinc-100 antialiased selection:bg-emerald-500/30">
      <WaterBackground />
      <BrowserNav />

      <main className="relative z-10 pt-6 md:pt-10 pb-24 md:pb-28 px-4 md:px-6">
        <div className="w-full max-w-6xl mx-auto space-y-10 md:space-y-14">
          <ProfileWidget />

          <Shelf>
            {portfolioData.map((folder) => (
              <Folder
                key={folder.id}
                folder={folder}
                isActive={activeFolder === folder.id}
                onClick={() => setActiveFolder(folder.id)}
              />
            ))}
          </Shelf>

          <PortfolioGrid content={activeContent} />
        </div>
      </main>
    </div>
  );
}

export default App;

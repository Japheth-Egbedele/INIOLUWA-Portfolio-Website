import { useState } from 'react';
import { portfolioData } from './data/portfolioData';
import WaterBackground from './components/WaterBackground';
import BrowserNav from './components/BrowserNav';
import Shelf from './components/Shelf';
import Folder from './components/Folder';
import ProfileWidget from './components/ProfileWidget';
import PortfolioGrid from './components/PortfolioGrid';

function App() {
  // Set first folder as default
  const [activeFolder, setActiveFolder] = useState(portfolioData[0].id);

  const activeContent = portfolioData.find(folder => folder.id === activeFolder);

  return (
    <div className="min-h-screen relative">
      {/* Animated Water Background */}
      <WaterBackground />

      {/* Browser Chrome Header */}
      <BrowserNav />

      {/* Main Content */}
      <div className="relative z-10 pt-4 md:pt-8 pb-20">
        {/* Profile Widget - Separate from shelf */}
        <div className="w-full max-w-6xl mx-auto px-4 mb-6 md:mb-8">
          <ProfileWidget />
        </div>

        {/* Shelf with Folder Categories */}
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

        {/* Portfolio Content Grid */}
        <PortfolioGrid content={activeContent} />
      </div>
    </div>
  );
}

export default App
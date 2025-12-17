import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { ProfileCard } from './components/ProfileCard';
import { AboutCard } from './components/AboutCard';
import { ProjectsCard } from './components/ProjectsCard';
import { ExperienceCard } from './components/ExperienceCard';

const App: React.FC = () => {
  useEffect(() => {
    // This log helps verify if the new version is live in production
    console.log("Portfolio v2.1 loaded - Updated Project List");
  }, []);

  return (
    <>
      <Header />
      <main className="relative max-w-7xl sm:px-6 lg:px-8 mt-16 mr-auto mb-16 ml-auto pr-4 pl-4">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
          {/* Profile Card Column */}
          <section className="xl:col-span-1">
            <ProfileCard />
          </section>

          {/* About & Experience Column */}
          <div className="xl:col-span-2 space-y-8">
            <AboutCard />
            <ProjectsCard />
            <ExperienceCard />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;


import ProjectGrid from "./components/ProjectGrid";
import ProjectGridMobile from "./components/ProjectGridMobile";

export default function Home() {
  return (
    <div className="flex">
      {/* Desktop grid */}
      <main className="hidden lg:block ml-64 w-full min-h-screen p-5 space-y-15">
        <ProjectGrid />
      </main>

      {/* Mobile grid */}
      <main className="block lg:hidden w-full min-h-screen">
        <ProjectGridMobile />
      </main>
    </div>
  );
}


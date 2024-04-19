import { Background } from '../ui/layout/Background';
import { Navbar } from '../ui/layout/Navbar';
import { NavbarMovil } from '../ui/layout/NavbarMovil ';
import dynamic from 'next/dynamic';

const Accessibility = dynamic(
  () => {
    return import('@/app/ui/layout/Accesibility');
  },
  { ssr: false }
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <header>
        <Background />
      </header>
      <NavbarMovil />
      <div className="flex -mt-52">
        <Accessibility />
        <Navbar />
        {children}
      </div>
    </section>
  );
}

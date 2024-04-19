import Image from 'next/image';
import { ImagenAvatar } from '../ImagenAvatar';
import Link from 'next/link';
import { BotonPrincipal } from './BotonPrincipal';
import {
  CalendarDaysIcon,
  DevicePhoneMobileIcon,
  UserCircleIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

const links = [
  { name: 'Reserva de turnos', href: '/dashboard', icon: CalendarDaysIcon },
  { name: 'Mis consultas', href: '/dashboard/misConsultas', icon: DocumentTextIcon },
  { name: 'Perfil', href: '/dashboard/profile', icon: UserCircleIcon },
  { name: 'Atención virtual', href: '/dashboard/atencionVirtual', icon: DevicePhoneMobileIcon },
];

export const NavbarMovil = () => {
  return (
    <section className="flex relative flex-col overflow-hidden max-w-[320px] -mt-44 mx-auto px-10 justify-center items-center p-4 space-x-1 bg-white rounded-xl shadow-lg box-content md:hidden">
      <header className="flex justify-center items-center">
        <Image
          src="/Medilatam.svg"
          alt="logo de la aplicación web"
          height={150}
          width={200}
          className="pl-5 pt-3"
        />
      </header>
      <div className="flex space-y-4 space-x-8 items-center mt-4 justify-center">
        <ImagenAvatar imagen={'/imageProfile/avatar.png'} width={100} height={100} />
        <div className="flex space-x-3 pb-4  border-b-2">
          <a className="text-white bg-mlt-600 hover:bg-mlt-800 hover:scale-105 duration-300  transition-colors focus:outline-none font-medium rounded-full text-sm text-center p-2 w-24" href="/auth">
              Login
            </a>
            <a className="text-white bg-mlt-600 hover:bg-mlt-800 hover:scale-105 duration-300 transition-colors focus:outline-none font-medium rounded-full text-sm text-center p-2 w-24"
              href="/auth/register">
              Registro
            </a>
        </div>
      </div>
      <nav className="flex w-96 mt-2 px-6">
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex w-10 grow flex-col items-center justify-center px-0 rounded-md py-3 font-medium hover:bg-mlt-600 group hover:text-white">
              <LinkIcon className="w-8" title={link.name} />
              <p className="text-[6px] font-semibold group-hover:text-white">{link.name}</p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

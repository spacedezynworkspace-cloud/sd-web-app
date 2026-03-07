'use client';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import {
  ArrowRightEndOnRectangleIcon,
  Bars3Icon,
  BellIcon,
  UserCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { ThemeSwitch } from './theme-switch';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  Button,
} from '@heroui/react';
import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';

type NavLink = {
  name: string;
  href: string;
  current?: boolean;
};
interface NavigationType {
  mainLink: NavLink;
  subLinks?: NavLink[];
}

// function classNames(...classes: (string | undefined | false)[]) {
//   return classes.filter(Boolean).join(' ')
// }

const Navbar = () => {
  const pathName = usePathname();

  const { data: session } = useSession();

  const [navbarBg, setNavbarBg] = useState<boolean>(false);
  const webNavbar: NavigationType[] = [
    { mainLink: { name: 'Home', href: '/', current: true } },
    {
      mainLink: {
        name: 'DezynLab',
        href: 'dezynlab.spacedezyn.com',
        current: false,
      },
      subLinks: [
        {
          name: '3D Visualization',
          href: 'dezynlab.spacedezyn.com/3d-visualization',
        },
        {
          name: 'Interior Design',
          href: 'dezynlab.spacedezyn.com/interior-dezyn',
        },
        {
          name: 'Supervisor Training',
          href: 'dezynlab.spacedezyn.com/supervisor-training',
        },
      ],
    },
    {
      mainLink: { name: 'Services', href: '#', current: false },
      subLinks: [
        {
          name: 'Smart AirBnB',
          href: '/air-bnb',
        },
        {
          name: 'Interior Design',
          href: '/interior-design',
        },
        {
          name: 'Virtual Tour',
          href: '/virtual-tour',
        },
        {
          name: '3D Visualization',
          href: '/3d-visualization',
        },
        {
          name: 'Rennovation',
          href: '/rennovation',
        },
        {
          name: 'Consultation',
          href: '/consultation',
        },
        {
          name: 'Professional Cleaning',
          href: 'https://urbancleaningng.my.canva.site',
        },
      ],
    },
    {
      mainLink: {
        name: 'Book Appointment',
        href: 'https://www.spacedezyn.com/book-a-consultation',
        current: false,
      },
    },
  ];
  const appNavbar: NavigationType[] = [
    // { mainLink: { name: 'Dashboard', href: '/dashboard', current: true } },
    // { mainLink: { name: 'Clients', href: '#', current: false } },
    {
      mainLink: {
        name: 'Operations',
        href: '/dashboard/operations',
        current: true,
      },
    },
  ];

  if (session?.user.role === 'admin') {
    appNavbar.push({
      mainLink: { name: 'Finance', href: '/dashboard/finance', current: false },
    });
  }

  const doNotDisPlayRouteList = pathName === '/dashboard-login-portal';
  const NAVBARITEMS = session?.user ? appNavbar : webNavbar;
  return (
    <Disclosure
      as="nav"
      className={`${doNotDisPlayRouteList && 'hidden'} relative z-40 sm:bg-none ${navbarBg && 'bg-black'} after:pointer-events-none  after:absolute after:inset-x-0 after:bottom-0 after:h-px `}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-24 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2  text-[#F19645] hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-[#F19645]">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>

              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
                onClick={() => console.log('clicked')}
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center h-full justify-center sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link href="/">
                {/* <Image
                  src={'/sd-web-app-logo-white.png'}
                  alt="Space Dezyn logo"
                  width={100}
                  height={75}
                  className="object-fill dark:flex hidden"
                /> */}
                <Image
                  src={'/sd-web-app-logo.png'}
                  alt="Space Dezyn logo"
                  width={85}
                  height={75}
                  className="object-fill"
                />
              </Link>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex sm:gap-4 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {NAVBARITEMS.map((item) => {
                  return item.subLinks ? (
                    <Dropdown key={item.mainLink.name}>
                      <DropdownTrigger>
                        <button
                          className={clsx(
                            item.mainLink.href === pathName
                              ? ' text-white'
                              : 'text-[#F19645] hover:bg-orange-200/50 hover:font-extrabold',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                        >
                          {item.mainLink.name}
                        </button>
                      </DropdownTrigger>

                      <DropdownMenu aria-label="Link Actions">
                        {item.subLinks.map((subItem) => (
                          <DropdownItem key={subItem.name} href={subItem.href}>
                            {subItem.name}
                          </DropdownItem>
                        ))}
                      </DropdownMenu>
                    </Dropdown>
                  ) : (
                    <Link
                      key={item.mainLink.name}
                      href={item.mainLink.href}
                      aria-current={
                        item.mainLink.href === pathName ? 'page' : undefined
                      }
                      className={clsx(
                        item.mainLink.href === pathName
                          ? ' bg-orange-200/50'
                          : ' hover:bg-orange-200/50 hover:font-extrabold',
                        'rounded-md px-3 py-2 text-sm font-medium text-[#F19645]'
                      )}
                    >
                      {item.mainLink.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <button
              type="button"
              className="relative hidden sm:flex rounded-full p-1 text-[#F19645] focus:outline-2 focus:outline-offset-2 focus:outline-[#F19645]"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>
            <ThemeSwitch />

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F19645] hover:cursor-pointer">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <UserCircleIcon className="size-7 text-[#F19645]" />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-black dark:bg-[#F19645] py-1 outline -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in opacity-100"
              >
                {/* <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-white data-focus:outline-hidden"
                  >
                    Your profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-white data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem> */}
                <MenuItem>
                  {session?.accessToken ? (
                    <div>
                      <Button
                        onPress={() =>
                          signOut({
                            callbackUrl: '/dashboard-login-portal',
                          })
                        }
                        className="dark:text-white text-[#F19645] bg-transparent font-semibold"
                      >
                        <ArrowRightEndOnRectangleIcon className="size-5 text-white" />
                        Sign Out
                      </Button>
                    </div>
                  ) : (
                    <Link
                      href="/dashboard-login-portal"
                      className="block px-4 py-2 text-sm text-white data-focus:outline-hidden"
                    >
                      Login
                    </Link>
                  )}
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden absolute h-screen w-full left-0 top-0 -z-10">
        <div className="space-y-1 px-2 pt-32 pb-3 dark:bg-black bg-white w-full h-screen left-0">
          {NAVBARITEMS.map((item) => (
            <DisclosureButton
              key={item.mainLink.name}
              as="a"
              href={item.mainLink.href}
              aria-current={
                item.mainLink.href === pathName ? 'page' : undefined
              }
              className={clsx(
                item.mainLink.href === pathName
                  ? 'bg-[#F19645] text-white'
                  : 'text-[#F19645] hover:bg-white/5 hover:font-extrabold',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.subLinks ? (
                <Dropdown>
                  <DropdownTrigger>
                    <button
                      className={clsx(
                        item.mainLink.href === pathName
                          ? 'bg-[#F19645] text-white'
                          : 'text-[#F19645] hover:bg-white/5 hover:font-extrabold',
                        'block rounded-md py-2 text-base font-medium bg-none'
                      )}
                    >
                      {item.mainLink.name}
                    </button>
                  </DropdownTrigger>

                  <DropdownMenu aria-label="Link Actions">
                    {item.subLinks.map((subItem) => (
                      <DropdownItem key={subItem.name} href={subItem.href}>
                        {subItem.name}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              ) : (
                item.mainLink.name
              )}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useUserStore } from "../hooks/user";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";
import Avatar from "./Avatar";

export default function UserDropdown() {
  const { user, logout } = useUserStore();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton>
          <div className="flex gap-3 items-center hover:bg-blue-950 hover:text-white rounded-full pl-4 transition-all duration-300">
            <span className="text-lg font-medium sm:inline-block hidden">Hi {user.username}!</span>
            <Avatar user={user}/>
          </div>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <button
              onClick={() => {
                logout();
              }}
              type="button"
              className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              <span>Sign out</span>
              <ArrowRightEndOnRectangleIcon className="size-6" />
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import { CustomButton } from "./CustomButton";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import { FaUserAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import usePlayer from "@/hooks/usePlayer";
import Link from "next/link";

type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export const Header = ({ children, className }: HeaderProps) => {
  const player = usePlayer();
  const authModal = useAuthModal();
  const router = useRouter();

  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    player.reset();
    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged Out!");
    }
  };

  return (
    <div
      className={twMerge(
        "h-fit bg-gradient-to-b from-emerald-800 p-6",
        className
      )}>
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          {/* Left button to navigate back */}
          <button
            className="rounded-full bg-black flex items-center justify-items-center hover:opacity-75 transition"
            onClick={() => router.back()}>
            <RxCaretLeft size={35} className="text-white" />
          </button>

          {/* Right button to navigate forward */}
          <button
            className="rounded-full bg-black flex items-center justify-items-center hover:opacity-75 transition"
            onClick={() => router.forward()}>
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>

        {/* Home button (Works only if the view is of mobile size) */}
        <div className="flex md:hidden gap-x-2 items-center">
          <Link href={"/"}>
            <button className="rounded-full p-2 bg-white justify-center flex items-center hover:opacity-75 transition">
              <HiHome size={25} className="text-black" />
            </button>
          </Link>

          {/* Search button (Works only if the view is of mobile size) */}
          <Link href={"/search"}>
            <button className="rounded-full p-2 bg-white justify-center flex items-center hover:opacity-75 transition">
              <BiSearch size={25} className="text-black" />
            </button>
          </Link>
        </div>

        {/* Button For Log In & Sign in */}
        <div className="flex items-center justify-between gap-x-4">
          {user ? (
            <div className="flex gap-x-4 items-center">
              {toast.success("Logged In")}
              <CustomButton
                onClick={handleLogout}
                className="bg-white px-6 py-2">
                Logout
              </CustomButton>
              <CustomButton
                onClick={() => router.push("/account")}
                className="bg-white">
                <FaUserAlt />
              </CustomButton>
            </div>
          ) : (
            <>
              <div>
                <CustomButton
                  className="bg-transparent text-neutral-300 font-medium"
                  onClick={authModal.onOpen}>
                  Sign Up
                </CustomButton>
              </div>
              <div>
                <CustomButton
                  className="bg-white px-6 py-2"
                  onClick={authModal.onOpen}>
                  Log In
                </CustomButton>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

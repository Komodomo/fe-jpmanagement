import Image from 'next/image';
import { Button, Input } from '@nextui-org/react';
import {  } from "@nextui-org/input";
import { UserIcon, KeyIcon } from '@heroicons/react/24/solid';

export default function Login() {
  return (
    <div className="min-h-screen flex bg-white-bg font-flamante relative overflow-hidden">
      {/* Logo */}
      <div className="fixed left-4 sm:left-8 top-4 sm:top-8 z-20 select-none pointer-events-none">
        <Image
          src="/assets/images/logo.png"
          alt="Logo"
          width={140}
          height={60}
          className="object-contain"
        />
      </div>

      {/* Two column layout */}
      <div className="flex w-full">
        {/* Left side - Login form */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 sm:px-8 md:px-16">
          <div className="max-w-sm w-full relative z-10">
            <div className="text-start mb-6 sm:mb-8">
              <h1 className="text-xl sm:text-2xl md:text-3xl text-black">Welcome Back!</h1>
              <p className="text-gray text-lg sm:text-xl mt-2">Please sign in to your account</p>
            </div>

            <div className="space-y-4">
              <Input
                label="Username"
                type="text"
                endContent={
                  <UserIcon className="w-4 sm:w-5 h-4 sm:h-5 text-default-400 pointer-events-none flex-shrink-0" />
                }
                className="w-full mid-gray"
                classNames={{
                  base: "mid-gray",
                  inputWrapper: "mid-gray"
                }}
              />

              <Input
                label="Password" 
                type="password"
                endContent={
                  <KeyIcon className="w-4 sm:w-5 h-4 sm:h-5 text-default-400 pointer-events-none flex-shrink-0" />
                }
                className="w-full mid-gray"
                classNames={{
                  base: "mid-gray",
                  inputWrapper: "mid-gray"
                }}
              />
            </div>

            <Button
              className="w-full bg-red hover:bg-mid-red text-white mt-6 sm:mt-8 text-base sm:text-lg"
              size="lg"
            >
              Let's get started
            </Button>
          </div>
        </div>

        {/* Right side - Wave decoration - Hidden on mobile */}
        <div className="hidden md:block w-1/2 relative select-none pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              maskImage: 'url(/assets/images/wave.svg)',
              WebkitMaskImage: 'url(/assets/images/wave.svg)',
              maskSize: 'cover',
              WebkitMaskSize: 'cover',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center'
            }}
          >
            <Image
              src="/assets/images/smktelkombjb.jpg"
              alt="SMK Telkom Background"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
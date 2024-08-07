import { BackgroundGradientAnimation } from "~components/ui/BackgroundGradientAnimation"

import "./style.css"

import { FaArrowRightLong } from "react-icons/fa6"

import Explore from "~components/ui/Explore"
import HamburgerMenu from "~components/ui/HamburgerMenu"

function IndexNewtab() {
  return (
    <div>
      <BackgroundGradientAnimation>
        <div className="flex flex-col p-4">
          <HamburgerMenu />
          <div className="flex justify-center items-center w-full h-[85vh]">
            <div className="border-b-2 border-gray-400 flex w-3/4 p-3 text-5xl font-semibold text-white">
              <input
                type="text"
                placeholder="What's on your mind today? "
                className="w-full p-3 bg-transparent outline-none placeholder-gray-400/80 "
              />
              <button className="text-gray-400/80">
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  )
}

export default IndexNewtab

import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io"

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button
        className="flex items-center justify-center w-12 h-12 border-none cursor-pointer outline-none"
        onClick={toggleMenu}>
        {isOpen ? (
          <IoMdClose className="text-white text-2xl" />
        ) : (
          <GiHamburgerMenu className="text-white text-2xl" />
        )}
      </button>
      <div
        className={`text-lg font-medium fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 rounded-r-md shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <button
          className="absolute top-6 right-6 text-white text-2xl"
          onClick={toggleMenu}>
          <IoMdClose />
        </button>
        <div className="flex flex-col mt-12 space-y-2">
          <a href="#" className="hover:bg-gray-600 p-2 rounded">
            Custom GPT
          </a>
          <a href="#" className="hover:bg-gray-600 p-2 rounded">
            Custom GPT
          </a>
          <a href="#" className="hover:bg-gray-600 p-2 rounded">
            Custom GPT
          </a>
          <a href="#" className="hover:bg-gray-600 p-2 rounded">
            Custom GPT
          </a>
        </div>
      </div>
    </div>
  )
}

export default HamburgerMenu

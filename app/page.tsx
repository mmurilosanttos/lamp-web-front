"use client"

import { useState, useEffect } from "react"

export default function LampToggle() {
  const [isLampOn, setIsLampOn] = useState(false)

  // Function to toggle between light and dark mode
  const toggleLamp = () => {
    setIsLampOn(!isLampOn)

    if (!isLampOn) {
      console.log("Lâmpada LIGADA - Modo Claro")
    } else {
      console.log("Lâmpada APAGADA - Modo Escuro")
    }
  }

  // Handle keyboard events (spacebar to toggle)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault()
        toggleLamp()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    console.log("Script carregado! Clique na lâmpada para alternar entre modo claro e escuro.")

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isLampOn])

  return (
    <div
      className="min-h-screen flex justify-center items-center m-0 transition-all duration-500"
      style={{
        background: isLampOn
          ? "radial-gradient(circle, #ffff99 20%, #ffeb3b 50%, #ffc107 100%)"
          : "radial-gradient(circle, white 8%, black 100%)",
      }}
    >
      <div className="cursor-pointer">
        <img
          id="lamp"
          src={isLampOn ? "/assets/lamp_on.png" : "/assets/lamp_off.png"}
          alt={isLampOn ? "Lâmpada acesa" : "Lâmpada apagada"}
          onClick={toggleLamp}
          className="transition-transform duration-300 ease-in-out hover:scale-110"
          style={{ maxWidth: "200px", height: "auto" }}
        />
      </div>
    </div>
  )
}

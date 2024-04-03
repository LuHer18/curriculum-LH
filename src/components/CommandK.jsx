import React from 'react'
import "ninja-keys";
import { useState, useRef, useEffect } from "react";

export const CommandK = () => {
    const ninjaKeys = useRef(null);
  const [hotkeys, setHotkeys] = useState([
    {
        id: 'print',
        title: '🖨 Imprimir',
        hotkey: 'ctrl+p',
        section: 'Acción',
        handler: () => {
          window.print()
        },
      },
    
  ]);

  useEffect(() => {
    if (ninjaKeys.current) {
      ninjaKeys.current.data = hotkeys;
    }
  }, []);

  const onKeyboardEvent = () => {
    const event = new KeyboardEvent("keydown", {
      key: "K",
      code: "KeyK",
      keyCode: 75,
      which: 75,
      ctrlKey: true,
      altKey: false,
      shiftKey: false,
      metaKey: false
    })
    return document.dispatchEvent(event)

  }
  return (
    <>
    <footer >
      
      <button onClick={onKeyboardEvent}><svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-command"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    stroke="#777"
    fill="none"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10"
    ></path>
  </svg></button>
    </footer>
    <ninja-keys placeholder='Escribe el comando' ref={ninjaKeys} hideBreadcrumbs></ninja-keys>
    </>
  )
}

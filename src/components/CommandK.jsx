import React from 'react'
import "ninja-keys";
import { useState, useRef, useEffect } from "react";
import './Styles/CommandK.css'
import { socialInfo } from '../helper/SocialInfo';

export const CommandK = () => {
  const data = socialInfo()
  const initialValue = [
    {
      id: 'print',
      title: 'Imprimir',
      icon: `<svg style="margin-right: 8px" width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
      </svg>`,
      hotkey: 'ctrl+p',
      section: 'Acción',
      handler: () => {
        window.print()
      },
    },

  ]
  const newData = [...initialValue, ...data].flat()

  const ninjaKeys = useRef(null);
  const [hotkeys, setHotkeys] = useState(newData);

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
      <footer id="normal-footer" className="no-print">
        Pulsa <kbd>Ctrl</kbd> + <kbd>K</kbd> para abrir la paleta de comandos.
      </footer>
      <div id='footer-button' className="no-print" onClick={onKeyboardEvent}><svg
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
      </svg></div>
      <ninja-keys placeholder='Escribe el comando' ref={ninjaKeys} hideBreadcrumbs></ninja-keys>
    </>
  )
}

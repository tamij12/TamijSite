"use client";
import React from "react";

export default function NavBar() {
  return (
    <React.Fragment>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="navbar shadow-lg h-24 w-full lg:px-32">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2 font-sixtyfour text-xl">TANIA</div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                <li>
                  <a className="font-inconsolata">Acerca de mi</a>
                </li>
                <li>
                  <a className="font-inconsolata">Formacion</a>
                </li>
                <li>
                  <a className="font-inconsolata">Proyectos</a>
                </li>
                <li>
                  <a className="font-inconsolata">Contactame</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-48 p-4">
            <li>
              <a className="font-inconsolata">Acerca de mi</a>
            </li>
            <li>
              <a className="font-inconsolata">Formacion</a>
            </li>
            <li>
              <a className="font-inconsolata">Proyectos</a>
            </li>
            <li>
              <a className="font-inconsolata">Contactame</a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

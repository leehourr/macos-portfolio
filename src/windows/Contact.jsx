import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import React from "react";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img
          src="/images/me.webp"
          alt="Leehour"
          className="w-30 h-30 object-cover rounded-full"
        />

        <h3>Let's connect</h3>
        <p>Got an idea? A bug to squash? Or just wanna talk tech? I'm in.</p>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li
              key={id}
              style={{ backgroundColor: bg }}
              className={`${
                text === "Gmail" ? "border-black border-[1px]" : ""
              } rounded-lg`}
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
                className="flex items-center gap-3 p-3 w-full h-full touch-manipulation"
              >
                <img
                  src={icon}
                  alt={text}
                  className={`${
                    text === "Telegram" ? "invert" : ""
                  } size-5 pointer-events-none`}
                />
                <span
                  className={`${
                    text === "Gmail" ? "text-black" : "text-white"
                  } font-semibold text-sm pointer-events-none`}
                >
                  {text}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div></div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;

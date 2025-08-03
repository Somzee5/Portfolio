import axios from "axios";
import { aboutMe } from "../constants";

export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  const yOffset = -70;
  const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};

const parseOriginFromUrl = (url) => {
  /**
   * splits https://github.com/repos/org-name/repo-name/issues/25
   * into [ "github.com", "repos", "org-name", "repo-name", "issues", "25"]
   */
  const [, ...parts] = url.split(/https:\/\/|\//gm);
  const organization = parts[1];
  const repo = parts[2];
  /**
   * accessing a github profile or organization and adding a .png
   * at the end of the URL will return their logo/profile picture
   */
  const logoUrl = `https://github.com/${organization}.png`;

  return {
    organization,
    repo,
    logoUrl,
  };
};

// Open source retry function removed - no longer needed

// Open source functions removed - no longer needed

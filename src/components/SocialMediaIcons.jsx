import LinkedinLogo from "../assets/linkedin.png"
import GithubLogo from "../assets/github-mark-white.png"
import twitterLogo from "../assets/logo-white.png"


const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a className="hover:opacity-50 transition duration-500"
      href="https://www.linkedin.com/in/enifome-alalor-04b4a7226"
      target="_blank"
      rel="noreferrer">
        <img src={LinkedinLogo} alt="linkedin-logo" />
      </a>

      <a className="hover:opacity-50 transition duration-500"
      href="https://github.com/eni-fome"
      target="_blank"
      rel="noreferrer">
        <img src={GithubLogo} alt="github-logo" />
      </a>

      <a className="hover:opacity-50 transition duration-500"
      href="https://twitter.com/eni_fome"
      target="_blank"
      rel="noreferrer">
        <img src={twitterLogo} alt="twitter-logo" />
      </a>
    </div>
  )
}

export default SocialMediaIcons

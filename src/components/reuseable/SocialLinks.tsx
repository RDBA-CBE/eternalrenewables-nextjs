// ========================================================
type SocialLinksProps = { className?: string };
// ========================================================

const links = [
  { id: 1, icon: "uil uil-twitter", url: "https://x.com/" },
  { id: 2, icon: "uil uil-facebook-f", url: "https://www.facebook.com/" },
  // { id: 3, icon: "uil uil-dribbble", url: "#" },
  { id: 4, icon: "uil uil-instagram", url: "https://www.instagram.com/" },
  { id: 5, icon: "uil uil-youtube", url: "https://www.youtube.com/" }
];

export default function SocialLinks({ className = "nav social social-white mt-4" }: SocialLinksProps) {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url }) => (
        <a href={url} key={id} target="_blank" rel="noreferrer">
          <i className={icon} />
        </a>
      ))}
    </nav>
  );
}

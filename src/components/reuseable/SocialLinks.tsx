// ========================================================
type SocialLinksProps = { className?: string };
// ========================================================

const links = [
  { id: 1, icon: "uil uil-youtube", url: "https://www.youtube.com/@ETERNALRENEWABLES" },
  { id: 2, icon: "uil uil-linkedin", url: "https://in.linkedin.com/company/eternal-renewables-group" }
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

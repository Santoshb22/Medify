import FooterLink from "../FooterLink/FooterLink";

const FooterLinkGroup = ({ links }) => {
  return (
    <ul className="footer-link-group">
      {links.map((link, index) => (
        <FooterLink key={index} text={link} />
      ))}
    </ul>
  );
};

export default FooterLinkGroup;
import Link from "next/link";

interface Props {
  label: string;
  href: string;
  trim?: boolean;
  endspc?: boolean;
}

const RouteLink = ({ label, href, trim = false, endspc = false }: Props) => {
  return (
    <>
      {trim ? "" : " "}
      <Link href={href} target="_blank">
        <span className="font-bold text-[var(--primary)] underline hover:text-[var(--primary-dark)] transition-colors duration-300">
          {label}
        </span>
      </Link>
      {endspc ? " " : ""}
    </>
  );
};

export default RouteLink;

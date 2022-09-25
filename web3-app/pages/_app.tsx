import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

const linkList = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/get-set",
    label: "Get Set",
  },
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <nav>
          <ul className="flex space-x-4">
            {linkList.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  <a className="text-blue-500 hover:text-blue-600">
                    {link.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

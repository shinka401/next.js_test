import Link from "next/link";
import styles from "src/components/Header/Header.module.css";

const NAV_ITEMS = [
  { href: "/posts", label: "posts" },
  { href: "/about", label: "about" },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.label} href={item.href}>
            {item.label}
          </Link>
        );
      })}
    </header>
  );
};

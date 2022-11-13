import Link from "next/link";
import styles from "src/components/Header/Header.module.css";

const NAV_ITEMS = [
  { href: "/", label: "index" },
  { href: "/posts", label: "posts" },
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

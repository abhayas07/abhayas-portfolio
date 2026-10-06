import "./globals.css";
import { profile } from "@/data/portfolio";

export const metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.positioning,
};

// Sets the theme before paint to avoid a flash. Defaults to dark/night.
const themeScript = `try{var t=localStorage.getItem('theme');if(t!=='light'){document.documentElement.classList.add('dark');document.addEventListener('DOMContentLoaded',function(){if(document.body)document.body.classList.add('night')})}}catch(e){document.documentElement.classList.add('dark')}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans portfolio-bg">{children}</body>
    </html>
  );
}

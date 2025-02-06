import "./globals.css";

export const metadata = {
  title: "SKC - The Ultimate Automation Tool",
  description: "SKC is an advanced CLI automation tool that helps developers with project templates, automation scripts, and daily system tasks.",
  keywords: ["Automation", "CLI Tool", "DevOps", "Scripting", "Project Templates", "Next.js", "Full Stack"],
  authors: [{ name: "Shravan", url: "https://portfolio-shravan-s-projects-f0f07f2c.vercel.app/" }],
  icons: {
      icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

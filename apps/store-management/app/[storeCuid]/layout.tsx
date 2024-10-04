import { AppBar } from "@/components/app-bar";

type LayoutProps = {
  children: React.ReactNode;
  params: {
    storeCuid: string;
  };
};

export default function Layout({ children, params }: LayoutProps) {
  const { storeCuid } = params;
  console.log(storeCuid);
  return (
    <div className="max-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 p-3  bg-white dark:bg-black text-black dark:text-white">
        <AppBar />
      </header>
      <main className="container mx-auto p-6 pt-16">
        <h1>{storeCuid}</h1>
        {children}
      </main>
    </div>
  );
}

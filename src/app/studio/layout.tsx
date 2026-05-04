export const metadata = {
  title: "H.Studio CMS",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0" style={{ margin: 0 }}>
      {children}
    </div>
  );
}

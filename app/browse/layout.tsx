import GenreFilter from "@/components/genreFilter";

export const runtime = "edge";

export default function BrowseLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <div className="flex">
          <GenreFilter></GenreFilter>
          <div className="flex-1 min-h-screen ">
              {children}
          </div>
        </div>
    )
  }
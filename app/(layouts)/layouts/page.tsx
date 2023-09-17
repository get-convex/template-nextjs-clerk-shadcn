import { Link } from "@/components/typography/link";

export default function Layouts() {
  return (
    <main className="container grid grid-cols-3 gap-12 p-4">
      <Link href="/layouts/sticky-header-footer-below-fold">
        Sticky header, footer below fold
        <div className="pt-2">
          <div className="border-2 border-primary">
            <div className="h-4 w-full bg-red-400"></div>
            <div className="h-32 w-full bg-blue-400"></div>
          </div>
          <div className="h-4 w-full bg-yellow-400"></div>
        </div>
      </Link>

      <Link href="/layouts/sticky-header-sidebar-footer-below-fold">
        Sticky header, sticky sidebar, footer below fold
        <div className="pt-2">
          <div className="border-2 border-primary">
            <div className="h-4 w-full bg-red-400"></div>
            <div className="flex">
              <div className="h-32 w-20 bg-green-400"></div>
              <div className="h-32 w-full bg-blue-400"></div>
            </div>
          </div>
          <div className="h-4 w-full bg-yellow-400"></div>
        </div>
      </Link>

      <Link href="/layouts/sticky-header-sidebar-footer-inside">
        Sticky header, sticky sidebar, footer inside & below fold
        <div className="pt-2">
          <div className="border-2 border-primary">
            <div className="h-4 w-full bg-red-400"></div>
            <div className="flex">
              <div className="h-32 w-20 bg-green-400"></div>
              <div className="h-32 w-full bg-blue-400"></div>
            </div>
          </div>
          <div className="flex">
            <div className="w-[82px]"></div>
            <div className="h-4 w-full bg-yellow-400"></div>
          </div>
        </div>
      </Link>
    </main>
  );
}

import Link from "next/link";
import { Button } from "@heroui/react";

export default function NotFound() {
  return (
    <main className="max-w-7xl mx-auto mt-20 flex items-center justify-center bg-olive-100">
      <div>
        <div
          className="
            flex min-h-[500px]
            flex-col items-center justify-center
            rounded-3xl border border-olive-200
            bg-white text-center shadow-xl
          "
        >
          <span className="rounded-full bg-black px-4 py-1 text-sm font-medium text-white">
            404 ERROR
          </span>

          <h1 className="mt-6 text-7xl font-black tracking-tight text-black">
            Page Not Found
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>

          <div className="mt-10 flex gap-4">
            <Link href="/">
              <Button className="rounded-2xl bg-[#586235] font-semibold text-white transition hover:opacity-90">
                Go Home
              </Button>
            </Link>

            <Link href="/">
              <Button className="rounded-2xl bg-[#586235] font-semibold text-white transition hover:opacity-90">
                Back
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
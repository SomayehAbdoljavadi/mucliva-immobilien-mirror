import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MUCLIVA Immobilien | München" },
      { name: "description", content: "MUCLIVA Immobilien – regional, zuverlässig und nachhaltig in München." },
      { property: "og:title", content: "MUCLIVA Immobilien | München" },
      { property: "og:description", content: "MUCLIVA Immobilien – regional, zuverlässig und nachhaltig in München." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-background"
    >
      <img
        data-lovable-blank-page-placeholder="REMOVE_THIS"
        src="https://cdn.gpteng.co/blank-app-v1.svg"
        alt="Your app will live here!"
      />
    </div>
  );
}

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <p className="text-4xl font-extrabold text-red-500">Hello, World!</p>
      <Button variant="destructive" size="lg">
        Click Me
      </Button>
    </main>
  );
}

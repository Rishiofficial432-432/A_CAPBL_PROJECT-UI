import { Globe } from "@/src/components/ui/globe";

export function GlobeDemo() {
  return (
    <div className="relative flex size-full items-center justify-center overflow-visible mt-8 bg-transparent">
      <Globe className="opacity-50 mix-blend-screen" />
    </div>
  );
}

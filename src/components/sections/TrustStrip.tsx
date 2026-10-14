import { PenTool, Package, Wrench, Activity, Cpu } from "lucide-react";
import { Container } from "../ui/Container";

const items = [
  { label: "Design", icon: PenTool },
  { label: "Supply", icon: Package },
  { label: "Installation", icon: Wrench },
  { label: "Monitoring", icon: Activity },
  { label: "Engineering", icon: Cpu },
];

export function TrustStrip() {
  return (
    <section className="border-b border-charcoal/8 bg-white py-10">
      <Container>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-5">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex flex-col items-center gap-2 text-center">
                <Icon className="h-6 w-6 text-solar-green" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest text-charcoal/60">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

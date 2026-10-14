import { Zap, Home, BatteryCharging, TrendingUp, Wallet, Settings } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../SectionHeader";
import { Button } from "../ui/Button";

const factors = [
  { label: "Electricity consumption", icon: Zap },
  { label: "Load profile", icon: TrendingUp },
  { label: "Backup requirements", icon: BatteryCharging },
  { label: "Property type", icon: Home },
  { label: "Budget & operating requirements", icon: Wallet },
  { label: "Future expansion", icon: Settings },
];

export function EnergyProblem() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Engineering-First Approach"
          title="Your Energy Needs Are Different. Your Solar System Should Be Too."
          description="Veeteq begins every project by understanding how your property actually uses energy — not by fitting you into a predetermined package."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {factors.map((factor) => {
            const Icon = factor.icon;
            return (
              <div
                key={factor.label}
                className="flex items-center gap-3 rounded-2xl border border-charcoal/8 bg-white p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-solar-green/10">
                  <Icon className="h-5 w-5 text-solar-green-dark" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-charcoal">{factor.label}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <Button href="/assessment" size="lg">
            Start With an Energy Assessment
          </Button>
        </div>
      </Container>
    </section>
  );
}

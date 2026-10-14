"use client";

import { useMemo, useState } from "react";
import { Info } from "lucide-react";
import { Button } from "./ui/Button";

const propertyTypes = ["Residential", "Commercial", "Agricultural"] as const;

export function SolarCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(10000);
  const [backupHours, setBackupHours] = useState(6);
  const [propertyType, setPropertyType] = useState<(typeof propertyTypes)[number]>("Residential");
  const [batteryPreference, setBatteryPreference] = useState(true);

  const estimate = useMemo(() => {
    // Simplified illustrative heuristic only — not an engineering calculation.
    const dailyUsageKwh = monthlyBill / 25 / 22; // rough KSh-to-kWh approximation
    const solarKwMin = Math.max(1, Math.round(dailyUsageKwh * 0.8 * 10) / 10);
    const solarKwMax = Math.max(solarKwMin + 1, Math.round(dailyUsageKwh * 1.3 * 10) / 10);
    const batteryKwhMin = batteryPreference ? Math.max(2.5, Math.round(dailyUsageKwh * (backupHours / 24) * 10) / 10) : 0;
    const batteryKwhMax = batteryPreference ? Math.round(batteryKwhMin * 1.6 * 10) / 10 : 0;

    return { dailyUsageKwh, solarKwMin, solarKwMax, batteryKwhMin, batteryKwhMax };
  }, [monthlyBill, backupHours, batteryPreference]);

  return (
    <div className="grid gap-8 rounded-3xl border border-charcoal/8 bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-2">
      <div className="space-y-6">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold text-charcoal">Average Monthly Electricity Bill</span>
            <span className="text-sm font-bold text-solar-green-dark">KSh {monthlyBill.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min={2000}
            max={100000}
            step={1000}
            value={monthlyBill}
            onChange={(e) => setMonthlyBill(Number(e.target.value))}
            className="w-full accent-solar-green"
          />
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold text-charcoal">Required Backup Hours</span>
            <span className="text-sm font-bold text-solar-green-dark">{backupHours} hrs</span>
          </div>
          <input
            type="range"
            min={1}
            max={24}
            step={1}
            value={backupHours}
            onChange={(e) => setBackupHours(Number(e.target.value))}
            className="w-full accent-solar-green"
          />
        </div>

        <div>
          <span className="mb-2 block text-sm font-semibold text-charcoal">Property Type</span>
          <div className="flex flex-wrap gap-2">
            {propertyTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setPropertyType(type)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  propertyType === type
                    ? "border-solar-green bg-solar-green/10 text-solar-green-dark"
                    : "border-charcoal/15 text-charcoal/60 hover:border-charcoal/30"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <label className="flex items-center gap-3 text-sm font-medium text-charcoal">
          <input
            type="checkbox"
            checked={batteryPreference}
            onChange={(e) => setBatteryPreference(e.target.checked)}
            className="h-4 w-4 accent-solar-green"
          />
          Include battery storage
        </label>
      </div>

      <div className="flex flex-col rounded-2xl bg-off-white p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-charcoal/40">
          Estimated Requirement
        </p>

        <div className="mt-5 grid grid-cols-2 gap-4">
          <Stat label="Est. Daily Usage" value={`${estimate.dailyUsageKwh.toFixed(1)} kWh`} />
          <Stat label="Indicative Solar Range" value={`${estimate.solarKwMin}–${estimate.solarKwMax} kW`} />
          {batteryPreference ? (
            <Stat
              label="Indicative Battery Range"
              value={`${estimate.batteryKwhMin}–${estimate.batteryKwhMax} kWh`}
              full
            />
          ) : null}
        </div>

        <div className="mt-6 flex items-start gap-2.5 rounded-xl bg-solar-yellow/15 p-4 text-xs leading-relaxed text-charcoal/70">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-charcoal/50" aria-hidden="true" />
          This calculator provides an initial estimate for a {propertyType.toLowerCase()} property.
          Final system sizing requires professional site assessment and load analysis.
        </div>

        <Button href="/assessment" size="lg" className="mt-6 w-full">
          Get a Professional Assessment
        </Button>
      </div>
    </div>
  );
}

function Stat({ label, value, full }: { label: string; value: string; full?: boolean }) {
  return (
    <div className={`rounded-xl border border-charcoal/8 bg-white p-4 ${full ? "col-span-2" : ""}`}>
      <p className="text-xs font-medium text-charcoal/45">{label}</p>
      <p className="mt-1 text-xl font-extrabold text-charcoal">{value}</p>
    </div>
  );
}

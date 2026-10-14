"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Faq } from "@/lib/faqs";
import { cn } from "@/lib/utils";

export function FAQ({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-charcoal/8 rounded-3xl border border-charcoal/8 bg-white">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-semibold text-charcoal">{item.question}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-charcoal/40 transition-transform",
                  open && "rotate-180 text-solar-green"
                )}
                aria-hidden="true"
              />
            </button>
            {open ? (
              <div className="px-6 pb-5 text-sm leading-relaxed text-charcoal/65">{item.answer}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

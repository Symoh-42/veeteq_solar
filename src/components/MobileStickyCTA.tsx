"use client";

import { Phone, MessageCircle, Sun } from "lucide-react";
import Link from "next/link";
import { siteConfig, whatsappLink, whatsappMessages } from "@/lib/site-config";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-black/5 bg-white/95 backdrop-blur pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_16px_rgba(0,0,0,0.06)] lg:hidden">
      <a
        href={whatsappLink(whatsappMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-[#25D366]"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        <span className="text-[11px] font-semibold">WhatsApp</span>
      </a>
      <a
        href={siteConfig.phoneHref}
        className="flex flex-col items-center justify-center gap-0.5 border-x border-black/5 py-2.5 text-charcoal"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        <span className="text-[11px] font-semibold">Call</span>
      </a>
      <Link
        href="/assessment"
        className="flex flex-col items-center justify-center gap-0.5 bg-solar-green-dark py-2.5 text-white"
      >
        <Sun className="h-5 w-5" aria-hidden="true" />
        <span className="text-[11px] font-semibold">Get Quote</span>
      </Link>
    </div>
  );
}

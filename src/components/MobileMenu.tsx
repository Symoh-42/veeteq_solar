"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig, whatsappLink, whatsappMessages } from "@/lib/site-config";
import { Button } from "./ui/Button";
import { Logo } from "./Logo";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex flex-col bg-forest lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between px-5 py-4">
            <span className="flex items-center gap-2.5">
              <Logo className="ring-1 ring-white/20" />
              <span className="text-lg font-extrabold tracking-tight text-white">VEETEQ SOLAR</span>
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-white"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <nav className="mt-6 flex flex-1 flex-col gap-1 px-5">
            {siteConfig.nav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block border-b border-white/10 py-4 text-2xl font-semibold text-white"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex flex-col gap-3 px-5 pb-10">
            <Button href="/assessment" size="lg" className="w-full">
              Get a Solar Assessment
            </Button>
            <a
              href={whatsappLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-4 text-base font-semibold text-white"
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

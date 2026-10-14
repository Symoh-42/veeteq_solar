import Image from "next/image";
import { Check } from "lucide-react";
import type { ProductCategory } from "@/lib/products";
import { whatsappLink, whatsappMessages } from "@/lib/site-config";

export function ProductCard({ product }: { product: ProductCategory }) {
  return (
    <div className="flex flex-col rounded-3xl border border-charcoal/8 bg-white p-6 shadow-sm">
      <div className="relative h-32 overflow-hidden rounded-2xl">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <h3 className="mt-5 text-base font-bold text-charcoal">{product.name}</h3>
      {product.brands ? (
        <p className="mt-1 text-xs font-medium text-energy-blue">
          Works with: {product.brands.join(", ")}
        </p>
      ) : null}
      <ul className="mt-3 space-y-2">
        {product.characteristics.map((c) => (
          <li key={c} className="flex items-start gap-2 text-sm text-charcoal/65">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-solar-green" aria-hidden="true" />
            {c}
          </li>
        ))}
      </ul>
      <a
        href={whatsappLink(whatsappMessages.system(product.name))}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center justify-center rounded-full border border-charcoal/15 px-4 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:border-solar-green hover:text-solar-green-dark"
      >
        Request Quote
      </a>
    </div>
  );
}

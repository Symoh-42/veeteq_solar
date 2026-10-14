// Curated stock photography from Unsplash, used until real Veeteq project photography
// is available. Each helper takes the photo's Unsplash ID (the segment after "photo-"
// or "premium_photo-" in its URL) and returns a ready-to-use, appropriately sized source.
function build(host: "images" | "plus", id: string, width: number) {
  const prefix = host === "plus" ? "premium_photo" : "photo";
  return `https://${host}.unsplash.com/${prefix}-${id}?auto=format&fit=crop&w=${width}&q=80`;
}

export function unsplash(id: string, width = 1600) {
  return build("images", id, width);
}

export function unsplashPlus(id: string, width = 1600) {
  return build("plus", id, width);
}

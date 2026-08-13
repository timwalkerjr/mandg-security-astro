import { useCallback, useEffect, useState } from "react";

type LightboxImage = {
  src: string;
  alt: string;
  caption: string;
  section: string;
};

// Interactive island: full-screen lightbox for the photo gallery.
// The gallery grid itself is rendered as static HTML (real <img> + alt text)
// so it's fully crawlable. This island renders nothing until a gallery image
// is clicked — it attaches a delegated listener for buttons carrying
// data-gallery-open="<globalIndex>" and takes over from there.
export default function GalleryLightbox({ images }: { images: LightboxImage[] }) {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const btn = target.closest<HTMLElement>("[data-gallery-open]");
      if (!btn) return;
      e.preventDefault();
      const i = Number(btn.getAttribute("data-gallery-open"));
      if (!Number.isNaN(i)) setIndex(i);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const onClose = useCallback(() => setIndex(null), []);
  const goPrev = useCallback(() => {
    setIndex((cur) => (cur === null ? cur : (cur - 1 + images.length) % images.length));
  }, [images.length]);
  const goNext = useCallback(() => {
    setIndex((cur) => (cur === null ? cur : (cur + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [index, goPrev, goNext, onClose]);

  if (index === null) return null;
  const image = images[index];
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-secondary-950/95 backdrop-blur-sm px-4 py-8 md:px-16"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center bg-foreground-50/10 text-foreground-50 hover:bg-foreground-50/20 transition-colors cursor-pointer"
      >
        <i className="ri-close-line text-2xl" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        aria-label="Previous photo"
        className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-foreground-50/10 text-foreground-50 hover:bg-foreground-50/20 transition-colors cursor-pointer"
      >
        <i className="ri-arrow-left-line text-2xl" />
      </button>

      <figure className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <div className="w-full aspect-[4/3] overflow-hidden bg-secondary-900">
          <img src={image.src} alt={image.alt} className="w-full h-full object-contain" />
        </div>
        <figcaption className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <p className="text-foreground-50 text-base md:text-lg font-medium">{image.caption}</p>
            <p className="text-foreground-400 text-xs md:text-sm mt-1">{image.section}</p>
          </div>
          <p className="text-foreground-400 text-xs font-label uppercase tracking-[0.1em] whitespace-nowrap">
            {index + 1} / {images.length}
          </p>
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        aria-label="Next photo"
        className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-foreground-50/10 text-foreground-50 hover:bg-foreground-50/20 transition-colors cursor-pointer"
      >
        <i className="ri-arrow-right-line text-2xl" />
      </button>
    </div>
  );
}

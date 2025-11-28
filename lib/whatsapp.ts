export const onOpenWhatsApp = (
  message: string = "Halo Admin...",
  number: string = "6285824528625"
) => {
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

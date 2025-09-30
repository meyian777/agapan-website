// components/AboutUs.tsx
const AboutUs = () => {
  return (
    <section className="p-6 md:p-10 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">About us</h2>
      <p className="text-lg max-w-2xl mx-auto mb-6">
      At AGAPAN – Artisan Bakery, we combine tradition and a love for artisan bread.
      We are a family bakery that believes in quality, flavor, and craftsmanship.
      </p>
      <video
  className="mx-auto rounded-2xl shadow-lg object-cover max-h-[420px] w-full"
  src="/media/video.mp4"
  autoPlay
  loop
  muted
  playsInline
/>
    </section>
  );
};

export default AboutUs;

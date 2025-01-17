const SeoSchema = () => {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Flow by Dulu",
        "image": "/og-image.png",
        "description": "Expert en solutions digitales à Douala. Automatisation, Media Buying et transformation digitale pour entreprises camerounaises.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rue Mandessi Bell",
          "addressLocality": "Douala",
          "addressRegion": "Littoral",
          "addressCountry": "CM"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "4.0511",
          "longitude": "9.7679"
        },
        "url": "https://flowbydulu.com",
        "telephone": "+237-XXX-XXX-XXX",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        },
        "sameAs": [
          "https://www.facebook.com/flowbydulu",
          "https://www.linkedin.com/company/flowbydulu"
        ]
      })}
    </script>
  );
};

export default SeoSchema;
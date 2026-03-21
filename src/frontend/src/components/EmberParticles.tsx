export function EmberParticles({ count = 12 }: { count?: number }) {
  const embers = Array.from({ length: count }, (_, i) => ({
    id: i,
    top: `${Math.floor(((i * 37 + 11) % 90) + 5)}%`,
    left: `${Math.floor(((i * 53 + 7) % 90) + 5)}%`,
    delay: `${(i * 0.4) % 3}s`,
    size: i % 3 === 0 ? 4 : i % 3 === 1 ? 3 : 2,
    opacity: 0.4 + (i % 5) * 0.1,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {embers.map((ember) => (
        <div
          key={ember.id}
          className="absolute rounded-full animate-ember-float"
          style={{
            top: ember.top,
            left: ember.left,
            width: ember.size,
            height: ember.size,
            background: "oklch(0.78 0.15 70)",
            boxShadow: "0 0 6px oklch(0.78 0.15 70)",
            opacity: ember.opacity,
            animationDelay: ember.delay,
            animationDuration: `${2.5 + (ember.id % 4) * 0.7}s`,
          }}
        />
      ))}
    </div>
  );
}

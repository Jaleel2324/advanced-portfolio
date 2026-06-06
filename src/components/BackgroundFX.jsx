function BackgroundFX() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Top Left Glow */}
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-purple-900/25 rounded-full blur-[140px]" />

      {/* Top Right Glow */}
      <div className="absolute -top-20 -right-40 w-[600px] h-[600px] bg-fuchsia-900/20 rounded-full blur-[140px]" />

      {/* Center Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-800/10 rounded-full blur-[180px]" />

      {/* Bottom Left Glow */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-950/20 rounded-full blur-[140px]" />

      {/* Bottom Right Glow */}
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-fuchsia-950/15 rounded-full blur-[160px]" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.04),transparent_60%)]" />
    </div>
  );
}

export default BackgroundFX;
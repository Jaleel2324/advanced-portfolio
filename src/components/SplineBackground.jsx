import Spline from "@splinetool/react-spline";

export default function SplineBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#050606]">
      <Spline scene="https://prod.spline.design/PSkJF6OSMiReF33Y/scene.splinecode" />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
}
export default function CreativeToolkit() {
  return (
    <div className="space-y-4">
      <p>Tools that turn a standard webpage into an interactive art piece.</p>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="border p-2">
          <strong>p5.js:</strong> 2D sketching & generative patterns.
        </div>
        <div className="border p-2">
          <strong>Three.js:</strong> 3D environments & WebGL.
        </div>
        <div className="border p-2">
          <strong>Shaders:</strong> GLSL code for pixel-perfect GPU effects.
        </div>
        <div className="border p-2">
          <strong>SVG Filters:</strong> Organic textures and distortions.
        </div>
      </div>
    </div>
  );
}

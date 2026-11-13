/** Particles on large screens; phones and small tablets get fewer. */
export const PARTICLE_COUNT = 9000
export const PARTICLE_COUNT_SMALL = 4000
const SPHERE_RADIUS = 2.0

/** Horizontal offset of the cloud for each shape, so it sits beside the text. */
export const SHAPE_OFFSETS = [3.0, -2.3, 2.4, 0, 0]

/**
 * One target position set per page section, in order:
 * sphere, torus, wave, double helix, galaxy.
 */
export const buildShapes = (n: number): Float32Array[] => {
  const sphere = new Float32Array(n * 3)
  const torus = new Float32Array(n * 3)
  const wave = new Float32Array(n * 3)
  const helix = new Float32Array(n * 3)
  const galaxy = new Float32Array(n * 3)
  const side = Math.ceil(Math.sqrt(n))
  const jitter = () => (Math.random() - 0.5) * 0.12

  for (let i = 0; i < n; i++) {
    const k = i * 3

    // sphere (Fibonacci lattice)
    const y = 1 - (i / (n - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const th = i * 2.399963
    sphere[k] = Math.cos(th) * r * SPHERE_RADIUS
    sphere[k + 1] = y * SPHERE_RADIUS
    sphere[k + 2] = Math.sin(th) * r * SPHERE_RADIUS

    // torus
    const u = Math.random() * Math.PI * 2
    const v = Math.random() * Math.PI * 2
    torus[k] = (2 + 0.75 * Math.cos(v)) * Math.cos(u)
    torus[k + 1] = 0.75 * Math.sin(v)
    torus[k + 2] = (2 + 0.75 * Math.cos(v)) * Math.sin(u)

    // wave (grid)
    const gx = ((i % side) / side - 0.5) * 9
    const gz = (Math.floor(i / side) / side - 0.5) * 9
    wave[k] = gx
    wave[k + 1] = Math.sin(gx * 1.3) * Math.cos(gz * 1.3) * 0.7 - 0.6
    wave[k + 2] = gz

    // double helix: two strands plus the rungs between them
    const t = (i / n - 0.5) * 9
    const strand = i % 3
    const a = t * 1.6 + (strand === 1 ? Math.PI : 0)
    const rad = strand === 2 ? Math.random() * 2.1 : 2.1
    helix[k] = Math.cos(a) * rad + jitter()
    helix[k + 1] = strand === 2 ? Math.round(t * 3) / 3 : t + jitter()
    helix[k + 2] = Math.sin(a) * rad + jitter()

    // galaxy (three tilted spiral arms)
    const gr = Math.pow(Math.random(), 0.6) * 5.2
    const ga = gr * 1.5 + (i % 3) * ((Math.PI * 2) / 3) + Math.random() * 0.5
    galaxy[k] = Math.cos(ga) * gr
    galaxy[k + 1] = Math.sin(ga) * gr * 0.75
    galaxy[k + 2] = Math.sin(ga) * gr * 0.5 + (Math.random() - 0.5) * 0.4
  }

  return [sphere, torus, wave, helix, galaxy]
}

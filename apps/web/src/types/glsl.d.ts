// apps/web/src/types/glsl.d.ts
declare global {
  class GlslCanvas {
    gl: WebGLRenderingContext | null;
    canvas: HTMLCanvasElement | null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    uniforms: Record<string, any>; // Basic type for uniforms object

    constructor(
      canvas: HTMLCanvasElement,
      options?: { [key: string]: unknown }
    );

    load(fragmentString: string, vertexString?: string): void;
    setUniform(
      uniform: string,
      ...values: number[] | string[] | boolean[]
    ): void;
    // Add other methods/properties if needed based on usage
    // Example:
    // pause(): void;
    // play(): void;
    // setTexture(name: string, url: string, options?: Record<string, unknown>): void;
  }
}

// Adding this export makes the file a module, which is necessary for global declarations.
export {};

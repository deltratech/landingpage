declare module 'textify.js' {
  interface TextifyOptions {
    el: string;
    animation?: {
      customAnimation?: boolean;
      by?: 'chars' | 'words' | 'lines';
      stagger?: number;
      duration?: number;
      ease?: string;
      animateProps?: Record<string, unknown>;
    };
  }

  class Textify {
    constructor(options: TextifyOptions, gsap: unknown);
    animateIn(): void;
    animateOut(): void;
  }

  export default Textify;
}

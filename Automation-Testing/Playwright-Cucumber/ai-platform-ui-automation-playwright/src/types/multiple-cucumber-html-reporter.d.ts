declare module 'multiple-cucumber-html-reporter' {
  interface ReporterOptions {
    jsonDir: string;
    reportPath: string;
    metadata?: Record<string, unknown>;
    customData?: Record<string, unknown>;
    openReportInBrowser?: boolean;
    disableLog?: boolean;
  }
  export function generate(options: ReporterOptions): void;
}

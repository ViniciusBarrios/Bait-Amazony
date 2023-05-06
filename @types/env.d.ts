declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOGLE_SPREADSHEET_ID: string;
      GOOGLE_CLIENT_EMAIL: string;
      GOOGLE_PRIVATE_KEY: string;

      EMAIL_HOST: string;
      EMAIL_PORT: number;
      EMAIL_SECURE: "true" | "false";
      EMAIL_ADDRESS: string;
      EMAIL_PASS: string;

      NEXT_PUBLIC_GTM_ID: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};

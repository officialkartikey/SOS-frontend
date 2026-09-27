/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_SHORT_NAME: string;
  readonly VITE_APP_TAGLINE: string;
  readonly VITE_APP_VERSION: string;
  readonly VITE_APP_ENV: string;
  readonly VITE_PORT: string;
  readonly VITE_HOST: string;
  readonly VITE_API_BASE_URL: string;
  readonly VITE_ENABLE_MOCK_TELEMETRY: string;
  readonly VITE_TELEMETRY_REFRESH_RATE_MS: string;
  readonly VITE_CONTACT_EMAIL: string;
  readonly VITE_ENABLE_ANALYTICS: string;
  readonly VITE_DEBUG_MODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

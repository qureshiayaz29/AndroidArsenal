/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_TALLY_FORM_ID: string;
  readonly PUBLIC_CF_BEACON_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  Tally?: {
    loadEmbeds: () => void;
  };
}

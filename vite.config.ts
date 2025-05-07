import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { telefunc } from 'telefunc/vite'

export default defineConfig({
  esbuild: {
    legalComments: 'none',
  },
	plugins: [sveltekit(), telefunc() ]
});

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,svx}'],
  theme: {
    extend: {
      fontFamily: {
        'baskervville': ['"Baskervville"'],
        'tny': ['"TNY"'],
        'jws': ['"JWS"'],
        'inter': ['"Inter"'],
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height',
      },
      typography: {
        dark: {
          css: {
            '--tw-prose-body': '#AEAEAE',
            '--tw-prose-headings': '#AEAEAE',
            '--tw-prose-lead': '#AEAEAE',
            '--tw-prose-links': '#AEAEAE',
            '--tw-prose-bold': '#AEAEAE',
            '--tw-prose-counters': '#AEAEAE',
            '--tw-prose-bullets': '#AEAEAE',
            '--tw-prose-hr': '#AEAEAE',
            '--tw-prose-quotes': '#AEAEAE',
            '--tw-prose-quote-borders': '#AEAEAE',
            '--tw-prose-captions': '#AEAEAE',
            '--tw-prose-code': '#AEAEAE',
            '--tw-prose-pre-code': '#AEAEAE',
            '--tw-prose-pre-bg': '#AEAEAE',
            '--tw-prose-th-borders': '#AEAEAE',
            '--tw-prose-td-borders': '#AEAEAE',
          }
        },
        light: {
          css: {
            '--tw-prose-body': '#121212',
            '--tw-prose-headings': '#121212',
            '--tw-prose-lead': '#121212',
            '--tw-prose-links': '#121212',
            '--tw-prose-bold': '#121212',
            '--tw-prose-counters': '#121212',
            '--tw-prose-bullets': '#121212',
            '--tw-prose-hr': '#121212',
            '--tw-prose-quotes': '#121212',
            '--tw-prose-quote-borders': '#121212',
            '--tw-prose-captions': '#121212',
            '--tw-prose-code': '#121212',
            '--tw-prose-pre-code': '#121212',
            '--tw-prose-pre-bg': '#121212',
            '--tw-prose-th-borders': '#121212',
            '--tw-prose-td-borders': '#121212',
          }
        }
      }
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('@tailwindcss/typography')
  ],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,svx}'],
  theme: {
    extend: {
      fontFamily: {
        'baskervville': ['"Baskervville"'],
        'jws': ['"JWS"']
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height',
      },
      typography: {
        dark: {
          css: {
            '--tw-prose-body': '#e6e6e6',
            '--tw-prose-headings': '#e6e6e6',
            '--tw-prose-lead': '#e6e6e6',
            '--tw-prose-links': '#e6e6e6',
            '--tw-prose-bold': '#e6e6e6',
            '--tw-prose-counters': '#e6e6e6',
            '--tw-prose-bullets': '#e6e6e6',
            '--tw-prose-hr': '#e6e6e6',
            '--tw-prose-quotes': '#e6e6e6',
            '--tw-prose-quote-borders': '#e6e6e6',
            '--tw-prose-captions': '#e6e6e6',
            '--tw-prose-code': '#e6e6e6',
            '--tw-prose-pre-code': '#e6e6e6',
            '--tw-prose-pre-bg': '#e6e6e6',
            '--tw-prose-th-borders': '#e6e6e6',
            '--tw-prose-td-borders': '#e6e6e6',
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


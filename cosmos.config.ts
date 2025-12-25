export default {
  plugins: ['react-cosmos-plugin-vite'],
  staticPath: 'public',
  fixturesDir: 'src',
  fixtureFileSuffix: 'fixture',
  exportPath: 'cosmos-export',
  dom: {
    containerQuerySelector: '#root',
  },
}

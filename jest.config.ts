import type { Config } from 'jest'

const config: Config = {
  // Použij ts-jest preset
  preset: 'ts-jest',

  // Nastavení testovacího prostředí
  testEnvironment: 'node',

  // Automaticky vyčistí mockované volání a výsledky před každým testem
  clearMocks: true,

  // Sbírá informace o pokrytí kódu
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',

  // Přidání transformátoru pro TypeScript soubory
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Použij ts-jest pro .ts a .tsx soubory
  },

  // Přidání podporovaných přípon
  moduleFileExtensions: ['ts', 'tsx', 'js'],

  // Ignoruj transformace v node_modules
  transformIgnorePatterns: ['/node_modules/'],

  // Ostatní nastavení ponecháme defaultní
}

export default config

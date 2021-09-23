
import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import { version } from "./package.json"

const year = new Date().getFullYear()
const banner = `/*\nStimulus Webpack Helpers ${version}\nCopyright © ${year} Basecamp, LLC\n */`

export default {
  input: "src/index.ts",
  output: [
    {
      name: "StimulusWebpackHelpers",
      file: "dist/stimulus-webpack-helpers.umd.js",
      format: "umd",
      banner
    },
    {
      file: "dist/stimulus-webpack-helpers.js",
      format: "es",
      banner
    },
  ],
  context: "window",
  plugins: [
    resolve(),
    typescript()
  ]
}

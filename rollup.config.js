import rollup from "rollup";
import clean from "rollup-plugin-cleaner";
import nodeBuiltins from "rollup-plugin-node-builtins";
import nodeResolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import css from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import serve from "rollup-plugin-serve";

const production = false;

const build = production ? rollup.rollup : rollup.watch;

export default {
  input: "src/main/snapkin.js",
  output: {
    file: "dist/snapkin.js",
    format: "iife",
    sourcemap: true
  },
  watch: {
    include: ["src/main/**/*"]
  },
  plugins: [
    clean({ targets: ["dist"] }),
    copy({
      "src/main/index.html": "dist/index.html",
      "src/main/records.json": "dist/records.json"
    }),
    nodeBuiltins(),
    nodeResolve(),
    css({ extract: true, modules: true }),
    babel({
      babelrc: false,
      exclude: "node_modules/**",
      presets: ["react"]
    }),
    commonjs(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(
        production ? "production" : "development"
      )
    }),
    production ? uglify() : serve("dist")
  ]
};

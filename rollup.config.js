import uglify from "rollup-plugin-uglify";
import vue from "rollup-plugin-vue";
import resolve from "rollup-plugin-node-resolve";
import css from "rollup-plugin-postcss";
import replace from "rollup-plugin-replace";
import commonjs from "rollup-plugin-commonjs";
import copy from "rollup-plugin-cpy";
import cleaner from "rollup-plugin-cleaner";
import serve from "rollup-plugin-serve";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/main/js/snapkin.js",
  output: {
    file: "build/snapkin.js",
    format: "iife", // immediately-invoked function expression — suitable for <script> tags
    sourcemap: true
  },
  plugins: [
    /** 0 - common utilities **/
    resolve(),
    commonjs(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(
        production ? "production" : "development"
      ),
      "process.env.VUE_ENV": JSON.stringify("browser")
    }),
    /** 1 - cleanup **/
    cleaner({ targets: ["./build"] }),
    /** 2 - build **/
    copy({
      files: ["src/main/resources/*"],
      dest: "build"
    }),
    css({ preset: 'default' }),
    vue({ css: true }),
    /** 3 - grande finale **/
    production ? uglify() : serve("build") // minify for production, serve for develop
  ]
};

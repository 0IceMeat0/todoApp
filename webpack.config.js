const path = require("path");
mode: "development",
  (module.exports = {
    entry: "./src/index.js", // Ваш файл точки входа
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            "style-loader", // добавляет стили в DOM при помощи тега <style>
            "css-loader", // обрабатывает импорты CSS
            "sass-loader", // компилирует SASS в CSS
          ],
        },
      ],
    },
  });

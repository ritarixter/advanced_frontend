const path = require('path');

module.exports = {
  mode: "development", //"production" - ставить когда выпускаем приложение (автоматически сжимает, оптимизирует(минифакция) код при этом моде)
  //entry - стартовая точка нашего приложения
  entry: path.resolve(__dirname, 'src', 'index.js'), //Плохо задавать статитечкий путь тип './src/index.js', так как пути на разные ОС отличаются. Поэтому пользуемся встроенным модулем path и его функции resolve, которая склеивает путь

  //output - куда и как мы будем собирать проект
  output: {
    filename: "[name].[contenthash].js", //Динамическое имя, для того чтобы браузеры могли пользваоться кешированием
    path: path.resolve(__dirname, 'build'),
    clean: true //Для очиски папки build при сборке и удаления старых файлов
  }
}

//Чтобы запустить нужно прописать webpack

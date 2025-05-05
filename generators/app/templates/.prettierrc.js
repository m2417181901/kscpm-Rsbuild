const { logger, LogLevel  } = require('@prettier/plugin-pug');

logger.setLogLevel(LogLevel.OFF);

module.exports = {
    plugins: [require.resolve('@prettier/plugin-pug')],
    printWidth: 120,
    tabWidth: 4,
    singleQuote: true,
    // bracketSpacing: false,
    bracketSameLine: false,

    pugAttributeSeparator: "none",
    pugClosingBracketPosition: "new-line",
    pugCommentPreserveSpaces: "keep-all",
    pugSortAttributes: "as-is",
    pugSingleQuote: false,
}

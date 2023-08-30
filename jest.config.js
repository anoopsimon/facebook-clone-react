module.exports = {
    reporters: ['default', 
    ['jest-html-reporters', {
        publicPath: './test-report', // Path where the report will be generated
        filename: 'testresult.html', // Desired filename
      }]],
  };


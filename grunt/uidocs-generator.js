module.exports = {
  options: {
    dest: '<%= dist %>/docs',
    testingUrlPrefix: '<%= protractor.options.args.baseUrl %>/docs/#!/',
    versionedFiles: {
      default: 'stable',
      waitEval: "(function() { var ret = true; try { angular.module('ui.grid'); } catch (e) { ret = false; } return ret; })()",
      versions: {
        stable: [
          { src: '/release/<%= pkg.name %>.js', type: 'script' },
          { src: '/release/css/<%= pkg.name %>.css', type: 'css' }
        ],
        unstable: [
          { src: '/release/<%= pkg.name %>-unstable.js', type: 'script' },
          { src: '/release/css/<%= pkg.name %>-unstable.css', type: 'css' }
        ]
      }
    },
    scripts: [
       // no jquery automatically loaded for tutorial!!!
      'bower_components/angular/angular.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-aria/angular-aria.js',
      'bower_components/csv-js/csv.js',
      'bower_components/pdfmake/build/pdfmake.js',
      'bower_components/pdfmake/build/vfs_fonts.js',
      'bower_components/lodash/dist/lodash.min.js',
      'bower_components/jszip/dist/jszip.min.js',
      'bower_components/excel-builder-js/dist/excel-builder.dist.js'
    ],
    hiddenScripts: [
      'bower_components/google-code-prettify/src/prettify.js',
      'node_modules/marked/lib/marked.js'
    ],
    httpScripts: [
      // process.env.TRAVIS ? '/release/<%= pkg.name %>.unstable.js' : '/release/<%= pkg.name %>.js'
      // '/release/<%= pkg.name %>.js'
    ],
    styles: [
      'misc/doc/css/prettify.css',
      //'misc/doc/css/bootstrap-flatly.min.css',
      //'misc/doc/css/docs.css',
      // process.env.TRAVIS ? '<%= dist %>/release/<%= pkg.name %>.unstable.css' : '<%= dist %>/release/<%= pkg.name %>.css'
      // '<%= dist %>/release/<%= pkg.name %>.css'
    ],
    baseCSSPath: 'misc/doc/css/bootstrap-flatly.min.css',
    title: 'UI Grid',
    titleLink: '/',
    html5Mode: false,
    analytics: {
      account: 'UA-46391685-1',
      domainName: 'ui-grid.info'
    },
    adsConfig: {
      client: 'ca-pub-6177019177103290',
      slot: '3609320072'
    },
    navTemplate: 'misc/doc/templates/nav.html'
  },
  api: {
    src: ['packages/*/src/**/*.js', 'misc/api/**/*.ngdoc', 'test/e2e/**/*.js'],
    title: 'API'
  },
  tutorial: {
    src: ['misc/tutorial/**/*.ngdoc'],
    title: 'Tutorial'
  }
};

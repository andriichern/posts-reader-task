module.exports = api => {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          targets: {
            esmodules: true,
          },
        },
      ],
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
      ],
    ],
    plugins: [
      !api.env('production') && 'react-refresh/babel',
      '@babel/plugin-syntax-dynamic-import',
    ].filter(Boolean),
  };
};

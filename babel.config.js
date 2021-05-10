module.exports = api => {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
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
      api.env('development') && 'react-refresh/babel',
      '@babel/plugin-syntax-dynamic-import',
    ].filter(Boolean),
  };
};

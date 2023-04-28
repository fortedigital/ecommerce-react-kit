const dictionaries: Record<string, Function> = {
  ['en-GB']: () => import('./en-GB.json').then((module) => module.default),
  ['pl']: () => import('./pl.json').then((module) => module.default),
};

export default dictionaries;

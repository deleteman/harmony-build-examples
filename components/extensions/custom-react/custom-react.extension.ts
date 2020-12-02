import { EnvsMain, EnvsAspect } from '@teambit/envs';
import { ReactAspect, ReactMain } from '@teambit/react';

export class CustomReact {
  constructor(private react: ReactMain) {}

  static dependencies: any = [EnvsAspect, ReactAspect];

  static async provider([envs, react]: [EnvsMain, ReactMain]) {

    const customReactEnv = react.compose([

    ]);

    envs.registerEnv(customReactEnv);
    return new CustomReact(react);
  }
}

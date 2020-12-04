import { EnvsMain, EnvsAspect } from '@teambit/envs';
import { ReactAspect, ReactMain } from '@teambit/react';
import { PrintCmpNameTask } from '@my-org/my-scope.build-tasks.print-cmp-name-task';

export class CustomReact {
  constructor(private react: ReactMain) {}

  static dependencies: any = [EnvsAspect, ReactAspect];
  static async provider([envs, react]: [EnvsMain, ReactMain]) {
    
    const reactPipe = react.env.getBuildPipe();
    
    const tasks = [...reactPipe, new PrintCmpNameTask('extensions/custom-react', 'PrintCmpNameTask')];

    const customReactEnv = react.compose([
      react.overrideBuildPipe(tasks)
    ]);

    envs.registerEnv(customReactEnv);
    return new CustomReact(react);
  }
}
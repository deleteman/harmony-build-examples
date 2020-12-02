import {
  BuildTask,
  BuildContext,
  BuiltTaskResult,
  ComponentResult,
} from "@teambit/builder";

export class ExampleTask implements BuildTask {
  constructor(readonly aspectId: string, readonly name: string) {}

  async execute(context: BuildContext): Promise<BuiltTaskResult> {
    const componentsResults: ComponentResult[] = [];
    context.capsuleNetwork.seedersCapsules.forEach((capsule) => {
      console.log("Hello World!", capsule.component.id);
      componentsResults.push({
        component: capsule.component,
        metadata: { customProp: "hello-world" },
      });
    });
    return {
      componentsResults
    };
  }
}

import { Collection } from "../../Core/Models/Collection";

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItem(model: T, itemParent: Element): void;

  render(): void {
    this.parent.innerHTML = "";

    const template = document.createElement("template");

    for (let model of this.collection.models) {
      const itemParent = document.createElement("div");
      this.renderItem(model, itemParent);

      template.content.append(itemParent);
    }

    this.parent.append(template.content);
  }
}

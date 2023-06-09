import { BaseComponent } from "./../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
                <div class="video__player">
                    <iframe class="video__iframe"> </iframe>
                </div>
                <h2 class="video__title"></h2>
            </section>`);
    const iframe = this.element.querySelector(
      ".video__iframe"
    )! as HTMLIFrameElement;
    iframe.src = url; // url => videoId => embed video

    const titleElement = this.element.querySelector(
      ".video__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}

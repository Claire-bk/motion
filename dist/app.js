import { TodoComponent } from "./components/page/item/todo.js";
import { NoteComponent } from "./components/page/item/note.js";
import { VideoComponent } from "./components/page/item/video.js";
import { ImageComponent } from "./components/page/item/image.js";
import { PageComponent } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent("image title", "https://picsum.photos/600/300");
        image.attachTo(appRoot, "beforeend");
        const video = new VideoComponent("video title", "https://www.youtube.com/embed/DXuSr74Ax9U");
        video.attachTo(appRoot, "beforeend");
        const note = new NoteComponent("note title", "note body");
        note.attachTo(appRoot, "beforeend");
        const todo = new TodoComponent("todo title", "todo body");
        todo.attachTo(appRoot, "beforeend");
    }
}
new App(document.querySelector(".document"));
//# sourceMappingURL=app.js.map
import { ArtboardEntity } from "./ArtboardEntity";

export class DocumentEntity {
    constructor(data) {
        this.data = data;
        this._thumbnail = null;
        this._artboards = null;
    }

    get id() {
        return this.data.shortId;
    }

    get name() {
        return this.data.version.document.name;
    }

    get thumbnail() {
        if (!this._thumbnail) {
            this._thumbnail = this.data.previewFiles[0].thumbnails.find((t) => t.type === "M");
        }
        return this._thumbnail;
    }

    get artboards() {
        if (!this._artboards) {
            this._artboards = this.data.version.document.artboards.entries.map((e) => new ArtboardEntity(e));
        }
        return this._artboards;
    }

    getBoardById(id) {
        return this.artboards.find((board) => board.id === id);
    }
}

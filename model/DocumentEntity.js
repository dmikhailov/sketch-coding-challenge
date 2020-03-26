import {ArtboardEntity} from "./ArtboardEntity";

export class DocumentEntity {

    constructor(data) {
        this.data = data;
    }

    get id() {
        return this.data.shortId;
    }

    get name() {
        return this.data.version.document.name;
    }

    get thumbnail() {
        return this.data.previewFiles[0].thumbnails.find(t => t.type === "M");
    }

    get artboards() {
        return this.data.version.document.artboards.entries.map(e => new ArtboardEntity(e));
    }

    getBoardById(id) {
        return this.artboards.find(board => board.id === id);
    }
}
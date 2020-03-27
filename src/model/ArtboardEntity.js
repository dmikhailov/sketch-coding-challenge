export class ArtboardEntity {
    constructor(data) {
        this.data = data;
    }

    get isArtboard() {
        return this.data.isArtboard;
    }

    get id() {
        return this.data.id;
    }

    get name() {
        return this.data.name;
    }

    get file() {
        let maxWidth = this.data.files[0].width;
        let maxIdx = 0;
        this.data.files.forEach((file, idx) => {
            if (file.width > maxWidth) {
                maxWidth = file.width;
                maxIdx = idx;
            }
        });
        return this.data.files[maxIdx];
    }

    get thumbnail() {
        const thumbnails = [];
        this.data.files.forEach((file) => Array.prototype.push.apply(thumbnails, file.thumbnails));
        let minWidth = thumbnails[0].width;
        let minIdx = 0;
        thumbnails.forEach((thumbnail, idx) => {
            if (thumbnail.width < minWidth) {
                minWidth = thumbnail.width;
                minIdx = idx;
            }
        });
        return thumbnails[minIdx];
    }
}

import ImageManagerInterface from "../../../image/domain/interfaces/ImageManagerInterface";
import ImageRepositoryPort from "../../domain/port/driven/ImageRepositoryPort";

export default class ImageRepository implements ImageRepositoryPort {
    constructor(
        private readonly imageManager: ImageManagerInterface,
    ) { }
    getImage(filename: string): string {
        return this.imageManager.getImage(filename);
    }
}
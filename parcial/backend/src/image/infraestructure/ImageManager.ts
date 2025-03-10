import ImageManagerInterface from "../domain/interfaces/ImageManagerInterface";
import path from "path";
import fs from "fs";
export default class ImageManager implements ImageManagerInterface {
    public getImage(filename: string): string {
        const IMAGE_FOLDER = path.join(__dirname, "../../../uploads");

        const filePath = path.join(IMAGE_FOLDER, String(filename));

        if (!fs.existsSync(filePath)) {
            return "";
        }

        return filePath;
    }
}

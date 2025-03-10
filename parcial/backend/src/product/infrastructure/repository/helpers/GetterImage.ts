import Image from "../../../domain/image/Image";

export default class GetterImage {
    public get = (url: string): Image => {
        const name = url.match(/([^/]+)\.jpg$/)?.[1] || "file_name";
        
        return new Image({
            name: name,
            path: url,
        });
    }
}

import AbstractDirector from "./AbstractDirector"

export default class NullMovie extends AbstractDirector {
    constructor() {
        super({
            yearsOfExperience: 0
        })
    }
}
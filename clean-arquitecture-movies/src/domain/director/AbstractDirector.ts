export default abstract class AbstractDirector {

    protected yearsOfExperience: number

    constructor(directorInterface: DirectorInterface) {
        this.yearsOfExperience = directorInterface.yearsOfExperience
    }
}
export interface DirectorInterface {
    yearsOfExperience: number

}

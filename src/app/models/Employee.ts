export class Employee {
    name: string;
    psNo: string;
    location: string;
    email: string;
    currentActivity: string;
    targetId: number;
    currentSteps: number;
    localSteps: number;
    currentKm: number;
    targetSteps: number;
    targetKm: number;
    duration: string;
    inProgress: boolean;

    constructor(psNo: string, name: string, email: string, location: string, targetId: number,
        currentActivity: string, currentSteps: number, currentKm: number, targetSteps: number,
        targetKm: number) {
        this.psNo = psNo;
        this.name = name;
        this.email = email;
        this.location = location;
        this.targetId = targetId;
        this.currentActivity = currentActivity;
        this.currentKm = currentKm;
        this.currentSteps = currentSteps;
        this.targetKm = targetKm;
        this.targetSteps = targetSteps;
    }


}
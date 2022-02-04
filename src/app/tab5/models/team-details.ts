export class TeamDetails {
    teamID: string;
    teamName: string;
    rank: number;
    distance: number;
    members: any;
    memberCount: number;

    constructor(response: any) {
        // console.log(response);
        if (response && response.length > 0) {
            this.teamID = response[0].teamID;
            this.teamName = response[0].teamName;
            this.rank = response[0].rank;
            this.distance = response[0].totalKMs;
            this.memberCount = response[0].memberCount;
            this.members = [];
            response.forEach(function (value) {
                this.members.push(new member(value))
            }, this)
        }
    }
}

export class member {
    name: string;
    location: string;
    distance: number;
    isActiveMember: boolean;

    constructor(response: any) {
        // console.log(response);
        this.name = response.empname;
        this.location = response.empLocation;
        this.distance = response.kmsCovered;
        this.isActiveMember = response.isActiveMember;

    }
}
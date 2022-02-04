export class TeamLists {
    currentKms: number;
    memberCount: number;
    teamID: string;
    teamName: string;
    rank: number;

    constructor(response: any) {
        this.currentKms = response.TotalKMs;
        this.memberCount = response.MemberCount;
        this.teamID = response.TeamID;
        this.teamName = response.TeamName;
        this.rank = response.Rank;
    }
}
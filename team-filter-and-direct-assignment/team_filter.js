tw.local.filteredTeam = new tw.object.Team();

tw.local.filteredTeam.members = new tw.object.listOf.String();

//filter from full team to only 1 user group
for(var i = 0; i < tw.local.originalTeam.members.length - 1; i++){
	tw.local.filteredTeam.members[i] = tw.local.originalTeam.members[i];
}

//filter from full team to only one inputted user
//tw.local.filteredTeam.members[0] = tw.local.user;

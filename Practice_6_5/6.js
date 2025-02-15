var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let bigname = friends[0]
for(let i = 0; i < friends.length; i++)
{
    if(bigname.length < friends[i].length)
    {
        bigname = friends[i]
    }
}

console.log(bigname)
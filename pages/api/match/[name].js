import { matches, matchInfo } from '../../../utils/fetchMatches';
import { names } from '../../../utils/fetchName';

const jsonExtract = (data, name) => {
    console.log(data.info.gameCreation);
        const lolMatch = data;
                const participantsAll = data.info.participants;

                const participants = participantsAll.find(element => {
                    var theName = element.summonerName.toLowerCase(); 
                    
                    if(theName === name.toLowerCase()){
                        return element;
                    }
                })
                
                const gameinfo = [
                    data.info.gameMode,
                    participants.win,
                    data.info.gameCreation
                ]

                const perks = participants.perks.styles;

                const champInfo = [
                    participants.championName,
                    participants.championId
                ]

                const kda = [
                    participants.kills, 
                    participants.deaths, 
                    participants.assists
                ]
                
                // [0] first tree, [1] second tree
                const runePage = [
                    perks[0].style, 
                    perks[0].selections,
                    perks[1].style,
                    perks[1].selections,
                    [
                        participants.perks.statPerks.defense,
                        participants.perks.statPerks.flex,
                        participants.perks.statPerks.offense
                    ]
                ]

                const summonersId = [
                    participants.summoner1Id, participants.summoner2Id
                ]

                const items = [
                    participants.item0,
                    participants.item1,
                    participants.item2,
                    participants.item3,
                    participants.item4,
                    participants.item5,
                    participants.item6,
                ]

                // lolMatch: lolMatch,
                return({ 
                    gamemode: gameinfo,
                    name: participants.summonerName,
                    champInfo: champInfo, 
                    kda: kda, 
                    runePage: runePage, 
                    summonersId: summonersId,
                    items: items
                })   
}

export default function handler(req, res) {
    const { name } = req.query
    const arrayMatch = [];
    
    names(name)
    .then(data => 
        matches(data.puuid)
        .then(data => {
            data.forEach(match => {
                matchInfo(match)
                .then(data => {
                    arrayMatch.push(jsonExtract(data, name))
                    
                    if(arrayMatch.length == 10){
                        Promise.all(arrayMatch)
                        .then(data => {
                            console.log(data);
                            data.sort((a,b) => {
                                return b.gamemode[2] - a.gamemode[2];
                            })
                            res.status(200).json({ matches: data })
                        })
                    }
                })
            }
        )
    }))
}
/**
 * .then(data => data.forEach(match => {
            array.push(matchInfo(match))
            
            if(array.length == 10){
                Promise.all(array).then(data => res.status(200).json({ matches: data }))
            }
        }))
 */

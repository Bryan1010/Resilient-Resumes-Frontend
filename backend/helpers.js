//function to add ranking to every field on the object
exports.AddRanking = function (obj) {
    obj.Name.Ranking = getRandomInt(10);
    obj.ContactInfo.Ranking = getRandomInt(10);
    obj.Address.Ranking = getRandomInt(10);
    obj.PositionApplyingFor.Ranking = getRandomInt(10);
    obj.Objective.Ranking = getRandomInt(10);
    obj.Websites.Ranking = getRandomInt(10);

    obj.Achievements = rankingInArray(obj.Achievements);

    obj.RelevantCourses = rankingInArray(obj.RelevantCourses);
    obj.School = rankingInArray(obj.School);
    obj.Experience = rankingInArray(obj.Experience);

    return obj;
}

// Function returns random number from 1 to max
function getRandomInt(max) {
    let num = Math.ceil(Math.random() * Math.floor(max));
    if (num > max) {
        return max;
    }
    else
        return num;
}

function assignRanking(obj) {
    for (var element in obj) {
        if (element instanceof Array) {
            for (var x = 0; x < element.length; x++) {
                element[x].Ranking = getRandomInt(10);
            }
        }
        else
            element.Ranking = getRandomInt(10);
    }
    return obj
}

function rankingInArray(arr) {
    arr.forEach(function (element) {
        element.Ranking = getRandomInt(10);
    });
    return arr;
}
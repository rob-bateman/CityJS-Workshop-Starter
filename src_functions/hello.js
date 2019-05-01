import trained from './trainingData/trained-net';

exports.handler = function(event, context, callback) {
    var board = JSON.parse(event.body);
    
    const output = trained(board)

    const emptySpaces = board.map((space, index) => {
        return space === 0? output[index] : null
    }).filter(space => {
        return space !== null
    })

    const response = {
        index: output.indexOf(emptySpaces.sort((a,b) => b-a)[0])
    }
    const ordered = [...output].sort((a,b) => b-a);
    console.log(output);
    console.log(ordered);
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(response)
    });
}
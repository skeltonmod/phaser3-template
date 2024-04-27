export function pointDirection(obj1, obj2){
    const xDist = obj1.x - obj2.x;
    const yDist = obj1.y - obj2.y;

    const angle = Math.atan2(yDist, xDist);
    let angleInDegrees = (angle * 180) / Math.PI;
    let direction = Math.floor(angleInDegrees / 45);
    let directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    let adjustedDirection = (direction + directions.length) % directions.length;

    // Use the direction word from the array
    let cardinalDirection = directions[adjustedDirection];

    return cardinalDirection;
}

export function angleToCardinal(angle){
    let angleInDegrees = (angle * 180) / Math.PI;
    let direction = Math.floor(angleInDegrees / 45);
    let directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    let adjustedDirection = (direction + directions.length) % directions.length;

    // Use the direction word from the array
    let cardinalDirection = directions[adjustedDirection];

    return cardinalDirection;
}
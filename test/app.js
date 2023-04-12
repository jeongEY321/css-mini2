const modes = {
    default: 'default',
    place: 'place'
}

const objectTypes = {
    floor: 'floor',
    plant: 'plant',
    zombie: 'zombie',
    bullet: 'bullet'
}

let selectedMenuItem = null

let mode = modes.default

let money = 250
let time = 0
// These plants are the template to create plant instances from
// as well as a master list of plants
let plantTypes = {
    sunflower: {
        character: '🌻',
        timeout: 4000,
        cost: 50,
        type: objectTypes.plant,
        health: 5,
        onTick() {
            money += 5
            renderMoney()
        }
    },
    peashooter: {
        character: '🏹',
        timeout: 3000,
        cost: 100,
        type: objectTypes.plant,
        timer: 0,
        health: 10,
        onTick(time) {
            this.timer++
            if (this.timer > 4) {
                createBullet(this.x+1, this.y, bulletTypes.default)
                renderMap(objectMap)
                this.timer = 0
            }
        }
    },
    wall: {
        character: '🚧',
        timeout: 10000,
        cost: 200,
        type: objectTypes.plant,
        health: 50,
    }
}

let bulletTypes = {
    default: {
        character: '➖',
        type: objectTypes.bullet,
        onTick() {
            objectMap.moveObjectByOffset(this, 1, 0)
            renderMap(objectMap)
        }
    }
}

function createBullet (x, y, bulletType) {
    const bullet = Object.assign({}, bulletType)
    bullet.x = x
    bullet.y = y
    objectMap.addAtPosition(x, y, bullet)
    objectList.push(bullet)
    return bullet
}

let zombieTypes = {
    default: {
        character: '🧟',
        type: objectTypes.zombie,
        health: 3,
        waitInWater: false,
        attackPower: 1,
        onTick() {
            if (objectMap.positionOutOfBounds(this.x-1, this.y)) {
                alert('A Zombie got past your defenses, Game Over')
                location.reload()
                return
            }
            const futurePositionObjects = objectMap.getAtPosition(this.x-1, this.y)
            if (futurePositionObjects.bullet) {
                this.health -=1;
                bullet = futurePositionObjects.bullet
                objectMap.removeFromPosition(this.x-1, this.y, bullet)
                objectList = objectList.filter(obj => obj !== bullet)
                if (this.health <= 0) {
                    objectMap.removeFromPosition(this.x, this.y, this)
                    objectList = objectList.filter(obj => obj !== this)
                }
            } else if (futurePositionObjects.plant) {
                const plant = futurePositionObjects.plant
                plant.health -= this.attackPower
                if (plant.health <= 0) {
                    objectMap.removeFromPosition(this.x-1, this.y, plant)
                    objectList = objectList.filter(obj => obj !== plant)
                }
            } else if (futurePositionObjects.floor.character === 'w') {
                objectMap.moveObjectByOffset(this, -1, 0)
                this.waitInWater = true
            } else {
                if (this.waitInWater) {
                    this.waitInWater = false
                } else {
                    objectMap.moveObjectByOffset(this, -1, 0)
                }
            }
            renderMap(objectMap)
        }
    }
}

function createZombie (x, y, zombieType, isSuperZombie) {
    const zombie = Object.assign({}, zombieType)
    zombie.x = x
    zombie.y = y
    if (isSuperZombie) {
        zombie.health = 50
        zombie.character = '🧟‍♀️'
        zombie.attackPower = 5
    }
    objectMap.addAtPosition(x, y, zombie)
    objectList.push(zombie)
    return zombie
}

zombieGenerator = {
    timer: 0,
    timerLimit: 10,
    onTick(time) {
        this.timer++
        if (this.timer > this.timerLimit) {
            var yPos = Math.floor(Math.random() * objectMap.height);
            if (money > 300) {
                timerLimit = 5
                let shouldSpawnSuperZombie = Math.floor(Math.random() * 2)
                if (shouldSpawnSuperZombie) createZombie(objectMap.width - 1, yPos, zombieTypes.default, true)
            }
            createZombie(objectMap.width - 1, yPos, zombieTypes.default)
            renderMap(objectMap)
            this.timer = 0
        }
    }
}

function renderMoney () {
    document.getElementById('money').innerHTML = "Money: " + money
}
renderMoney()

let menuItems = {}

Object.keys(plantTypes).forEach(plantKey => {
    const plantType = plantTypes[plantKey]
    addMenuItem(plantKey, plantType)
})


function addMenuItem (plantName, plantType) {
    menuItems[plantName] = Object.assign({}, {
        plantType,
        cancelCharacter: '❌',
        cooldownCharacter: '⏳',
        onCooldown: false,
        beingPlaced: false,
        display() {
            character = this.plantType.character
            if (this.onCooldown) character = this.cooldownCharacter
            if (this.beingPlaced) character = this.cancelCharacter
            return character + ' ' + this.plantType.cost
        },
        onClicked() {
            if (money < this.plantType.cost) return
            if (this.onCooldown) return

            if (!this.beingPlaced) {
                this.beingPlaced = true
                mode = modes.place
                selectedMenuItem = this
            } else {
                this.beingPlaced = false
                mode = modes.default
            }
            renderMenu()
        },
        onPlaced() {
            this.beingPlaced = false
            this.onCooldown = true
            renderMenu()
            renderMoney()
            setTimeout(function (menuItem) {
                menuItem.onCooldown = false
                renderMenu()
            }, this.plantType.timeout, this)
        }
    })
}

function renderMenu () {
    let grid = document.createElement('table');
    grid.className = 'grid';
    Object.keys(menuItems).forEach(function (menuItemKey, y) {
        const menuItem = menuItems[menuItemKey]
        let tr = grid.appendChild(document.createElement('tr'))
        let cell = tr.appendChild(document.createElement('td'));
        cell.innerHTML = menuItem.display()
        cell.addEventListener('click', function(cell,) {
            menuItem.onClicked(cell,y,0)
        })
    })
    let menuDiv = document.getElementById('menu')
    menuDiv.innerHTML = ''
    menuDiv.appendChild(grid);
}

renderMenu()

const floorMap = [
    '....w....x',
    '......w..x',
    '.........x',
    '.........x',
    '.......wwx',
    '.........x',
]

const floors = {
    ground: {
        character: '.',
        canPlacePlants: true,
        type: objectTypes.floor
    },
    water: {
        character: 'w',
        canPlacePlants: false,
        type: objectTypes.floor
    },
    zombieSpawn: {
        character: 'x',
        canPlacePlants: false,
        type: objectTypes.floor
    }
}

// map is a 3d array [y][x][stacked items]
// the 0th stacked item is always the floor and won't change
// plants will tend to be the [1] item, plants do not stack currently
// bullets will tend to be the [2] item, bullets do not stack, currently
// zombies will tend to be the [3] item, zombies do not stack, currently
let objectMap = floorMap.map(row => row.split('').map(function (character) {
    const floor = Object.values(floors).find(floor => floor.character === character)
    const wrappedFloor = {floor: floor}
    return wrappedFloor
}))

objectMap.width = 10;
objectMap.height = 6;

objectMap.getAtPosition = function (x, y) {
    return this[y][x]
}

objectMap.addAtPosition = function (x, y, object) {
    objectMap[y][x][object.type] = object
}

objectMap.removeFromPosition = function (x, y, object) {
    objectMap[y][x][object.type] = null
}

objectMap.positionOutOfBounds = function (x, y) {
    return x >= objectMap.width
        || x < 0
        || y >= objectMap.height
        || y < 0
}

objectMap.moveObjectByOffset = function (object, xoffset, yoffset) {
    const newX =  object.x + xoffset
    const newY =  object.y + yoffset
    objectMap.removeFromPosition(object.x, object.y, object)
    if (objectMap.positionOutOfBounds(newX, newY)) {
        objectList = objectList.filter(obj => obj !== object)
        return
    }
    object.x = newX
    object.y = newY
    objectMap.addAtPosition(newX, newY, object)
}

objectMap.canPlaceAtPosition = function (x, y) {
    const position = objectMap[y][x]
    return position.floor.canPlacePlants && position.plant == null
}

objectList = []

zombieGeneratorAdded = false

function createPlantInstance (plantType, x, y) {
    if (!zombieGeneratorAdded) {
        objectList.push(zombieGenerator)
        zombieGeneratorAdded = true
    }

    money -= plantType.cost
    let instance = Object.assign({}, plantType)
    instance.x = x
    instance.y = y
    objectList.push(instance)
    return instance
}

let map = {
    onClicked(cell, y, x) {
        if (mode === modes.place && objectMap.canPlaceAtPosition(x,y)) {
            objectMap.addAtPosition(x, y, createPlantInstance(selectedMenuItem.plantType, x, y))
            const placementPosition = objectMap.getAtPosition(x, y)
            if (placementPosition.zombie) {
                objectMap.moveObjectByOffset(placementPosition.zombie, 1, 0)
            }
            mode = modes.default
            selectedMenuItem.onPlaced()
            renderMenu()
            renderMap(objectMap)
        }
    }
}

function renderMap (objectMap) {
    let grid = document.createElement('table');
    grid.className = 'grid';
    objectMap.forEach(function (row, y) {
        let tr = grid.appendChild(document.createElement('tr'))
        row.forEach(function (cellCharacter, x) {
            let cell = tr.appendChild(document.createElement('td'));
            const position = objectMap.getAtPosition(x, y)
            const renderObject = getObjectToRenderFromPosition(position)
            cell.innerHTML = renderObject.character
            cell.addEventListener('click', function(cell) {
                map.onClicked(cell,y,x)
            })
        })
    })
    let mapDiv = document.getElementById('map')
    mapDiv.innerHTML = ''
    mapDiv.appendChild(grid);
}

function getObjectToRenderFromPosition (position) {
    if (position.zombie) return position.zombie
    if (position.bullet) return position.bullet
    if (position.plant) return position.plant
    return position.floor
}

renderMap(objectMap)

const tickLength = 3000

setInterval(function () {
    objectList.forEach(object => {
        time ++
        if (object.onTick) object.onTick(time)
    })
}, tickLength)
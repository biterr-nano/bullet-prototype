function crkni () {
    glavni.delete()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(50)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.pause(50)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(50)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(50)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    game.gameOver()
}
input.onButtonPressed(Button.A, function () {
    glavni.turn(Direction.Right, 100)
    moves = moves - 1
    if (moves == 0) {
        crkni()
    }
})
function level_1 () {
    bod = game.createSprite(randint(1, 2), randint(1, 3))
}
function provjera () {
    if (glavni.isTouching(bod)) {
        bod.delete()
        bodovi += bodovi + 1
        moves = moves + 3
        policija = policija + 1
        if (policija == 3) {
            policija_call()
        }
        level_1()
    }
}
function policija_call () {
    basic.showString("112")
    policajac_1 = game.createSprite(randint(0, 4), randint(0, 4))
}
let policajac_1: game.LedSprite = null
let bodovi = 0
let bod: game.LedSprite = null
let policija = 0
let moves = 0
let glavni: game.LedSprite = null
glavni = game.createSprite(2, 2)
moves = 3
policija = 0
basic.showLeds(`
    . . # . .
    . # # # .
    . # . # .
    . # . # .
    . # # # .
    `)
basic.showLeds(`
    . # # # #
    . # . . #
    . # . . #
    . # . . #
    . # # # #
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . # . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
level_1()
basic.forever(function () {
    glavni.move(1)
    glavni.ifOnEdgeBounce()
    basic.pause(500)
    provjera()
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, mySprite, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    enemy_person.destroy()
    enemy_person.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    enemy_person.destroy(effects.disintegrate, 500)
})
let enemy_person: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . e e e . . . . . . . . 
    . . . . e . . . e . . . . . . . 
    . . . e . f . f . e . . . . . . 
    . . . e . . . . . e . . . . . . 
    . . . e . f . f . e . . . . . . 
    . . . . e . f . e . . . . . . . 
    . . . . . e e e . . . . . . . . 
    . . . . . . e . . . . . . . . . 
    . . . . . . e . . . . . . . . . 
    . . . . e e e e e . . . . . . . 
    . . . . . . e . . . . . . . . . 
    . . . . . e . e . . . . . . . . 
    . . . . e . . . e . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdateInterval(2000, function () {
    enemy_person = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 . . . . . 2 . . . . . 
        . . . . 2 2 c c c 2 2 . . . . . 
        . . . . . c . . . c . . . . . . 
        . . . . c . f . f . c . . . . . 
        . . . . c . . . . . c . . . . . 
        . . . . c . . f . . c . . . . . 
        . . . . . c f . f c . . . . . . 
        . . . . . . c c c . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . 2 . 2 . . . . . . . 
        . . . . . 2 . . . 2 . . . . . . 
        . . . . 2 . . . . . 2 . . . . . 
        `, SpriteKind.Enemy)
    enemy_person.vx = -20
    enemy_person.y = randint(10, scene.screenHeight())
})

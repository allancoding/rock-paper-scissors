enum RadioMessage {
    message1 = 49434,
    start = 56380,
    startgame = 3438,
    rock = 22024,
    pap = 30648,
    sis = 4150
}
function maingame () {
    if (rock == true) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (pap == true) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else if (sis == true) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
}
radio.onReceivedMessage(RadioMessage.startgame, function () {
    if (startgame2 == true) {
        startgame = false
        game2 = true
    }
})
function startsrc () {
    if (startscreen == true) {
        basic.showLeds(`
            # # # # #
            . . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            . # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # . # # #
            # # # # #
            # # . # #
            # # # # #
            # # # # #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # # . # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # # # . #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # # # # .
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # # # # #
            # # # # .
            # # . # #
            # # # # #
            # # # # #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . .
            # . . . #
            # # # # #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . .
            # # # # #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # .
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # . # #
            # # # # #
            # # # . #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # . # #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # . # # #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            . # # # #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # . # #
            . # # # #
            # # # # #
            `)
    }
    if (startscreen == true) {
        basic.showLeds(`
            # # # # #
            # . . . #
            . . # . #
            # . . . #
            # # # # #
            `)
    }
}
function papdw () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # . .
        . # # . .
        . # # . .
        `)
    basic.showLeds(`
        # # # # .
        . . . . .
        . # # . .
        . # # . .
        . # # . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # .
        . # # . .
        . # # . .
        . # # . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # .
        . # # . .
        . # # . .
        `)
    basic.showLeds(`
        # # # # .
        # # # # #
        # # # # #
        # # # # .
        . # # . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # .
        # # # # #
        # # # # #
        # # # # .
        `)
    basic.clearScreen()
}
function rockdw () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # . .
        . # # . .
        `)
    basic.showLeds(`
        # # # # .
        . . . . .
        . . . . .
        . # # . .
        . # # . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # .
        . . . . .
        . # # . .
        . # # . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # .
        . # # . .
        . # # . .
        `)
    basic.showLeds(`
        # # # # .
        # # # # #
        # # # # #
        # # # # .
        . # # . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # .
        # # # # #
        # # # # #
        # # # # .
        `)
    basic.clearScreen()
}
function sendrps () {
    if (rock == true) {
        radio.sendMessage(RadioMessage.rock)
    } else if (pap == true) {
        radio.sendMessage(RadioMessage.pap)
    } else if (sis == true) {
        radio.sendMessage(RadioMessage.sis)
    }
}
radio.onReceivedMessage(RadioMessage.start, function () {
    if (startscreen == true) {
        startgame = true
        startscreen = false
    }
    if (startgame2 == true) {
        radio.sendMessage(RadioMessage.startgame)
    }
})
input.onButtonPressed(Button.A, function () {
    if (rungame == true) {
        if (rock == true) {
            rock = false
            sis = true
        } else if (pap == true) {
            pap = false
            rock = true
        } else if (sis == true) {
            sis = false
            pap = true
        }
    }
})
radio.onReceivedMessage(RadioMessage.sis, function () {
    if (rungame2 == true) {
        loadingtic = false
        rungame2 = false
        if (rock == true) {
            rockdw()
            rocky = true
        } else if (pap == true) {
            papdw()
            papn = true
        } else if (sis == true) {
            sisdw()
            basic.showLeds(`
                . . . . .
                # # # # #
                . . . . .
                # # # # #
                . . . . .
                `)
        }
        resetrps = true
    }
})
function loadtic () {
    if (loadingtic == true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        sendrps()
    }
    if (loadingtic == true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        sendrps()
    }
    if (loadingtic == true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # . . .
            . . . . .
            . . . . .
            `)
        sendrps()
    }
    if (loadingtic == true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            . . . . .
            . . . . .
            `)
        sendrps()
    }
    if (loadingtic == true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # .
            . . . . .
            . . . . .
            `)
        sendrps()
    }
    if (loadingtic == true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        sendrps()
    }
}
function resetgamerps () {
    startscreen = false
    game2 = false
    startgame = true
    startgame2 = true
    rungame = false
    pap = false
    rock = false
    sis = false
    loadingtic = false
    typeit = randint(0, 2)
    papn = false
    papy = false
    rockn = false
    rocky = false
    sisn = false
    sisy = false
    resetrps = false
    rungame2 = false
    if (typeit == 0) {
        rock = true
    } else if (typeit == 1) {
        pap = true
    } else if (typeit == 2) {
        sis = true
    }
}
radio.onReceivedMessage(RadioMessage.pap, function () {
    if (rungame2 == true) {
        loadingtic = false
        rungame2 = false
        if (rock == true) {
            rockdw()
            rockn = true
        } else if (pap == true) {
            papdw()
            basic.showLeds(`
                . . . . .
                # # # # #
                . . . . .
                # # # # #
                . . . . .
                `)
        } else if (sis == true) {
            sisdw()
            sisy = true
        }
        resetrps = true
    }
})
input.onButtonPressed(Button.AB, function () {
    if (startscreen == true) {
        startscreen = false
        startgame = true
    } else if (startgame == true) {
        startgame2 = true
    }
    if (rungame == true) {
        startgame2 = false
        loadingtic = true
        rungame = false
        rungame2 = true
        sendrps()
    }
    if (resetrps == true) {
        basic.clearScreen()
        resetgamerps()
    }
})
input.onButtonPressed(Button.B, function () {
    if (rungame == true) {
        if (rock == true) {
            rock = false
            pap = true
        } else if (pap == true) {
            pap = false
            sis = true
        } else if (sis == true) {
            sis = false
            rock = true
        }
    }
})
radio.onReceivedMessage(RadioMessage.rock, function () {
    if (rungame2 == true) {
        loadingtic = false
        rungame2 = false
        if (rock == true) {
            rockdw()
            basic.showLeds(`
                . . . . .
                # # # # #
                . . . . .
                # # # # #
                . . . . .
                `)
        } else if (pap == true) {
            papdw()
            papy = true
        } else if (sis == true) {
            sisdw()
            sisn = true
        }
        resetrps = true
    }
})
function startg () {
    radio.sendMessage(RadioMessage.start)
    if (startgame == true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    radio.sendMessage(RadioMessage.start)
    if (startgame == true) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
    radio.sendMessage(RadioMessage.start)
    if (startgame == true) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    radio.sendMessage(RadioMessage.start)
    if (startgame == true) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
    radio.sendMessage(RadioMessage.start)
    if (startgame == true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    radio.sendMessage(RadioMessage.start)
    if (startgame == true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
}
function sisdw () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . .
        . # . . .
        # . # . .
        `)
    basic.showLeds(`
        # # # # .
        . . . . .
        # . # . .
        . # . . .
        # . # . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # .
        # . # . .
        . # . . .
        # . # . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # .
        . # . . .
        # . # . .
        `)
    basic.showLeds(`
        # # # # .
        # # # # #
        # # # # #
        # # # # .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # .
        # # # # #
        # # # # #
        # # # # .
        `)
    basic.clearScreen()
}
let rungame2 = false
let resetrps = false
let sisy = false
let sisn = false
let rocky = false
let rockn = false
let papy = false
let papn = false
let typeit = 0
let loadingtic = false
let sis = false
let rock = false
let pap = false
let rungame = false
let startgame2 = false
let startgame = false
let game2 = false
let startscreen = false
radio.setTransmitPower(7)
radio.setGroup(190)
startscreen = true
game2 = false
startgame = false
startgame2 = false
rungame = false
pap = false
rock = false
sis = false
loadingtic = false
typeit = randint(0, 2)
papn = false
papy = false
rockn = false
rocky = false
sisn = false
sisy = false
resetrps = false
rungame2 = false
if (typeit == 0) {
    rock = true
} else if (typeit == 1) {
    pap = true
} else if (typeit == 2) {
    sis = true
}
basic.forever(function () {
    if (startscreen == true) {
        startsrc()
    }
    if (startgame == true) {
        startg()
    }
    if (game2 == true) {
        basic.clearScreen()
        basic.showNumber(3)
        basic.showNumber(2)
        basic.showNumber(1)
        rungame = true
        game2 = false
    }
    if (rungame == true) {
        maingame()
    }
    if (loadingtic == true) {
        loadtic()
    }
    if (papn == true) {
        basic.showIcon(IconNames.No)
        basic.showIcon(IconNames.No)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
    if (papy == true) {
        basic.showIcon(IconNames.Yes)
        basic.showIcon(IconNames.Yes)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (rockn == true) {
        basic.showIcon(IconNames.No)
        basic.showIcon(IconNames.No)
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
    if (rocky == true) {
        basic.showIcon(IconNames.Yes)
        basic.showIcon(IconNames.Yes)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
    if (sisn == true) {
        basic.showIcon(IconNames.No)
        basic.showIcon(IconNames.No)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (sisy == true) {
        basic.showIcon(IconNames.Yes)
        basic.showIcon(IconNames.Yes)
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
})

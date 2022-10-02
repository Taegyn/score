let team_1 = 0
let tie = 0
let team_2 = 0
input.onButtonPressed(Button.A, function () {
    team_1 += 1
    basic.showNumber(1)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    tie += 1
    basic.showString("Tie")
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    team_2 += 1
    basic.showNumber(2)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Team 1 =")
    basic.showNumber(team_1)
    basic.showString("Team 2 =")
    basic.showNumber(team_2)
    basic.showString("Ties =")
    basic.showNumber(tie)
})

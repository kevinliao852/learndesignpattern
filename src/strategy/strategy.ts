import { basename } from "node:path"

interface Fighter {
    combo(): void
}

interface Beat {
    beat(): void
}

class NormalBeat implements Beat {
    beat() {
        console.log("Normal Beat!")
    }
}

class FaskBeat implements Beat {
    beat() {
        console.log("Fast Beat!!")
    }
}

interface Kick {
    kick(): void
}

class NormalKick implements Kick {
    kick() {
        console.log("Normal Kick!")
    }
}

class SideKick implements Kick {
    kick() {
        console.log("Side Kick!!")
    }
}
class StrongFighter implements Fighter {
    beatMove: Beat
    kickMove: Kick

    constructor() {
        this.beatMove = new NormalBeat()
        this.kickMove = new NormalKick()
    }
    
    setBeatMove(beatMove: Beat) {
        this.beatMove = beatMove
    }

    setKickMove(kickMove: Kick) {
        this.kickMove = kickMove
    }

    beat() {
        this.beatMove.beat()
    }

    kick() {
        this.kickMove.kick()
    }

    combo() {
        this.kickMove.kick()
        this.beatMove.beat()
        this.kickMove.kick()
    }
}

export function strategyMain() {
    console.log("\nStarting strategy pattern:")

    const fighter = new StrongFighter()
    fighter.combo()

    fighter.setBeatMove(new FaskBeat())
    fighter.combo()

    fighter.setKickMove(new SideKick())
    fighter.combo()
}

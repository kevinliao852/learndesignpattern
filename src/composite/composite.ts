interface Member {
    name: string
    info(): void
}

class FamilyMember implements Member {
    name: string
    constructor(name: string) {
        this.name = name
    }

    info() {
        console.log(`My name is ${this.name}`)
    }
}

class FriendMember implements Member {
    name: string
    constructor(name: string) {
        this.name = name
    }

    info() {
        console.log(`My name is ${this.name}`)
    }
}

class MemberDirectory implements Member {
    name: string
    constructor(name: string) {
        this.name = name
    }
    members: Array<Member> = []

    addMember(member: Member) {
        this.members.push(member)
        console.log(`Add the member ${member.name} into ${this.name} directory!`)
    }

    removeMember(member: Member) {
        this.members = this.members.filter((ele) => ele.name !== member.name)
        console.log(`Remove the member ${member.name} from ${this.name} directory..`)
    }

    info() {
        this.members.forEach((member) => {
            member.info()
        })
    }

}

export function compositeMain() {

    console.log("\nStarting composite pattern:")
    const directory = new MemberDirectory("group")

    const alex = new FamilyMember("alex")
    const bob = new FamilyMember("bob")
    const mark = new FriendMember("mark")

    directory.addMember(alex)

    directory.addMember(bob)
    directory.info()

    directory.removeMember(alex)
    directory.addMember(mark)
    directory.info()
}
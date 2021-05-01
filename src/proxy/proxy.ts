interface Base {
    getData(): object
}

type Data = {
    guest: Array<object>
    member: Array<object>
    vip: Array<object>
}

class Subject implements Base {
    private data: Data = {
        guest: [
            {
                msg: "guest discount"
            }
        ],
        member: [
            {
                msg: "member discount"
            },
            {
                msg: "member bonus"
            }
        ],
        vip: [
            {
                msg: "free of charge for one year"
            }
        ]
    }
    getData() {
        return this.data
    }
}

class Auth {
    GUEST: string = "GUEST"
    MEMBER: string = "MEMBER"
    VIP: string = "VIP"
}

class SubjectProxy implements Base {
    private subject: Subject = new Subject()
    private data: Data = this.subject.getData()
    private authLib: Auth = new Auth()
    auth: string
    constructor() {
        this.auth = this.authLib.GUEST
    }
    setAuth(auth: string): void {
        console.log(`change auth from ${this.auth} to ${auth}.`)
        this.auth = auth
    }
    getData(): object {
        console.log("Get data according to auth:")
        if (this.auth === this.authLib.GUEST) {
            return (({guest}) => ({guest}))(this.data)
        } else if (this.auth === this.authLib.MEMBER) {
            return (({guest, member}) => ({guest, member}))(this.data)
        } else {
            return this.data
        }
    }
}

export function proxyMain() {

    console.log("\nStarting proxy pattern:")
    const subjectProxy = new SubjectProxy()

    console.log(subjectProxy.getData())
    
    subjectProxy.setAuth("MEMBER")
    console.log(subjectProxy.getData())
    
    subjectProxy.setAuth("VIP")
    console.log(subjectProxy.getData())
}
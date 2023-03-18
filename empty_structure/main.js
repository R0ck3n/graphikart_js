class Student {
    constructor(firstname, lastname) {
        this._firstname = firstname
        this._lastname = lastname
    }
    set _firstname(v) {
        this.firstname = v
    }

    get _firstname() {
        return `${this.firstname()}`
    }
    set _lastname(v) {
        this.lastname = v
    }

    get _lastname() {
        return `${this.lastname()}`
    }




}

const boby = new Student('bob', 'dylan')


class EmployeePayrollData {
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.department = params[4];
        this.startDate = params[5];
    }

    get id() { return this._id; }
    set id(id) {
        this._id = id;
    }

    get name() { return this._name }
    set name(name) {
        this._name = name;
    }

    get profilePic() { return this._profilePic }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }

    get gender() { return this._gender }
    set gender(gender) {
        this._gender = gender;
    }

    get department() { return this._department }
    set department(department) {
        this._department = department;
    }

    get startDate() { return this._startDate }
    set startDate(startDate) {
        this._startDate = startDate;
    }

    get note() { return this._note }
    set note(note) {
        this._note = note;
    }


    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" :
                        this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id +", name=" + this.name + ", salary=" + this.salary 
                + ", gender=" + this.gender + ", Department=" + this.department + ", startDate=" + this.empDate + ", note=" + this.note;
    }
}
// const EmployeeData: any[] | (() => any[]) = [

interface Employee {
    id:  string;
    Firstname: string;
    Lastname: string;
    Email: string;
    Date: string;
}
    const EmployeeData: Array<Employee> = [
    {
        id: "1",
        Firstname: "Aman",
        Lastname: "chaman",
        Email: "Aman@gmail.com",
        Date: '2012-04-23',
    }, {
        id: "2",
        Firstname: "Rajesh",
        Lastname: "ACCA",
        Email: "RAJES@gmail.com",
        Date: '2019-04-03'
    },
    {
        id: "3",
        Firstname: "boss",
        Lastname: "xze",
        Email: "bsss@gmail.com",
        Date: '2016-04-12',
    },
    {
        id: "4",
        Firstname: "bfsbs",
        Lastname: "gfgfd",
        Email: "gdsadds@gmail.com",
        Date: '2012-09-11',
    }
]

    export {EmployeeData}
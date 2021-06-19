const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
});

const save = () => {
    try {
        let employeePayrollData = new EmployeePayrollData();
        alert(employeePayrollData.toString());
    } catch (e) {
        return;
    }
}



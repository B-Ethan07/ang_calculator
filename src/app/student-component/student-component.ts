import { Component, inject } from '@angular/core';
import { Student } from '../models/student';
import { SearchComponent } from '../search-component/search-component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-component',
  imports: [ SearchComponent ],
  templateUrl: './student-component.html',
  styleUrl: './student-component.css'
})
export class StudentComponent {
  students: Student[] = [
  { id: 1, name: 'Alice Dupont', age: 20, grade: 'A' },
  { id: 2, name: 'Marc Lefebvre', age: 22, grade: 'B' },
  { id: 3, name: 'Sophie Martin', age: 19, grade: 'A' },
  { id: 4, name: 'Lucas Bernard', age: 21, grade: 'C' },
  { id: 5, name: 'Emma Durand', age: 20, grade: 'B' },
  { id: 6, name: 'Thomas Petit', age: 23, grade: 'D' },
  { id: 7, name: 'Chloé Moreau', age: 18, grade: 'A' },
  { id: 8, name: 'Nathan Robert', age: 20, grade: 'B' },
  { id: 9, name: 'Léa Garcia', age: 22, grade: 'C' },
  { id: 10, name: 'Noah Fontaine', age: 21, grade: 'B' }
];

route: ActivatedRoute = inject(ActivatedRoute);
ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const studentName = params.get('studentName');
    if (studentName) {
      this.filterStudentsByName(studentName);
    } else {
      this.resetStudentList();
    }
  })};

  filterStudentsByName(name: string) {
    this.students = this.students.filter(student =>
      student.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  resetStudentList() {
    this.students = [
      { id: 1, name: 'Alice Dupont', age: 20, grade: 'A' },
      { id: 2, name: 'Marc Lefebvre', age: 22, grade: 'B' },
      { id: 3, name: 'Sophie Martin', age: 19, grade: 'A' },
      { id: 4, name: 'Lucas Bernard', age: 21, grade: 'C' },
      { id: 5, name: 'Emma Durand', age: 20, grade: 'B' },
      { id: 6, name: 'Thomas Petit', age: 23, grade: 'D' },
      { id: 7, name: 'Chloé Moreau', age: 18, grade: 'A' },
      { id: 8, name: 'Nathan Robert', age: 20, grade: 'B' },
      { id: 9, name: 'Léa Garcia', age: 22, grade: 'C' },
      { id: 10, name: 'Noah Fontaine', age: 21, grade: 'B' }
    ];
  }
}

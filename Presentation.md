Video Walkthrough

Please submit a 3-minute screencast of a walk-through of the functionality and code for each user story in your app. E.g. for "As a user, I can create a campus", please show us that you can successfully create a campus in your app, and also the actual code that is involved in doing that (from the front-end components to the backend routes and models). We recommend using Quicktime to record the screencast (instructions on how to do that here).

Once you've recorded your screencast, please upload it to YouTube as an unlisted video. Email academics@fullstackacademy.com with the title Senior Enrichment Submission: [Your Name] and include your repo link and YouTube recording link. This will aid us in evaluating your submission.

```
Navigation: as a user I...

will land on Home by default [x]
can navigate to Campuses from Home [x]
can navigate to Students from Home [x]
can navigate to view a Single Campus from Campuses [x]
can navigate to view a Single Student from Students [x]
can navigate to view a Single Student from Single Campus (for any student at that campus) [x]
can navigate to view that student's Single Campus from Single Student [x]
Views: as a user I...

see a list of all campuses on the Campuses view [x]
see a list of all students on the Students view [x]
see details about a campus on the Single Campus view, including that campus's students [x]
see details about a student on the Single Student view, including that student's campus [x]
Actions: as a user I...

can create a campus [x]
can edit a campus's info, including adding/removing a student to/from that campus [x]
can delete a campus [x]
can create a student [x]
can edit a student's info, including the campus that student is assigned to [x]
can delete a student [x]
```

Good afternoon, everyone, my name is Sarah Zhao; I am a FSA junior and this is my senior enrichment project: the Margaret Hamilton Interplanetary Academy of Javascript. Let me lead you through my workflow.

Now, as a user, my initial "/" route will land on "Home" by default, which is a view of all my campuses. In addition, any incorrect title will also be re-directed to "Home". This is a direct result of my individual `Routes` in my `App.js` code.

While on the home page, as a user, I can navigate to my icon in my navigation bar, which will introduce a drop-down menu with 3 items: `Home`, `Students`, `Campuses`. These 3 items are connected to `Link`s that will re-direct to display all the students and all the campuses respectively, all due to my use of `BrowserRouter`, and incorporating `Link`s and `Route`s for these components.

When I click on `Campuses`, it will render a list of campuses, and a possibility to add a New Campus. Each campus then has a `Link` to the single campus view, as well as a `star` button that will be enabled only when the campus has 0 students. This `star` button makes an axios call to delete the campus.

When I click on an individual campus, the SingleCampus component renders, and I am able to see details about the individual campus, as well as a list of all the students attending that campus. Here, I have `Delete`, `Update`, and `Add Stud` buttons that will `delete` when I have no students, open the `update` form that allows me to update any individual part of the campus, and render a drop-down menu of all the students that do not attend this campus. The `update` button is part of a separate component that adds campuses, and its submit button will make an axios call to update the indivudual campus and re-render the page. The `add stud` submit button will make an axios call to update the student's campusId, and re-render the page to include the student.

On the view of students, as a user I can click on any student to display more info, the update button to update the student, and the trash button to expel the student.

The student display will render the `single student` view, which can update and visit the `single campus` that the student is part of. This update function works the same way the campus update function works. The only major difference between both sets of forms (for campus and for students) is that the campus form incorporates a local state, whereas the student form incorporates the store state and a react-redux connection.

The create form is the same as the update form, where the difference is within the form itself, including `props` that are passed from the component that calls it and will declare if it will hit the `post` axios call, or the `update` axios call.

The same functionality can be seen when the `Students` link is clicked. We can access the full list of students as seen, and they have the same connectivities as that of the list of `SingleCampus` students.

This is all accomplished using 1 form for both create/update, delete buttons that make axios calls. There is a stateless student component that renders the list of students, which is applicable for AllStudents and SingleCampus.

Thank you.

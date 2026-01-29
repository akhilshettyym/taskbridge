const employee = [
 {
   id: 1,
   firstname: "Aarav",
   email: "employee1@taskbridge.com",
   password: "12345",
   taskNumbers: { active: 2, newTask: 1, completed: 2, failed: 1 },
   tasks: [
     {
       active: true,
       newTask: false,
       completed: false,
       failed: false,
       priority: "High",
       title: "Design Login UI",
       description:
         "Design modern login interface\nUse dark theme styling\nEnsure responsive layout",
       dateCreated: "01 Feb 2026",
       dueDate: "09 Feb 2026",
       category: "Design"
     },
     {
       active: false,
       newTask: true,
       completed: false,
       failed: false,
       priority: "Medium",
       title: "Profile Page",
       description:
         "Create employee profile page\nShow personal information clearly\nMaintain consistent UI design",
       dateCreated: "03 Feb 2026",
       dueDate: "07 Feb 2026",
       category: "Frontend"
     },
     {
       active: false,
       newTask: false,
       completed: true,
       failed: false,
       priority: "Low",
       title: "Fix Navbar Bug",
       description:
         "Fix navbar alignment issues\nCorrect spacing across devices\nTest responsiveness thoroughly",
       dateCreated: "20 Jan 2026",
       dueDate: "23 Jan 2026",
       category: "Development"
     },
     {
       active: false,
       newTask: false,
       completed: true,
       failed: false,
       priority: "Medium",
       title: "Update Icons",
       description:
         "Replace outdated dashboard icons\nEnsure visual consistency\nFollow design guidelines",
       dateCreated: "18 Jan 2026",
       dueDate: "24 Jan 2026",
       category: "UI"
     },
     {
       active: false,
       newTask: false,
       completed: false,
       failed: true,
       priority: "High",
       title: "API Integration",
       description:
         "Integrate authentication APIs\nHandle error responses properly\nSecure user credentials",
       dateCreated: "15 Jan 2026",
       dueDate: "25 Jan 2026",
       category: "Backend"
     }
   ]
 },
 {
   id: 2,
   firstname: "Vihaan",
   email: "employee2@taskbridge.com",
   password: "12345",
   taskNumbers: { active: 1, newTask: 2, completed: 1, failed: 1 },
   tasks: [
     {
       active: true,
       newTask: false,
       completed: false,
       failed: false,
       priority: "High",
       title: "Dashboard Cards",
       description:
         "Build dashboard statistic cards\nDisplay task counts visually\nMaintain responsive grid layout",
       dateCreated: "03 Feb 2026",
       dueDate: "13 Feb 2026",
       category: "Design"
     },
     {
       active: false,
       newTask: true,
       completed: false,
       failed: false,
       priority: "Medium",
       title: "Empty State UI",
       description:
         "Design empty task screens\nGuide users with helpful messages\nMaintain clean visual layout",
       dateCreated: "04 Feb 2026",
       dueDate: "10 Feb 2026",
       category: "UI"
     },
     {
       active: false,
       newTask: true,
       completed: false,
       failed: false,
       priority: "Low",
       title: "Tooltip Copy",
       description:
         "Add tooltip guidance text\nImprove user understanding\nEnsure concise messaging",
       dateCreated: "05 Feb 2026",
       dueDate: "08 Feb 2026",
       category: "UX"
     },
     {
       active: false,
       newTask: false,
       completed: true,
       failed: false,
       priority: "Low",
       title: "Optimize Images",
       description:
         "Compress application images\nReduce load time\nMaintain image quality",
       dateCreated: "22 Jan 2026",
       dueDate: "25 Jan 2026",
       category: "Optimization"
     },
     {
       active: false,
       newTask: false,
       completed: false,
       failed: true,
       priority: "Medium",
       title: "Unit Testing",
       description:
         "Write unit test cases\nCover login functionality\nEnsure test reliability",
       dateCreated: "18 Jan 2026",
       dueDate: "24 Jan 2026",
       category: "Testing"
     }
   ]
 },
 {
   id: 3,
   firstname: "Ishaan",
   email: "employee3@taskbridge.com",
   password: "12345",
   taskNumbers: { active: 1, newTask: 1, completed: 2, failed: 0 },
   tasks: [
     {
       active: true,
       newTask: false,
       completed: false,
       failed: false,
       priority: "High",
       title: "Task List UI",
       description:
         "Build task list interface\nSupport responsive layouts\nEnsure smooth user experience",
       dateCreated: "05 Feb 2026",
       dueDate: "15 Feb 2026",
       category: "Frontend"
     },
     {
       active: false,
       newTask: true,
       completed: false,
       failed: false,
       priority: "Medium",
       title: "Search Filter",
       description:
         "Add task search functionality\nFilter tasks efficiently\nImprove usability performance",
       dateCreated: "06 Feb 2026",
       dueDate: "12 Feb 2026",
       category: "Frontend"
     },
     {
       active: false,
       newTask: false,
       completed: true,
       failed: false,
       priority: "Low",
       title: "Form Validation",
       description:
         "Add validation to forms\nPrevent empty submissions\nDisplay error messages",
       dateCreated: "25 Jan 2026",
       dueDate: "28 Jan 2026",
       category: "Development"
     },
     {
       active: false,
       newTask: false,
       completed: true,
       failed: false,
       priority: "Low",
       title: "Refactor CSS",
       description:
         "Refactor existing CSS code\nRemove unused styles\nImprove maintainability",
       dateCreated: "24 Jan 2026",
       dueDate: "27 Jan 2026",
       category: "UI"
     }
   ]
 },
 {
   id: 4,
   firstname: "Kabir",
   email: "employee4@taskbridge.com",
   password: "12345",
   taskNumbers: { active: 2, newTask: 0, completed: 1, failed: 1 },
   tasks: [
     {
       active: true,
       newTask: false,
       completed: false,
       failed: false,
       priority: "High",
       title: "Create Sidebar",
       description:
         "Build collapsible sidebar\nSupport navigation items\nEnsure smooth animations",
       dateCreated: "04 Feb 2026",
       dueDate: "14 Feb 2026",
       category: "UI"
     },
     {
       active: true,
       newTask: false,
       completed: false,
       failed: false,
       priority: "Medium",
       title: "Header Layout",
       description:
         "Improve header layout\nAlign elements properly\nEnsure responsive behavior",
       dateCreated: "05 Feb 2026",
       dueDate: "11 Feb 2026",
       category: "UI"
     },
     {
       active: false,
       newTask: false,
       completed: true,
       failed: false,
       priority: "Low",
       title: "Dark Mode Fix",
       description:
         "Fix dark mode contrast\nImprove text readability\nTest across screens",
       dateCreated: "21 Jan 2026",
       dueDate: "24 Jan 2026",
       category: "UI"
     },
     {
       active: false,
       newTask: false,
       completed: false,
       failed: true,
       priority: "High",
       title: "Role Access",
       description:
         "Implement role based access\nRestrict unauthorized actions\nSecure sensitive routes",
       dateCreated: "10 Jan 2026",
       dueDate: "20 Jan 2026",
       category: "Security"
     }
   ]
 },
 {
   id: 5,
   firstname: "Rohan",
   email: "employee5@taskbridge.com",
   password: "12345",
   taskNumbers: { active: 0, newTask: 2, completed: 1, failed: 1 },
   tasks: [
     {
       active: false,
       newTask: true,
       completed: false,
       failed: false,
       priority: "Medium",
       title: "Documentation",
       description:
         "Write project documentation\nExplain setup instructions\nMaintain clear structure",
       dateCreated: "06 Feb 2026",
       dueDate: "12 Feb 2026",
       category: "Documentation"
     },
     {
       active: false,
       newTask: true,
       completed: false,
       failed: false,
       priority: "Low",
       title: "Changelog",
       description:
         "Prepare version changelog\nList recent updates\nMaintain release history",
       dateCreated: "07 Feb 2026",
       dueDate: "10 Feb 2026",
       category: "Documentation"
     },
     {
       active: false,
       newTask: false,
       completed: true,
       failed: false,
       priority: "Low",
       title: "Code Cleanup",
       description:
         "Remove unused components\nRefactor redundant logic\nImprove code readability",
       dateCreated: "23 Jan 2026",
       dueDate: "26 Jan 2026",
       category: "Maintenance"
     },
     {
       active: false,
       newTask: false,
       completed: false,
       failed: true,
       priority: "High",
       title: "Performance Audit",
       description:
         "Analyze performance bottlenecks\nIdentify slow components\nSuggest optimization improvements",
       dateCreated: "14 Jan 2026",
       dueDate: "24 Jan 2026",
       category: "Optimization"
     }
   ]
 }
];

const admin = [
    {
        id: 101,
        firstname: "akhil",
        email: "akhil@taskbridge.com",
        password: "12345"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employee));
    localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const employeesStr = localStorage.getItem('employees');
    const adminStr = localStorage.getItem('admin');

    let employees = [];
    let admin = [];

    if (employeesStr) {
        try {
            employees = JSON.parse(employeesStr);
        } catch (err) {
            console.error("Failed to parse employees from localStorage:", err);
            // localStorage.removeItem('employees');
        }
    }

    if (adminStr) {
        try {
            admin = JSON.parse(adminStr);
        } catch (err) {
            console.error("Failed to parse admin from localStorage:", err);
            // localStorage.removeItem('admin');
        }
    }

    return { employees, admin };
};
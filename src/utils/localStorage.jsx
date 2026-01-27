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
       date: "01 Feb 2026",
       category: "Design"
     },
     {
       active: true,
       newTask: true,
       completed: false,
       failed: false,
       priority: "Medium",
       title: "Profile Page",
       description:
         "Create employee profile page\nShow personal information clearly\nMaintain consistent UI design",
       date: "03 Feb 2026",
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
       date: "20 Jan 2026",
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
       date: "18 Jan 2026",
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
       date: "15 Jan 2026",
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
       date: "03 Feb 2026",
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
       date: "04 Feb 2026",
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
       date: "05 Feb 2026",
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
       date: "22 Jan 2026",
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
       date: "18 Jan 2026",
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
       date: "05 Feb 2026",
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
       date: "06 Feb 2026",
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
       date: "25 Jan 2026",
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
       date: "24 Jan 2026",
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
       date: "04 Feb 2026",
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
       date: "05 Feb 2026",
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
       date: "21 Jan 2026",
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
       date: "10 Jan 2026",
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
       date: "06 Feb 2026",
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
       date: "07 Feb 2026",
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
       date: "23 Jan 2026",
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
       date: "14 Jan 2026",
       category: "Optimization"
     }
   ]
 }
];

const admin = [
    {
        id: 101,
        email: "admin@taskbridge.com",
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
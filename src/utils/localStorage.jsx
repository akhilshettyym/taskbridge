const employee = [
    {
        id: 1,
        email: "employee1@taskbridge.com",
        password: "12345",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Design Login UI",
                description: "Create a modern dark themed login page",
                date: "2026-02-01",
                category: "Design"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Fix Navbar Bug",
                description: "Resolve alignment issues in navbar",
                date: "2026-01-20",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "API Integration",
                description: "Integrate authentication API",
                date: "2026-01-15",
                category: "Backend"
            }
        ]
    },
    {
        id: 2,
        email: "employee2@taskbridge.com",
        password: "12345",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Create Dashboard Cards",
                description: "Design task statistics cards",
                date: "2026-02-03",
                category: "Design"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Optimize Images",
                description: "Compress and optimize all images",
                date: "2026-01-22",
                category: "Optimization"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Unit Testing",
                description: "Write unit tests for login module",
                date: "2026-01-18",
                category: "Testing"
            }
        ]
    },
    {
        id: 3,
        email: "employee3@taskbridge.com",
        password: "12345",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Build Task List UI",
                description: "Create horizontal scrolling task cards",
                date: "2026-02-05",
                category: "Frontend"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Fix Form Validation",
                description: "Add required validation to forms",
                date: "2026-01-25",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Database Schema",
                description: "Design initial DB schema",
                date: "2026-01-12",
                category: "Database"
            }
        ]
    },
    {
        id: 4,
        email: "employee4@taskbridge.com",
        password: "12345",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Create Sidebar",
                description: "Design collapsible sidebar",
                date: "2026-02-04",
                category: "UI"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Dark Mode Fix",
                description: "Fix dark mode contrast issues",
                date: "2026-01-21",
                category: "UI"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Role-Based Access",
                description: "Implement role permissions",
                date: "2026-01-10",
                category: "Security"
            }
        ]
    },
    {
        id: 5,
        email: "employee5@taskbridge.com",
        password: "12345",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Write Documentation",
                description: "Prepare README for GitHub",
                date: "2026-02-06",
                category: "Documentation"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Code Cleanup",
                description: "Remove unused components",
                date: "2026-01-23",
                category: "Maintenance"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Performance Audit",
                description: "Analyze app performance",
                date: "2026-01-14",
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
    localStorage.setItem('admin',     JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const employeesStr = localStorage.getItem('employees');
    const adminStr = localStorage.getItem('admin');

    let employees = [];
    let admin     = [];

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